# Leo Wang — Photography & Curatorial Portfolio

A responsive, editorial-style portfolio built with plain HTML, CSS, and vanilla JavaScript. It has no build step or package dependencies and is designed to work as a static website on GitHub Pages.

## Pages

- `index.html` — home page and selected work
- `work/index.html` — work index and category links
- `work/fashion.html`, `work/events.html`, `work/automotive.html`, `work/portraits.html`, `work/hyde-park.html` — project stories
- `curatorial.html` — curatorial projects
- `about.html` — biography
- `contact.html` — contact details

Shared design and behavior live in `styles.css` and `main.js`. The responsive navigation, semantic page structure, keyboard skip link, reduced-motion support, descriptive image alt text, page descriptions, and relative internal links are included.

## Preview locally

1. Download or clone the repository, then open its folder in a terminal.
2. Start a local web server from that folder:

   ```sh
   python3 -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000) in your browser.
4. Stop the server with `Ctrl+C` when finished.

Opening `index.html` directly may work, but a local server is recommended so relative links behave like they do on GitHub Pages.

## Replace the placeholder photography

The photographs currently use Unsplash image URLs as placeholders. Replace each image's `src` in the relevant HTML file with a path to your own image. For example:

```html
<img src="../images/soft-forms-01.jpg" alt="Your concise description of the photograph">
```

Create an `images/` folder in the repository and add your optimized JPG, WebP, or PNG files there. Pages inside `work/` use `../images/...`; pages at the repository root use `images/...`. Keep meaningful `alt` text, update each image caption, and adjust `loading="lazy"` or `fetchpriority="high"` only when appropriate.

To add a project, create a page in `work/` using one of the existing project pages as a template, then add a card linking to it in `work/index.html` and, if desired, `index.html`. Keep paths relative and include a unique page title and description. Update the copy, credits, years, email address, and Instagram profile link to your details before launch.

The Hyde Park project uses optimized local photographs in `images/hyde-park/`; the original images are not required to preview the site.

## Publish with GitHub Pages

1. Push the committed website files to the repository's `main` branch on GitHub.
2. Open the repository on GitHub and select **Settings**.
3. In the sidebar, open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and the **/(root)** folder, then select **Save**.
6. Wait for the Pages deployment to finish. The Pages screen will show the published website URL.

No deployment or Pages configuration is enabled by this project. A GitHub Pages project site may use a repository-name path, so keep the supplied relative links rather than changing them to root-absolute paths.
