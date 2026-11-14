/* PN | Google Değerlendirmeleri v1.2 (10 Kas 2026: site yorumlarının altına, sayfalamadan sonra) · kaynak ~/pestil-net/gtm/10-google-yorumlari.html · yalnız /pages/gercek-musteri-yorumlari */
/* GTM etiket 246 (PN | Google Değerlendirmeleri (yorumlar sayfası)) - dis dosya. Tetikleyiciler GTM'de kalir. */
(function (w, d) {
  var CFG = {
    PATH_RX: /^\/pages\/gercek-musteri-yorumlari\/?$/i,
    FEED: 'https://script.google.com/macros/s/AKfycbzVdpAXowoh-vOv5g-JJY3vU5KVrwzfBwFABpEg0_NG8JMdk5SNx9Sf82aHIxTXjVgJ/exec',
    CID: '3251387423040318217',
    PLACE_ID: 'ChIJjwS7DcjSekARCat9eaI_Hy0',
    MIN_STARS: 4,
    MIN_LEN: 20,
    MAX: 12,
    ONCE: /pestil|köme|kome|sucuk|lezzet|tadı|tadi|taze|sipariş|siparis|kargo|ürün|urun|paket|kutu|hediye/i,
    FOTO: true,
    MAX_AGE: 72 * 3600 * 1000,
    TITLE: 'Google Değerlendirmelerimiz',
    DESC: 'Şiran\'daki mağazamıza uğrayan ve sipariş veren misafirlerimizden.',
    CACHE_KEY: 'pn_gy_v1'
  };
  if (!CFG.PATH_RX.test(location.pathname)) return;
  var ID = 'pn-gy', TUM = 'https://search.google.com/local/reviews?placeid=' + CFG.PLACE_ID;

  var S = w.__pnGy;
  if (!S) {
    S = w.__pnGy = {};
    var css = d.createElement('style');
    css.id = ID + '-css';
    css.textContent = [
      '#pn-gy{--gy-star:#f2b705;--gy-line:#ece6de;--gy-ink:#231a16;--gy-text:#3d3532;--gy-muted:#7a706a;--gy-brown:#50271c;margin:48px 0 0;padding:40px 0 0;border-top:1px solid var(--gy-line);color:var(--gy-text)}',
      '#pn-gy [hidden]{display:none!important}#pn-gy a{color:inherit;text-decoration:none}',
      '#pn-gy .gy-ust{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin:0 0 16px}',
      '#pn-gy h2{font-size:24px;line-height:1.25;font-weight:700;color:var(--gy-ink);margin:0 0 4px;letter-spacing:-.01em}',
      '#pn-gy .gy-ust p{font-size:14px;color:var(--gy-muted);margin:0}',
      '#pn-gy .gy-tum{flex:0 0 auto;font-size:13.5px;font-weight:600;color:var(--gy-ink);border-bottom:1.5px solid var(--gy-brown);padding-bottom:4px;white-space:nowrap}',
      '#pn-gy .gy-arac{display:flex;align-items:center;justify-content:space-between;gap:12px;height:36px;margin:0 0 16px}',
      '#pn-gy .gy-puan{display:flex;align-items:center;gap:10px;min-width:0}',
      '#pn-gy .gy-g{width:22px;height:22px;flex:0 0 auto}',
      '#pn-gy .gy-puan b{font-size:24px;line-height:1;font-weight:700;color:var(--gy-ink)}',
      '#pn-gy .gy-yz{color:var(--gy-star);font-size:18px;letter-spacing:1px;line-height:1;white-space:nowrap}',
      '#pn-gy .gy-say{font-size:13px;color:var(--gy-text);text-decoration:underline;text-underline-offset:3px;white-space:nowrap}',
      '#pn-gy .gy-ok{display:flex;gap:8px}',
      '#pn-gy .gy-ok button{width:36px;height:36px;border:1px solid #ddd5cb;border-radius:50%;background:#fff;color:var(--gy-ink);font:inherit;font-size:18px;line-height:1;cursor:pointer;padding:0;transition:border-color .2s,color .2s}',
      '#pn-gy .gy-ok button:hover{border-color:var(--gy-brown);color:var(--gy-brown)}#pn-gy .gy-ok button:disabled{opacity:.35;cursor:default}',
      '#pn-gy .gy-list{display:flex;gap:16px;height:404px;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;padding:2px 1px 12px;margin:0}',
      '#pn-gy .gy-list::-webkit-scrollbar{display:none}',
      '#pn-gy .gy-k{display:flex;flex-direction:column;flex:0 0 calc((100% - 48px)/4);min-width:250px;height:390px;background:#fff;border:1px solid var(--gy-line);border-radius:14px;padding:18px;scroll-snap-align:start;overflow:hidden}',
      '#pn-gy .gy-sk{background:linear-gradient(90deg,#f6efe6 25%,#fbf6ef 50%,#f6efe6 75%);background-size:200% 100%;animation:pnGySk 1.2s infinite;border:0}',
      '@keyframes pnGySk{to{background-position:-200% 0}}',
      '#pn-gy .gy-kim{display:flex;align-items:center;gap:10px;min-height:42px;margin:0 0 12px}',
      '#pn-gy .gy-av{position:relative;flex:0 0 auto;width:40px;height:40px;border-radius:50%;overflow:hidden;background:#efe6da;color:var(--gy-brown);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}',
      '#pn-gy .gy-av img{position:absolute;inset:0;width:40px;height:40px;object-fit:cover;margin:0}',
      '#pn-gy .gy-ad{display:block;font-size:14px;font-weight:700;color:var(--gy-ink);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '#pn-gy time{display:block;font-size:12px;color:var(--gy-muted);margin-top:2px}',
      '#pn-gy .gy-kim > span:nth-child(2){min-width:0;flex:1}',
      '#pn-gy .gy-t{flex:0 1 auto;min-height:0;font-size:14px;line-height:1.6;color:var(--gy-text);white-space:pre-line;overflow-wrap:anywhere;margin:10px 0 2px}',
      '#pn-gy .gy-t.kapali{display:-webkit-box;-webkit-line-clamp:8;-webkit-box-orient:vertical;overflow:hidden}',
      '#pn-gy .gy-fotolu .gy-t.kapali{-webkit-line-clamp:3}',
      '#pn-gy .gy-t.acik{overflow-y:auto;overscroll-behavior:contain;padding-right:4px}',
      '#pn-gy .gy-dev{flex:0 0 auto;align-self:flex-start;border:0;background:none;color:var(--gy-muted);font:inherit;font-size:12px;text-decoration:underline;padding:0;margin:2px 0 6px;cursor:pointer}',
      '#pn-gy .gy-f{position:relative;display:block;flex:0 0 auto;margin:10px 0 0;border-radius:10px;overflow:hidden;background:#f3ece3;aspect-ratio:16/9}',
      '#pn-gy .gy-f img{display:block;width:100%;height:100%;object-fit:cover;margin:0}',
      '#pn-gy .gy-f span{position:absolute;right:7px;bottom:7px;background:rgba(35,26,22,.72);color:#fff;font-size:11px;line-height:1;padding:5px 6px;border-radius:5px}',
      '#pn-gy .gy-inc{margin-top:auto;padding-top:12px;font-size:12px;color:var(--gy-muted)}#pn-gy .gy-inc:hover{color:var(--gy-brown)}',
      '#pn-gy .gy-not{font-size:11px;line-height:17px;min-height:17px;color:#9a918b;margin:4px 0 0}',
      '#pn-gy :focus-visible{outline:2px solid var(--gy-brown);outline-offset:3px}',
      '@media (max-width:900px){#pn-gy .gy-k{flex-basis:calc((100% - 32px)/3)}}',
      '@media (max-width:600px){#pn-gy{margin:40px 0 0;padding:32px 0 0}#pn-gy .gy-ust{flex-direction:column;align-items:flex-start;gap:10px}#pn-gy h2{font-size:20px}#pn-gy .gy-ust p{font-size:13px}',
      '#pn-gy .gy-tum{font-size:13px}#pn-gy .gy-puan{gap:7px}#pn-gy .gy-puan b{font-size:21px}#pn-gy .gy-yz{font-size:15px}#pn-gy .gy-say{font-size:12px}',
      '#pn-gy .gy-ok{display:none}#pn-gy .gy-list{gap:12px;margin:0 -16px;padding:2px 16px 12px;scroll-padding:0 16px}#pn-gy .gy-k{flex-basis:84%;min-width:0;padding:16px}}',
      '@media (max-width:370px){#pn-gy .gy-g{display:none}}',
      '@media (prefers-reduced-motion:reduce){#pn-gy .gy-sk{animation:none}}'
    ].join('');
    d.head.appendChild(css);

    var G = '<svg class="gy-g" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.2z"/><path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.8-12.3-9H4.4v5.7C8 41.1 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.7 28.3c-.4-1.3-.7-2.8-.7-4.3s.3-2.9.7-4.3V14H4.4C2.9 17 2 20.4 2 24s.9 7 2.4 10z"/><path fill="#EA4335" d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 8 6.9 4.4 14l7.3 5.7c1.7-5.2 6.6-8.9 12.3-8.9z"/></svg>';
    var el = S.el = d.createElement('div');
    el.id = ID;
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Google değerlendirmeleri');
    el.innerHTML =
      '<div class="gy-ust"><div><h2>' + esc(CFG.TITLE) + '</h2><p>' + esc(CFG.DESC) + '</p></div>' +
        '<a class="gy-tum" href="' + TUM + '" target="_blank" rel="noopener">Tüm değerlendirmeleri gör ↗</a></div>' +
      '<div class="gy-arac"><div class="gy-puan">' + G + '<b data-p hidden></b><span class="gy-yz" data-y hidden></span>' +
        '<a class="gy-say" data-s href="' + TUM + '" target="_blank" rel="noopener">Google değerlendirmeleri</a></div>' +
        '<div class="gy-ok" data-ok hidden><button type="button" data-geri aria-label="Önceki yorumlar">←</button><button type="button" data-ileri aria-label="Sonraki yorumlar">→</button></div></div>' +
      '<div class="gy-list" data-l role="list" aria-label="Google yorumları" tabindex="0">' + new Array(5).join('<div class="gy-k gy-sk" aria-hidden="true"></div>') + '</div>' +
      '<p class="gy-not" data-n aria-live="polite"></p>';
  }

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s) { return S.el.querySelector(s); }
  function gorsel(u, av) {
    try { var x = new URL(u); if (x.protocol !== 'https:' || !/^lh[0-9]+\.googleusercontent\.com$/.test(x.hostname)) return ''; return x.href.replace(/=[^/=]*$/, '') + (av ? '=s80-c' : '=w480-h270-k-no'); } catch (e) { return ''; }
  }
  function gLink(u) { try { var x = new URL(u); return x.protocol === 'https:' && /(^|\.)google\.com$/.test(x.hostname) ? x.href : TUM; } catch (e) { return TUM; } }
  function yildiz(n) { n = Math.round(n); return new Array(n + 1).join('★') + new Array(6 - n).join('☆'); }

  function veri() {
    if (S.p) return S.p;
    var on = null;
    try { on = JSON.parse(sessionStorage.getItem(CFG.CACHE_KEY) || 'null'); } catch (e) {}
    if (on && on.t > Date.now() - 1800000 && on.v) return (S.p = Promise.resolve(on.v));
    if (!CFG.FEED) return (S.p = w.__PN_GY_DATA ? Promise.resolve(w.__PN_GY_DATA) : Promise.reject(new Error('feed yok')));
    var ac = 'AbortController' in w ? new AbortController() : null, tm = setTimeout(function () { if (ac) ac.abort(); }, 8000);
    S.p = fetch(CFG.FEED, { credentials: 'omit', referrerPolicy: 'no-referrer', signal: ac && ac.signal })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (v) { clearTimeout(tm); try { sessionStorage.setItem(CFG.CACHE_KEY, JSON.stringify({ t: Date.now(), v: v })); } catch (e) {} return v; })
      .catch(function (e) { clearTimeout(tm); S.p = null; throw e; });
    return S.p;
  }
  function gecerli(v) {
    var yas = Date.now() - Date.parse(v && v.updatedAt);
    return v && String(v.businessId) === CFG.CID && Array.isArray(v.reviews) && isFinite(yas) && yas > -300000 && yas < CFG.MAX_AGE;
  }

  function ciz(v) {
    if (!gecerli(v)) throw new Error('geçersiz veri');
    var list = $('[data-l]'), io = 'IntersectionObserver' in w ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.src = e.target.getAttribute('data-src'); io.unobserve(e.target); } });
    }, { root: list, rootMargin: '0px 200px' }) : null;
    function img(u, alt, wd, ht) {
      var i = d.createElement('img'); i.alt = alt; i.width = wd; i.height = ht; i.decoding = 'async'; i.referrerPolicy = 'no-referrer';
      i.setAttribute('data-src', u); i.onerror = function () { var f = i.closest('.gy-f'); (f || i).remove(); };
      if (io) io.observe(i); else i.src = u; return i;
    }
    v.reviews.forEach(function (r) { if (r && typeof r.text === 'string') r.text = r.text.replace(/<br\s*\/?>/gi, '\n').replace(/\n{3,}/g, '\n\n'); });
    var rs = v.reviews.filter(function (r) { return r && r.stars >= CFG.MIN_STARS && typeof r.text === 'string' && r.text.trim().length >= CFG.MIN_LEN && !/[\u0370-\u03ff\u0400-\u04ff\u0590-\u06ff]/.test(r.text) && typeof r.name === 'string'; })
      .sort(function (a, b) { return (CFG.ONCE.test(b.text) - CFG.ONCE.test(a.text)) || (Date.parse(b.date) - Date.parse(a.date)); }).slice(0, CFG.MAX);
    if (!rs.length) throw new Error('yorum yok');
    var fr = d.createDocumentFragment();
    rs.forEach(function (r, i) {
      var fot = (CFG.FOTO && r.images || []).map(function (u) { return gorsel(u, false); }).filter(Boolean), url = gLink(r.url);
      var k = d.createElement('article'); k.className = 'gy-k' + (fot.length ? ' gy-fotolu' : ''); k.setAttribute('role', 'listitem');
      var ad = r.name.trim(), av = gorsel(r.avatar, true), tarih = new Date(r.date);
      k.innerHTML = '<div class="gy-kim"><span class="gy-av" aria-hidden="true">' + esc(Array.from(ad)[0] || 'G') + '</span><span><span class="gy-ad">' + esc(ad) + '</span>' +
        '<time datetime="' + esc(r.date) + '">' + esc(tarih.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })) + '</time></span></div>' +
        '<span class="gy-yz" aria-label="' + r.stars + ' / 5 yıldız">' + yildiz(r.stars) + '</span>' +
        '<p class="gy-t" id="pn-gy-t' + i + '">' + esc(r.text.trim()) + '</p>';
      if (av) k.querySelector('.gy-av').appendChild(img(av, '', 40, 40));
      var t = k.querySelector('.gy-t');
      if (r.text.length > (fot.length ? 110 : 300)) {
        t.className += ' kapali';
        var b = d.createElement('button'); b.type = 'button'; b.className = 'gy-dev'; b.textContent = 'Devamını oku';
        b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', t.id);
        b.onclick = function () {
          var ac = t.classList.toggle('acik'); t.classList.toggle('kapali', !ac);
          var f = k.querySelector('.gy-f'); if (f) f.hidden = ac;
          b.textContent = ac ? 'Daha az göster' : 'Devamını oku'; b.setAttribute('aria-expanded', String(ac));
        };
        k.appendChild(b);
      }
      if (fot.length) {
        var a = d.createElement('a'); a.className = 'gy-f'; a.href = url; a.target = '_blank'; a.rel = 'noopener';
        a.setAttribute('aria-label', ad + ' tarafından paylaşılan fotoğrafı Google\'da aç');
        a.appendChild(img(fot[0], ad + ' tarafından paylaşılan fotoğraf', 480, 270));
        if (fot.length > 1) { var sp = d.createElement('span'); sp.textContent = '+' + (fot.length - 1); a.appendChild(sp); }
        k.appendChild(a);
      }
      var inc = d.createElement('a'); inc.className = 'gy-inc'; inc.href = url; inc.target = '_blank'; inc.rel = 'noopener'; inc.textContent = 'Değerlendirmeyi incele ↗';
      k.appendChild(inc);
      fr.appendChild(k);
    });
    list.replaceChildren(fr);

    if (v.averageRating >= 1 && v.totalReviewCount >= 1) {
      var p = $('[data-p]'), y = $('[data-y]');
      p.textContent = Number(v.averageRating).toLocaleString('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); p.hidden = false;
      y.textContent = yildiz(v.averageRating); y.setAttribute('aria-label', v.averageRating + ' / 5 yıldız'); y.hidden = false;
      $('[data-s]').textContent = Number(v.totalReviewCount).toLocaleString('tr-TR') + ' değerlendirme';
    }
    $('[data-n]').textContent = 'Google işletme değerlendirmeleri · Son güncelleme: ' +
      new Date(v.updatedAt).toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Istanbul' });

    var ok = $('[data-ok]'), geri = $('[data-geri]'), ileri = $('[data-ileri]');
    function guncel() { geri.disabled = list.scrollLeft < 2; ileri.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 3; }
    function git(yon) {
      var k1 = list.querySelector('.gy-k'), adim = k1 ? k1.getBoundingClientRect().width + 16 : list.clientWidth;
      list.scrollBy({ left: yon * adim, behavior: w.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    geri.onclick = function () { git(-1); }; ileri.onclick = function () { git(1); };
    list.addEventListener('scroll', guncel, { passive: true });
    ok.hidden = false; guncel();
  }
  function hata() {
    var list = $('[data-l]'); if (list) list.remove();
    $('[data-n]').textContent = 'Güncel değerlendirmeleri Google\'da inceleyebilirsiniz.';
  }
  function yukle() {
    if (S.yuklendi) return; S.yuklendi = true;
    veri().then(ciz).catch(function (e) { S.yuklendi = false; if (w.console) console.warn('[pn-gy]', e && e.message); hata(); });
  }

  function yerlestir() {
    if (d.body.contains(S.el)) return true;
    var pag = d.querySelector('#pn-rv [data-pag]');
    if (!pag) return false;
    pag.parentNode.insertBefore(S.el, pag.nextSibling);
    if (!S.izle) {
      S.izle = true;
      if ('IntersectionObserver' in w) {
        var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); yukle(); } }, { rootMargin: '300px' });
        io.observe(S.el);
      } else yukle();
    }
    return true;
  }
  if (yerlestir()) return;
  if (S.mo) S.mo.disconnect();
  S.mo = new MutationObserver(function () { if (yerlestir()) { S.mo.disconnect(); clearTimeout(S.moT); } });
  S.mo.observe(d.body, { childList: true, subtree: true });
  clearTimeout(S.moT);
  S.moT = setTimeout(function () { S.mo.disconnect(); }, 30000);
})(window, document);
