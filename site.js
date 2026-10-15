// ตั้งค่ากลางของทั้งเว็บ (ไฟล์นี้ไฟล์เดียวคุมเมนูและการเชื่อม Firebase ของทุกหน้า)
window.SITE = {
  articles: true,   // false = ซ่อนหน้าบทความจากเมนูและหน้าปก
  news: true,       // false = ซ่อนหน้าข่าวจากเมนูและหน้าปก
  earnings: true,   // false = ซ่อนหน้าพรีวิวงบ/งบหุ้นรายตัวจากเมนูและหน้าปก
  basics: true,     // แท็บ ความรู้พื้นฐาน false = ซ่อนทั้งเมนูและการ์ด
  basicsLive: false, // false = สมาชิกเห็นหน้า Coming Soon (ดูตัวจริงที่ basics.html?preview=1) true = เปิดคลังคำศัพท์จริง
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
window.FOMC_ODDS = { meeting: "2026-10-28", asOf: "2026-10-15", ease: 0.0, hold: 65.1, hike: 34.9, maxAgeDays: 3 };

// เงินเฟ้อสหรัฐ (CPI) ล่าสุด จาก BLS (อัปเดตเอง) ค่าเป็น % release = วันที่ประกาศ (เวลานิวยอร์ก) exp = ค่าที่นักเศรษฐศาสตร์คาด (FactSet)
// expMom = ค่าคาดรายเดือน (ใส่เมื่อมีแหล่งชัดเจน ไม่ใส่ก็ได้) yoy = เทียบปีก่อน prev = yoy เดือนก่อน mom = เทียบเดือนก่อน hideAfter = ซ่อนการ์ดเมื่อถึงเวลาประกาศครั้งถัดไป (BLS: 10 พ.ย. 8:30 น. นิวยอร์ก = 13:30Z)
window.CPI_LATEST = {
  month: "ก.ย. 2026", release: "2026-10-14", nextRelease: "10 พ.ย.", hideAfter: "2026-11-10T13:30:00Z",
  headline: { yoy: 3.7, prev: 3.4, mom: 0.6, exp: 3.6 },
  core: { yoy: 2.6, prev: 2.4, mom: 0.3, exp: 2.5, expMom: 0.2 },
  note: "น้ำมันเบนซิน +9.1% ในเดือนเดียว ดันเงินเฟ้อสูงกว่าคาด"
};

// เงินเฟ้อผู้ผลิตสหรัฐ (PPI) ล่าสุด จาก BLS (อัปเดตเอง) รูปแบบเดียวกับ CPI_LATEST ด้านบน ไม่ใส่ exp/expMom ถ้าแหล่งข่าวให้ค่าคาดไม่ตรงกัน (ป้ายสูงกว่า/ต่ำกว่าคาดจะไม่โชว์)
// core ของ PPI ที่ BLS รายงานคือ "ไม่รวมอาหาร พลังงาน และบริการการค้า" (ไม่ใช่ไม่รวมแค่อาหาร-พลังงาน) hideAfter = BLS ประกาศครั้งหน้า 13 พ.ย. 8:30 น. นิวยอร์ก = 13:30Z
window.PPI_LATEST = {
  month: "ก.ย. 2026", release: "2026-10-15", nextRelease: "13 พ.ย.", hideAfter: "2026-11-13T13:30:00Z",
  headline: { yoy: 6.3, prev: 5.6, mom: 1.3 },
  core: { yoy: 5.0, mom: 0.5 },
  note: "พลังงานระดับผู้ผลิต +10.8% ในเดือนเดียว (น้ำมันเบนซิน +20.3%) คิดเป็นกว่า 80% ของการเพิ่ม *Core ตามนิยาม BLS ไม่รวมบริการการค้าด้วย",
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
  var extra = [];   // เมนูรอง เก็บไว้หลังปุ่ม "เพิ่มเติม" ให้แถบเมนูไม่ยาวเกินบนมือถือ
  if (SITE.articles) extra.push(["legend", "articles.html?type=legend", "Legends"]);
  if (SITE.basics) extra.push(["basics", "basics.html", "ความรู้พื้นฐาน"]);
  if (SITE.etf) extra.push(["etf", "etf.html", "ETF"]);
  function link(i, cls) {
    return '<a' + (cls ? ' class="' + cls + '"' : "") + ' href="' + i[1] + '"' + (i[0] === current ? ' aria-current="page"' : "") + ">" + i[2] + "</a>";
  }
  var cur = extra.filter(function (i) { return i[0] === current; })[0];   // หน้านี้อยู่ในเมนูรอง: ปุ่มจะโชว์ชื่อหน้านี้และเป็นสีทอง
  el.innerHTML = items.map(function (i) { return link(i); }).join("") +
    (extra.length ? '<button type="button" class="nav-more' + (cur ? " on" : "") + '" aria-expanded="false" aria-label="เมนูอื่นๆ">' + (cur ? cur[2] : "เพิ่มเติม") + ' ▾</button>' + extra.map(function (i) { return link(i, "nav-x"); }).join("") : "") +
    '<button type="button" class="nav-search" data-search aria-label="ค้นหาทั้งเว็บ" title="ค้นหาทั้งเว็บ (Ctrl+K)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><span class="nlp-t">ค้นหา</span></button>';
  if (window.nlpPopupBtn) window.nlpPopupBtn();
};
(function () {   // ปุ่ม "เพิ่มเติม" เปิด/ปิดเมนูรอง (กดที่อื่นหรือกด Esc เพื่อปิด)
  function close() { var n = document.getElementById("nav"); if (!n) return; n.classList.remove("open"); var m = n.querySelector(".nav-more"); if (m) m.setAttribute("aria-expanded", "false"); }
  document.addEventListener("click", function (e) {
    var n = document.getElementById("nav"); if (!n || !e.target.closest) return;
    var b = e.target.closest(".nav-more");
    if (b) { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o ? "true" : "false"); return; }
    if (n.classList.contains("open") && !e.target.closest(".nav-x")) close();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
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

// ---- ค้นหาทั้งเว็บ: ปุ่มในเมนู (หรือ Ctrl+K) ค้นข่าว งบ บทความ และ DR ล่าสุด + ข้ามไป dashboard ของหุ้นตามชื่อ ----
(function () {
  var box = null, inp, out, data = null, loading = null, last = null, sel = -1, TK = /^[A-Z0-9.\-]{1,12}$/, meta = null, busy = false, PAGE_N = 50;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var css = document.createElement("style");
  css.textContent = ".nav .nav-x{display:none}.nav.open .nav-x{display:inline-block}.nav-more{font:inherit;font-size:.9rem;color:#c9d5f2;background:transparent;padding:3px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.25);cursor:pointer}.nav-more:hover,.nav.open .nav-more{border-color:#f5b301;color:#fff}.nav-more.on{background:#f5b301;border-color:#f5b301;color:#14213d;font-weight:600}.nav-more:focus-visible{outline:2px solid #f5b301;outline-offset:2px}@media(max-width:480px){.nav-search .nlp-t{display:none}}.nav-search{display:inline-flex;align-items:center;gap:6px;margin-left:auto;font:inherit;font-size:.9rem;color:#c9d5f2;background:transparent;padding:3px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.25);cursor:pointer}.nav-search:hover{border-color:#f5b301;color:#fff}.nav-search:focus-visible{outline:2px solid #f5b301;outline-offset:2px}" +
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
  var SEEN = "nlp_popup_seen", el = null, prevFocus = null, curVer = null, preview = false, HEAD;
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
    document.head.appendChild(s);
    el = document.createElement("div"); el.id = "nlpPu"; el.hidden = true; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "nlpPuT");
    document.body.appendChild(el);
    el.addEventListener("mousedown", function (e) { if (e.target === el) closeIt(); });
    return el;
  }
  function show(d, opt) {
    var b = build(), ev = evHtml(d.events), full = bodyHtml(d.body);
    preview = !!(opt && (opt.preview || opt.reopen)); curVer = d.v == null ? null : d.v;
    b.innerHTML = '<div class="pu" tabindex="-1"><div class="puh"><span class="puk">' + (opt && opt.preview ? "ตัวอย่าง · " : "") + 'ประกาศ</span><h2 id="nlpPuT">' + esc(d.title || "ประกาศ") + "</h2></div>" +
      '<div class="pum">' + (ev ? '<ul class="pue">' + ev + "</ul>" : "") + (full ? '<div class="pub" id="nlpPuB" hidden>' + full + "</div>" : "") + "</div>" +
      '<div class="pua">' + (full ? '<button type="button" class="pur" data-pu="more" aria-expanded="false" aria-controls="nlpPuB">อ่านต่อ</button>' : "") + '<button type="button" class="puc" data-pu="close">ปิด</button></div></div>';
    prevFocus = document.activeElement; b.hidden = false; document.documentElement.style.overflow = "hidden";
    (b.querySelector(".pur") || b.querySelector(".puc")).focus();
  }
  function closeIt() {
    if (!el || el.hidden) return;
    el.hidden = true; document.documentElement.style.overflow = "";
    if (!preview && curVer != null) mark(curVer);
    try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) {}
  }
  window.nlpPopupShow = show; window.nlpPopupClose = closeIt;
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
    var bs = [].slice.call(el.querySelectorAll("button")), i = bs.indexOf(document.activeElement);   // ให้โฟกัสวนอยู่ในการ์ด
    if (e.shiftKey && i <= 0) { e.preventDefault(); bs[bs.length - 1].focus(); }
    else if (!e.shiftKey && (i < 0 || i === bs.length - 1)) { e.preventDefault(); bs[0].focus(); }
  });
  function norm(d) {   // ข้อมูลจาก Firestore -> ออบเจ็กต์ธรรมดา (เก็บเวลาเป็นมิลลิวินาที เพื่อจำในเครื่องได้)
    function ms(t) { return t && t.toMillis ? t.toMillis() : (t && t.toDate ? t.toDate().getTime() : 0); }
    return { title: d.title || "", events: d.events || "", body: d.body || "", on: d.on !== false, until: ms(d.until), v: ms(d.updatedAt) };
  }
  var last = null;
  window.nlpPopupBtn = function () {   // ปุ่ม "ประกาศ" ที่แถบเมนู ไว้เปิดการ์ดล่าสุดซ้ำหลังปิดไปแล้ว (มีเฉพาะตอนมีการ์ดที่ยังไม่หมดอายุ)
    var nav = document.getElementById("nav");
    if (!last || !nav || nav.querySelector("[data-pu-open]")) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "nav-search"; b.setAttribute("data-pu-open", "");
    b.textContent = "📢 ประกาศ"; b.title = "เปิดประกาศล่าสุดอีกครั้ง"; nav.appendChild(b);
  };
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-pu-open]") && last) show(last, { reopen: true });
  });
  function pick(d) {
    if (!d || !d.on || !(d.events || d.body)) return;
    if (d.until && Date.now() > d.until) return;   // หมดอายุแล้ว
    last = d; window.nlpPopupBtn();
    if (seen(d.v)) return;                          // เครื่องนี้ปิดการ์ดเวอร์ชันนี้ไปแล้ว (ยังกดปุ่ม "ประกาศ" เปิดดูได้)
    show(d);
  }
  document.addEventListener("DOMContentLoaded", function () {
    if (window.NLP_NO_GATE || !window.NLP || !NLP.ready) return;
    NLP.ready.then(function (N) {
      var c = window.cacheGet && cacheGet("popup", (window.SITE && SITE.cacheMinutes) || 0);
      if (c) { pick(c.none ? null : c); return; }
      return N.F.getDoc(N.F.doc(N.db, "content", "popup")).then(function (s) {
        var d = s.exists() ? norm(s.data()) : null;
        if (window.cachePut) cachePut("popup", d || { none: true });
        pick(d);
      });
    }).catch(function () {});   // อ่านไม่ได้ (เช่น ยังไม่ได้วางกฎใหม่) ก็แค่ไม่เด้ง ไม่กระทบหน้าอื่น
  });
})();
