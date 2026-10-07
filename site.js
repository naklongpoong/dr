// ตั้งค่ากลางของทั้งเว็บ (ไฟล์นี้ไฟล์เดียวคุมเมนูและการเชื่อม Firebase ของทุกหน้า)
window.SITE = {
  articles: true,   // false = ซ่อนหน้าบทความจากเมนูและหน้าปก
  news: true,       // false = ซ่อนหน้าข่าวจากเมนูและหน้าปก
  earnings: true,   // false = ซ่อนหน้าพรีวิวงบ/งบหุ้นรายตัวจากเมนูและหน้าปก
  etf: true,        // แท็บ ETF (ตอนนี้เป็นหน้า Coming Soon) false = ซ่อน
  newHours: 48,     // โพสต์ที่ใหม่กว่านี้ (ชั่วโมง) จะมีป้าย NEW
  listHours: 24,    // หน้าข่าวโหลดเฉพาะโพสต์ย้อนหลังกี่ชั่วโมง (เก่ากว่านั้นกดปุ่ม "โหลดเพิ่ม")
  cacheMinutes: 3,  // จำข่าว/บทความในเครื่องผู้อ่านกี่นาทีก่อนอ่านใหม่ (0 = ไม่จำ) ช่วยประหยัดโควตาอ่าน
  countViews: true, // false = ปิดนับยอดดู (ประหยัดโควตาเขียน) ตัวเลขยอดดูจะถูกซ่อนจากหน้าเว็บ
  // วางค่า config จาก Firebase: Project settings > Your apps > Web
  // ค่านี้ไม่ใช่ความลับ ความปลอดภัยอยู่ที่ Firestore rules (ไฟล์ firestore.rules)
firebase: {
  apiKey: "AIzaSyCRRddMfBVQbAjOic_8359TUugAv-WSAE8",
  authDomain: "naklongpoong-e73b3.firebaseapp.com",
  projectId: "naklongpoong-e73b3",
  appId: "1:732228457449:web:bbd66c3544cd4f95b8f178"
}
};

// สร้างเมนูบนหัวหน้า ใช้กับทุกหน้าที่มี <nav id="nav">
window.buildNav = function (current) {
  var el = document.getElementById("nav");
  if (!el) return;
  var items = [["index", "index.html", "หน้าแรก"], ["dr", "dr.html", "รวม DR"]];
  if (SITE.articles) items.push(["articles", "articles.html", "บทความ"]);
  if (SITE.news) items.push(["news", "news.html", "ข่าว"]);
  if (SITE.earnings) items.push(["earnings", "earnings.html", "งบ"]);
  if (SITE.etf) items.push(["etf", "etf.html", "ETF"]);
  el.innerHTML = items.map(function (i) {
    return '<a href="' + i[1] + '"' + (i[0] === current ? ' aria-current="page"' : "") + ">" + i[2] + "</a>";
  }).join("");
};

// true ถ้าเวลาที่ให้มา (Firestore timestamp หรือ Date) อยู่ในช่วง newHours ชั่วโมงที่ผ่านมา
window.isNew = function (ts) {
  var d = ts && ts.toDate ? ts.toDate() : (ts instanceof Date ? ts : null);
  return !!d && (Date.now() - d.getTime()) < (SITE.newHours || 48) * 3600000;
};

// ---- จำข้อมูลชั่วคราวในเครื่องผู้อ่าน (เครื่องผู้ดูแลไม่ใช้ เพื่อให้เห็นโพสต์ใหม่ทันที) ----
(function () {
  function ser(o) { return JSON.stringify(o, function (k, v) { var x = this[k]; return x && typeof x === "object" && typeof x.toDate === "function" ? { __ts: x.toDate().getTime() } : v; }); }
  function rev(t) {
    return JSON.parse(t, function (k, v) {
      if (v && typeof v === "object" && v.__ts !== undefined) { var ms = v.__ts; return { toDate: function () { return new Date(ms); }, toMillis: function () { return ms; }, seconds: Math.floor(ms / 1000), nanoseconds: (ms % 1000) * 1e6 }; }
      return v;
    });
  }
  function off() { try { return localStorage.getItem("nlp_admin") === "1"; } catch (e) { return true; } }
  window.cacheGet = function (key, minutes) {
    try {
      if (!minutes || off()) return null;
      var raw = localStorage.getItem("nlp_c_" + key); if (!raw) return null;
      var o = JSON.parse(raw); if (!o || Date.now() - o.t > minutes * 60000) return null;
      return rev(o.d);
    } catch (e) { return null; }
  };
  window.cachePut = function (key, obj) {
    try {
      var d = ser(obj); if (d.length > 1500000) return;
      localStorage.setItem("nlp_c_" + key, JSON.stringify({ t: Date.now(), d: d }));
    } catch (e) {}
  };
})();
