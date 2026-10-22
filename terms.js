// คลังคำศัพท์ (แก้ข้อความที่นี่ได้เลย) ฟิลด์ w = ทำไมต้องรู้ / e = ตัวเลขเศรษฐกิจที่มีหน้าอธิบายลึกใน econ.html (ใช้ e แทน w: นิยามสั้นอยู่ที่นี่ ส่วนวิธีอ่านและผลต่อตลาดอยู่ที่หน้าตัวเลขเศรษฐกิจ) ใช้ร่วมกันระหว่าง basics.html (คลัง+ควิซ) และหน้าแรก (ศัพท์วันนี้) id = ลิงก์ตรง เช่น basics.html#core-cpi
window.TERM_CATS = { macro: "เงินเฟ้อและดอกเบี้ย", earn: "งบและมูลค่าหุ้น", prod: "ผลิตภัณฑ์ลงทุน", mkt: "ตลาดและกลยุทธ์" };

window.TERMS = [
  { id: "inflation", c: "macro", t: "เงินเฟ้อ", en: "Inflation",
    d: "ราคาสินค้าและบริการโดยรวมสูงขึ้นต่อเนื่อง ทำให้เงินจำนวนเท่าเดิมซื้อของได้น้อยลง ธนาคารกลางตั้งเป้าไม่ให้เงินเฟ้อสูงเกินไป โดย Fed ตั้งเป้าไว้ที่ 2% ต่อปี (วัดด้วย PCE)",
    w: "เงินเฟ้อสูงกว่าเป้า Fed มักตรึงหรือขึ้นดอกเบี้ยเพื่อชะลอ ซึ่งกดดันราคาหุ้น โดยเฉพาะหุ้นเติบโตสูง" },
  { id: "cpi", c: "macro", t: "CPI", en: "Consumer Price Index · ดัชนีราคาผู้บริโภค",
    d: "วัดว่าราคาสินค้าและบริการที่ครัวเรือนสหรัฐซื้อเป็นประจำ (อาหาร ที่อยู่อาศัย น้ำมัน ค่าเดินทาง ฯลฯ) เปลี่ยนไปเท่าไร สำนักสถิติแรงงานสหรัฐ (BLS) ประกาศทุกเดือน และเป็นตัวเลขเงินเฟ้อที่ตลาดจับตามากที่สุด",
    e: "cpi" },
  { id: "core-cpi", c: "macro", t: "Core CPI", en: "CPI ไม่รวมอาหารและพลังงาน",
    d: "CPI ที่ตัดหมวดอาหารกับพลังงานออก เพราะสองหมวดนี้ราคาผันผวนตามฤดูกาลและเหตุการณ์ เช่น ราคาน้ำมัน Core จึงสะท้อนแรงกดดันด้านราคาพื้นฐานได้ดีกว่า และ Fed ดูตัวนี้ประกอบเสมอ",
    e: "cpi" },
  { id: "ppi", c: "macro", t: "PPI", en: "Producer Price Index · ดัชนีราคาผู้ผลิต",
    d: "วัดการเปลี่ยนแปลงของราคาที่ผู้ผลิตในสหรัฐขายสินค้าและบริการได้ (ราคาหน้าโรงงานหรือต้นน้ำ ก่อนถึงมือผู้บริโภค) สำนักสถิติแรงงานสหรัฐ (BLS) ประกาศทุกเดือน ตัวเลขหลักคือ Final Demand และมี Core หลายนิยาม เช่น ไม่รวมอาหารและพลังงาน หรือไม่รวมอาหาร พลังงาน และบริการการค้า",
    e: "ppi" },
  { id: "pce", c: "macro", t: "PCE", en: "Personal Consumption Expenditures",
    d: "อีกตัวชี้วัดเงินเฟ้อ ประกาศโดยสำนักวิเคราะห์เศรษฐกิจสหรัฐ (BEA) เป็นตัวที่ Fed ใช้เป็นเป้าหมาย 2% อย่างเป็นทางการ แต่ CPI ออกก่อน คนจึงพูดถึงมากกว่า",
    e: "pce" },
  { id: "yoy", c: "macro", t: "YoY / MoM / QoQ", en: "การเทียบช่วงเวลา",
    d: "YoY เทียบช่วงเดียวกันของปีก่อน, MoM เทียบเดือนก่อนหน้า, QoQ เทียบไตรมาสก่อนหน้า เช่น เงินเฟ้อ 3% YoY แปลว่าราคาโดยรวมสูงกว่าเดือนเดียวกันของปีก่อน 3%",
    w: "ข่าวเศรษฐกิจมักให้ทั้ง YoY และ MoM อ่านคู่กัน YoY บอกภาพใหญ่ MoM บอกทิศทางล่าสุด" },
  { id: "fomc", c: "macro", t: "FOMC", en: "Federal Open Market Committee",
    d: "คณะกรรมการของ Fed ที่ประชุมปีละ 8 ครั้งตามตาราง เพื่อกำหนดดอกเบี้ยนโยบายสหรัฐ วันที่สองของการประชุมจะประกาศมติ ตามด้วยแถลงข่าวของประธาน Fed",
    e: "fomc" },
  { id: "fed-funds", c: "macro", t: "ดอกเบี้ยนโยบาย", en: "Federal Funds Rate",
    d: "อัตราดอกเบี้ยเป้าหมายที่ Fed กำหนด เป็นช่วงกว้าง 0.25% ซึ่งเป็นฐานให้ดอกเบี้ยกู้ยืมและดอกเบี้ยเงินฝากทั่วระบบขยับตาม",
    w: "โดยทั่วไป ขึ้นดอกเบี้ย = ต้นทุนเงินสูงขึ้น หุ้นมักถูกกดดัน ลดดอกเบี้ย = ตรงข้าม แต่ไม่เป็นแบบนี้เสมอไป ตลาดมักขยับล่วงหน้าไปแล้วตามที่คาด" },
  { id: "hawk-dove", c: "macro", t: "Hawkish / Dovish", en: "ท่าทีของธนาคารกลาง",
    d: "Hawkish คือท่าทีเข้มงวด เอนไปทางขึ้นหรือคงดอกเบี้ยสูงเพื่อสู้เงินเฟ้อ ส่วน Dovish คือท่าทีผ่อนปรน เอนไปทางลดดอกเบี้ยเพื่อพยุงเศรษฐกิจ",
    w: "ตลาดอ่านท่าทีจากถ้อยคำในแถลงการณ์และคำพูดของเจ้าหน้าที่ Fed ไม่ได้ดูแค่ตัวเลขดอกเบี้ย" },
  { id: "fedwatch", c: "macro", t: "CME FedWatch", en: "เครื่องมือประเมินโอกาสปรับดอกเบี้ย",
    d: "เครื่องมือของ CME Group ที่คำนวณโอกาสที่ Fed จะขึ้น คงที่ หรือลดดอกเบี้ยในแต่ละการประชุม จากราคาสัญญาซื้อขายล่วงหน้าอัตราดอกเบี้ยในตลาด",
    w: "ตัวเลขนี้คือ <b>สิ่งที่ตลาดคาดการณ์</b> ไม่ใช่คำพยากรณ์ของ Fed และเปลี่ยนได้ทุกวันตามข้อมูลเศรษฐกิจใหม่" },

  { id: "revenue-profit", c: "earn", t: "รายได้ vs กำไรสุทธิ", en: "Revenue vs Net Income",
    d: "รายได้ (Revenue) คือยอดขายรวมก่อนหักต้นทุน ส่วนกำไรสุทธิ (Net Income) คือส่วนที่เหลือหลังหักต้นทุน ค่าใช้จ่าย ดอกเบี้ย และภาษี",
    w: "รายได้โตแต่กำไรไม่โตก็เกิดได้ ถ้าต้นทุนโตเร็วกว่า จึงควรดูทั้งสองตัวคู่กัน" },
  { id: "eps", c: "earn", t: "EPS", en: "Earnings Per Share · กำไรต่อหุ้น",
    d: "กำไรสุทธิหารด้วยจำนวนหุ้นทั้งหมด บอกว่าหุ้นหนึ่งหุ้นได้กำไรเท่าไร งบบริษัทสหรัฐมักมีทั้งตัวเลขตามมาตรฐานบัญชี (GAAP) และตัวเลขแบบปรับปรุง (Adjusted / Non-GAAP) ที่ตัดรายการพิเศษออก",
    w: "เวลาเทียบกับที่นักวิเคราะห์คาด ให้ดูว่าข่าวใช้ตัวเลขแบบไหน เพราะสองแบบอาจต่างกันได้" },
  { id: "pe", c: "earn", t: "P/E", en: "Price-to-Earnings Ratio",
    d: "ราคาหุ้นหารด้วย EPS บอกว่าตลาดจ่ายราคากี่เท่าของกำไรต่อปี Trailing P/E ใช้กำไรย้อนหลัง 12 เดือน ส่วน Forward P/E ใช้กำไรที่คาดไว้ข้างหน้า",
    w: "P/E สูงไม่ได้แปลว่าแพงเสมอ อาจเพราะตลาดคาดว่ากำไรจะโตเร็ว ควรเทียบกับหุ้นในกลุ่มเดียวกันและอัตราการเติบโต" },
  { id: "forward-pe", c: "earn", t: "Forward P/E", en: "P/E ล่วงหน้า · ใช้กำไรที่คาดไว้",
    d: "P/E ที่ใช้ EPS ซึ่งนักวิเคราะห์คาดไว้ข้างหน้า (มักเป็น 12 เดือนข้างหน้าหรือปีงบถัดไป แล้วแต่แหล่งข้อมูล) แทนกำไรย้อนหลัง คำนวณจากราคาหุ้นหารด้วย EPS ที่คาด ถ้าคาดว่ากำไรจะโต Forward P/E จะต่ำกว่า Trailing P/E",
    w: "หุ้นที่กำไรโตเร็ว เช่น หุ้นเทคและ AI ดู Trailing P/E แล้วอาจดูแพง แต่ Forward P/E บอกว่าถ้ากำไรโตตามคาด ราคาตอนนี้เทียบกับกำไรปีหน้าได้กี่เท่า ข้อควรระวัง: มันมาจากการคาดการณ์ ถ้าบริษัททำกำไรไม่ถึงที่คาด ตัวเลขนี้ก็ต่ำกว่าความจริง และแต่ละเว็บเลือกช่วงเวลาคาดการณ์ไม่เหมือนกัน ตัวเลขเลยไม่ตรงกันเสมอ ดูที่มาทุกครั้ง" },
  { id: "beat-miss", c: "earn", t: "Consensus / Beat / Miss", en: "ค่าคาดการณ์ และผลเทียบกับคาด",
    d: "Consensus คือค่าเฉลี่ยที่นักวิเคราะห์คาดไว้ ถ้าผลจริงสูงกว่าเรียก Beat ต่ำกว่าเรียก Miss ตรงกันเรียก In-line ใช้ได้ทั้งกับงบบริษัทและตัวเลขเศรษฐกิจอย่าง CPI",
    w: "ราคาหุ้นขยับตามว่า <b>เทียบกับที่ตลาดคาด</b> ไม่ใช่แค่กำไรโตหรือไม่โต จึงมีกรณีงบดีแต่หุ้นร่วงได้" },
  { id: "guidance", c: "earn", t: "Guidance", en: "แนวโน้มที่บริษัทประเมินเอง",
    d: "ประมาณการที่บริษัทบอกเองสำหรับไตรมาสหรือปีข้างหน้า เช่น รายได้ กำไร หรือช่วงตัวเลขที่คาดว่าจะทำได้",
    w: "หลายครั้งตลาดสนใจ Guidance มากกว่าผลงบที่ผ่านมาแล้ว เพราะราคาหุ้นมองไปข้างหน้า" },
  { id: "market-cap", c: "earn", t: "Market Cap", en: "มูลค่าตลาด",
    d: "ราคาหุ้น คูณจำนวนหุ้นทั้งหมด เท่ากับมูลค่าตลาดรวมของบริษัท ใช้เทียบขนาดของบริษัท",
    w: "ราคาหุ้นต่อหน่วยสูงไม่ได้แปลว่าบริษัทใหญ่ ต้องดูมูลค่าตลาดรวม" },

  { id: "dr", c: "prod", t: "DR", en: "Depositary Receipt · ใบแสดงสิทธิในหุ้นต่างประเทศ",
    d: "ตราสารที่ออกและซื้อขายในตลาดหลักทรัพย์ไทย (SET) เป็นเงินบาท โดยอ้างอิงหุ้นหรือสินทรัพย์ต่างประเทศ ผู้ออก DR มีหุ้นต้นทางหรือสินทรัพย์อ้างอิงรองรับ ทำให้นักลงทุนไทยเข้าถึงหุ้นต่างประเทศได้ผ่านบัญชีหุ้นไทย",
    w: "ราคา DR มักวิ่งตามหุ้นต้นทาง แต่ <b>ไม่เท่ากันเป๊ะ</b> อาจมีส่วนต่างราคา (Premium/Discount) จากอุปสงค์อุปทานในไทย ค่าเงิน และเวลาซื้อขายที่ต่างกัน สิทธิบางอย่างอาจไม่เหมือนถือหุ้นต้นทางโดยตรง ควรอ่านรายละเอียดของ DR ตัวนั้นก่อนซื้อ ดูรายการ DR ได้ที่ <a href=\"dr.html\">รวม DR</a>" },
  { id: "etf", c: "prod", t: "ETF", en: "Exchange Traded Fund",
    d: "กองทุนที่ซื้อขายในตลาดเหมือนหุ้น แต่ถือสินทรัพย์เป็นตะกร้า เช่น หุ้นหลายตัว ดัชนี หรือทองคำ ซื้อครั้งเดียวได้กระจายไปหลายตัว เช่น ETF ที่ตามดัชนี S&P 500",
    w: "มีค่าธรรมเนียมการจัดการรายปี และแต่ละกองมีนโยบายต่างกัน ดู DR ที่เป็น ETF ได้ที่ <a href=\"dr.html?sector=etf\">รวม DR › กลุ่ม ETF</a>" },

  // ---- ฉบับร่างรอตรวจ (n: 1) ซ่อนจากสมาชิกจนกว่าจะตั้ง TERMS_NEW_LIVE = true ดูก่อนได้ที่ basics.html?preview=1 ----
  { id: "nfp", n: 1, c: "macro", t: "NFP", en: "Nonfarm Payrolls · การจ้างงานนอกภาคเกษตร",
    d: "จำนวนตำแหน่งงานที่เพิ่มหรือลดในเดือนนั้น ไม่นับภาคเกษตร สำนักสถิติแรงงานสหรัฐ (BLS) รายงานพร้อมอัตราว่างงานในรายงานการจ้างงานรายเดือน ซึ่งมักประกาศวันศุกร์แรกของเดือน",
    e: "jobs" },
  { id: "treasury-yield", n: 1, c: "macro", t: "Treasury Yield", en: "ผลตอบแทนพันธบัตรรัฐบาลสหรัฐ",
    d: "อัตราผลตอบแทนที่ผู้ซื้อพันธบัตรรัฐบาลสหรัฐได้รับ ตัวที่คนดูมากคืออายุ 10 ปี เมื่อ Yield ขึ้น ราคาพันธบัตรจะลง (สองอย่างสวนทางกัน) และ Yield มักถูกใช้เป็นฐานของดอกเบี้ยระยะยาวทั่วระบบ",
    w: "Yield ที่สูงขึ้นทำให้ทางเลือกที่ปลอดภัยน่าสนใจขึ้น จึงมักกดดันหุ้น โดยเฉพาะหุ้นที่ราคาขึ้นกับกำไรในอนาคตไกลๆ" },
  { id: "dot-plot", n: 1, c: "macro", t: "Dot Plot", en: "กราฟจุดคาดการณ์ดอกเบี้ยของ Fed",
    d: "กราฟที่แสดงว่ากรรมการ Fed แต่ละคนคาดว่าดอกเบี้ยนโยบายจะอยู่ที่เท่าไรในสิ้นปีต่างๆ จัดทำพร้อมประมาณการเศรษฐกิจ (SEP) ในการประชุมเดือนมีนาคม มิถุนายน กันยายน และธันวาคม",
    e: "dot" },
  { id: "qe-qt", n: 1, c: "macro", t: "QE / QT", en: "Quantitative Easing / Tightening",
    d: "QE คือ Fed ซื้อพันธบัตรเพื่อเพิ่มเงินในระบบและกดดอกเบี้ยระยะยาว ส่วน QT คือการลดขนาดงบดุลของ Fed เช่น ปล่อยให้พันธบัตรครบกำหนดโดยไม่ซื้อใหม่ ซึ่งดึงสภาพคล่องออกจากระบบ",
    w: "ข่าวที่ Fed เริ่มหรือเลิก QE/QT ส่งผลต่อ Yield และราคาสินทรัพย์เสี่ยงได้ นอกเหนือจากการขึ้นลงดอกเบี้ย" },
  { id: "usd-thb", n: 1, c: "macro", t: "USD/THB", en: "อัตราแลกเปลี่ยนดอลลาร์สหรัฐ/บาท",
    d: "ราคาของ 1 ดอลลาร์สหรัฐเป็นเงินบาท เช่น 33 หมายถึง 1 ดอลลาร์ = 33 บาท ตัวเลขสูงขึ้นแปลว่าบาทอ่อนลง",
    w: "คนไทยที่ลงทุนหุ้นสหรัฐ ต้นทุนและกำไรเป็นบาทขึ้นกับทั้งราคาหุ้นและค่าเงิน ส่วน DR ราคาเป็นบาท ค่าเงินก็มีผลต่อส่วนต่างราคากับหุ้นต้นทาง" },
  { id: "recession", n: 1, c: "macro", t: "Recession", en: "ภาวะเศรษฐกิจถดถอย",
    d: "ช่วงที่กิจกรรมทางเศรษฐกิจหดตัวในวงกว้างและต่อเนื่อง คนทั่วไปมักใช้เกณฑ์ง่ายๆ ว่า GDP ติดลบสองไตรมาสติดกัน แต่ในสหรัฐผู้ประกาศอย่างเป็นทางการคือ NBER ซึ่งดูหลายตัวชี้วัดประกอบกัน",
    w: "ตลาดหุ้นมักตอบสนองต่อความกลัวภาวะถดถอยล่วงหน้า ไม่ได้รอให้ประกาศอย่างเป็นทางการ" },

  { id: "gross-margin", n: 1, c: "earn", t: "Gross Margin", en: "อัตรากำไรขั้นต้น",
    d: "รายได้หักต้นทุนขาย แล้วหารด้วยรายได้ บอกว่าขายของ 100 บาทแล้วเหลือกำไรก่อนหักค่าใช้จ่ายอื่นกี่บาท",
    w: "ดูแนวโน้มเทียบกับไตรมาสก่อนและคู่แข่งในกลุ่มเดียวกัน ถ้าลดลงต่อเนื่อง อาจแปลว่าต้นทุนสูงขึ้นหรือแข่งขันด้านราคาหนัก" },
  { id: "fcf", n: 1, c: "earn", t: "Free Cash Flow", en: "กระแสเงินสดอิสระ",
    d: "เงินสดที่ได้จากการดำเนินงาน หักเงินลงทุนในสินทรัพย์ถาวร (CapEx) เป็นเงินสดที่เหลือให้บริษัทจ่ายปันผล ซื้อหุ้นคืน ลดหนี้ หรือขยายธุรกิจ",
    w: "กำไรสุทธิเป็นตัวเลขทางบัญชี ส่วน Free Cash Flow สะท้อนเงินสดจริง จึงควรดูคู่กัน โดยเฉพาะบริษัทที่ลงทุนหนัก เช่น กลุ่มศูนย์ข้อมูลและชิป" },
  { id: "dividend", n: 1, c: "earn", t: "ปันผล และ Dividend Yield", en: "Dividend",
    d: "ปันผลคือส่วนของกำไรที่บริษัทแบ่งให้ผู้ถือหุ้น Dividend Yield คือปันผลต่อปีหารด้วยราคาหุ้น เช่น ปันผลปีละ 2 ดอลลาร์ ราคา 100 ดอลลาร์ ได้ Yield 2%",
    w: "บริษัทไม่จำเป็นต้องจ่ายปันผล หลายบริษัทเติบโตเก็บเงินไว้ลงทุนต่อ และ Yield ที่สูงมากอาจเกิดจากราคาหุ้นตก ไม่ได้แปลว่าดีเสมอ ภาษีและวิธีรับปันผลของ DR กับหุ้นต่างประเทศอาจต่างกัน ควรเช็กรายละเอียดของตัวที่ถือ" },
  { id: "buyback", n: 1, c: "earn", t: "Buyback", en: "การซื้อหุ้นคืน",
    d: "บริษัทใช้เงินสดซื้อหุ้นของตัวเองกลับจากตลาด ทำให้จำนวนหุ้นที่หมุนเวียนลดลง",
    w: "เมื่อกำไรเท่าเดิมแต่จำนวนหุ้นลดลง EPS จะสูงขึ้น เป็นอีกวิธีที่บริษัทตอบแทนผู้ถือหุ้นนอกเหนือจากปันผล" },
  { id: "stock-split", n: 1, c: "earn", t: "Stock Split", en: "การแตกหุ้น",
    d: "บริษัทเพิ่มจำนวนหุ้นและลดราคาต่อหุ้นลงตามสัดส่วน เช่น แตก 10 ต่อ 1 ผู้ถือ 1 หุ้นจะได้ 10 หุ้น ราคาต่อหุ้นลดเหลือประมาณ 1 ใน 10",
    w: "มูลค่าบริษัทไม่ได้เปลี่ยนจากการแตกหุ้นโดยตรง แค่ทำให้ราคาต่อหุ้นต่ำลงและซื้อง่ายขึ้น" },

  { id: "adr", n: 1, c: "prod", t: "ADR", en: "American Depositary Receipt",
    d: "ใบแสดงสิทธิที่ซื้อขายในตลาดสหรัฐ โดยอ้างอิงหุ้นของบริษัทต่างประเทศ ทำให้นักลงทุนสหรัฐซื้อหุ้นบริษัทนอกประเทศได้ในสกุลดอลลาร์",
    w: "อย่าสับสนกับ DR ของไทย ADR ซื้อขายในตลาดสหรัฐเป็นดอลลาร์ ส่วน DR ซื้อขายในตลาดหลักทรัพย์ไทยเป็นบาท" },

  { id: "index", n: 1, c: "mkt", t: "S&P 500 และ Nasdaq-100", en: "ดัชนีหุ้นหลักของสหรัฐ",
    d: "S&P 500 คือดัชนีของบริษัทขนาดใหญ่ในสหรัฐ 500 แห่ง ส่วน Nasdaq-100 คือดัชนีของ 100 บริษัทใหญ่ที่จดทะเบียนใน Nasdaq โดยไม่รวมธุรกิจการเงิน ทั้งสองถ่วงน้ำหนักตามมูลค่าตลาด",
    w: "เพราะถ่วงน้ำหนักตามมูลค่าตลาด บริษัทใหญ่ไม่กี่แห่งจึงมีผลต่อดัชนีมาก ราคาดัชนีเองซื้อขายตรงๆ ไม่ได้ ต้องผ่านกองทุนหรือ ETF ที่ตามดัชนี" },
  { id: "bull-bear", n: 1, c: "mkt", t: "ตลาดกระทิง / ตลาดหมี", en: "Bull Market / Bear Market",
    d: "ตลาดกระทิงคือช่วงที่ราคาหุ้นขึ้นต่อเนื่อง ตลาดหมีคือช่วงราคาลงต่อเนื่อง โดยเกณฑ์ที่นิยมใช้คือราคาลดลงตั้งแต่ 20% จากจุดสูงสุดล่าสุดถือว่าเข้าตลาดหมี",
    w: "เกณฑ์ 20% เป็นธรรมเนียมที่ใช้กันทั่วไป ไม่ใช่กฎตายตัว และไม่มีใครบอกได้ล่วงหน้าว่าตลาดจะอยู่ในช่วงไหนนานแค่ไหน" },
  { id: "vix", n: 1, c: "mkt", t: "VIX", en: "CBOE Volatility Index · ดัชนีความผันผวน",
    d: "ดัชนีที่คำนวณจากราคาออปชันของ S&P 500 สะท้อนว่าตลาดคาดว่าจะผันผวนแค่ไหนในอีก 30 วันข้างหน้า คนจึงเรียกกันว่า \"ดัชนีความกลัว\"",
    w: "VIX สูงแปลว่าตลาดกังวลหรือคาดว่าจะแกว่งแรง VIX ต่ำแปลว่าตลาดสงบ แต่ไม่ได้ทำนายว่าตลาดจะขึ้นหรือลง" },
  { id: "dca", n: 1, c: "mkt", t: "DCA", en: "Dollar-Cost Averaging · ทยอยซื้อเท่าๆ กัน",
    d: "วิธีลงทุนด้วยจำนวนเงินเท่ากันทุกงวด เช่น ทุกเดือน ไม่ว่าราคาจะสูงหรือต่ำ ทำให้ซื้อได้หุ้นมากขึ้นตอนราคาต่ำ และน้อยลงตอนราคาสูง ต้นทุนเฉลี่ยจึงอยู่ระหว่างกลาง",
    w: "ช่วยลดความเสี่ยงจากการเลือกจังหวะซื้อผิดครั้งเดียวและลดการตัดสินใจตามอารมณ์ แต่ไม่ได้รับประกันกำไร และไม่ช่วยถ้าสินทรัพย์ที่ซื้อราคาลดลงถาวร" },

  // ---- ชุดที่ 2 (ฉบับร่างรอตรวจ) ----
  { id: "gdp", n: 1, c: "macro", t: "GDP", en: "Gross Domestic Product · ผลิตภัณฑ์มวลรวมในประเทศ",
    d: "มูลค่ารวมของสินค้าและบริการที่ผลิตได้ในประเทศช่วงหนึ่ง ใช้วัดขนาดและการเติบโตของเศรษฐกิจ สหรัฐประกาศรายไตรมาสโดยสำนักวิเคราะห์เศรษฐกิจ (BEA) โดยเริ่มจากตัวเลขเบื้องต้นแล้วปรับปรุงทีหลัง และข่าวมักรายงานเป็นอัตราต่อปี (annualized) เทียบกับไตรมาสก่อน",
    e: "gdp" },
  { id: "jobless-claims", n: 1, c: "macro", t: "Jobless Claims", en: "ผู้ขอรับสวัสดิการว่างงานรายสัปดาห์",
    d: "จำนวนคนที่ยื่นขอสวัสดิการว่างงานครั้งแรกในสหรัฐแต่ละสัปดาห์ กระทรวงแรงงานสหรัฐประกาศ โดยมักเป็นวันพฤหัสบดี เป็นตัวชี้วัดการเลิกจ้างที่ออกถี่กว่ารายงานจ้างงานรายเดือน",
    e: "claims" },
  { id: "pmi", n: 1, c: "macro", t: "PMI", en: "Purchasing Managers' Index · ดัชนีผู้จัดการฝ่ายจัดซื้อ",
    d: "ดัชนีจากแบบสำรวจผู้จัดการฝ่ายจัดซื้อของบริษัทในภาคการผลิตหรือบริการ ค่าเหนือ 50 หมายถึงภาคนั้นขยายตัว ต่ำกว่า 50 หมายถึงหดตัว มีหลายสำนักจัดทำ เช่น ISM และ S&P Global ตัวเลขจึงต่างกันได้",
    e: "pmi" },
  { id: "dxy", n: 1, c: "macro", t: "DXY", en: "US Dollar Index · ดัชนีค่าเงินดอลลาร์",
    d: "ดัชนีที่วัดค่าเงินดอลลาร์สหรัฐเทียบกับตะกร้า 6 สกุล ได้แก่ ยูโร เยน ปอนด์ ดอลลาร์แคนาดา โครนาสวีเดน และฟรังก์สวิส โดยยูโรมีน้ำหนักมากที่สุด",
    w: "ดอลลาร์แข็งมักกดดันสินทรัพย์เสี่ยงและราคาสินค้าโภคภัณฑ์ แต่บาทไม่ได้อยู่ในตะกร้า ค่าเงินบาทอาจไม่ขยับตาม DXY เสมอไป" },

  { id: "sec-filings", n: 1, c: "earn", t: "10-K / 10-Q / 8-K", en: "เอกสารที่บริษัทสหรัฐยื่นต่อ SEC",
    d: "10-K คือรายงานประจำปีพร้อมงบการเงินที่ผ่านการตรวจสอบ 10-Q คือรายงานรายไตรมาส (ไตรมาสที่ 4 รวมอยู่ใน 10-K) ส่วน 8-K คือรายงานเหตุการณ์สำคัญ เช่น ประกาศผลงบ เปลี่ยนผู้บริหาร หรือซื้อกิจการ ดูได้ฟรีที่เว็บ SEC EDGAR",
    w: "ข่าวสรุปงบมักตัดเหลือแต่ตัวเลขเด่น ถ้าอยากดูรายละเอียด เช่น ความเสี่ยงและคำอธิบายของผู้บริหาร ให้เปิดเอกสารต้นฉบับ" },
  { id: "ebitda", n: 1, c: "earn", t: "EBITDA", en: "กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อม และค่าตัดจำหน่าย",
    d: "ตัวเลขที่ตัดดอกเบี้ย ภาษี และค่าเสื่อมราคากับค่าตัดจำหน่ายออกจากกำไร เพื่อดูความสามารถทำกำไรจากการดำเนินงานหลัก ไม่ใช่ตัวเลขตามมาตรฐานบัญชีและแต่ละบริษัทคำนวณไม่เหมือนกันเป๊ะ",
    w: "EBITDA ไม่ใช่เงินสดจริง ธุรกิจที่ลงทุนหนักควรดู Free Cash Flow ประกอบ" },
  { id: "roe", n: 1, c: "earn", t: "ROE", en: "Return on Equity · ผลตอบแทนต่อส่วนผู้ถือหุ้น",
    d: "กำไรสุทธิหารด้วยส่วนของผู้ถือหุ้น บอกว่าบริษัทสร้างกำไรได้เท่าไรจากเงินของเจ้าของ",
    w: "ROE สูงอาจมาจากธุรกิจดีจริง หรือมาจากการกู้เงินเยอะก็ได้ จึงควรดูคู่กับหนี้สิน" },
  { id: "de", n: 1, c: "earn", t: "D/E", en: "Debt-to-Equity · หนี้สินต่อส่วนผู้ถือหุ้น",
    d: "เปรียบเทียบหนี้สินกับส่วนของผู้ถือหุ้น ยิ่งสูงแปลว่าบริษัทใช้เงินกู้มากกว่าเงินของเจ้าของ",
    w: "ระดับที่ถือว่าปกติต่างกันตามอุตสาหกรรม ต้องเทียบกับบริษัทในกลุ่มเดียวกัน และดูความสามารถจ่ายดอกเบี้ยประกอบ" },
  { id: "pb", n: 1, c: "earn", t: "P/B", en: "Price-to-Book Ratio · ราคาต่อมูลค่าทางบัญชี",
    d: "ราคาหุ้นหารด้วยมูลค่าทางบัญชีต่อหุ้น (สินทรัพย์หักหนี้สิน หารจำนวนหุ้น) ใช้บ่อยกับธุรกิจที่มีสินทรัพย์มาก เช่น ธนาคาร",
    w: "ใช้ได้ไม่ดีกับบริษัทที่มีสินทรัพย์ไม่ตัวตนเป็นหลัก เช่น ซอฟต์แวร์ เพราะมูลค่าส่วนใหญ่ไม่อยู่ในงบดุล" },

  { id: "order-types", n: 1, c: "mkt", t: "Market Order / Limit Order", en: "คำสั่งซื้อขายแบบราคาตลาด / ราคาที่กำหนด",
    d: "Market Order ซื้อหรือขายทันทีที่ราคาตลาดขณะนั้น ส่วน Limit Order ตั้งราคาที่ต้องการ จะจับคู่เมื่อราคาถึงหรือดีกว่าที่ตั้งไว้เท่านั้น",
    w: "Market Order แน่นอนว่าได้ซื้อขาย แต่ราคาอาจต่างจากที่เห็น โดยเฉพาะตอนผันผวนหรือหุ้นซื้อขายน้อย Limit Order คุมราคาได้ แต่อาจไม่ได้ซื้อขายเลย" },
  { id: "trading-hours", n: 1, c: "mkt", t: "เวลาซื้อขายตลาดสหรัฐ", en: "US Trading Hours",
    d: "ช่วงซื้อขายปกติคือ 9:30–16:00 น. เวลานิวยอร์ก ตรงกับ 20:30–03:00 น. เวลาไทยช่วงที่สหรัฐใช้เวลาออมแสง และ 21:30–04:00 น. ช่วงนอกเวลาออมแสง บางโบรกเกอร์เปิดให้ซื้อขายก่อนตลาดเปิดและหลังตลาดปิดด้วย",
    w: "ช่วงก่อนและหลังตลาดมักมีคนซื้อขายน้อย ราคาห่างกันมากกว่าปกติ และวันหยุดตลาดสหรัฐไม่ตรงกับวันหยุดไทย" },
  { id: "settlement", n: 1, c: "mkt", t: "T+1", en: "Settlement · การชำระราคาและส่งมอบ",
    d: "ตลาดหุ้นสหรัฐชำระราคาและส่งมอบหุ้นภายใน 1 วันทำการหลังซื้อขาย (T+1) ตั้งแต่ปลายเดือนพฤษภาคม 2024 ก่อนหน้านั้นเป็น T+2",
    w: "วันที่เงินและหุ้นเข้าบัญชีจริงของแต่ละคนขึ้นกับโบรกเกอร์และเวลาทำการของทั้งสองประเทศ ควรเช็กกับโบรกเกอร์ที่ใช้" },
  { id: "ipo", n: 1, c: "mkt", t: "IPO", en: "Initial Public Offering · การเสนอขายหุ้นต่อประชาชนครั้งแรก",
    d: "การที่บริษัทเอกชนเสนอขายหุ้นให้ประชาชนทั่วไปเป็นครั้งแรกและเข้าจดทะเบียนในตลาดหลักทรัพย์",
    w: "ข้อมูลบริษัทที่เพิ่งเข้าตลาดมีประวัติให้ดูน้อย และราคาช่วงแรกมักผันผวนมาก" },
  { id: "diversification", n: 1, c: "mkt", t: "การกระจายความเสี่ยง", en: "Diversification",
    d: "การแบ่งเงินลงทุนไปหลายบริษัท หลายอุตสาหกรรม หรือหลายสินทรัพย์ เพื่อไม่ให้ผลลัพธ์ขึ้นกับสิ่งเดียว",
    w: "ช่วยลดความเสี่ยงเฉพาะตัวของบริษัท แต่ไม่ได้ขจัดความเสี่ยงที่ตลาดทั้งตลาดลงพร้อมกัน และถือหุ้นหลายตัวที่ธุรกิจเหมือนกันก็ยังไม่ถือว่ากระจายจริง" },
  { id: "margin", n: 1, c: "mkt", t: "Margin", en: "การซื้อด้วยเงินกู้จากโบรกเกอร์",
    d: "การยืมเงินจากโบรกเกอร์มาซื้อหุ้นเพิ่มเกินเงินที่มี โดยใช้หุ้นที่ถือเป็นหลักประกัน ทำให้ทั้งกำไรและขาดทุนขยายใหญ่ขึ้น",
    w: "ถ้าราคาลงจนหลักประกันไม่พอ โบรกเกอร์อาจเรียกเงินเพิ่ม (Margin Call) หรือบังคับขาย และขาดทุนอาจมากกว่าเงินที่ลงไป ต้องดูเงื่อนไขของโบรกเกอร์ให้ชัด" },
  { id: "compounding", n: 1, c: "mkt", t: "ผลตอบแทนทบต้น", en: "Compounding",
    d: "ผลตอบแทนที่ได้ถูกนำไปลงทุนต่อ ทำให้รอบถัดไปได้ผลตอบแทนจากทั้งเงินต้นและผลตอบแทนที่สะสม ตัวอย่างสมมติ ผลตอบแทน 7% ต่อปีเป็นเวลา 10 ปี เงินจะเพิ่มเป็นประมาณ 1.97 เท่า",
    w: "เป็นตัวอย่างคำนวณเท่านั้น ไม่ได้รับประกันผลตอบแทน ของจริงขึ้นลงทุกปี และเวลาที่ถือนานช่วยให้ผลทบต้นชัดขึ้น" }
];

