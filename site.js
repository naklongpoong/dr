// ตั้งค่ากลางของทั้งเว็บ (ไฟล์นี้ไฟล์เดียวคุมเมนูและการเชื่อม Firebase ของทุกหน้า)
window.SITE = {
  articles: true,   // false = ซ่อนหน้าบทความจากเมนูและหน้าปก
  news: true,       // false = ซ่อนหน้าข่าวจากเมนูและหน้าปก
  etf: true,        // แท็บ ETF (ตอนนี้เป็นหน้า Coming Soon) false = ซ่อน
  newHours: 48,     // โพสต์ที่ใหม่กว่านี้ (ชั่วโมง) จะมีป้าย NEW
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
