// Renders header, footer and the product catalogue.
// Product data lives in assets/products-data.js (generated from data/products.mjs).

(function(){
  var DATA = window.SK_DATA || { affiliateTag: 'matechreviews-20', categories: [], products: [] };
  var TAG = DATA.affiliateTag;

  function amazonUrl(p){
    if(p.asin && /^[A-Z0-9]{10}$/i.test(p.asin)){
      return 'https://www.amazon.com/dp/' + p.asin + '?tag=' + TAG + '&linkCode=ll1&language=en_US&ref_=as_li_ss_tl';
    }
    return 'https://www.amazon.com/s?k=' + encodeURIComponent(p.query || p.name) + '&tag=' + TAG;
  }
  function reviewsUrl(p){
    if(p.asin && /^[A-Z0-9]{10}$/i.test(p.asin)){
      return 'https://www.amazon.com/product-reviews/' + p.asin + '?tag=' + TAG;
    }
    return amazonUrl(p);
  }

  var base = document.currentScript && /\/p\//.test(location.pathname) ? '../' : '';

  var header =
    '<header class="site-header"><div class="container nav">' +
      '<a class="brand" href="' + base + 'index.html"><span>&#10022;</span> SMART<br>KITCHEN</a>' +
      '<button class="menu" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">&#9776;</button>' +
      '<nav id="nav-links">' +
        '<a href="' + base + 'index.html#products">Gadgets</a>' +
        '<a href="' + base + 'products.html">All 30 products</a>' +
        '<a href="' + base + 'guides.html">Buying guides</a>' +
        '<a href="' + base + 'about.html">About</a>' +
        '<a class="nav-cta" href="' + base + 'index.html#products">Shop smart &rarr;</a>' +
      '</nav>' +
    '</div></header>';

  var footer =
    '<footer><div class="container footer-top">' +
      '<a class="brand" href="' + base + 'index.html"><span>&#10022;</span> SMART<br>KITCHEN</a>' +
      '<p>Simple kitchen ideas for busy families and happier everyday meals.</p>' +
      '<div>' +
        '<a href="' + base + 'index.html#products">Smart gadgets</a>' +
        '<a href="' + base + 'products.html">All products</a>' +
        '<a href="' + base + 'guides.html">Buying guides</a>' +
        '<a href="' + base + 'about.html">About</a>' +
        '<a href="' + base + 'disclosure.html">Affiliate disclosure</a>' +
        '<a href="' + base + 'privacy.html">Privacy</a>' +
      '</div>' +
    '</div>' +
    '<div class="container footer-bottom">' +
      '<p>&copy; <span data-year></span> Smart Kitchen. All rights reserved.</p>' +
      '<p>As an Amazon Associate I earn from qualifying purchases.</p>' +
    '</div></footer>';

  document.querySelectorAll('[data-site-header]').forEach(function(el){ el.innerHTML = header; });
  document.querySelectorAll('[data-site-footer]').forEach(function(el){ el.innerHTML = footer; });
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  var menu = document.querySelector('.menu');
  if(menu){
    menu.addEventListener('click', function(){
      var open = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!open));
      document.querySelector('.site-header nav').classList.toggle('open', !open);
    });
  }

  // Product catalogue rendering (index + products page)
  var host = document.querySelector('[data-product-catalogue]');
  if(host && DATA.categories && DATA.categories.length){
    var html = DATA.categories.map(function(cat){
      var items = DATA.products.filter(function(p){ return p.category === cat.id; });
      return '<section id="' + cat.id + '" class="catalogue-group">' +
        '<div class="catalogue-group-head"><h2>' + cat.title + '</h2><p>' + cat.note + '</p></div>' +
        '<div class="gadget-grid">' +
          items.map(function(p){
            var buy = amazonUrl(p);
            var img = 'assets/' + encodeURI(p.image);
            return '<article class="gadget-card">' +
              '<a class="gadget-image" href="p/' + p.slug + '.html" aria-label="' + p.name.replace(/"/g,'&quot;') + ' buying guide" style="background-image:url(\'' + img + '\')"></a>' +
              '<div class="gadget-content">' +
                '<h3><a href="p/' + p.slug + '.html">' + p.name + '</a></h3>' +
                '<p>' + p.shortDesc + '</p>' +
                '<div class="card-cta">' +
                  '<a class="button" target="_blank" rel="sponsored noopener" href="' + buy + '">Check on Amazon</a>' +
                  '<a class="text-link" href="p/' + p.slug + '.html">Read guide &rarr;</a>' +
                '</div>' +
              '</div>' +
            '</article>';
          }).join('') +
        '</div>' +
      '</section>';
    }).join('');
    host.innerHTML = html;
  }

  // Shared "featured picks" strip - renders in any element with [data-featured]="cat1,cat2,..."
  document.querySelectorAll('[data-featured]').forEach(function(el){
    var slugs = el.getAttribute('data-featured').split(',').map(function(s){return s.trim();});
    var picks = slugs.map(function(slug){ return DATA.products.find(function(p){return p.slug===slug;}); }).filter(Boolean);
    el.innerHTML = '<div class="gadget-grid">' + picks.map(function(p){
      var buy = amazonUrl(p);
      var img = (base || '') + 'assets/' + encodeURI(p.image);
      var pageHref = (base || '') + 'p/' + p.slug + '.html';
      return '<article class="gadget-card">' +
        '<a class="gadget-image" href="' + pageHref + '" style="background-image:url(\'' + img + '\')"></a>' +
        '<div class="gadget-content"><h3><a href="' + pageHref + '">' + p.name + '</a></h3>' +
        '<p>' + p.shortDesc + '</p>' +
        '<div class="card-cta">' +
          '<a class="button" target="_blank" rel="sponsored noopener" href="' + buy + '">Check on Amazon</a>' +
          '<a class="text-link" href="' + pageHref + '">Read guide &rarr;</a>' +
        '</div></div></article>';
    }).join('') + '</div>';
  });
})();
