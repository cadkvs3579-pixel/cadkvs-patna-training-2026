# CAD KVS static website

A responsive, single-page website made with plain HTML, CSS, and JavaScript. It has no build step and can be published free with GitHub Pages.

The page title and description mention CAD courses in Kankarbagh, Patna to help describe the site in search. Search engines decide whether and where to show a website; first place cannot be guaranteed. For local visibility, create and verify a free Google Business Profile with the same accurate business name, address, phone, course information, photos, and hours. Ask genuine students for reviews and keep the profile current.

## Before publishing

Search the files for square-bracket placeholders such as `[Add phone number]` and replace them with CAD KVS's actual information. Also:

1. The phone, WhatsApp, and email details provided so far are already filled in. `script.js` is set to `916200530488`.
2. In `index.html`, the provided institute address is filled in. Add any course details you want to share; fee information is not displayed.
3. Replace the student reviews with genuine, approved testimonials. Replace the illustrated gallery placeholders with institute/student images you have permission to use.
4. Add a Google Maps embed by replacing the `.map-placeholder` block with an iframe copied from Google Maps' **Share → Embed a map** option. Set a descriptive `title` on the iframe.
5. The enquiry form opens a prefilled WhatsApp message after a visitor submits it; it does not store submissions.

## Publish free with GitHub Pages

1. Sign in or create a free account at [GitHub](https://github.com/).
2. Create a repository for the site. For a personal site, a repository named `YOUR-USERNAME.github.io` gives the root address `https://YOUR-USERNAME.github.io/`. Or use any repository name for an address like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
3. Upload `index.html`, `styles.css`, `script.js`, and this `README.md` to the repository's top level.
4. Open the repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, and save.
5. Wait for GitHub Pages to publish, then open the URL shown in the Pages settings.

GitHub Pages hosting and its `github.io` address are free. No paid domain or hosting is required.

## Help search engines discover the site

`robots.txt` is included and allows search engine crawlers to access the site. The sitemap should be created and submitted after publishing, because it needs the final GitHub Pages address.

1. Publish the site using the steps above and copy its public URL.
2. In [Google Search Console](https://search.google.com/search-console/), add the exact public URL as a URL-prefix property and complete Google's ownership verification in your account.
3. Use Search Console's URL Inspection tool on the public homepage and select **Request indexing**. If you later add a sitemap, submit its public URL in the Sitemaps report. Submitting is a request, not a guarantee of indexing or ranking.
4. In [Bing Webmaster Tools](https://www.bing.com/webmasters/), add and verify the public site, then submit its sitemap or homepage URL.
5. Create and verify a free [Google Business Profile](https://www.google.com/business/) for local discovery. Keep the business name, address, phone, categories, courses, photos, and hours accurate and consistent with the site.

Search engines decide whether and where to list sites, and the process can take time. Google says crawling and indexing are not guaranteed, and local placement can depend on relevance, distance, and prominence.