// ศัพท์ที่สมาชิกเห็น: ฉบับร่าง (n: 1) จะโผล่เมื่อ TERMS_NEW_LIVE = true หรือเปิดดูแบบ preview ที่ basics.html?preview=1
// เปิดให้สมาชิกเห็นทุกคำใหม่: เปลี่ยน false เป็น true บรรทัดล่างแล้วรัน sh bump-version.sh
window.TERMS_NEW_LIVE = true;
window.termsShown = function (preview) { return window.TERMS.filter(function (x) { return !x.n || window.TERMS_NEW_LIVE || preview; }); };

// ===== ศัพท์เด้งในบทความ: termTips(el) =====
// ไฮไลต์คำศัพท์ในข้อความ (เฉพาะครั้งแรกของแต่ละคำ) แตะหรือชี้แล้วมีคำอธิบายสั้น ๆ เด้ง ดึงจาก TERMS ข้างบน
// เพิ่มคำที่อยากให้จับ: ใส่ในรายการ TERM_MATCH ด้านล่าง (id ต้องตรงกับ TERMS) ข้อความภาษาอังกฤษแยกตัวพิมพ์เล็ก/ใหญ่
// คำที่ไม่ใส่ไว้ (เช่น Revenue, Beat, Miss, Margin เดี่ยว ๆ) ตั้งใจเว้น เพราะเป็นคำทั่วไป จับผิดที่ง่าย
window.TERM_MATCH = {
  "inflation": ["เงินเฟ้อ", "Inflation"],
  "cpi": ["CPI"],
  "core-cpi": ["Core CPI"],
  "ppi": ["PPI", "Core PPI"],
  "pce": ["PCE", "Core PCE"],
  "yoy": ["YoY", "MoM", "QoQ"],
  "fomc": ["FOMC"],
  "fed-funds": ["ดอกเบี้ยนโยบาย", "Fed Funds Rate", "Federal Funds Rate"],
  "hawk-dove": ["Hawkish", "Dovish"],
  "fedwatch": ["FedWatch", "CME FedWatch"],
  "revenue-profit": ["กำไรสุทธิ", "Net Income"],
  "eps": ["EPS"],
  "pe": ["P/E", "Trailing P/E"],
  "forward-pe": ["Forward P/E", "Fwd P/E"],
  "beat-miss": ["Consensus"],
  "guidance": ["Guidance"],
  "market-cap": ["Market Cap", "มูลค่าตลาด"],
  "dr": ["DR"],
  "etf": ["ETF"],
  "nfp": ["NFP", "Nonfarm Payrolls"],
  "treasury-yield": ["Treasury Yield"],
  "dot-plot": ["Dot Plot"],
  "qe-qt": ["QE", "QT"],
  "usd-thb": ["USD/THB"],
  "recession": ["Recession", "ภาวะถดถอย", "เศรษฐกิจถดถอย"],
  "gross-margin": ["Gross Margin"],
  "fcf": ["Free Cash Flow", "FCF"],
  "dividend": ["Dividend Yield", "ปันผล"],
  "buyback": ["Buyback", "ซื้อหุ้นคืน"],
  "stock-split": ["Stock Split", "แตกหุ้น"],
  "adr": ["ADR"],
  "index": ["S&P 500", "Nasdaq-100"],
  "bull-bear": ["Bull Market", "Bear Market", "ตลาดกระทิง", "ตลาดหมี"],
  "vix": ["VIX"],
  "dca": ["DCA"],
  "gdp": ["GDP"],
  "jobless-claims": ["Jobless Claims"],
  "pmi": ["PMI"],
  "dxy": ["DXY"],
  "sec-filings": ["10-K", "10-Q", "8-K"],
  "ebitda": ["EBITDA"],
  "roe": ["ROE"],
  "de": ["D/E"],
  "pb": ["P/B"],
  "order-types": ["Market Order", "Limit Order"],
  "settlement": ["T+1"],
  "ipo": ["IPO"],
  "diversification": ["การกระจายความเสี่ยง"],
  "margin": ["Margin Call", "มาร์จิน"],
  "compounding": ["ดอกเบี้ยทบต้น", "ผลตอบแทนทบต้น", "Compounding"]
};

