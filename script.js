/* =====================================================
   단양 육포 공방 (가칭) — script.js

   ★ 초보자는 이 파일의 맨 위 SITE_CONFIG 만 수정하면 됩니다. ★
   ===================================================== */
const SITE_CONFIG = {

  /* ---- 1) 네이버 스마트스토어 주소 ----
     "SMARTSTORE_URL_HERE" 를 실제 주소(https://...)로 바꾸세요.
     - main : 페이지 하단 '스마트스토어에서 구매하기' 및 푸터 링크 (스토어 홈 또는 대표 상품)
     - 나머지 : 제품별 상품 페이지. 제품별 주소가 없으면 비워두지 말고 main 과 같은 주소를 넣어도 됩니다.
     주소를 바꾸지 않으면 버튼은 "준비 중"으로 비활성 표시됩니다. (가짜 링크를 만들지 않기 위함) */
  smartstore: {
    main: "SMARTSTORE_URL_HERE",
    garlic: "SMARTSTORE_URL_HERE",
    chili: "SMARTSTORE_URL_HERE",
    blackgarlic: "SMARTSTORE_URL_HERE"
  },

  /* ---- 2) 제품별 판매 상태 / 가격 ----
     status : "dev"(개발 중) | "soon"(출시 예정) | "selling"(판매 중)
     price  : 확정된 가격만 문자열로 입력. 예) "100g 12,000원"  (비워두면 '가격 확정 전' 표시)
     ※ 실제 판매 가격은 확인 후 입력하세요. 할인율·정상가 등은 만들지 마세요. */
  products: {
    garlic:      { status: "dev", price: "" },
    chili:       { status: "dev", price: "" },
    blackgarlic: { status: "dev", price: "" }
  },

  /* ---- 3) 푸터 링크 (없으면 그대로 두세요. 비활성 표시됩니다) ---- */
  links: {
    inquiry:  "INQUIRY_URL_HERE",   // 고객 문의 (예: 스마트스토어 톡톡 주소, 이메일 mailto:...)
    shipping: "SHIPPING_URL_HERE",  // 배송·교환·반품 안내
    privacy:  "PRIVACY_URL_HERE"    // 개인정보처리방침
  },

  /* ---- 4) 유튜브 ---- */
  youtubeId: "towDFfNBwXc",  // 대표 소개 영상 ID
  channelUrl: "https://www.youtube.com/@MANGMOOGANGRYEOL/videos",

  /* 영상을 추가하려면 아래에 한 줄씩 넣으세요.
     예) { title: "맛평가 현장 기록", id: "유튜브영상ID" }
     (유튜브 주소 youtu.be/ 뒤의 11자리가 ID입니다) */
  videos: [
    // { title: "제품 개발 과정", id: "" },
  ]
};

