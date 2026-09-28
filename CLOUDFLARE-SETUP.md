# Deploy Smart Kitchen to Cloudflare Pages (Free)

## One-time setup (5 minutes)

1. Go to **https://dash.cloudflare.com/sign-up** and create a free account (no credit card).
2. In the dashboard, click **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare to read your GitHub repos.
4. Select the **Smart-Kitchen** repository.
5. On the "Set up builds and deployments" screen, use these settings:

   | Field | Value |
   |---|---|
   | Project name | `smart-kitchen` (this becomes your URL: `smart-kitchen.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | **None** |
   | Build command | *(leave blank)* |
   | Build output directory | `/` |

6. Click **Save and Deploy**.
7. Wait ~30 seconds. Your site goes live at **https://smart-kitchen.pages.dev**

Every future push to `main` auto-deploys in ~20 seconds.

## Files this repo already includes for Cloudflare

- `_headers` — security headers + smart caching (fast repeat visits, instant HTML updates)
- `_redirects` — clean URLs + 404 fallback
- `404.html` — on-brand not-found page
- `wrangler.toml` — Pages build config
- `robots.txt` + `sitemap.xml` — already set up for SEO

## After it's live: SEO setup

1. **Google Search Console** → https://search.google.com/search-console
   - Add property: `https://smart-kitchen.pages.dev`
   - Verify via HTML tag (Cloudflare will let you add it)
   - Submit sitemap: `sitemap.xml`

2. **Bing Webmaster Tools** → https://www.bing.com/webmasters
   - Import directly from Google Search Console (one click)

3. Update the canonical URLs in your HTML files from `smartkitchenmom.com` to your actual live URL, OR keep them if you plan to point that domain at Cloudflare Pages later (recommended — canonical stays stable).

## When you buy a real domain later

In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
Cloudflare handles SSL automatically, and if you buy the domain through Cloudflare Registrar it's the cheapest option (at cost, no markup).
