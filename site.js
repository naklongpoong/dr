// ตั้งค่ากลางของทั้งเว็บ (ไฟล์นี้ไฟล์เดียวคุมเมนูและการเชื่อม Firebase ของทุกหน้า)
window.SITE = {
  articles: true,   // false = ซ่อนหน้าบทความจากเมนูและหน้าปก
  news: true,       // false = ซ่อนหน้าข่าวจากเมนูและหน้าปก
  earnings: true,   // false = ซ่อนหน้าพรีวิวงบ/งบหุ้นรายตัวจากเมนูและหน้าปก
  basics: true,     // แท็บ ความรู้พื้นฐาน false = ซ่อนทั้งเมนูและการ์ด
  basicsLive: true, // false = สมาชิกเห็นหน้า Coming Soon (ดูตัวจริงที่ basics.html?preview=1) true = เปิดคลังคำศัพท์จริง
  invest: true,    // แท็บ แนวทางการลงทุน (เกมตอบคำถามดูสไตล์นักลงทุน) false = ซ่อนทั้งเมนูและการ์ด
  course: false,   // แท็บ นักลงพุงลุยวอลล์สตรีท (คอร์สหุ้นเมกา 100 บท) (บทอยู่ที่ course.html ตัวแปร CH ใส่บทแล้วตั้ง live: true) false = ซ่อนเมนูและสมาชิกยังอ่านไม่ได้ ดูร่างที่ course.html?preview=1 ตรวจแล้วค่อยตั้ง true
  calc: true,      // แท็บ คำนวณดอกเบี้ยทบต้น (เงินต้น/เงินออม/ผลตอบแทน/ปันผล Re-invest หรือไม่ Re-invest) false = ซ่อนทั้งเมนูและการ์ด
  rr: true,        // แท็บ คำนวณความคุ้มเสี่ยง Risk:Reward (เครื่องมือสายเทรด ใส่ราคาซื้อ/ตัดขาดทุน/เป้าหมาย) false = ซ่อนทั้งเมนูและการ์ด
  drprem: true,    // แท็บ คำนวณ Premium DR (ใส่ราคา DR/อัตราส่วน/ราคาหุ้นต้นทาง/อัตราแลกเปลี่ยน ดูว่า DR แพงหรือถูกกว่ากี่ %) false = ซ่อนทั้งเมนูและการ์ด
  ipo: true,        // แท็บ หุ้น IPO ใหม่ (หุ้นสหรัฐที่เข้าตลาดใน 1-5 ปี ลิงก์ไปทำการบ้านต่อในหน้า dashboard) false = ซ่อนทั้งเมนูและการ์ด
  ipoLive: false,   // false = สมาชิกเห็นหน้า Coming Soon (ดูตัวจริงที่ ipo.html?preview=1) true = เปิดรายชื่อจริง
  etf: true,        // แท็บ ETF (รายชื่อ ETF ใหญ่ของสหรัฐ ค้นหา/กรอง/เรียงได้) false = ซ่อนทั้งเมนูและการ์ด
  map: true,        // แท็บ Mind Map การลงทุน (แผนที่ห่วงโซ่หุ้น AI + หุ้น Cyclical 8 กลุ่ม) false = ซ่อนจากเมนู
  fundflow: true,   // หน้า เงินไหลไปไหน (Fund flow) false = ซ่อนจากเมนูและหน้าปก
  stars: true,      // หน้า 7 นางฟ้า ทำเงินยังไง false = ซ่อนจากเมนูและหน้าปก
  econ: true,        // แท็บ ตัวเลขเศรษฐกิจ (CPI งบจ้างงาน GDP ฯลฯ คืออะไร กระทบตลาดอย่างไร) false = ซ่อนทั้งเมนู
  econLive: true,   // false = สมาชิกเห็นหน้า Coming Soon (ดูตัวจริงที่ econ.html?preview=1) true = เปิดเนื้อหาจริง
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

// หุ้นที่ถือเป็นบริษัทเดียวกัน (คนละ class หรือคนละชื่อย่อ) หน้า dashboard ฟีด และค้นหาจะนับรวมกัน เพิ่มกลุ่มใหม่ได้ เช่น ["BRK-A", "BRK-B"]
window.TK_ALIAS = [["GOOGL", "GOOG"]];
window.tkAlias = function (t) {
  t = String(t || "").toUpperCase();
  for (var i = 0; i < TK_ALIAS.length; i++) if (TK_ALIAS[i].indexOf(t) >= 0) return TK_ALIAS[i].slice();
  return [t];
};

// หุ้นที่รายการ DR ใช้ชื่อบริษัทแทนชื่อย่อ: ชื่อย่อ -> คำในชื่อ DR (ตัวพิมพ์เล็กใหญ่ไม่สำคัญ) กดชื่อหุ้นแล้วจะไปเจอ DR นั้น เพิ่มได้ เช่น XYZ: ["ชื่อใน DR"]
window.TK_DR = { MU: ["micron"], SPCX: ["spacex"] };
window.tkDrHit = function (T, tk, name) {   // แถว DR (ชื่อย่อ tk / ชื่อบริษัท name) ตรงกับหุ้น T ไหม
  T = String(T || "").toUpperCase(); tk = String(tk || "").toLowerCase(); name = String(name || "").toLowerCase();
  if (tk === T.toLowerCase()) return true;
  return (TK_DR[T] || []).some(function (w) { return tk === w || name.indexOf(w) >= 0; });
};

// ตารางประชุม FOMC ปี 2026 (ตรวจกับ federalreserve.gov/monetarypolicy/fomccalendars.htm) at = เวลาประกาศผลดอกเบี้ย (วันที่สองของการประชุม 14:00 น. เวลานิวยอร์ก) เก็บเป็น UTC: ช่วงเวลาออมแสง (ถึง 1 พ.ย.) = 18:00Z, หลังจากนั้น = 19:00Z
// ปีถัดไปเพิ่มรายการต่อท้ายได้เลย หน้าแรกจะเลือกครั้งถัดไปให้เอง
window.FOMC = [
  { d: "27–28 ม.ค.", at: "2026-01-28T19:00:00Z" }, { d: "17–18 มี.ค.", at: "2026-03-18T18:00:00Z" },
  { d: "28–29 เม.ย.", at: "2026-04-29T18:00:00Z" }, { d: "16–17 มิ.ย.", at: "2026-06-17T18:00:00Z" },
  { d: "28–29 ก.ค.", at: "2026-07-29T18:00:00Z" }, { d: "15–16 ก.ย.", at: "2026-09-16T18:00:00Z" },
  { d: "27–28 ต.ค.", at: "2026-10-28T18:00:00Z" }, { d: "8–9 ธ.ค.", at: "2026-12-09T19:00:00Z" }
];

// โอกาสที่ Fed จะลด/คงที่/ขึ้นดอกเบี้ย จาก CME FedWatch (ไม่ใช่เรียลไทม์ ต้องอัปเดตเอง) meeting = วันประกาศผลตามตาราง FOMC ด้านบน asOf = วันที่ของตัวเลข
// หน้าแรกจะโชว์เฉพาะเมื่อ meeting ตรงกับครั้งถัดไป และ asOf ไม่เก่ากว่า maxAgeDays วัน (กันโชว์ตัวเลขเก่า)
window.FOMC_ODDS = { meeting: "2026-10-28", asOf: "2026-10-19", ease: 0.0, hold: 85.1, hike: 14.9, maxAgeDays: 3 };

// เงินเฟ้อสหรัฐ (CPI) ล่าสุด จาก BLS (อัปเดตเอง) ค่าเป็น % release = วันที่ประกาศ (เวลานิวยอร์ก) exp = ค่าที่นักเศรษฐศาสตร์คาด (FactSet)
// expMom = ค่าคาดรายเดือน (ใส่เมื่อมีแหล่งชัดเจน ไม่ใส่ก็ได้) yoy = เทียบปีก่อน prev = yoy เดือนก่อน mom = เทียบเดือนก่อน hideAfter = ซ่อนการ์ดเมื่อถึงเวลาประกาศครั้งถัดไป (BLS: 10 พ.ย. 8:30 น. นิวยอร์ก = 13:30Z)
window.CPI_LATEST = {
  month: "ต.ค. 2026", release: "2026-11-10", nextRelease: "10 ธ.ค.", hideAfter: "2026-12-10T13:30:00Z",
  headline: { yoy: null, mom: 0.4 },
  core: { yoy: null, mom: 0.3 },
  note: "BLS ไม่ประกาศตัวเลขเทียบปีก่อนของเดือนนี้ เพราะไม่ได้เก็บข้อมูล ต.ค. 2025 ช่วงงบรัฐบาลขาด ตัวใหญ่จึงเป็นรายเดือน ที่มา: พลังงาน +0.7% (น้ำมันเบนซิน +1.0%) อาหาร +0.5% ค่าที่อยู่อาศัย +0.3%"
};

// เงินเฟ้อผู้ผลิตสหรัฐ (PPI) ล่าสุด จาก BLS (อัปเดตเอง) รูปแบบเดียวกับ CPI_LATEST ด้านบน ค่าคาด ต.ค. 2026: ทั่วไป 6.6% รายเดือน 0.4% (StockTitan อ้าง Dow Jones, fattail.ai อ้าง XTB ตัวเลขตรงกัน) ไม่ใส่ exp ของ core เพราะค่าคาด 0.3% ในข่าวเป็นนิยามไม่รวมแค่อาหาร-พลังงาน ไม่ใช่ core ของ BLS ไม่ใส่ prev เพราะยังไม่เห็นตัวเลขเดือนก่อนที่ BLS ปรับแล้ว
// core ของ PPI ที่ BLS รายงานคือ "ไม่รวมอาหาร พลังงาน และบริการการค้า" (ไม่ใช่ไม่รวมแค่อาหาร-พลังงาน) hideAfter = BLS ประกาศครั้งหน้า 15 ธ.ค. 8:30 น. นิวยอร์ก = 13:30Z
window.PPI_LATEST = {
  month: "ต.ค. 2026", release: "2026-11-13", nextRelease: "15 ธ.ค.", hideAfter: "2026-12-15T13:30:00Z",
  headline: { yoy: 6.5, mom: 0.3, exp: 6.6, expMom: 0.4 },
  core: { yoy: 4.9, mom: 0.5 },
  note: "ตัวเลขรายปีสูงสุดตั้งแต่ พ.ย. 2022 สินค้า +0.5% บริการ +0.2% อาหาร +1.3% พลังงาน −0.1% (หลังพุ่ง 10.8% เดือนก่อน) *Core ตามนิยาม BLS ไม่รวมบริการการค้าด้วย",
  srcText: "BLS"
};

// สร้างเมนูบนหัวหน้า ใช้กับทุกหน้าที่มี <nav id="nav">
window.buildNav = function (current) {
  var el = document.getElementById("nav");
  if (!el) return;
  var items = [["index", "index.html", "หน้าแรก"], ["dr", "dr.html", "รวม DR"]];
  if (SITE.articles) items.push(["articles", "articles.html", "บทความ"]);
  if (SITE.news) items.push(["news", "news.html", "ข่าว"]);
  if (SITE.earnings) items.push(["earnings", "earnings.html", "งบ"]);
  items.push(["feed", "feed.html", "ฟีดของฉัน"]);
  var extra = [];   // เมนูรอง อยู่ในแผงของปุ่ม "เพิ่มเติม" [id, href, ชื่อ, กลุ่ม] ให้แถบเมนูสั้นและไม่รก
  if (SITE.basics) extra.push(["basics", "basics.html", "ความรู้พื้นฐาน", "เรียนรู้"]);
  if (SITE.map) extra.push(["map", "map.html", "Mind Map การลงทุน", "เรียนรู้"]);
  if (SITE.fundflow) extra.push(["fundflow", "fundflow.html", "เงินไหลไปไหน (Fund flow)", "เรียนรู้"]);
  if (SITE.stars) extra.push(["stars", "stars.html", "7 นางฟ้า ทำเงินยังไง", "เรียนรู้"]);
  if (SITE.econ) extra.push(["econ", "econ.html", "ตัวเลขเศรษฐกิจ", "เรียนรู้"]);
  if (SITE.invest) extra.push(["invest", "invest.html", "แนวทางการลงทุน", "เรียนรู้"]);
  if (SITE.course) extra.push(["course", "course.html", "นักลงพุงลุยวอลล์สตรีท", "เรียนรู้"]);
  if (SITE.articles) extra.push(["legend", "articles.html?type=legend", "Legends", "เรียนรู้"]);
  if (SITE.calc) extra.push(["calc", "calc.html", "คำนวณดอกเบี้ยทบต้น", "เครื่องมือคำนวณ"]);
  if (SITE.rr) extra.push(["rr", "rr.html", "คำนวณความคุ้มเสี่ยง", "เครื่องมือคำนวณ"]);
  if (SITE.drprem) extra.push(["drprem", "drprem.html", "คำนวณ Premium DR", "เครื่องมือคำนวณ"]);
  if (SITE.ipo) extra.push(["ipo", "ipo.html", "หุ้น IPO ใหม่", "รายชื่อ"]);
  if (SITE.etf) extra.push(["etf", "etf.html", "ETF", "รายชื่อ"]);
  function link(i) {
    return '<a href="' + i[1] + '"' + (i[0] === current ? ' aria-current="page"' : "") + ">" + i[2] + "</a>";
  }
  var cur = extra.filter(function (i) { return i[0] === current; })[0];   // หน้านี้อยู่ในเมนูรอง: ปุ่มจะโชว์ชื่อหน้านี้และเป็นสีทอง
  el.innerHTML = items.map(link).join("") +
    (extra.length ? '<button type="button" class="nav-more' + (cur ? " on" : "") + '" aria-expanded="false" aria-haspopup="true" aria-controls="navMenu" aria-label="เมนูอื่นๆ">' + (cur ? cur[2] : "เพิ่มเติม") + ' ▾</button>' : "") +
    '<button type="button" class="nav-search" data-search aria-label="ค้นหาทั้งเว็บ" title="ค้นหาทั้งเว็บ (Ctrl+K)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><span class="nlp-t">ค้นหา</span></button>';
  var old = document.getElementById("navMenu"); if (old) old.remove();
  if (extra.length) {   // แผงเมนูแยกกลุ่ม วางไว้ใต้ body (ไม่ให้ถูก hero ตัดขอบ)
    var groups = [], by = {};
    extra.forEach(function (i) { if (!by[i[3]]) { by[i[3]] = []; groups.push(i[3]); } by[i[3]].push(i); });
    var menu = document.createElement("div"); menu.id = "navMenu"; menu.hidden = true; menu.setAttribute("role", "menu");
    menu.innerHTML = groups.map(function (g) { return '<div class="nm-g">' + g + "</div>" + by[g].map(link).join(""); }).join("");
    document.body.appendChild(menu);
  }
  if (window.nlpPopupBtn) window.nlpPopupBtn();
};
(function () {   // ปุ่ม "เพิ่มเติม" เปิด/ปิดแผงเมนูรอง (กดที่อื่นหรือกด Esc เพื่อปิด)
  function parts() { return { n: document.getElementById("nav"), m: document.getElementById("navMenu") }; }
  function close() {
    var p = parts(); if (p.m) p.m.hidden = true;
    if (p.n) { p.n.classList.remove("open"); var b = p.n.querySelector(".nav-more"); if (b) b.setAttribute("aria-expanded", "false"); }
  }
  function place() {
    var p = parts(), b = p.n && p.n.querySelector(".nav-more"); if (!b || !p.m || p.m.hidden) return;
    var r = b.getBoundingClientRect(), vw = document.documentElement.clientWidth, w = p.m.offsetWidth;
    p.m.style.top = (window.pageYOffset + r.bottom + 8) + "px";
    p.m.style.left = Math.max(10, Math.min(window.pageXOffset + r.left, window.pageXOffset + vw - w - 10)) + "px";
  }
  document.addEventListener("click", function (e) {
    var p = parts(); if (!p.n || !p.m || !e.target.closest) return;
    var b = e.target.closest(".nav-more");
    if (b) {
      var open = p.m.hidden; p.m.hidden = !open; p.n.classList.toggle("open", open); b.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) { place(); var a = p.m.querySelector("a"); if (a && e.detail === 0) a.focus(); }   // เปิดด้วยคีย์บอร์ด: โฟกัสรายการแรก
      return;
    }
    if (!p.m.hidden && !e.target.closest("#navMenu")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { var p = parts(), b = p.n && p.n.querySelector(".nav-more"), was = p.m && !p.m.hidden; close(); if (was && b) b.focus(); }
  });
  window.addEventListener("resize", place); window.addEventListener("scroll", place, { passive: true });
})();

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

// เลขเวอร์ชันของ site.js ที่หน้านี้โหลดจริง (มาจาก ?v= ท้ายสคริปต์) โชว์ท้ายหน้าไว้เช็กว่าเบราว์เซอร์ได้ไฟล์ล่าสุดหรือยัง
window.SITE_VER = (function () { try { var m = /[?&]v=(\d+)/.exec(document.currentScript.src); return m ? m[1] : ""; } catch (e) { return ""; } })();
// ประกาศลิขสิทธิ์ท้ายทุกหน้า (ยกเว้นหลังบ้าน)
document.addEventListener("DOMContentLoaded", function () {
  var w = document.querySelector("main.wrap, .wrap"); if (!w || window.NLP_NO_GATE) return;
  var f = document.createElement("p"); f.className = "site-copy";
  f.textContent = "© " + new Date().getFullYear() + " นักลงพุง (naklongpoong) สงวนลิขสิทธิ์ เนื้อหา ข้อมูล และโค้ดของเว็บนี้ห้ามคัดลอกหรือนำไปเผยแพร่ซ้ำโดยไม่ได้รับอนุญาต";
  f.style.cssText = "margin:32px 0 0;text-align:center;font-size:.78rem;opacity:.55;";
  w.appendChild(f);
  if (window.SITE_VER) {   // เลขเวอร์ชันแยกบรรทัด ตัวเล็กจาง ไว้เช็กว่าเบราว์เซอร์ได้ไฟล์ล่าสุดหรือยัง
    var v = document.createElement("p"); v.className = "site-ver"; v.textContent = "เวอร์ชัน " + SITE_VER;
    v.style.cssText = "margin:4px 0 0;text-align:center;font-size:.66rem;opacity:.35;";
    w.appendChild(v);
  }
});

// ---- ปุ่ม "คัดลอกข้อความ" ในการ์ดโพสต์ทุกหน้า: ก๊อปเฉพาะข้อความเต็มของโพสต์ (ไม่ต้องกด "อ่านต่อ") ไว้ให้ตัวช่วยอ่านเสียงใช้ ----
document.addEventListener("click", function (e) {
  var b = e.target.closest && e.target.closest("[data-copytext]"); if (!b) return;
  var card = b.closest(".ecard, .npost, .ev, #reader");
  var el = card && card.querySelector(".etext, .ntext, .ptext, .rbody");
  var txt = el ? el.textContent.trim() : "";
  if (!txt) return;
  function done(ok) {
    var old = b.getAttribute("data-label") || b.textContent; b.setAttribute("data-label", old);
    b.textContent = ok ? "คัดลอกแล้ว" : "คัดลอกไม่สำเร็จ";
    clearTimeout(b._t); b._t = setTimeout(function () { b.textContent = old; }, 1600);
  }
  function fallback() {
    var t = document.createElement("textarea"); t.value = txt; t.style.cssText = "position:fixed;opacity:0;";
    document.body.appendChild(t); t.select(); var ok = false;
    try { ok = document.execCommand("copy"); } catch (x) {} t.remove(); done(ok);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { done(true); }, fallback);
  else fallback();
});

// ---- เมนูเลือกเมื่อกดชื่อหุ้น (DR / กราฟ Finviz / บทความ / ข่าว / งบ) ใช้ร่วมกันทุกหน้า ----
// ปุ่มชื่อหุ้นใส่ data-tkmenu="NVDA" (ใส่ data-dr="0" ถ้ารู้ว่าไม่มี DR) หน้าที่อยากให้ตัวเลือกของหน้าตัวเองกรองในหน้าเดิม ตั้ง window.SITE_MENU = { here: "news"|"articles"|"earnings", onHere: function (ticker) {} }
(function () {
  var pop = null, trig = null, y = 0;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function ensure() {
    if (pop) return pop;
    var s = document.createElement("style");
    s.textContent = ".nlp-pop{position:fixed;z-index:60;min-width:230px;max-width:calc(100vw - 16px);background:var(--surface,#fff);border:1px solid var(--line,#d5dbea);border-radius:12px;box-shadow:0 10px 30px rgba(15,30,70,.22);padding:6px}.nlp-pop a{display:flex;flex-direction:column;padding:8px 12px;border-radius:8px;color:var(--ink,#14213d);text-decoration:none}.nlp-pop a:hover,.nlp-pop a:focus-visible{background:var(--accent-soft,#e8efff);outline:none}.nlp-pop a b{font-size:.95rem;font-weight:600}.nlp-pop a small{color:var(--muted,#6b7794);font-size:.8rem}.nlp-pop[hidden]{display:none}";
    document.head.appendChild(s);
    pop = document.createElement("div"); pop.id = "nlpPop"; pop.className = "nlp-pop"; pop.setAttribute("role", "menu"); pop.hidden = true;
    document.body.appendChild(pop); return pop;
  }
  function close(restore) {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    if (trig) { trig.setAttribute("aria-expanded", "false"); if (restore) trig.focus(); }
    trig = null;
  }
  function open(b) {
    close(false);
    var p = ensure(), tk = b.getAttribute("data-tkmenu"), q = encodeURIComponent(tk), cfg = window.SITE_MENU || {}, it = [];
    function item(href, title, sub, extra) { return '<a role="menuitem" href="' + href + '"' + (extra || "") + "><b>" + title + "</b><small>" + sub + "</small></a>"; }
    function here(k) { return cfg.here === k ? ' data-here="' + esc(tk) + '"' : ""; }
    if (cfg.current !== tk) it.push(item("stock.html?t=" + q, "เปิด dashboard ของ " + esc(tk) + " ↗", "กราฟ Finviz + ข่าว งบ บทความ ในหน้าเดียว", ' target="_blank" rel="noopener"'));
    if (b.getAttribute("data-dr") !== "0") it.push(item("dr.html?q=" + q, "ดู DR ของ " + esc(tk), "รวม DR ในตลาดหุ้นไทย"));
    it.push(item("https://finviz.com/quote.ashx?t=" + q, "ดูกราฟ " + esc(tk) + " บน Finviz ↗", "เปิดในแท็บใหม่", ' target="_blank" rel="noopener noreferrer"'));
    if (SITE.articles) it.push(item("articles.html?ticker=" + q, "อ่านบทความเกี่ยวกับ " + esc(tk), "บทความและบทวิเคราะห์", here("articles")));
    if (SITE.news) it.push(item("news.html?ticker=" + q, "ดูข่าวของ " + esc(tk), "ข่าวและหุ้นสแกน", here("news")));
    if (SITE.earnings) it.push(item("earnings.html?ticker=" + q, "ดูงบของ " + esc(tk), "พรีวิวงบและงบหุ้นรายตัว", here("earnings")));
    p.innerHTML = it.join("");
    p.style.visibility = "hidden"; p.hidden = false;
    var r = b.getBoundingClientRect(), pw = p.offsetWidth, ph = p.offsetHeight, top = r.bottom + 6;
    if (top + ph > innerHeight - 8) top = Math.max(8, r.top - ph - 6);
    p.style.top = top + "px"; p.style.left = Math.max(8, Math.min(r.left, innerWidth - pw - 8)) + "px"; p.style.visibility = "";
    b.setAttribute("aria-expanded", "true"); trig = b; y = window.scrollY;
    p.querySelector("a").focus();
  }
  document.addEventListener("click", function (e) {
    var h = e.target.closest("[data-here]");
    if (h) { e.preventDefault(); close(false); var c = window.SITE_MENU; if (c && c.onHere) c.onHere(h.getAttribute("data-here")); return; }
    var b = e.target.closest("[data-tkmenu]");
    if (b) { if (trig === b) close(true); else open(b); return; }
    if (!e.target.closest("#nlpPop")) close(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close(true);
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && pop && !pop.hidden) {
      var ls = [].slice.call(pop.querySelectorAll("a")), i = ls.indexOf(document.activeElement);
      ls[(i + (e.key === "ArrowDown" ? 1 : -1) + ls.length) % ls.length].focus(); e.preventDefault();
    }
  });
  window.addEventListener("scroll", function () { if (pop && !pop.hidden && Math.abs(window.scrollY - y) > 8) close(false); }, { passive: true });
  window.addEventListener("resize", function () { close(false); });
})();

// ---- ค้นหาทั้งเว็บ: ปุ่มในเมนู (หรือ Ctrl+K) ค้นข่าว งบ บทความ และ DR ล่าสุด + ข้ามไป dashboard ของหุ้นตามชื่อ ----
(function () {
  var box = null, inp, out, data = null, loading = null, last = null, sel = -1, TK = /^[A-Z0-9.\-]{1,12}$/, meta = null, busy = false, PAGE_N = 50;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var css = document.createElement("style");
  css.textContent = "#navMenu{position:absolute;z-index:90;width:min(280px,calc(100vw - 20px));box-sizing:border-box;background:var(--surface,#fff);color:var(--ink,#14213d);border:1px solid var(--line,#d5dbea);border-radius:14px;box-shadow:0 14px 40px rgba(5,10,25,.35);padding:8px}#navMenu[hidden]{display:none}#navMenu .nm-g{font-size:.74rem;font-weight:700;letter-spacing:.04em;color:var(--muted,#5b6982);padding:8px 10px 3px}#navMenu .nm-g:first-child{padding-top:2px}#navMenu a{display:block;padding:8px 10px;border-radius:8px;color:var(--ink,#14213d);text-decoration:none;font-size:.95rem}#navMenu a:hover,#navMenu a:focus-visible{background:var(--accent-soft,#e3ebfa);outline:none}#navMenu a[aria-current=\"page\"]{background:#f5b301;color:#14213d;font-weight:600}" + ".nav-more{font:inherit;font-size:.9rem;color:#c9d5f2;background:transparent;padding:3px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.25);cursor:pointer}.nav-more:hover,.nav.open .nav-more{border-color:#f5b301;color:#fff}.nav-more.on{background:#f5b301;border-color:#f5b301;color:#14213d;font-weight:600}.nav-more:focus-visible{outline:2px solid #f5b301;outline-offset:2px}@media(max-width:480px){.nav-search .nlp-t{display:none}}.nav-search{display:inline-flex;align-items:center;gap:6px;margin-left:auto;font:inherit;font-size:.9rem;color:#c9d5f2;background:transparent;padding:3px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.25);cursor:pointer}.nav-search:hover{border-color:#f5b301;color:#fff}.nav-search:focus-visible{outline:2px solid #f5b301;outline-offset:2px}" +
    "#nlpS{position:fixed;inset:0;z-index:95;background:rgba(5,10,25,.72);display:flex;justify-content:center;align-items:flex-start;padding:8vh 14px 14px}#nlpS[hidden]{display:none}" +
    "#nlpS .sb{width:100%;max-width:640px;max-height:84vh;display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--ink,#14213d);border-radius:16px;border-bottom:4px solid #f5b301;box-shadow:0 20px 60px rgba(0,0,0,.45);overflow:hidden}" +
    "#nlpS input{width:100%;box-sizing:border-box;font:inherit;font-size:1.05rem;padding:16px 18px;border:0;border-bottom:1px solid var(--line,#d5dbea);background:transparent;color:inherit;outline:none}" +
    "#nlpS .res{overflow:auto;padding:6px}#nlpS .g{font-size:.78rem;font-weight:600;color:var(--muted,#6b7794);padding:10px 12px 4px}#nlpS .res a{display:block;text-decoration:none;color:inherit;padding:8px 12px;border-radius:10px}#nlpS .res a:hover,#nlpS .res a.on{background:var(--accent-soft,#e8efff)}#nlpS .res a b{display:block;font-weight:600;font-size:.95rem}#nlpS .res a small{display:block;color:var(--muted,#6b7794);font-size:.82rem;line-height:1.45}" +
    "#nlpS .hint{padding:18px;color:var(--muted,#6b7794);font-size:.9rem}#nlpS .ft{padding:8px 14px;font-size:.76rem;color:var(--muted,#6b7794);border-top:1px solid var(--line,#d5dbea)}";
  css.textContent += "#nlpS .more{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px 12px;margin:6px 6px 4px;padding:10px 12px;border-radius:10px;background:var(--bg,#f3f5fb);font-size:.84rem;color:var(--muted,#6b7794)}#nlpS .more button{font:inherit;font-size:.84rem;font-weight:600;cursor:pointer;border:0;border-radius:999px;padding:4px 14px;background:#f5b301;color:#1b1500}#nlpS .more button:disabled{opacity:.6;cursor:default}";
  document.head.appendChild(css);

  function ensure() {
    if (box) return;
    box = document.createElement("div"); box.id = "nlpS"; box.hidden = true; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "ค้นหาทั้งเว็บ");
    box.innerHTML = '<div class="sb"><input type="search" id="nlpSq" autocomplete="off" spellcheck="false" placeholder="ค้นหาชื่อหุ้น ข่าว งบ บทความ หรือ DR" aria-label="ค้นหาทั้งเว็บ"><div class="res" id="nlpSr" aria-live="polite"></div><div class="ft">เริ่มค้นจากข่าว งบ และบทความล่าสุดอย่างละ 50 เรื่อง กดค้นย้อนหลังต่อได้จนครบทุกโพสต์ กับรายการ DR ทั้งหมด · พิมพ์ชื่อหุ้นเพื่อข้ามไปหน้า dashboard · Esc ปิด</div></div>';
    document.body.appendChild(box); inp = box.querySelector("input"); out = box.querySelector("#nlpSr");
    box.addEventListener("mousedown", function (e) { if (e.target === box) close(); });
    inp.addEventListener("input", function () { render(); });
    inp.addEventListener("keydown", function (e) {
      var ls = [].slice.call(out.querySelectorAll("a"));
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { if (!ls.length) return; e.preventDefault(); sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + ls.length) % ls.length; mark(ls); }
      else if (e.key === "Enter") { var a = ls[sel < 0 ? 0 : sel]; if (a) { e.preventDefault(); a.click(); } }
    });
  }
  function mark(ls) { ls.forEach(function (a, i) { a.classList.toggle("on", i === sel); }); if (ls[sel]) ls[sel].scrollIntoView({ block: "nearest" }); }
  function open() {
    ensure(); box.hidden = false; document.documentElement.style.overflow = "hidden"; inp.focus(); inp.select();
    if (!data && !loading) load(); render();
  }
  function close() { if (!box || box.hidden) return; box.hidden = true; document.documentElement.style.overflow = ""; }

  function parseDR(raw) {
    var rows = [], grp = "";
    String(raw || "").split(/\r?\n/).forEach(function (ln) {
      ln = ln.trim(); if (!ln || ln[0] === "#") return;
      if (ln[0] === "@") { grp = (ln.split("|")[1] || "").trim(); return; }
      var p = ln.split("|"); if (p.length < 4) return;
      rows.push({ tk: p[0].trim(), cty: p[1].trim(), name: p[2].trim(), codes: p[3].split(",").map(function (c) { return c.trim(); }).filter(Boolean), grp: grp });
    });
    return rows;
  }
  function load() {
    loading = NLP.ready.then(function (N) {
      var F = N.F, db = N.db;
      function col(name) {
        var c = window.cacheGet && cacheGet("srch_" + name, (window.SITE && SITE.cacheMinutes) || 0);
        if (c) return Promise.resolve(c);
        return F.getDocs(F.query(F.collection(db, name), F.orderBy("createdAt", "desc"), F.limit(50))).then(function (s) {
          var r = s.docs.map(function (d) { var o = d.data(); delete o.body; delete o.thumb; o.id = d.id; return o; });
          if (window.cachePut) cachePut("srch_" + name, r); return r;
        });
      }
      return Promise.all([col("news"), col("earnings"), col("articles"), F.getDoc(F.doc(db, "content", "dr")).then(function (s) { return s.exists() ? parseDR(s.data().raw) : []; })]);
    }).then(function (r) {
      data = { news: r[0], earnings: r[1], articles: r[2], dr: r[3] };
      meta = {}; ["news", "earnings", "articles"].forEach(function (n) { meta[n] = { done: data[n].length < PAGE_N, cur: data[n].length ? Math.min.apply(null, data[n].map(function (x) { return tms(x.createdAt); })) : null }; });
      render();
    })
      .catch(function (e) { loading = null; if (e && e.code === "permission-denied" && window.NLP && NLP.relock) { close(); NLP.relock(); return; } if (out) out.innerHTML = '<div class="hint">โหลดข้อมูลค้นหาไม่สำเร็จ ลองรีเฟรชหน้า</div>'; });
  }
  function tms(x) { return x && x.toDate ? x.toDate().getTime() : (x && x.seconds != null ? x.seconds * 1000 + Math.floor((x.nanoseconds || 0) / 1e6) : 0); }
  function mkHas(raw) {
    var up = raw.toUpperCase(), terms = TK.test(up) ? tkAlias(up).map(function (x) { return x.toLowerCase(); }) : [raw.toLowerCase()];
    return function (arr) { return arr.some(function (x) { x = String(x || "").toLowerCase(); return terms.some(function (t) { return x.indexOf(t) >= 0; }); }); };
  }
  function postHits() {   // จำนวนโพสต์ (ข่าว งบ บทความ) ที่ตรงกับคำค้นตอนนี้ ใช้ดูว่าโหลดย้อนหลังแล้วเจอเพิ่มไหม
    var raw = inp.value.trim(); if (!raw || !data) return 0;
    var has = mkHas(raw);
    return data.articles.filter(function (a) { return has([a.title, a.summary].concat(a.tickers || [])); }).length +
      data.earnings.filter(function (p) { return has([p.text, p.period].concat(p.tickers || [])); }).length +
      data.news.filter(function (p) { return has([p.text, p.period].concat(p.tickers || [])); }).length;
  }
  function olderPage(name) {   // โหลดโพสต์ที่เก่ากว่าที่โหลดไว้อีก 50 เรื่อง (วิธีเดียวกับปุ่มโหลดเพิ่มในหน้าข่าว)
    var m = meta[name]; if (m.done) return Promise.resolve();
    var F = NLP.F, parts = [F.collection(NLP.db, name), F.orderBy("createdAt", "desc")];
    if (m.cur != null) parts.push(F.startAfter(F.Timestamp.fromMillis(m.cur)));
    parts.push(F.limit(PAGE_N));
    return F.getDocs(F.query.apply(F, parts)).then(function (s) {
      var seen = {}; data[name].forEach(function (x) { seen[x.id] = 1; });
      var r = s.docs.map(function (d) { var o = d.data(); delete o.body; delete o.thumb; o.id = d.id; return o; });
      r.forEach(function (x) { if (!seen[x.id]) data[name].push(x); });
      if (r.length) m.cur = Math.min.apply(null, [m.cur == null ? Infinity : m.cur].concat(r.map(function (x) { return tms(x.createdAt); })));
      if (r.length < PAGE_N) m.done = true;
    });
  }
  function allDone() { return meta.news.done && meta.earnings.done && meta.articles.done; }
  function loadOlder() {   // ค้นย้อนหลังต่อ: โหลดหน้าถัดไปของทุกประเภทที่ยังเหลือ วนจนเจอโพสต์เพิ่ม หรือครบ หรือครบ 5 รอบต่อการกดหนึ่งครั้ง
    if (busy || !data || !meta || allDone()) return;
    busy = true; render();
    var rounds = 0;
    function fin() { busy = false; render(); }
    function step() {
      var names = ["news", "earnings", "articles"].filter(function (n) { return !meta[n].done; });
      if (!names.length || rounds >= 5) return fin();
      rounds++;
      var before = postHits();
      Promise.all(names.map(olderPage)).then(function () { if (postHits() > before) fin(); else step(); }, function (e) {
        busy = false;
        if (e && e.code === "permission-denied" && window.NLP && NLP.relock) { close(); NLP.relock(); return; }
        render(); if (out) out.insertAdjacentHTML("beforeend", '<div class="hint">โหลดโพสต์ย้อนหลังไม่สำเร็จ ลองกดอีกครั้ง</div>');
      });
    }
    step();
  }
  function moreHtml() {
    var n = data.news.length + data.earnings.length + data.articles.length;
    if (allDone()) return '<div class="more"><span>ค้นครบทุกโพสต์แล้ว (' + n + ' เรื่อง)</span></div>';
    return '<div class="more"><span>ค้นแล้ว ' + n + ' เรื่อง ยังมีโพสต์เก่ากว่านี้</span><button type="button" data-searchmore' + (busy ? " disabled" : "") + ">" + (busy ? "กำลังค้น…" : "ค้นย้อนหลังต่อ") + "</button></div>";
  }
  function snip(t, q) {
    t = String(t || "").replace(/\s+/g, " ").trim(); var i = t.toLowerCase().indexOf(q);
    if (i < 0) return esc(t.slice(0, 110)) + (t.length > 110 ? "…" : "");
    var s = Math.max(0, i - 35), e = Math.min(t.length, i + q.length + 75);
    return (s ? "…" : "") + esc(t.slice(s, i)) + "<mark>" + esc(t.slice(i, i + q.length)) + "</mark>" + esc(t.slice(i + q.length, e)) + (e < t.length ? "…" : "");
  }
  function render() {
    var raw = inp.value.trim(), q = raw.toLowerCase(); sel = -1;
    if (!q) { out.innerHTML = '<div class="hint">พิมพ์ชื่อหุ้น เช่น NVDA หรือคำที่อยากหา</div>'; return; }
    var html = "", up = raw.toUpperCase();
    if (TK.test(up)) html += '<div class="g">หุ้น</div><a href="stock.html?t=' + encodeURIComponent(up) + '" target="_blank" rel="noopener"><b>เปิด dashboard ของ ' + esc(up) + ' ↗</b><small>กราฟ Finviz ข่าว งบ บทความ ในหน้าเดียว</small></a>';
    if (!data) { out.innerHTML = html + '<div class="hint">กำลังโหลดข้อมูล…</div>'; return; }
    var terms = TK.test(up) ? tkAlias(up).map(function (x) { return x.toLowerCase(); }) : [q];
    function has(arr) { return arr.some(function (x) { x = String(x || "").toLowerCase(); return terms.some(function (t) { return x.indexOf(t) >= 0; }); }); }
    var dr = data.dr.filter(function (r) { return has([r.tk, r.name, r.grp].concat(r.codes)) || (TK.test(up) && tkDrHit(up, r.tk, r.name)); }).slice(0, 6);
    if (dr.length) html += '<div class="g">DR</div>' + dr.map(function (r) { return '<a href="dr.html?q=' + encodeURIComponent(r.tk) + '"><b>' + esc(r.tk) + " · " + esc(r.name) + "</b><small>" + esc(r.codes.join(", ")) + (r.grp ? " · " + esc(r.grp) : "") + "</small></a>"; }).join("");
    var art = data.articles.filter(function (a) { return has([a.title, a.summary].concat(a.tickers || [])); }).slice(0, 6);
    if (art.length) html += '<div class="g">บทความ</div>' + art.map(function (a) { return '<a href="articles.html?id=' + encodeURIComponent(a.id) + '"><b>' + snip(a.title, q) + "</b><small>" + snip(a.summary, q) + "</small></a>"; }).join("");
    function posts(list, label, page) {
      var m = list.filter(function (p) { return has([p.text, p.period].concat(p.tickers || [])); }).slice(0, 6);
      if (m.length) html += '<div class="g">' + label + "</div>" + m.map(function (p) { var tk = (p.tickers || [])[0]; return '<a href="' + page + (tk ? "?ticker=" + encodeURIComponent(tk) : "") + '"><b>' + esc((p.tickers || []).join(" ") || label) + (p.period ? " · " + esc(p.period) : "") + "</b><small>" + snip(p.text, q) + "</small></a>"; }).join("");
    }
    posts(data.earnings, "งบและพรีวิวงบ", "earnings.html"); posts(data.news, "ข่าว", "news.html");
    if (!html) html = '<div class="hint">ไม่พบ "' + esc(raw) + '" ในโพสต์ที่ค้นแล้ว หรือ DR ลองคำอื่น หรือพิมพ์ชื่อหุ้นเพื่อเปิด dashboard</div>';
    if (meta) html += moreHtml();
    out.innerHTML = html;
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-searchmore]")) { e.preventDefault(); loadOlder(); return; }
    if (e.target.closest("[data-search]")) { e.preventDefault(); open(); return; }
    if (box && !box.hidden && e.target.closest("#nlpS .res a")) setTimeout(close, 0);
  });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k" && document.getElementById("nav") && !window.NLP_NO_GATE) { e.preventDefault(); box && !box.hidden ? close() : open(); }
    else if (e.key === "Escape") close();
  });
})();

