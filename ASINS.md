# Adding your Amazon ASINs (this is the biggest revenue lever)

Right now every product on the site links to an Amazon **search page** that includes your affiliate tag (`matechreviews-20`). Search-page links still credit you when someone buys, but they convert 3-5x worse than direct product (ASIN) links. Fixing this is the single biggest thing you can do to earn more.

## What is an ASIN?

An ASIN is Amazon's 10-character product ID, like `B08N5WRWNW`. Every product on Amazon has one.

## Three ways to get an ASIN

### 1. From the URL (fastest)

Open the product page on amazon.com. Look at the address bar:

```
https://www.amazon.com/OXO-Good-Grips-11-Pound-Stainless/dp/B08N5WRWNW/ref=...
                                                              ^^^^^^^^^^
                                                              this is the ASIN
```

The 10-character code right after `/dp/` is the ASIN.

### 2. From the "Product details" section

Scroll to "Product details" or "Product information" near the bottom of any Amazon page. You'll see a line: **ASIN: B08N5WRWNW**.

### 3. Using SiteStripe (recommended for Associates)

If you're logged into your Amazon Associates account, the **SiteStripe** bar appears across the top of every Amazon page. Click "Text" or "Short link" — the link Amazon gives you already has your `matechreviews-20` tag inside it. Copy the ASIN from that URL.

## How your affiliate tag works with the ASIN

A proper affiliate link looks like this:

```
https://www.amazon.com/dp/B08N5WRWNW?tag=matechreviews-20&linkCode=ll1&language=en_US
```

The `?tag=matechreviews-20` is what earns you commission. **Never remove that piece.** Every commission you earn is tracked by that tag.

The build script on this site adds the tag automatically as long as you paste in a valid 10-character ASIN.

## How to add ASINs to the site

Open `data/products.mjs`. You'll see 30 product entries. Each has an `asin: ''` field:

```js
{ slug:'digital-kitchen-scale', name:'Digital kitchen scale', ...
    asin:'', query:'digital kitchen scale grams ounces', ...
```

Replace `asin:''` with the ASIN you copied, e.g., `asin:'B0BMHR8XKF'`. Then run:

```bash
node build/build.mjs
```

That regenerates:
- `assets/products-data.js` (the browser-side product data)
- `p/<slug>.html` (all 30 product pages)
- `sitemap.xml`

Commit and push. The site now uses direct ASIN links for every product you filled in. Any product still without an ASIN keeps using the search-page fallback — no broken links.

## Which products to add ASINs for first (highest priority)

Focus on gadgets with the highest average order value or highest conversion rate:

1. **Programmable slow cooker** — high AOV, high conversion
2. **Vacuum sealer machine** — high AOV
3. **Cordless handheld vacuum** — high AOV
4. **Immersion blender** — mid AOV, very high conversion
5. **Instant-read thermometer** — extremely high conversion
6. **Digital kitchen scale** — extremely high conversion
7. **Bento lunch box** — repeat purchase category
8. **Waffle maker** — mid AOV, gift-worthy

The rest are lower-priority but every one you add improves the site's search rankings and conversion.

## Amazon Associates rules to remember

- **Use the correct tag for each Amazon marketplace.** `matechreviews-20` is for **amazon.com (US)**. If you get traffic from Canada, UK, etc., you'll need country-specific tags. Amazon **OneLink** can auto-redirect visitors if you enroll.
- **Never put affiliate links in email newsletters, downloadable PDFs, or paid ads.** This violates Amazon's Operating Agreement and gets accounts terminated.
- **Never quote prices** on the site unless you're using Amazon's Product Advertising API. Prices change; misquoting is a ToS violation. The site is written to say "$" / "$$" / "$$$" instead of exact prices.
- **The affiliate disclosure must stay visible on every page.** It already is — don't remove it.
- **Don't cloak, shorten, or hide affiliate links** in a way that disguises they go to Amazon.
