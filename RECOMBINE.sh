#!/usr/bin/env bash
set -euo pipefail
cat forum2025_FULL_MERGED.part*.zip > forum2025_FULL_MERGED.zip
echo "Verifying checksum…"
if command -v shasum >/dev/null 2>&1; then
  shasum -a 256 -c forum2025_FULL_MERGED.zip.sha256.txt
else
  echo "shasum not found; skipping verification"
fi
echo "Unzipping…"
unzip -q forum2025_FULL_MERGED.zip
echo "Done."