/* รูปหลายรูปในโพสต์เดียวกัน: วัดสัดส่วนจริงของรูป (เฉลี่ย) แล้วตั้งกรอบเท่ากัน เพื่อให้ตัดขอบน้อยที่สุด */
(function () {
  document.addEventListener("load", function (e) {
    var im = e.target;
    if (!im || im.tagName !== "IMG" || !im.closest) return;
    var box = im.closest(".nimgs.multi, .rimgs.multi");
    if (!box) return;
    var list = box.querySelectorAll("img"), sum = 0, n = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].naturalWidth && list[i].naturalHeight) { sum += list[i].naturalWidth / list[i].naturalHeight; n++; }
    }
    if (!n) return;
    box.style.setProperty("--ar", Math.min(1.8, Math.max(0.75, sum / n)).toFixed(3));
  }, true);
})();

// ---- การ์ดเด้ง: แอดมินแปะข้อความที่หลังบ้าน (แท็บ "การ์ดเด้ง" เก็บที่ content/popup) การ์ดโชว์เฉพาะเหตุการณ์ กด "อ่านต่อ" เพื่ออ่านข้อความเต็ม หรือกด "ปิด" ----
// ปิดแล้วไม่เด้งซ้ำในเครื่องนั้นจนกว่าแอดมินจะบันทึกการ์ดใหม่ (จำใน localStorage) หลังบ้านเรียก window.nlpPopupShow(data, { preview: true }) เพื่อดูตัวอย่างโดยไม่จำว่าปิดแล้ว
(function () {
  var SEEN = "nlp_popup_seen", SEEN_WK = "nlp_popupwk_seen", el = null, prevFocus = null, curVer = null, curKind = "", preview = false, HEAD;
  try { HEAD = new RegExp("^(\\p{Extended_Pictographic}|\\d+\\.\\s)", "u"); } catch (e) { HEAD = /^\d+\.\s/; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function seen(v) { try { return localStorage.getItem(SEEN) === String(v); } catch (e) { return false; } }
  function mark(v) { try { localStorage.setItem(SEEN, String(v)); } catch (e) {} }
  function evHtml(text) {   // หนึ่งบรรทัดหนึ่งเหตุการณ์ รูปแบบ "เวลา — เรื่อง" (ไม่มีขีดคั่นก็แสดงทั้งบรรทัด) บรรทัดที่ขึ้นต้น "# " เป็นหัวข้อเล็ก เช่น "กำหนดการตามเวลาประเทศไทย"
    return String(text || "").split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      if (l.charAt(0) === "#") return '<li class="puhd"><span>' + esc(l.replace(/^#+\s*/, "")) + "</span></li>";
      var m = /^(.*?)\s+[—–]\s+(.+)$/.exec(l);
      return m ? "<li><b>" + esc(m[1]) + "</b><span>" + esc(m[2]) + "</span></li>" : "<li><span>" + esc(l) + "</span></li>";
    }).join("");
  }
  function bodyHtml(text) {   // ย่อหน้าคั่นด้วยบรรทัดว่าง บรรทัดเดี่ยวที่ขึ้นต้นด้วยอีโมจิหรือเลขข้อ "1. " เป็นหัวข้อ
    return String(text || "").replace(/\r/g, "").split(/\n{2,}/).map(function (b) {
      b = b.trim(); if (!b) return "";
      return b.indexOf("\n") < 0 && b.length < 90 && HEAD.test(b) ? "<h4>" + esc(b) + "</h4>" : "<p>" + esc(b).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }
  function build() {
    if (el) return el;
    var s = document.createElement("style");
    s.textContent = "#nlpPu{position:fixed;inset:0;z-index:90;background:rgba(5,10,25,.7);display:flex;align-items:center;justify-content:center;padding:14px}#nlpPu[hidden]{display:none}" +
      "#nlpPu .pu{width:100%;max-width:480px;max-height:88vh;display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--ink,#14213d);border-radius:16px;border-bottom:4px solid #f5b301;box-shadow:0 20px 60px rgba(0,0,0,.45);overflow:hidden;outline:none}" +
      "#nlpPu .puh{background:#0f1e46;color:#fff;padding:14px 18px 12px}#nlpPu .puk{display:inline-block;font-size:.72rem;font-weight:700;color:#14213d;background:#f5b301;border-radius:999px;padding:1px 10px;margin-bottom:6px}#nlpPu h2{margin:0;font-size:1.12rem;line-height:1.35;font-weight:700}" +
      "#nlpPu .pum{overflow:auto;padding:4px 18px 6px;-webkit-overflow-scrolling:touch}#nlpPu .pue{list-style:none;margin:6px 0 4px;padding:0}#nlpPu .pue li{display:flex;flex-direction:column;gap:1px;padding:9px 0;border-top:1px solid var(--line,#dde3ef)}#nlpPu .pue li:first-child{border-top:0}#nlpPu .pue li.puhd{padding:4px 0 6px}#nlpPu .pue li.puhd span{font-size:.82rem;color:var(--muted,#5b6982)}" +
      "#nlpPu .pue b{font-size:.88rem;font-weight:700;color:var(--accent,#1f4fa8)}#nlpPu .pue span{font-size:.95rem;line-height:1.5;overflow-wrap:anywhere}" +
      "#nlpPu .pub{margin-top:6px;padding-top:4px;border-top:2px solid #f5b301}#nlpPu .pub[hidden]{display:none}#nlpPu .pub p{margin:.6em 0;font-size:.92rem;line-height:1.7;overflow-wrap:anywhere}#nlpPu .pub h4{margin:1.1em 0 .2em;font-size:.98rem}" +
      "#nlpPu .pua{display:flex;gap:8px;justify-content:flex-end;padding:10px 18px 14px;border-top:1px solid var(--line,#dde3ef)}#nlpPu .pua button{font:inherit;font-size:.95rem;font-weight:600;cursor:pointer;border-radius:10px;padding:8px 20px;border:1px solid var(--line,#dde3ef);background:transparent;color:inherit}" +
      "#nlpPu .pua .pur{background:#f5b301;border-color:#f5b301;color:#14213d}#nlpPu .pua button:focus-visible{outline:2px solid #f5b301;outline-offset:2px}";
    s.textContent += "#nlpPu .puw{display:flex;flex-direction:column;gap:10px;margin:10px 0 6px}#nlpPu .puw img{display:block;width:100%;height:auto;border-radius:10px;border:1px solid var(--line,#dde3ef)}#nlpPu .pua a.pur{font:inherit;font-size:.95rem;font-weight:600;border-radius:10px;padding:8px 20px;background:#f5b301;color:#14213d;text-decoration:none}#nlpPu .pua a.pur:focus-visible{outline:2px solid #f5b301;outline-offset:2px}";
    document.head.appendChild(s);
    el = document.createElement("div"); el.id = "nlpPu"; el.hidden = true; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "nlpPuT");
    document.body.appendChild(el);
    el.addEventListener("mousedown", function (e) { if (e.target === el) closeIt(); });
    return el;
  }
  function show(d, opt) {
    var b = build(), ev = evHtml(d.events), full = bodyHtml(d.body);
    preview = !!(opt && (opt.preview || opt.reopen)); curVer = d.v == null ? null : d.v; curKind = "";
    b.innerHTML = '<div class="pu" tabindex="-1"><div class="puh"><span class="puk">' + (opt && opt.preview ? "ตัวอย่าง · " : "") + 'ประกาศ</span><h2 id="nlpPuT">' + esc(d.title || "ประกาศ") + "</h2></div>" +
      '<div class="pum">' + (ev ? '<ul class="pue">' + ev + "</ul>" : "") + (full ? '<div class="pub" id="nlpPuB" hidden>' + full + "</div>" : "") + "</div>" +
      '<div class="pua">' + (full ? '<button type="button" class="pur" data-pu="more" aria-expanded="false" aria-controls="nlpPuB">อ่านต่อ</button>' : "") + '<button type="button" class="puc" data-pu="close">ปิด</button></div></div>';
    prevFocus = document.activeElement; b.hidden = false; document.documentElement.style.overflow = "hidden";
    (b.querySelector(".pur") || b.querySelector(".puc")).focus();
  }
  function bkkDay() { return new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10); }
  function seenWk(v) { try { return localStorage.getItem(SEEN_WK) === v + "|" + bkkDay(); } catch (e) { return false; } }
  function markWk(v) { try { localStorage.setItem(SEEN_WK, v + "|" + bkkDay()); } catch (e) {} }
  function showWk(d, opt) {   // การ์ดงบประจำสัปดาห์: มีรูป เด้งวันละครั้งต่อเครื่อง
    var b = build(), full = bodyHtml(d.body), im = (d.images || []).map(function (u, i) { return '<img src="' + u + '" alt="งบประจำสัปดาห์ รูปที่ ' + (i + 1) + '">'; }).join("");
    preview = !!(opt && (opt.preview || opt.reopen)); curVer = d.v == null ? null : d.v; curKind = "wk";
    b.innerHTML = '<div class="pu" tabindex="-1"><div class="puh"><span class="puk">' + (opt && opt.preview ? "ตัวอย่าง · " : "") + 'งบประจำสัปดาห์</span><h2 id="nlpPuT">' + esc(d.title || "งบประจำสัปดาห์") + "</h2></div>" +
      '<div class="pum">' + (im ? '<div class="puw">' + im + "</div>" : "") + (full ? '<div class="pub">' + full + "</div>" : "") + "</div>" +
      '<div class="pua"><a class="pur" href="earnings.html">ดูพรีวิวงบ</a><button type="button" class="puc" data-pu="close">ปิด</button></div></div>';
    prevFocus = document.activeElement; b.hidden = false; document.documentElement.style.overflow = "hidden";
    b.querySelector(".puc").focus();
  }
  function closeIt() {
    if (!el || el.hidden) return;
    el.hidden = true; document.documentElement.style.overflow = "";
    if (!preview && curVer != null) { if (curKind === "wk") markWk(curVer); else mark(curVer); }
    try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) {}
  }
  window.nlpPopupShow = show; window.nlpPopupShowWk = showWk; window.nlpPopupClose = closeIt;
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-pu]"); if (!t || !el || el.hidden) return;
    if (t.getAttribute("data-pu") === "close") { closeIt(); return; }
    var body = document.getElementById("nlpPuB"); if (!body) return;
    var open = body.hidden; body.hidden = !open; t.setAttribute("aria-expanded", String(open)); t.textContent = open ? "ย่อกลับ" : "อ่านต่อ";
    if (open) { if (!preview && curVer != null) mark(curVer); body.scrollIntoView({ block: "nearest" }); }
  });
  document.addEventListener("keydown", function (e) {
    if (!el || el.hidden) return;
    if (e.key === "Escape") { closeIt(); return; }
    if (e.key !== "Tab") return;
    var bs = [].slice.call(el.querySelectorAll("button,a[href]")), i = bs.indexOf(document.activeElement);   // ให้โฟกัสวนอยู่ในการ์ด
    if (e.shiftKey && i <= 0) { e.preventDefault(); bs[bs.length - 1].focus(); }
    else if (!e.shiftKey && (i < 0 || i === bs.length - 1)) { e.preventDefault(); bs[0].focus(); }
  });
  function norm(d) {   // ข้อมูลจาก Firestore -> ออบเจ็กต์ธรรมดา (เก็บเวลาเป็นมิลลิวินาที เพื่อจำในเครื่องได้)
    function ms(t) { return t && t.toMillis ? t.toMillis() : (t && t.toDate ? t.toDate().getTime() : 0); }
    return { title: d.title || "", events: d.events || "", body: d.body || "", on: d.on !== false, until: ms(d.until), v: ms(d.updatedAt) };
  }
  function normWk(d) {
    function ms(t) { return t && t.toMillis ? t.toMillis() : (t && t.toDate ? t.toDate().getTime() : 0); }
    var im = (Array.isArray(d.images) ? d.images : []).filter(function (u) { return /^data:image\/(jpeg|png|webp);base64,/.test(u); }).slice(0, 4);
    return { title: d.title || "", body: d.body || "", images: im, on: d.on !== false, until: ms(d.until), v: ms(d.updatedAt) };
  }
  var last = null, lastWk = null;
  window.nlpPopupBtn = function () {   // ปุ่ม "ประกาศ" ที่แถบเมนู ไว้เปิดการ์ดล่าสุดซ้ำหลังปิดไปแล้ว (มีเฉพาะตอนมีการ์ดที่ยังไม่หมดอายุ)
    var nav = document.getElementById("nav");
    if (!nav) return;
    if (last && !nav.querySelector('[data-pu-open="a"]')) {
      var b = document.createElement("button"); b.type = "button"; b.className = "nav-search"; b.setAttribute("data-pu-open", "a");
      b.textContent = "📢 ประกาศ"; b.title = "เปิดประกาศล่าสุดอีกครั้ง"; nav.appendChild(b);
    }
    if (lastWk && !nav.querySelector('[data-pu-open="wk"]')) {
      var w = document.createElement("button"); w.type = "button"; w.className = "nav-search"; w.setAttribute("data-pu-open", "wk");
      w.textContent = "📊 งบสัปดาห์นี้"; w.title = "เปิดสรุปงบประจำสัปดาห์อีกครั้ง"; nav.appendChild(w);
    }
  };
  document.addEventListener("click", function (e) {
    var o = e.target.closest && e.target.closest("[data-pu-open]"); if (!o) return;
    if (o.getAttribute("data-pu-open") === "wk") { if (lastWk) showWk(lastWk, { reopen: true }); }
    else if (last) show(last, { reopen: true });
  });
  function pick(d) {   // คืน true ถ้าเด้งการ์ดขึ้นมาแล้ว
    if (!d || !d.on || !(d.events || d.body)) return false;
    if (d.until && Date.now() > d.until) return false;   // หมดอายุแล้ว
    last = d; window.nlpPopupBtn();
    if (seen(d.v)) return false;                    // เครื่องนี้ปิดการ์ดเวอร์ชันนี้ไปแล้ว (ยังกดปุ่ม "ประกาศ" เปิดดูได้)
    show(d); return true;
  }
  function pickWk(d) {   // การ์ดงบประจำสัปดาห์ เด้งวันละครั้ง และหลบถ้าการ์ดประกาศเพิ่งเด้งไปในหน้านี้
    if (!d || !d.on || !(d.images.length || d.body)) return;
    if (d.until && Date.now() > d.until) return;
    lastWk = d; window.nlpPopupBtn();
    if (seenWk(d.v)) return;
    show_wk_later = d;
  }
  var show_wk_later = null;
  function getDocCached(N, key, name, normFn) {
    var c = window.cacheGet && cacheGet(key, (window.SITE && SITE.cacheMinutes) || 0);
    if (c) return Promise.resolve(c.none ? null : c);
    return N.F.getDoc(N.F.doc(N.db, "content", name)).then(function (s) {
      var d = s.exists() ? normFn(s.data()) : null;
      if (window.cachePut) cachePut(key, d || { none: true });
      return d;
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    if (window.NLP_NO_GATE || !window.NLP || !NLP.ready) return;
    NLP.ready.then(function (N) {
      var a = getDocCached(N, "popup", "popup", norm).catch(function () { return null; });   // อ่านไม่ได้ (เช่น ยังไม่ได้วางกฎใหม่) ก็แค่ไม่เด้ง ไม่กระทบหน้าอื่น
      var w = getDocCached(N, "popupWk", "popupWeekly", normWk).catch(function () { return null; });
      return Promise.all([a, w]).then(function (r) {
        var shown = pick(r[0]);
        pickWk(r[1]);
        if (show_wk_later && !shown) showWk(show_wk_later);
      });
    }).catch(function () {});
  });
})();

