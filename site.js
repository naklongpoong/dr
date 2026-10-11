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

// หุ้นที่ถือเป็นบริษัทเดียวกัน (คนละ class หรือคนละชื่อย่อ) หน้า dashboard ฟีด และค้นหาจะนับรวมกัน เพิ่มกลุ่มใหม่ได้ เช่น ["BRK-A", "BRK-B"]
window.TK_ALIAS = [["GOOGL", "GOOG"]];
window.tkAlias = function (t) {
  t = String(t || "").toUpperCase();
  for (var i = 0; i < TK_ALIAS.length; i++) if (TK_ALIAS[i].indexOf(t) >= 0) return TK_ALIAS[i].slice();
  return [t];
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
  if (SITE.articles) items.push(["legend", "articles.html?type=legend", "Legends"]);
  if (SITE.etf) items.push(["etf", "etf.html", "ETF"]);
  el.innerHTML = items.map(function (i) {
    return '<a href="' + i[1] + '"' + (i[0] === current ? ' aria-current="page"' : "") + ">" + i[2] + "</a>";
  }).join("") + '<button type="button" class="nav-search" data-search aria-label="ค้นหาทั้งเว็บ" title="ค้นหาทั้งเว็บ (Ctrl+K)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg> ค้นหา</button>';
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

// ---- ค้นหาทั้งเว็บ: ปุ่มในเมนู (หรือ Ctrl+K) ค้นข่าว งบ บทความ และ DR ล่าสุด + ข้ามไป dashboard ของหุ้นตามชื่อ ----
(function () {
  var box = null, inp, out, data = null, loading = null, last = null, sel = -1, TK = /^[A-Z0-9.\-]{1,12}$/;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var css = document.createElement("style");
  css.textContent = ".nav-search{display:inline-flex;align-items:center;gap:6px;margin-left:auto;font:inherit;font-size:.9rem;color:#c9d5f2;background:transparent;padding:3px 13px;border-radius:999px;border:1px solid rgba(255,255,255,.25);cursor:pointer}.nav-search:hover{border-color:#f5b301;color:#fff}.nav-search:focus-visible{outline:2px solid #f5b301;outline-offset:2px}" +
    "#nlpS{position:fixed;inset:0;z-index:95;background:rgba(5,10,25,.72);display:flex;justify-content:center;align-items:flex-start;padding:8vh 14px 14px}#nlpS[hidden]{display:none}" +
    "#nlpS .sb{width:100%;max-width:640px;max-height:84vh;display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--ink,#14213d);border-radius:16px;border-bottom:4px solid #f5b301;box-shadow:0 20px 60px rgba(0,0,0,.45);overflow:hidden}" +
    "#nlpS input{width:100%;box-sizing:border-box;font:inherit;font-size:1.05rem;padding:16px 18px;border:0;border-bottom:1px solid var(--line,#d5dbea);background:transparent;color:inherit;outline:none}" +
    "#nlpS .res{overflow:auto;padding:6px}#nlpS .g{font-size:.78rem;font-weight:600;color:var(--muted,#6b7794);padding:10px 12px 4px}#nlpS .res a{display:block;text-decoration:none;color:inherit;padding:8px 12px;border-radius:10px}#nlpS .res a:hover,#nlpS .res a.on{background:var(--accent-soft,#e8efff)}#nlpS .res a b{display:block;font-weight:600;font-size:.95rem}#nlpS .res a small{display:block;color:var(--muted,#6b7794);font-size:.82rem;line-height:1.45}" +
    "#nlpS .hint{padding:18px;color:var(--muted,#6b7794);font-size:.9rem}#nlpS .ft{padding:8px 14px;font-size:.76rem;color:var(--muted,#6b7794);border-top:1px solid var(--line,#d5dbea)}";
  document.head.appendChild(css);

  function ensure() {
    if (box) return;
    box = document.createElement("div"); box.id = "nlpS"; box.hidden = true; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "ค้นหาทั้งเว็บ");
    box.innerHTML = '<div class="sb"><input type="search" id="nlpSq" autocomplete="off" spellcheck="false" placeholder="ค้นหาชื่อหุ้น ข่าว งบ บทความ หรือ DR" aria-label="ค้นหาทั้งเว็บ"><div class="res" id="nlpSr" aria-live="polite"></div><div class="ft">ค้นในข่าว งบ และบทความล่าสุดอย่างละ 50 เรื่อง กับรายการ DR ทั้งหมด · พิมพ์ชื่อหุ้นเพื่อข้ามไปหน้า dashboard · Esc ปิด</div></div>';
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
    }).then(function (r) { data = { news: r[0], earnings: r[1], articles: r[2], dr: r[3] }; render(); })
      .catch(function (e) { loading = null; if (e && e.code === "permission-denied" && window.NLP && NLP.relock) { close(); NLP.relock(); return; } if (out) out.innerHTML = '<div class="hint">โหลดข้อมูลค้นหาไม่สำเร็จ ลองรีเฟรชหน้า</div>'; });
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
    var dr = data.dr.filter(function (r) { return has([r.tk, r.name, r.grp].concat(r.codes)); }).slice(0, 6);
    if (dr.length) html += '<div class="g">DR</div>' + dr.map(function (r) { return '<a href="dr.html?q=' + encodeURIComponent(r.tk) + '"><b>' + esc(r.tk) + " · " + esc(r.name) + "</b><small>" + esc(r.codes.join(", ")) + (r.grp ? " · " + esc(r.grp) : "") + "</small></a>"; }).join("");
    var art = data.articles.filter(function (a) { return has([a.title, a.summary].concat(a.tickers || [])); }).slice(0, 6);
    if (art.length) html += '<div class="g">บทความ</div>' + art.map(function (a) { return '<a href="articles.html?id=' + encodeURIComponent(a.id) + '"><b>' + snip(a.title, q) + "</b><small>" + snip(a.summary, q) + "</small></a>"; }).join("");
    function posts(list, label, page) {
      var m = list.filter(function (p) { return has([p.text, p.period].concat(p.tickers || [])); }).slice(0, 6);
      if (m.length) html += '<div class="g">' + label + "</div>" + m.map(function (p) { var tk = (p.tickers || [])[0]; return '<a href="' + page + (tk ? "?ticker=" + encodeURIComponent(tk) : "") + '"><b>' + esc((p.tickers || []).join(" ") || label) + (p.period ? " · " + esc(p.period) : "") + "</b><small>" + snip(p.text, q) + "</small></a>"; }).join("");
    }
    posts(data.earnings, "งบและพรีวิวงบ", "earnings.html"); posts(data.news, "ข่าว", "news.html");
    if (!html) html = '<div class="hint">ไม่พบ "' + esc(raw) + '" ในข่าว งบ บทความล่าสุด หรือ DR ลองคำอื่น หรือพิมพ์ชื่อหุ้นเพื่อเปิด dashboard</div>';
    out.innerHTML = html;
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-search]")) { e.preventDefault(); open(); return; }
    if (box && !box.hidden && e.target.closest("#nlpS .res a")) setTimeout(close, 0);
  });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k" && document.getElementById("nav") && !window.NLP_NO_GATE) { e.preventDefault(); box && !box.hidden ? close() : open(); }
    else if (e.key === "Escape") close();
  });
})();
