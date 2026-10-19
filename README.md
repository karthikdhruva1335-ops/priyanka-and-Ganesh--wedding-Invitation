# Ganesh & Priyanka — Wedding Invitation Website

A responsive static wedding invitation made with HTML, CSS and JavaScript. It is suitable for free GitHub Pages hosting.

## Files

- `index.html` — invitation content and page structure
- `style.css` — responsive styling
- `script.js` — countdown, mobile navigation, photo lightbox, music control and sharing
- `assets/` — put your own licensed music file and optional local photos here

## Before publishing

1. **Confirm the venue address.** The invitation uses the supplied address: H.D. Devegowda Community Hall, K.R. Nagar Police Station Near, Railway Station Road, K.R. Nagar, Mysuru District. The Maps button searches this address; verify the result and pin before sharing.
2. **Replace sample gallery photos.** The current gallery uses remote Unsplash sample photos. Replace the image URLs in `index.html` with your own photos or images you have permission to use.
3. **Add music (optional).** Put a music file you have permission to use at `assets/wedding-music.mp3`. In `index.html`, uncomment:
   ```html
   <source src="assets/wedding-music.mp3" type="audio/mpeg">
   ```
   Autoplay is intentionally not enabled; visitors must tap Play Music.
4. **Check wedding details.** Groom: Sri. Ganesh T.B., son of Smt. Puttagowramma and Sri. Bhojegowda. Bride: Smt. Priyanka N.R., daughter of Smt. Shoba B.S. and Sri. Revanasiddappa N.T. Reception: Wednesday, 28 October 2026 from 7:00 PM. Dhaara Muhurtha: Thursday, 29 October 2026 between 9:40 and 10:40 AM.

## Publish with GitHub Pages (free)

1. Sign in at https://github.com/ or create a free account.
2. Click **New repository**.
3. Give it a name such as `ganesh-priyanka-wedding`. Choose **Public**, then create the repository.
4. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder. Keep all files in the repository root as shown.
   - Easiest method: open the repository, choose **Add file → Upload files**, drag the files and folder in, then commit the changes.
5. Open the repository's **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. Wait a minute or two and refresh the Pages section. GitHub will show your public URL, usually:
   `https://YOUR-USERNAME.github.io/ganesh-priyanka-wedding/`
9. Open that link on your phone and computer. Test the countdown, gallery, Maps button and Share Invitation button.
10. When you make edits, upload/commit the changed files. GitHub Pages will redeploy automatically.

## Reuse for clients

Duplicate the repository or replace the names, date, event timings, venue, photos and share text for each couple. Keep the countdown date in `script.js` in India Standard Time (`+05:30`).

## Notes

- The site is static; it does not collect RSVP submissions or store visitor data.
- Google Fonts and Unsplash photos need an internet connection.
- Use only photos and music you have permission to publish.