// ---- ปุ่ม "คัดลอกเป็นรูป" / "บันทึกรูป" ในการ์ดข่าว งบ บทความ บทวิเคราะห์ ทุกหน้า ----
// วาดรูปกว้าง 1080 สูงตามเนื้อหาด้วย canvas เอง (ธีมเดียวกับรูปการ์ดมหภาคหน้าแรก) คัดลอกแล้วกดวางในโพสต์ได้เลย หรือบันทึกเป็นไฟล์ PNG
// ปุ่มถูกเติมให้เองข้างปุ่ม "คัดลอกข้อความ" (data-copytext) ไม่ต้องแก้แม่แบบการ์ดในแต่ละหน้า
(function () {
  var W = 1080, PAD = 60, GOLD = "#f5b301", INK = "#ffffff", MUTED = "#b9c6e6", PANEL = "#16275c";
  var FONT = '"IBM Plex Sans Thai", "Noto Sans Thai", "Sarabun", system-ui, -apple-system, "Segoe UI", sans-serif';
  var CARD_SEL = ".ecard, .npost, #reader", BODY_MAX_H = 2700, MAX_H = 7200, IMG_MAX_H = 900;
  var seg = null; try { if (window.Intl && Intl.Segmenter) seg = new Intl.Segmenter("th", { granularity: "word" }); } catch (e) {}

  function rr(c, x, y, w, h, r) {
    c.beginPath();
    if (c.roundRect) { c.roundRect(x, y, w, h, r); return; }
    r = Math.min(r, w / 2, h / 2); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }
  function tokens(s) {   // ตัดคำไทยด้วย Intl.Segmenter (ไม่มีก็ตัดทีละตัวอักษรโดยให้สระ/วรรณยุกต์ติดกับพยัญชนะ)
    if (seg) return Array.from(seg.segment(s), function (x) { return x.segment; });
    var out = []; Array.from(s).forEach(function (ch) { if (/[ัิ-ฺ็-๎]/.test(ch) && out.length) out[out.length - 1] += ch; else out.push(ch); });
    return out;
  }
  function wrapText(c, text, maxW) {   // คืนอาร์เรย์บรรทัด ("" = เว้นบรรทัดระหว่างย่อหน้า)
    var lines = [];
    String(text).split("\n").forEach(function (para) {
      para = para.replace(/\s+$/, "");
      if (!para.trim()) { if (lines.length && lines[lines.length - 1] !== "") lines.push(""); return; }
      var line = "";
      tokens(para).forEach(function (tk) {
        if (c.measureText(line + tk).width <= maxW) { line += tk; return; }
        if (line.trim()) { lines.push(line.replace(/\s+$/, "")); line = ""; }
        tk = tk.replace(/^\s+/, "");
        if (c.measureText(tk).width <= maxW) { line = tk; return; }
        Array.from(tk).forEach(function (ch) { if (c.measureText(line + ch).width > maxW) { lines.push(line); line = ""; } line += ch; });
      });
      if (line.trim()) lines.push(line.replace(/\s+$/, ""));
    });
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines;
  }

  // ---- อ่านข้อมูลจากการ์ดในหน้า ----
  function firstText(el) { if (!el) return ""; var n = el.firstChild; while (n && n.nodeType !== 3) n = n.nextSibling; return (n ? n.textContent : el.textContent).trim(); }
  function cardData(card) {
    var q = function (s) { return card.querySelector(s); }, d = { key: "post", kind: "ข่าว", title: "", sub: "", date: "", text: "", alt: "", tickers: [] };
    if (card.matches(".ecard")) {
      var prev = (q(".ehead .kind") || {}).textContent; d.kind = (prev || "").trim() === "พรีวิว" ? "พรีวิวงบ" : "งบหุ้นรายตัว"; d.key = d.kind === "พรีวิวงบ" ? "preview" : "earnings";
      var sym = (q(".esym") || {}).textContent; d.title = sym && sym.trim() !== "งบ" ? sym.trim() : ""; d.sub = ((q(".eper") || {}).textContent || "").trim();
      d.date = firstText(q(".ntime")); d.text = ((q(".etext") || {}).textContent || "");
    } else if (card.matches("#reader")) {
      d.kind = ((q(".ameta .badge") || {}).textContent || "บทความ").trim(); d.key = d.kind === "บทวิเคราะห์" ? "analysis" : "article";
      d.title = ((q("h2") || {}).textContent || "").trim(); d.date = firstText(q(".ameta > span:not(.badge)"));
      d.text = ((q(".rbody") || {}).textContent || ""); d.alt = ((q(".sum") || {}).textContent || "").trim();
      if (!d.text.trim()) { d.text = d.alt; d.alt = ""; }
      var fl = d.text.replace(/^\s+/, "").split("\n")[0].trim();   // เนื้อบทความบางชิ้นขึ้นต้นด้วยหัวข้อซ้ำ ตัดออก
      if (fl && d.title && (fl === d.title || d.title.indexOf(fl) === 0)) d.text = d.text.replace(/^\s+/, "").slice(fl.length);
    } else {
      d.key = "news"; d.date = firstText(q(".ntime")); d.text = ((q(".ntext") || {}).textContent || "");
    }
    d.alt = d.alt.replace(/https?:\/\/\S+/g, "").replace(/[ \t]{2,}/g, " ").trim();
    d.text = d.text.replace(/https?:\/\/\S+/g, "").replace(/[ \t]{2,}/g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
    var seen = {}; card.querySelectorAll("[data-tkmenu]").forEach(function (b) { var t = (b.getAttribute("data-tkmenu") || "").trim(); if (t && !seen[t]) { seen[t] = 1; d.tickers.push(t); } });
    d.tickers = d.tickers.slice(0, 10);
    return d;
  }
  function imageSrcs(card) {   // รูปที่โหลดแล้วในการ์ด + รูปที่ยังไม่โหลด (ดึงด้วย getImgs ของหน้านั้น ถ้ามี)
    var ph = card.querySelector(".nimgs.ph[data-imgs]");
    var p = ph && typeof window.getImgs === "function" ? window.getImgs(ph.getAttribute("data-imgs")).catch(function () { return []; }) : Promise.resolve(null);
    return p.then(function (arr) {
      var s = arr || Array.prototype.map.call(card.querySelectorAll(".nimgs img, .rimgs img"), function (i) { return i.getAttribute("src"); });
      return (s || []).filter(function (u) { return typeof u === "string" && /^data:image\//.test(u); }).slice(0, 6);
    });
  }
  function loadImg(src) { return new Promise(function (res) { var i = new Image(); i.onload = function () { res(i.naturalWidth ? i : null); }; i.onerror = function () { res(null); }; i.src = src; }); }

  // ---- วาด ----
  function draw(d, imgs) {
    var m = document.createElement("canvas").getContext("2d"), innerW = W - PAD * 2 - 88, y = 214 + 52 + 40;
    var titleLines = [], subLine = "";
    if (d.title) { m.font = "700 60px " + FONT; titleLines = wrapText(m, d.title, W - PAD * 2); y += titleLines.length * 76; }
    if (d.sub) { subLine = d.sub; y += 50; }
    y += 14;
    var fs, lh, lines, trunc = false, sizes = [46, 42, 40], hOf = function (ls, l) { return ls.reduce(function (n, t) { return n + (t === "" ? Math.round(l * 0.5) : l); }, 0); };
    function fit(text) {   // ลองขนาดใหญ่ไปเล็ก (ไม่เล็กกว่า 40px ให้อ่านออกบนมือถือ) คืน true ถ้าไม่ต้องตัด
      for (var i = 0; i < sizes.length; i++) { fs = sizes[i]; lh = Math.round(fs * 1.55); m.font = "400 " + fs + "px " + FONT; lines = wrapText(m, text, innerW); if (hOf(lines, lh) <= BODY_MAX_H) return true; }
      return false;
    }
    if (!fit(d.text)) {
      if (!(d.alt && fit(d.alt))) {   // บทความยาวมีสรุปก็ใช้สรุป ไม่มีก็ตัดเนื้อ
        fit(d.alt || d.text); trunc = true;
        while (lines.length > 1 && hOf(lines, lh) > BODY_MAX_H) lines.pop();
        var cut = lines.lastIndexOf("");   // ถอยไปจบที่ย่อหน้า ถ้าไม่เสียเนื้อเกินครึ่ง
        if (cut > lines.length * 0.5) lines = lines.slice(0, cut);
        else { var last = lines[lines.length - 1]; while (last.length > 1 && m.measureText(last + "…").width > innerW) last = last.slice(0, -1); lines[lines.length - 1] = last + "…"; }
      }
    }
    var panelY = y, panelH = 44 + hOf(lines, lh) + 44 + (trunc ? 54 : 0);
    y = panelY + panelH + 30;
    var plan = [];
    imgs.forEach(function (im) {
      var s = Math.min((W - PAD * 2) / im.naturalWidth, IMG_MAX_H / im.naturalHeight, 1.6), dw = Math.round(im.naturalWidth * s), dh = Math.round(im.naturalHeight * s);
      if (y + dh + 330 > MAX_H) return;
      plan.push({ im: im, x: Math.round((W - dw) / 2), y: y, w: dw, h: dh }); y += dh + 24;
    });
    var tkRows = [], tkX = PAD, tkY = y;
    m.font = "600 30px " + FONT;
    d.tickers.forEach(function (t) {
      var w = Math.round(m.measureText(t).width + 40);
      if (tkX + w > W - PAD) { tkX = PAD; tkY += 66; }
      tkRows.push({ t: t, x: tkX, y: tkY, w: w }); tkX += w + 14;
    });
    var H = (d.tickers.length ? tkY + 52 : y - 24) + 44 + 14;

    var cv = document.createElement("canvas"); cv.width = W; cv.height = H; var c = cv.getContext("2d");
    var g = c.createLinearGradient(0, 0, W * 0.45, H); g.addColorStop(0, "#1b3180"); g.addColorStop(0.5, "#0f1f4d"); g.addColorStop(1, "#070e26"); c.fillStyle = g; c.fillRect(0, 0, W, H);
    var r = c.createRadialGradient(950, 120, 0, 950, 120, 600); r.addColorStop(0, "rgba(120,145,255,.32)"); r.addColorStop(1, "rgba(120,145,255,0)"); c.fillStyle = r; c.fillRect(0, 0, W, 900);
    r = c.createRadialGradient(60, H - 120, 0, 60, H - 120, 680); r.addColorStop(0, "rgba(245,179,1,.12)"); r.addColorStop(1, "rgba(245,179,1,0)"); c.fillStyle = r; c.fillRect(0, Math.max(0, H - 900), W, 900);
    // หัว: โลโก้ + ชื่อ + วันที่โพสต์
    c.save(); c.shadowColor = "rgba(0,0,0,.4)"; c.shadowBlur = 24; c.fillStyle = GOLD; c.beginPath(); c.arc(112, 112, 58, 0, Math.PI * 2); c.fill(); c.restore();
    var logo = document.querySelector(".brand img, .logo");
    if (logo && logo.complete && logo.naturalWidth) { c.save(); c.beginPath(); c.arc(112, 112, 53, 0, Math.PI * 2); c.clip(); c.drawImage(logo, 59, 59, 106, 106); c.restore(); }
    c.fillStyle = INK; c.textAlign = "left"; c.font = "700 48px " + FONT; c.fillText("นักลงพุง", 190, 126);
    var dt = d.date || new Intl.DateTimeFormat("th-TH", { timeZone: "Asia/Bangkok", day: "numeric", month: "short", year: "numeric" }).format(new Date());
    c.font = "400 28px " + FONT; var dw0 = c.measureText(dt).width + 48, dx = W - PAD - dw0;
    c.fillStyle = "rgba(255,255,255,.08)"; rr(c, dx, 84, dw0, 56, 28); c.fill(); c.strokeStyle = "rgba(255,255,255,.2)"; c.lineWidth = 2; rr(c, dx, 84, dw0, 56, 28); c.stroke();
    c.fillStyle = MUTED; c.textAlign = "center"; c.fillText(dt, dx + dw0 / 2, 121);
    // ป้ายประเภท + หัวข้อ
    c.font = "700 28px " + FONT; var kw = c.measureText(d.kind).width + 56; c.fillStyle = GOLD; rr(c, PAD, 214, kw, 52, 26); c.fill();
    c.fillStyle = "#14213d"; c.textAlign = "center"; c.fillText(d.kind, PAD + kw / 2, 251);
    var ty = 214 + 52 + 40; c.textAlign = "left";
    if (titleLines.length) { c.fillStyle = INK; c.font = "700 60px " + FONT; titleLines.forEach(function (l, k) { c.fillText(l, PAD, ty + 52 + k * 76); }); ty += titleLines.length * 76; }
    if (subLine) { c.fillStyle = MUTED; c.font = "400 32px " + FONT; c.fillText(subLine, PAD, ty + 34); }
    // กรอบเนื้อหา
    c.save(); c.shadowColor = "rgba(0,0,0,.38)"; c.shadowBlur = 38; c.shadowOffsetY = 14; c.fillStyle = PANEL; rr(c, PAD, panelY, W - PAD * 2, panelH, 36); c.fill(); c.restore();
    var pg = c.createLinearGradient(0, panelY, 0, panelY + panelH); pg.addColorStop(0, "rgba(255,255,255,.11)"); pg.addColorStop(1, "rgba(255,255,255,.03)"); c.fillStyle = pg; rr(c, PAD, panelY, W - PAD * 2, panelH, 36); c.fill();
    c.strokeStyle = "rgba(255,255,255,.17)"; c.lineWidth = 2; rr(c, PAD + 1, panelY + 1, W - PAD * 2 - 2, panelH - 2, 35); c.stroke();
    c.fillStyle = GOLD; rr(c, PAD + 40, panelY - 1, W - PAD * 2 - 80, 8, 4); c.fill();
    c.fillStyle = INK; c.font = "400 " + fs + "px " + FONT; c.textAlign = "left";
    var ly = panelY + 44; lines.forEach(function (l) { if (l === "") { ly += Math.round(lh * 0.5); return; } c.fillText(l, PAD + 44, ly + Math.round(fs * 1.08)); ly += lh; });
    if (trunc) { c.fillStyle = GOLD; c.font = "600 28px " + FONT; c.fillText("อ่านต่อที่นักลงพุง ›", PAD + 44, panelY + panelH - 38); }
    plan.forEach(function (p) { c.save(); rr(c, p.x, p.y, p.w, p.h, 24); c.clip(); c.drawImage(p.im, p.x, p.y, p.w, p.h); c.restore(); });
    tkRows.forEach(function (p) {
      c.fillStyle = "rgba(255,255,255,.1)"; rr(c, p.x, p.y, p.w, 52, 26); c.fill(); c.strokeStyle = "rgba(245,179,1,.55)"; c.lineWidth = 2; rr(c, p.x, p.y, p.w, 52, 26); c.stroke();
      c.fillStyle = INK; c.font = "600 30px " + FONT; c.textAlign = "center"; c.fillText(p.t, p.x + p.w / 2, p.y + 36);
    });
    c.fillStyle = GOLD; c.fillRect(0, H - 14, W, 14);
    return cv;
  }
  // ---- แบบแบ่งหน้า: เนื้อยาวแตกเป็นหลายรูป 1080x1350 (สัดส่วนที่ Facebook แสดงเต็ม) ตัวหนังสือ 42px ไม่ต้องย่อ ----
  var PH = 1350, PAGE_LH = 66, MAX_PAGES = 8, MAX_TEXT_PAGES = 6;
  function paintBg(c, H) {
    var g = c.createLinearGradient(0, 0, W * 0.45, H); g.addColorStop(0, "#1b3180"); g.addColorStop(0.5, "#0f1f4d"); g.addColorStop(1, "#070e26"); c.fillStyle = g; c.fillRect(0, 0, W, H);
    var r = c.createRadialGradient(950, 120, 0, 950, 120, 600); r.addColorStop(0, "rgba(120,145,255,.32)"); r.addColorStop(1, "rgba(120,145,255,0)"); c.fillStyle = r; c.fillRect(0, 0, W, H);
    r = c.createRadialGradient(60, H - 120, 0, 60, H - 120, 680); r.addColorStop(0, "rgba(245,179,1,.12)"); r.addColorStop(1, "rgba(245,179,1,0)"); c.fillStyle = r; c.fillRect(0, 0, W, H);
  }
  function paintHead(c, pill) {
    c.save(); c.shadowColor = "rgba(0,0,0,.4)"; c.shadowBlur = 24; c.fillStyle = GOLD; c.beginPath(); c.arc(112, 112, 58, 0, Math.PI * 2); c.fill(); c.restore();
    var logo = document.querySelector(".brand img, .logo");
    if (logo && logo.complete && logo.naturalWidth) { c.save(); c.beginPath(); c.arc(112, 112, 53, 0, Math.PI * 2); c.clip(); c.drawImage(logo, 59, 59, 106, 106); c.restore(); }
    c.fillStyle = INK; c.textAlign = "left"; c.font = "700 48px " + FONT; c.fillText("นักลงพุง", 190, 126);
    c.font = "400 28px " + FONT; var w0 = c.measureText(pill).width + 48, x = W - PAD - w0;
    c.fillStyle = "rgba(255,255,255,.08)"; rr(c, x, 84, w0, 56, 28); c.fill(); c.strokeStyle = "rgba(255,255,255,.2)"; c.lineWidth = 2; rr(c, x, 84, w0, 56, 28); c.stroke();
    c.fillStyle = MUTED; c.textAlign = "center"; c.fillText(pill, x + w0 / 2, 121);
  }
  function paintPanel(c, y, h) {
    c.save(); c.shadowColor = "rgba(0,0,0,.38)"; c.shadowBlur = 38; c.shadowOffsetY = 14; c.fillStyle = PANEL; rr(c, PAD, y, W - PAD * 2, h, 36); c.fill(); c.restore();
    var pg = c.createLinearGradient(0, y, 0, y + h); pg.addColorStop(0, "rgba(255,255,255,.11)"); pg.addColorStop(1, "rgba(255,255,255,.03)"); c.fillStyle = pg; rr(c, PAD, y, W - PAD * 2, h, 36); c.fill();
    c.strokeStyle = "rgba(255,255,255,.17)"; c.lineWidth = 2; rr(c, PAD + 1, y + 1, W - PAD * 2 - 2, h - 2, 35); c.stroke();
    c.fillStyle = GOLD; rr(c, PAD + 40, y - 1, W - PAD * 2 - 80, 8, 4); c.fill();
  }
  function textLines(d) { var m = document.createElement("canvas").getContext("2d"); m.font = "400 42px " + FONT; return wrapText(m, d.text, W - PAD * 2 - 88); }
  function linesH(ls) { return ls.reduce(function (n, t) { return n + (t === "" ? PAGE_LH / 2 : PAGE_LH); }, 0); }
  function drawPages(d, imgs) {
    var m = document.createElement("canvas").getContext("2d"), lines = textLines(d), titleLines = [];
    if (d.title) { m.font = "700 60px " + FONT; titleLines = wrapText(m, d.title, W - PAD * 2); }
    var p1Top = 214 + 52 + 40 + titleLines.length * 76 + (d.sub ? 50 : 0) + 14, bottom = PH - 150, topN = 190, pages = [], i = 0, trunc = false;
    while (i < lines.length || !pages.length) {
      var top = pages.length ? topN : p1Top, cap = bottom - top - 88, used = 0, pl = [];
      while (i < lines.length) { var h = lines[i] === "" ? PAGE_LH / 2 : PAGE_LH; if (used + h > cap) break; pl.push(lines[i]); used += h; i++; }
      while (pl.length && pl[pl.length - 1] === "") { pl.pop(); used -= PAGE_LH / 2; }
      while (i < lines.length && lines[i] === "") i++;
      pages.push({ lines: pl, top: top, cap: cap });
      if (pages.length >= MAX_TEXT_PAGES && i < lines.length) { trunc = true; break; }
    }
    if (trunc) { var lp = pages[pages.length - 1]; while (lp.lines.length > 1 && linesH(lp.lines) + 54 > lp.cap) lp.lines.pop(); }
    var imgPages = imgs.slice(0, Math.max(0, MAX_PAGES - pages.length)), total = pages.length + imgPages.length, out = [];
    var dt = d.date || new Intl.DateTimeFormat("th-TH", { timeZone: "Asia/Bangkok", day: "numeric", month: "short", year: "numeric" }).format(new Date());
    function frame(k) {
      var cv = document.createElement("canvas"); cv.width = W; cv.height = PH; var c = cv.getContext("2d");
      paintBg(c, PH); paintHead(c, dt + "  ·  " + k + "/" + total); return { cv: cv, c: c };
    }
    function foot(c, k) {
      if (k === total) {   // หน้าสุดท้าย: ชื่อหุ้นที่เกี่ยวข้อง
        var x = PAD; c.font = "600 30px " + FONT;
        d.tickers.forEach(function (t) {
          var w = Math.round(c.measureText(t).width + 40); if (x + w > W - PAD) return;
          c.fillStyle = "rgba(255,255,255,.1)"; rr(c, x, PH - 110, w, 52, 26); c.fill(); c.strokeStyle = "rgba(245,179,1,.55)"; c.lineWidth = 2; rr(c, x, PH - 110, w, 52, 26); c.stroke();
          c.fillStyle = INK; c.textAlign = "center"; c.fillText(t, x + w / 2, PH - 74); x += w + 14;
        });
      } else { c.fillStyle = MUTED; c.font = "400 30px " + FONT; c.textAlign = "right"; c.fillText("อ่านต่อหน้าถัดไป ›", W - PAD, PH - 70); }
      c.fillStyle = GOLD; c.fillRect(0, PH - 14, W, 14);
    }
    pages.forEach(function (pg, idx) {
      var k = idx + 1, f = frame(k), c = f.c, last = idx === pages.length - 1, ph = last ? Math.max(140, linesH(pg.lines) + 88 + (trunc && idx === pages.length - 1 ? 54 : 0)) : bottom - pg.top;
      if (k === 1) {
        c.font = "700 28px " + FONT; var kw = c.measureText(d.kind).width + 56; c.fillStyle = GOLD; rr(c, PAD, 214, kw, 52, 26); c.fill();
        c.fillStyle = "#14213d"; c.textAlign = "center"; c.fillText(d.kind, PAD + kw / 2, 251);
        var ty = 214 + 52 + 40; c.textAlign = "left";
        if (titleLines.length) { c.fillStyle = INK; c.font = "700 60px " + FONT; titleLines.forEach(function (l, j) { c.fillText(l, PAD, ty + 52 + j * 76); }); ty += titleLines.length * 76; }
        if (d.sub) { c.fillStyle = MUTED; c.font = "400 32px " + FONT; c.fillText(d.sub, PAD, ty + 34); }
      }
      paintPanel(c, pg.top, ph);
      c.fillStyle = INK; c.font = "400 42px " + FONT; c.textAlign = "left";
      var ly = pg.top + 44; pg.lines.forEach(function (l) { if (l === "") { ly += PAGE_LH / 2; return; } c.fillText(l, PAD + 44, ly + 46); ly += PAGE_LH; });
      if (trunc && idx === pages.length - 1) { c.fillStyle = GOLD; c.font = "600 30px " + FONT; c.fillText("อ่านต่อที่นักลงพุง ›", PAD + 44, pg.top + ph - 34); }
      foot(c, k); out.push(f.cv);
    });
    imgPages.forEach(function (im, idx) {
      var k = pages.length + idx + 1, f = frame(k), c = f.c, bw = W - PAD * 2, bh = bottom - topN;
      var s = Math.min(bw / im.naturalWidth, bh / im.naturalHeight, 1.6), dw = Math.round(im.naturalWidth * s), dh = Math.round(im.naturalHeight * s), x = Math.round((W - dw) / 2), y = topN + Math.round((bh - dh) / 2);
      c.save(); rr(c, x, y, dw, dh, 24); c.clip(); c.drawImage(im, x, y, dw, dh); c.restore();
      foot(c, k); out.push(f.cv);
    });
    return out;
  }
  function toBlob(cv) { return new Promise(function (res, rej) { cv.toBlob(function (b) { b ? res(b) : rej(new Error("toBlob")); }, "image/png"); }); }
  function makeBlobs(card) {   // คืน {blobs:[...], d} ข้อความสั้น = รูปเดียว ข้อความยาว = หลายหน้า
    var d = cardData(card);
    var fonts = (document.fonts && document.fonts.load) ? Promise.all([document.fonts.load('400 40px "IBM Plex Sans Thai"'), document.fonts.load('700 40px "IBM Plex Sans Thai"'), document.fonts.load('600 30px "IBM Plex Sans Thai"')]).catch(function () {}) : Promise.resolve();
    return Promise.all([fonts, imageSrcs(card)]).then(function (r) { return Promise.all(r[1].map(loadImg)); }).then(function (imgs) {
      imgs = imgs.filter(Boolean);
      var cvs = linesH(textLines(d)) > 1000 ? drawPages(d, imgs) : [draw(d, imgs)];
      return Promise.all(cvs.map(toBlob));
    }).then(function (bl) { return { blobs: bl, d: d }; });
  }
  function fname(d, i, n) { return "naklongpoong-" + d.key + (d.title && /^[A-Za-z0-9.\-]+$/.test(d.title) ? "-" + d.title : "") + "-" + new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(new Date()) + (n > 1 ? "-p" + (i + 1) : "") + ".png"; }
  function download(blob, name) { var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000); }
  function flash(b, text, keep) {
    var old = b.getAttribute("data-label") || b.textContent; b.setAttribute("data-label", old); b.textContent = text; clearTimeout(b._t);
    if (!keep) b._t = setTimeout(function () { b.textContent = old; }, 2200);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-imgcopy], [data-imgsave]"); if (!b || b._busy) return;
    var card = b.closest(CARD_SEL); if (!card) return;
    var copy = b.hasAttribute("data-imgcopy"); b._busy = true; flash(b, "กำลังสร้างรูป...", true);
    var done = function (msg) { b._busy = false; flash(b, msg); };
    if (!card._pg || Date.now() - card._pg.t > 300000) { card._pg = { t: Date.now(), p: makeBlobs(card) }; b._page = 0; }   // จำรูปที่สร้างแล้ว 5 นาที
    var p = card._pg.p;
    if (copy) {
      var idx = b._page || 0, canClip = window.ClipboardItem && navigator.clipboard && navigator.clipboard.write;
      var item = p.then(function (r) { return r.blobs[Math.min(idx, r.blobs.length - 1)]; });
      var ok = function (r) {
        var n = r.blobs.length; b._page = (idx + 1) % n;
        done(n > 1 ? "คัดลอกหน้า " + (idx + 1) + "/" + n + " แล้ว กดอีกครั้งเพื่อหน้า " + (b._page + 1) : "คัดลอกรูปแล้ว กดวางได้เลย");
      };
      if (canClip) {   // ต้องเรียก clipboard.write ทันทีในจังหวะกด (Safari) โดยส่ง Promise ของรูปเข้าไป
        navigator.clipboard.write([new ClipboardItem({ "image/png": item })]).then(function () { p.then(ok); }, function () {
          p.then(function (r) { r.blobs.forEach(function (bl, i) { setTimeout(function () { download(bl, fname(r.d, i, r.blobs.length)); }, i * 500); }); done("คัดลอกไม่ได้ โหลดไฟล์ให้แทน"); }, function () { done("สร้างรูปไม่สำเร็จ"); });
        });
      } else {
        p.then(function (r) { r.blobs.forEach(function (bl, i) { setTimeout(function () { download(bl, fname(r.d, i, r.blobs.length)); }, i * 500); }); done("เบราว์เซอร์นี้คัดลอกรูปไม่ได้ โหลดไฟล์ให้แทน"); }, function () { done("สร้างรูปไม่สำเร็จ"); });
      }
      return;
    }
    p.then(function (r) {
      var n = r.blobs.length, files = [];
      try { files = r.blobs.map(function (bl, i) { return new File([bl], fname(r.d, i, n), { type: "image/png" }); }); } catch (x) {}
      if (files.length && navigator.canShare && navigator.canShare({ files: files }) && /Android|iPhone|iPad/i.test(navigator.userAgent)) {
        return navigator.share({ files: files }).catch(function (x) { if (x && x.name !== "AbortError") throw x; }).then(function () { done("บันทึกรูป"); });
      }
      r.blobs.forEach(function (bl, i) { setTimeout(function () { download(bl, fname(r.d, i, n)); }, i * 500); });
      done(n > 1 ? "โหลดรูปแล้ว " + n + " หน้า" : "โหลดรูปแล้ว");
    }).catch(function () { done("สร้างรูปไม่สำเร็จ"); });
  });

  // เติมปุ่มข้างปุ่ม "คัดลอกข้อความ" ในการ์ดทุกใบ (การ์ดถูกวาดใหม่บ่อย จึงเฝ้าดูแล้วเติมซ้ำ)
  var queued = false;
  function addButtons() {
    queued = false;
    document.querySelectorAll("[data-copytext]:not([data-imgdone])").forEach(function (b) {
      b.setAttribute("data-imgdone", "1");
      if (!b.closest(CARD_SEL)) return;
      b.insertAdjacentHTML("afterend", '<button class="linkbtn" type="button" data-imgcopy>คัดลอกเป็นรูป</button><button class="linkbtn" type="button" data-imgsave>บันทึกรูป</button>');
    });
  }
  function schedule() { if (!queued) { queued = true; (window.requestAnimationFrame || setTimeout)(addButtons); } }
  function start() { addButtons(); try { new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true }); } catch (e) {} }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