/* ===================== 아래는 수정하지 않아도 됩니다 ===================== */
(function () {
  "use strict";

  /* 주소 검사: "SMARTSTORE_URL_HERE" 같은 자리표시자나 잘못된 주소는 '미등록'으로 처리합니다. */
  const parseUrl = (u) => { try { return new URL(String(u).trim()); } catch (e) { return null; } };
  const isRealUrl = (u) => {
    if (typeof u !== "string" || /HERE|example\.|여러분/i.test(u)) return false;
    const x = parseUrl(u);
    if (!x) return false;
    if (x.protocol === "mailto:" || x.protocol === "tel:") return true;
    return x.protocol === "https:" && x.hostname.indexOf(".") > 0; // https 주소만 인정
  };
  /* 구매 버튼은 네이버 주소(smartstore/brand/shopping.naver.com, naver.me 단축주소)만 인정합니다.
     [수정] 다른 도메인을 써야 하면 아래 목록에 추가하세요. */
  const STORE_HOSTS = [/(^|\.)naver\.com$/i, /^naver\.me$/i];
  const isStoreUrl = (u) => {
    if (!isRealUrl(u)) return false;
    const x = parseUrl(u);
    const ok = x && STORE_HOSTS.some((r) => r.test(x.hostname));
    if (!ok && typeof console !== "undefined") console.warn("[구매 링크 무시됨] 네이버 주소가 아닙니다:", u);
    return ok;
  };
  const STATUS = {
    dev:     { text: "개발 중",   cls: "" },
    soon:    { text: "출시 예정", cls: "soon" },
    selling: { text: "판매 중",   cls: "selling" }
  };

  /* '판매 중(selling)'이면서 그 제품의 스마트스토어 주소도 유효한 제품이 하나라도 있어야
     첫 화면·하단 바·맨 아래의 '스마트스토어에서 구매하기'가 실제 구매 링크로 바뀝니다.
     (스토어 주소만 먼저 넣고 제품이 아직 '개발 중'이면 구매 가능한 것처럼 보이지 않게 하기 위함) */
  const anySelling = Object.keys(SITE_CONFIG.products).some((k) =>
    SITE_CONFIG.products[k].status === "selling" && isStoreUrl(SITE_CONFIG.smartstore[k]));
  const storeLive = anySelling && isStoreUrl(SITE_CONFIG.smartstore.main);

  /* --- 제품 카드: 상태, 가격 --- */
  document.querySelectorAll("[data-product]").forEach((card) => {
    const conf = SITE_CONFIG.products[card.dataset.product] || { status: "dev", price: "" };
    let st = STATUS[conf.status] || STATUS.dev;
    // '판매 중'으로 설정했는데 구매 주소가 없으면 판매 중이라고 표시하지 않습니다.
    if (conf.status === "selling" && !isStoreUrl(SITE_CONFIG.smartstore[card.dataset.product])) {
      st = { text: "판매 준비 중", cls: "soon" };
      console.warn("[확인 필요] '" + card.dataset.product + "' 가 selling 이지만 스마트스토어 주소가 없어 '판매 준비 중'으로 표시합니다.");
    }
    const badge = card.querySelector("[data-status]");
    if (badge) { badge.textContent = st.text; badge.className = "badge " + st.cls; }
    const price = card.querySelector("[data-price]");
    if (price) price.textContent = conf.price && conf.price.trim() ? conf.price : "가격 확정 전";
  });

  /* --- 구매 버튼: 실제 URL일 때만 활성화 --- */
  function setPending(el, text) {
    el.classList.add("is-pending");
    el.removeAttribute("href");
    el.removeAttribute("target");
    el.setAttribute("aria-disabled", "true");
    el.textContent = text;
  }
  document.querySelectorAll("[data-store]").forEach((btn) => {
    const key = btn.dataset.store;
    const card = btn.closest("[data-product]");
    const conf = card ? (SITE_CONFIG.products[card.dataset.product] || {}) : null;
    const url = (key === "main" && !storeLive) ? "" : SITE_CONFIG.smartstore[key];
    const label = btn.dataset.label || btn.textContent;
    const fallback = btn.dataset.fallback; // 주소 입력 전 대체 동작(제품 섹션으로 이동)
    const detail = btn.dataset.detail;     // 히어로 제품 선택 카드: 판매 전에는 상세 보기로 연결

    // 제품 카드: 판매 중이 아니거나(또는 판매 중이어도 이 제품의 구매 주소가 없으면)
    if (conf && (conf.status !== "selling" || !isStoreUrl(url))) {
      if (detail) {
        // 히어로의 제품 선택 카드는 죽은 버튼 대신 '제품 자세히 보기'로 연결
        btn.href = detail;
        btn.textContent = "제품 자세히 보기";
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-ghost");
        return;
      }
      setPending(btn, conf.status === "soon" ? "출시 예정" : "개발 중 · 판매 준비 중");
      return;
    }
    if (isStoreUrl(url)) {
      btn.href = url.trim();
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.textContent = label;
      btn.classList.remove("is-pending");
    } else if (fallback) {
      // 스마트스토어 주소가 아직 없으면 '육포 만나보기'(제품 섹션 이동)로 동작
      btn.href = "#products";
      btn.removeAttribute("target");
      btn.textContent = fallback;
    } else {
      setPending(btn, "판매 준비 중");
    }
  });

  /* --- 모바일 하단 구매바: 히어로 버튼이 보이거나 최종 구매 영역이 보이면 숨김 --- */
  const bar = document.getElementById("buybar");
  const heroBtns = document.querySelector(".hero-actions");
  const finalCta = document.querySelector(".final-cta");
  // 실제 구매 링크가 없으면 하단 바 자체를 쓰지 않습니다. (같은 화면의 제품 섹션을 가리키는 쓸모없는 바가 됨)
  if (bar && storeLive) document.body.classList.add("has-buybar");
  else if (bar) bar.style.display = "none";
  if (bar && storeLive && heroBtns && finalCta && "IntersectionObserver" in window) {
    let a = false, b = false;
    const update = () => bar.classList.toggle("show", !a && !b);
    new IntersectionObserver((es) => { es.forEach((e) => {
      if (e.target === heroBtns) a = e.isIntersecting; else b = e.isIntersecting;
    }); update(); }).observe(heroBtns);
    new IntersectionObserver((es) => { es.forEach((e) => { b = e.isIntersecting; }); update(); }).observe(finalCta);
  }

  // 최종 CTA 아래 안내
  const note = document.getElementById("ctaNote");
  if (note && !storeLive) {
    note.textContent = "※ 판매 준비 중입니다. 출시되면 이곳에서 구매하실 수 있습니다.";
  }

  /* --- 푸터 링크 --- */
  document.querySelectorAll("[data-link]").forEach((a) => {
    const key = a.dataset.link;
    const url = key === "main" ? (storeLive ? SITE_CONFIG.smartstore.main : "") : SITE_CONFIG.links[key];
    if (key === "main" ? isStoreUrl(url) : isRealUrl(url)) {
      a.href = url.trim();
      if (/^https?:/i.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    } else {
      a.classList.add("is-pending");
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.title = "준비 중";
    }
  });

  /* --- 모바일 메뉴 --- */
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
  }
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  document.addEventListener("click", (e) => { if (!nav.contains(e.target) && !toggle.contains(e.target)) closeNav(); });

  /* --- 유튜브: 클릭하면 재생 (평소엔 가벼운 썸네일만 로드) --- */
  const frame = document.getElementById("videoFrame");
  const playBtn = document.getElementById("videoPlay");
  const vid = SITE_CONFIG.youtubeId;
  if (frame && playBtn && vid) {
    // 썸네일: 로딩에 실패하면 어두운 배경 + '소개 영상' 라벨이 그대로 보임
    const thumb = new Image();
    thumb.onload = () => { playBtn.style.backgroundImage = 'url("' + thumb.src + '")'; };
    thumb.src = "https://i.ytimg.com/vi/" + vid + "/hqdefault.jpg";
    playBtn.addEventListener("click", () => {
      const f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + vid + "?autoplay=1&rel=0";
      f.title = "소개 영상";
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      frame.replaceChildren(f);
    });
    const link = document.getElementById("videoLink");
    if (link) link.href = "https://youtu.be/" + vid;
  }
  const ch = document.getElementById("channelLink");
  if (ch && isRealUrl(SITE_CONFIG.channelUrl)) ch.href = SITE_CONFIG.channelUrl;

  /* --- 영상 추가 목록 --- */
  const more = document.getElementById("videoMore");
  const extra = (SITE_CONFIG.videos || []).filter((v) => v && v.id);
  if (more && extra.length) {
    more.replaceChildren();
    extra.forEach((v) => {
      const a = document.createElement("a");
      a.className = "video-card";
      a.href = "https://youtu.be/" + encodeURIComponent(v.id);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      const img = document.createElement("img");
      img.src = "https://i.ytimg.com/vi/" + encodeURIComponent(v.id) + "/mqdefault.jpg";
      img.alt = "";
      img.loading = "lazy";
      const s = document.createElement("span");
      s.textContent = v.title || "영상 보기";
      a.append(img, s);
      more.append(a);
    });
  }

  /* --- 연도 --- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
