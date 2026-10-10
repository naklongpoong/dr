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

// ประกาศลิขสิทธิ์ท้ายทุกหน้า (ยกเว้นหลังบ้าน)
document.addEventListener("DOMContentLoaded", function () {
  var w = document.querySelector("main.wrap, .wrap"); if (!w || window.NLP_NO_GATE) return;
  var f = document.createElement("p"); f.className = "site-copy";
  f.textContent = "© " + new Date().getFullYear() + " นักลงพุง (naklongpoong) สงวนลิขสิทธิ์ เนื้อหา ข้อมูล และโค้ดของเว็บนี้ห้ามคัดลอกหรือนำไปเผยแพร่ซ้ำโดยไม่ได้รับอนุญาต";
  f.style.cssText = "margin:32px 0 0;text-align:center;font-size:.78rem;opacity:.55;";
  w.appendChild(f);
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
    if (SITE.news) it.push(item("news.html?ticker=" + q, "ดูข่าวของ " + esc(tk), "ข่าวและหุ้นน่าสนใจ", here("news")));
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
