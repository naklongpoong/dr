/* gate.js: ครอบเว็บด้วยล็อกอินสมาชิก (รหัสประจำเดือน)
   - สมาชิกใส่รหัสครั้งเดียว ระบบจดไว้ว่า "เครื่องนี้ใส่รหัสของเดือนนี้แล้ว" (ผ่าน Firebase Anonymous Auth)
   - ผู้ดูแลเปลี่ยนรหัสที่ admin.html คนที่ไม่มีรหัสใหม่จะอ่านข้อมูลไม่ได้ทันที
   - ข้อมูลจริงอยู่ใน Firestore และ rules เช็กที่ฝั่งเซิร์ฟเวอร์ ไม่ใช่แค่ซ่อนหน้า */
(function () {
  var BASE = "https://www.gstatic.com/firebasejs/10.12.2/";
  var cfg = (window.SITE && window.SITE.firebase) || {};
  var NLP = window.NLP = {};
  var modsP = null;

  // โหลด Firebase (window.__NLP_MODS ใช้สำหรับทดสอบ/ตัวอย่างเท่านั้น)
  NLP.load = function () {
    if (!modsP) {
      modsP = window.__NLP_MODS ? Promise.resolve(window.__NLP_MODS) :
        Promise.all([import(BASE + "firebase-app.js"), import(BASE + "firebase-auth.js"), import(BASE + "firebase-firestore.js")])
          .then(function (m) { return { initializeApp: m[0].initializeApp, A: m[1], F: m[2] }; });
    }
    return modsP.then(function (m) {
      if (!NLP.app) {
        NLP.app = m.initializeApp(cfg); NLP.A = m.A; NLP.F = m.F;
        NLP.auth = m.A.getAuth(NLP.app); NLP.db = m.F.getFirestore(NLP.app);
      }
      return NLP;
    });
  };
  NLP.norm = function (s) { return String(s || "").replace(/[\s\-]/g, "").toUpperCase(); };
  if (window.NLP_NO_GATE) return;   // หน้า admin ใช้ล็อกอินของตัวเอง

  var resolveReady, reloadAfter = false;
  NLP.ready = new Promise(function (r) { resolveReady = r; });
  document.documentElement.classList.add("locked");

  var css = "html.locked .wrap{display:none!important}" +
    "#gate{position:fixed;inset:0;z-index:99;background:#0f1e46;color:#fff;display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto}" +
    "#gate .box{width:100%;max-width:380px;text-align:center}" +
    "#gate img{width:112px;height:auto;margin:0 auto 6px;display:block}" +
    "#gate h1{font-size:1.9rem;margin:0 0 4px;font-weight:700}" +
    "#gate p{margin:0 0 16px;color:#b9c6e6;font-size:.95rem}" +
    "#gate input{width:100%;font:inherit;font-size:1.15rem;text-align:center;letter-spacing:.08em;padding:13px 16px;border-radius:12px;border:2px solid transparent;background:#fff;color:#14213d;outline:none}" +
    "#gate input:focus-visible{border-color:#f5b301;box-shadow:0 0 0 3px rgba(245,179,1,.35)}" +
    "#gate button{margin-top:12px;font:inherit;font-weight:700;cursor:pointer;width:100%;padding:12px;border:0;border-radius:12px;background:#f5b301;color:#14213d;font-size:1rem}" +
    "#gate button:disabled{opacity:.6;cursor:default}#gate button:focus-visible{outline:3px solid #fff;outline-offset:2px}" +
    "#gate .err{margin-top:12px;color:#ff9b92;font-size:.92rem;min-height:1.2em}" +
    "#gate .hint{margin-top:18px;font-size:.8rem;color:#8fa0c8}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var gate, logoSrc = "";
  function ensureGate() {
    if (gate) return gate;
    var img = document.querySelector(".brand img, .logo");
    logoSrc = img ? img.src : "";
    gate = document.createElement("div"); gate.id = "gate"; gate.setAttribute("role", "dialog"); gate.setAttribute("aria-modal", "true"); gate.setAttribute("aria-label", "เข้าสู่ระบบสมาชิก");
    document.body.appendChild(gate); return gate;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function frame(inner) {
    ensureGate().innerHTML = '<div class="box">' + (logoSrc ? '<img src="' + logoSrc + '" alt="โลโก้นักลงพุง">' : "") + "<h1>นักลงพุง</h1>" + inner + "</div>";
  }
  function showMsg(t) { frame("<p>" + esc(t) + "</p>"); }
  function showCode(note) {
    frame('<p>สำหรับสมาชิก ใส่รหัสประจำเดือนเพื่อเข้าดู</p>' +
      '<form id="gateForm" autocomplete="off"><label class="sr" for="gateCode" style="position:absolute;left:-9999px">รหัสสมาชิก</label>' +
      '<input id="gateCode" type="text" inputmode="text" autocapitalize="characters" spellcheck="false" placeholder="รหัสสมาชิก" required>' +
      '<button type="submit" id="gateBtn">เข้าสู่ระบบ</button></form>' +
      '<div class="err" id="gateErr" role="alert">' + esc(note || "") + "</div>" +
      '<div class="hint">รหัสเปลี่ยนทุกเดือน ขอรหัสล่าสุดจากแอดมิน</div>');
    var f = document.getElementById("gateForm"), inp = document.getElementById("gateCode");
    inp.focus();
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var code = NLP.norm(inp.value); if (!code) return;
      var btn = document.getElementById("gateBtn"), err = document.getElementById("gateErr");
      btn.disabled = true; err.textContent = "";
      NLP.F.setDoc(NLP.F.doc(NLP.db, "sessions", NLP.auth.currentUser.uid), { code: code, createdAt: NLP.F.serverTimestamp() })
        .then(function () { return isMember(); })
        .then(function (ok) { if (ok) open(); else { err.textContent = "รหัสไม่ถูกต้องหรือหมดอายุ"; btn.disabled = false; } })
        .catch(function (e2) {
          err.textContent = e2 && e2.code === "permission-denied" ? "รหัสไม่ถูกต้องหรือหมดอายุ" : "ผิดพลาด: " + ((e2 && (e2.code || e2.message)) || e2);
          btn.disabled = false;
        });
    });
  }
  function isMember() {
    return NLP.F.getDoc(NLP.F.doc(NLP.db, "content", "ping")).then(function () { return true; }, function (e) {
      if (e && e.code === "permission-denied") return false; throw e;
    });
  }
  function open() {
    document.documentElement.classList.remove("locked");
    if (gate) { gate.remove(); gate = null; }
    if (reloadAfter) { location.reload(); return; }
    resolveReady(NLP);
  }
  // ถ้ารหัสถูกเปลี่ยนระหว่างที่เปิดหน้าค้างไว้ หน้าเว็บเรียกอันนี้เพื่อให้ใส่รหัสใหม่
  NLP.relock = function () {
    reloadAfter = true; document.documentElement.classList.add("locked"); showCode("รหัสหมดอายุ ใส่รหัสใหม่ของเดือนนี้");
  };

  function start() {
    if (!cfg.apiKey) { showMsg("ยังไม่ได้ตั้งค่า Firebase ในไฟล์ site.js"); return; }
    NLP.load().then(function () {
      return new Promise(function (res) { var un = NLP.A.onAuthStateChanged(NLP.auth, function (u) { un(); res(u); }); });
    }).then(function (u) { return u || NLP.A.signInAnonymously(NLP.auth); })
      .then(function () { return isMember(); })
      .then(function (ok) { if (ok) open(); else showCode(); })
      .catch(function (e) {
        var c = e && e.code;
        if (c === "auth/operation-not-allowed" || c === "auth/admin-restricted-operation") showMsg("ผู้ดูแลยังไม่ได้เปิด Anonymous ใน Firebase Authentication");
        else showMsg("เชื่อมต่อไม่สำเร็จ ลองรีเฟรชอีกครั้ง (" + (c || (e && e.message) || e) + ")");
      });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
