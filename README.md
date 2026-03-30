# CLaD GitHub Page

A lightweight static project page for **CLaD: Planning with Grounded Foresight via Cross-Modal Latent Dynamics**.

## Files
- `index.html` — single-page project site
- `assets/css/style.css` — layout and styling
- `assets/js/main.js` — copy-BibTeX interaction
- `assets/img/` — teaser, method figure, and charts
- `assets/pdf/CLaD_CVPR_2026.pdf` — local copy of the paper
- `.nojekyll` — disables Jekyll processing for GitHub Pages

## Recommended edit checklist
1. Replace the placeholder code link in `index.html`.
2. Export clean vector figures from the final PDF and overwrite:
   - `assets/img/teaser-overview.png`
   - `assets/img/method-architecture.png`
3. Update author profile links if you want clickable names.
4. Replace the temporary BibTeX entry with the camera-ready one.
5. Optionally add links for video, poster, dataset, or demo.

## Publish on GitHub Pages
### Option A: project site
1. Create a repository such as `clad-project-page`.
2. Push these files to the `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch** and select:
   - Branch: `main`
   - Folder: `/ (root)`

### Option B: user site
1. Create a repository named `YOUR_USERNAME.github.io`.
2. Push the site to the `main` branch.
3. GitHub will serve the page from the repository root.

## Local preview
Because this is a static site, you can preview it with any simple HTTP server.

Example:
```bash
cd clad_project_page
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Suggested content order for a top-tier ML paper page
1. Title / authors / affiliations
2. Paper + code buttons
3. One-sentence takeaway
4. Teaser figure
5. 3 contribution cards
6. 1 method figure + 3-step explanation
7. Main quantitative results
8. 1–2 critical ablations
9. BibTeX

