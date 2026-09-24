"""
Recorta las fuentes a los caracteres que la web usa de verdad.

Solo se recortan Instrument Serif y IBM Plex Mono: esas dos nunca muestran texto
escrito por el usuario (van en titulares, antetitulos, precios y etiquetas).

Schibsted Grotesk se deja INTACTA a proposito: es la fuente de los campos del
formulario (`.field` hereda la familia del body), asi que tiene que poder pintar
cualquier cosa que alguien teclee. Recortarla romperia acentos o simbolos raros
en el nombre de un cliente.

    python tools/subset-fonts.py
"""

import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "reference" / "fonts-original"   # originales sin recortar
PUB = ROOT / "public" / "fonts"
DIST = ROOT / "dist"

# ---------------------------------------------------------------- caracteres

# Todo el texto renderizado vive en el HTML compilado (incluye los data-en del
# conmutador de idioma) y en el bundle de JS (etiquetas del chip, avisos del
# formulario). Tomar todos sus caracteres es un superconjunto seguro.
sources = [DIST / "index.html"] + sorted((DIST / "_astro").glob("*.js"))
missing = [p for p in sources if not p.exists()]
if missing:
    sys.exit(f"Falta el build. Ejecuta `npm run build` antes.\n  {missing[0]}")

chars = set()
for p in sources:
    chars |= set(p.read_text(encoding="utf-8"))

# Margen de seguridad: alfabeto completo, digitos, puntuacion y todo lo que el
# castellano necesita, aunque hoy no aparezca en ningun texto.
chars |= set(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "abcdefghijklmnopqrstuvwxyz"
    "0123456789"
    " .,;:!?¿¡'\"()[]{}<>/\\|-_=+*&%#@~^`"
    "áéíóúüñÁÉÍÓÚÜÑàèìòùâêîôûçÇ"
    "€$£·×÷−–—…«»“”‘’№ºª†‡•"
)
chars = {c for c in chars if c.isprintable() and not c.isspace()} | {" "}

unicodes = ",".join(f"U+{ord(c):04X}" for c in sorted(chars))
print(f"caracteres a conservar: {len(chars)}")

# ------------------------------------------------------------------ recorte

# origen -> destino. Los *-ext desaparecen: el subconjunto ya los cubre.
JOBS = [
    ("instrument-latin.woff2", "instrument.woff2"),
    ("instrument-italic-latin.woff2", "instrument-italic.woff2"),
    ("plexmono-latin.woff2", "plexmono.woff2"),
]

total_before = total_after = 0
for src_name, out_name in JOBS:
    src = SRC / src_name
    out = PUB / out_name
    if not src.exists():
        print(f"  !! falta el original: {src}")
        continue

    subprocess.run(
        [
            sys.executable, "-m", "fontTools.subset", str(src),
            f"--output-file={out}",
            "--flavor=woff2",
            f"--unicodes={unicodes}",
            # Se conservan ligaduras, kerning y cifras: sin esto la tipografia
            # de titular pierde calidad de composicion.
            "--layout-features=*",
            "--no-hinting",
            "--desubroutinize",
            "--name-IDs=",
            "--drop-tables+=DSIG",
        ],
        check=True,
        capture_output=True,
    )

    before, after = src.stat().st_size, out.stat().st_size
    total_before += before
    total_after += after
    print(f"  {src_name:34} {before/1024:6.1f} KB -> {after/1024:5.1f} KB  ({100*after/before:.0f} %)")

print(f"\n  {'TOTAL':34} {total_before/1024:6.1f} KB -> {total_after/1024:5.1f} KB"
      f"  (ahorro {(total_before-total_after)/1024:.1f} KB)")

# ------------------------------------------------- Schibsted: solo los pesos

# A Schibsted NO se le quitan caracteres (pinta lo que el usuario teclee en el
# formulario), pero su eje de grosor va de 400 a 900 y la web solo usa 400 y 600.
# Recortar el eje conserva los 287 glifos y ahorra unos 5 KB.
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

print()
for name in ("schibsted-latin.woff2", "schibsted-latin-ext.woff2"):
    src = SRC / name
    if not src.exists():
        print(f"  !! falta el original: {src}")
        continue
    inst = instancer.instantiateVariableFont(TTFont(src), {"wght": (400, 600)}, inplace=False)
    inst.flavor = "woff2"
    out = PUB / name
    inst.save(out)
    before, after = src.stat().st_size, out.stat().st_size
    print(f"  {name:34} {before/1024:6.1f} KB -> {after/1024:5.1f} KB  (eje 400-600, glifos intactos)")
