#!/bin/sh
# ใช้ทุกครั้งหลังแก้ site.js, gate.js หรือ terms.js: อัปเดตเลขเวอร์ชันท้ายสคริปต์ในทุกหน้า
# เบราว์เซอร์จะโหลดไฟล์ใหม่ทันที ไม่ต้องให้สมาชิกกด Ctrl+Shift+R
# วิธีใช้: sh bump-version.sh แล้ว commit + push
V=$(date +%Y%m%d%H%M)
for f in *.html; do
  sed -i -E "s#src=\"(site|gate|terms)\.js(\?v=[0-9]+)?\"#src=\"\1.js?v=$V\"#g" "$f"
done
echo "version = $V"
