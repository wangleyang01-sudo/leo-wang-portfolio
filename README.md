# Leo Wang — Photography & Curatorial Portfolio

A responsive, editorial-style portfolio built with plain HTML, CSS, and vanilla JavaScript. It has no build step or package dependencies and is designed to work as a static website on GitHub Pages.

## Pages

- `index.html` — home page and selected work
- `work/index.html` — work index and category links
- `work/fashion.html`, `work/events.html`, `work/automotive.html`, `work/portraits.html` — project stories
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

## Add or replace photographs

The `images/` folder is where your photographs go. The site uses exact filenames (not automatic folder scanning), so you can upload a file into the matching folder and the page will use it automatically. If that file is not there yet, the existing Unsplash placeholder stays visible.

| What the photo is for | Upload it here, using this exact filename |
| --- | --- |
| Homepage hero | `images/home/hero.jpg` |
| Fashion card shown on Home and Work | `images/fashion/cover.jpg` |
| Fashion project gallery | `images/fashion/01.jpg` through `images/fashion/04.jpg` |
| Events card shown on Home and Work | `images/events/cover.jpg` |
| Events project gallery | `images/events/01.jpg` through `images/events/04.jpg` |
| Automotive card shown on Home and Work | `images/automotive/cover.jpg` |
| Automotive project gallery | `images/automotive/01.jpg` through `images/automotive/04.jpg` |
| Portraits card shown on Home and Work | `images/portraits/cover.jpg` |
| Portraits project gallery | `images/portraits/01.jpg` through `images/portraits/04.jpg` |
| Curatorial page hero | `images/curatorial-projects/hero.jpg` |
| Ways of being seen | `images/curatorial-projects/ways-of-being-seen.jpg` |
| Notes from elsewhere | `images/curatorial-projects/notes-from-elsewhere.jpg` |
| Looking together | `images/curatorial-projects/looking-together.jpg` |

### Simple upload steps

1. Prepare your photo as a JPG. For example, rename the photo you want for the homepage to `hero.jpg`.
2. Open the matching folder under `images/` in the repository. The folders are already included.
3. Choose **Add file** → **Upload files**, select your photo, and make sure it has the exact filename shown above. Keep the name lowercase and the numbered gallery names exactly `01.jpg`, `02.jpg`, `03.jpg`, and `04.jpg`.
4. Repeat for each photo. To replace a photo later, upload a new photo with the same filename.
5. Preview the site before publishing. Do not commit or publish changes until you have reviewed and approved them.

The home hero is controlled in `index.html`. The Home and Work category cards are in `index.html` and `work/index.html`. The four project galleries are in `work/fashion.html`, `work/events.html`, `work/automotive.html`, and `work/portraits.html`; the curatorial images are in `curatorial.html`. `main.js` switches to each local photo when it exists and falls back to the original Unsplash image if it does not. The `data-local-image` attributes next to each image in those HTML files connect the pages to the filenames in this table.

Each project gallery currently has four photo slots. To use a different number of gallery photos or create another project, the page mapping in the relevant HTML file needs to be updated; folders alone cannot add images to a static GitHub Pages site because it does not provide automatic directory listing.

## Publish with GitHub Pages

1. Push the committed website files to the repository's `main` branch on GitHub.
2. Open the repository on GitHub and select **Settings**.
3. In the sidebar, open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and the **/(root)** folder, then select **Save**.
6. Wait for the Pages deployment to finish. The Pages screen will show the published website URL.

No deployment or Pages configuration is enabled by this project. A GitHub Pages project site may use a repository-name path, so keep the supplied relative links rather than changing them to root-absolute paths.