window.termTips = function (root) {
  if (!root || !window.TERMS || !window.termsShown) return;
  if (!(window.SITE && SITE.basicsLive)) return;   // ปลายทางลิงก์คือ basics.html ถ้ายังไม่เปิดก็ไม่ทำ
  if (root.getAttribute("data-tt-done")) return; root.setAttribute("data-tt-done", "1");

  var shown = {}; window.termsShown(false).forEach(function (t) { shown[t.id] = t; });
  var map = {}, words = [];
  Object.keys(window.TERM_MATCH).forEach(function (id) {
    if (!shown[id]) return;
    window.TERM_MATCH[id].forEach(function (w) { if (!map[w]) { map[w] = id; words.push(w); } });
  });
  if (!words.length) return;
  words.sort(function (a, b) { return b.length - a.length; });   // คำยาวก่อน เช่น Core CPI ก่อน CPI
  var re = new RegExp(words.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }).join("|"), "g");
  var isAscii = function (ch) { return !!ch && /[A-Za-z0-9]/.test(ch); };

  var used = {}, nodes = [], tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
  while ((n = tw.nextNode())) { if (!n.parentNode.closest("a, button, .tt")) nodes.push(n); }

  nodes.forEach(function (node) {
    var s = node.nodeValue, last = 0, m, frag = null;
    re.lastIndex = 0;
    while ((m = re.exec(s))) {
      var w = m[0], id = map[w], st = m.index, en = st + w.length;
      var asciiEdge = /^[A-Za-z0-9]/.test(w) || /[A-Za-z0-9+]$/.test(w);
      if (asciiEdge && (/^[A-Za-z0-9]/.test(w) && isAscii(s.charAt(st - 1)) || /[A-Za-z0-9]$/.test(w) && isAscii(s.charAt(en)))) continue;   // อยู่กลางคำอังกฤษ เช่น ADR ไม่ใช่ DR
      if (used[id]) continue;
      used[id] = 1;
      if (!frag) frag = document.createDocumentFragment();
      if (st > last) frag.appendChild(document.createTextNode(s.slice(last, st)));
      var sp = document.createElement("span");
      sp.className = "tt"; sp.tabIndex = 0; sp.setAttribute("role", "button"); sp.setAttribute("aria-expanded", "false");
      sp.setAttribute("data-term", id); sp.textContent = w;
      frag.appendChild(sp); last = en;
    }
    if (frag) { if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last))); node.parentNode.replaceChild(frag, node); }
  });
  if (!root.querySelector(".tt")) return;

  if (!document.getElementById("tt-style")) {
    var css = document.createElement("style"); css.id = "tt-style";
    css.textContent =
      ".tt{border-bottom:1.5px dotted var(--accent,#1f4fa8);cursor:help;border-radius:2px}" +
      ".tt:hover,.tt[aria-expanded=true]{background:var(--accent-soft,#e3ebfa)}" +
      ".tt:focus-visible{outline:2px solid var(--accent,#1f4fa8);outline-offset:2px}" +
      "#tt-pop{position:absolute;z-index:9999;width:min(340px,calc(100vw - 24px));max-height:60vh;overflow:auto;box-sizing:border-box;" +
      "background:var(--surface,#fff);color:var(--ink,#14213d);border:1px solid var(--line,#dde3ef);border-radius:12px;" +
      "box-shadow:0 10px 30px rgba(15,30,70,.22);padding:12px 14px;font-size:.92rem;line-height:1.6;white-space:normal}" +
      "#tt-pop[hidden]{display:none}" +
      "#tt-pop .tt-h{font-weight:700;margin:0}" +
      "#tt-pop .tt-en{color:var(--muted,#5b6982);font-size:.8rem;margin:0 0 6px}" +
      "#tt-pop .tt-d{margin:0}" +
      "#tt-pop a{color:var(--accent,#1f4fa8)}" +
      "#tt-pop .tt-more{display:inline-block;margin-top:8px;font-weight:600}";
    document.head.appendChild(css);
  }
  var pop = document.getElementById("tt-pop");
  if (!pop) {
    pop = document.createElement("div"); pop.id = "tt-pop"; pop.hidden = true; pop.setAttribute("role", "dialog");
    document.body.appendChild(pop);
  }
  var cur = null, hideT = null, showT = null;
  var close = function () { clearTimeout(hideT); clearTimeout(showT); pop.hidden = true; if (cur) cur.setAttribute("aria-expanded", "false"); cur = null; };
  var place = function (el) {
    var r = el.getBoundingClientRect(), sx = window.pageXOffset, sy = window.pageYOffset, vw = document.documentElement.clientWidth;
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var left = Math.max(12, Math.min(r.left + sx, sx + vw - pw - 12));
    var below = r.bottom + 8 + ph <= window.innerHeight || r.top - 8 - ph < 0;
    pop.style.left = left + "px";
    pop.style.top = (below ? r.bottom + sy + 8 : r.top + sy - ph - 8) + "px";
  };
  var open = function (el) {
    clearTimeout(hideT); clearTimeout(showT);
    var t = shown[el.getAttribute("data-term")]; if (!t) return;
    if (cur && cur !== el) cur.setAttribute("aria-expanded", "false");
    cur = el; el.setAttribute("aria-expanded", "true");
    pop.setAttribute("aria-label", t.t);
    pop.innerHTML = '<p class="tt-h"></p><p class="tt-en"></p><p class="tt-d">' + t.d + '</p><a class="tt-more" href="basics.html#' + t.id + '">อ่านเพิ่มที่ความรู้พื้นฐาน ›</a>';
    pop.firstChild.textContent = t.t; pop.children[1].textContent = t.en || ""; if (!t.en) pop.children[1].hidden = true;
    pop.hidden = false; place(el);
  };
  var canHover = window.matchMedia && matchMedia("(hover: hover)").matches;
  root.addEventListener("click", function (e) {
    var el = e.target.closest(".tt"); if (!el) return;
    e.preventDefault(); if (cur === el && !pop.hidden) close(); else open(el);
  });
  root.addEventListener("keydown", function (e) {
    var el = e.target.closest && e.target.closest(".tt");
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); if (cur === el && !pop.hidden) close(); else open(el); }
  });
  if (canHover) {
    root.addEventListener("mouseover", function (e) { var el = e.target.closest(".tt"); if (!el || el === cur) return; clearTimeout(hideT); clearTimeout(showT); showT = setTimeout(function () { open(el); }, 180); });
    root.addEventListener("mouseout", function (e) { if (e.target.closest(".tt")) { clearTimeout(showT); hideT = setTimeout(close, 250); } });
    pop.addEventListener("mouseenter", function () { clearTimeout(hideT); });
    pop.addEventListener("mouseleave", function () { hideT = setTimeout(close, 250); });
  }
  document.addEventListener("click", function (e) { if (!pop.hidden && !e.target.closest(".tt") && !e.target.closest("#tt-pop")) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  window.addEventListener("scroll", function () { if (cur && !pop.hidden) place(cur); }, { passive: true });
  window.addEventListener("resize", function () { if (cur && !pop.hidden) place(cur); });
};
