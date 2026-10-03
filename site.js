// ตั้งค่ากลางของทั้งเว็บ (ไฟล์นี้ไฟล์เดียวคุมเมนูและการเชื่อม Firebase ของทุกหน้า)
window.SITE = {
  articles: true,   // false = ซ่อนหน้าบทความจากเมนูและหน้าปก
  news: true,       // false = ซ่อนหน้าข่าวจากเมนูและหน้าปก
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
  el.innerHTML = items.map(function (i) {
    return '<a href="' + i[1] + '"' + (i[0] === current ? ' aria-current="page"' : "") + ">" + i[2] + "</a>";
  }).join("");
};
