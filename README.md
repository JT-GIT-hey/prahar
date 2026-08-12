# Prahar — study music by time of day

A quiet study-music site built around the Hindustani classical idea of *prahar*
(the eight three-hour watches of the day, each traditionally paired with a raga).
It streams audio straight from YouTube's own embedded player — nothing is
downloaded, converted, or rehosted.

## Why it's built this way, not as a "downloader"

Stripping audio out of YouTube videos and re-serving it from your own site
breaks YouTube's Terms of Service and copyright law, even for a personal
project. This site instead uses the **official YouTube IFrame Player API**,
the same embed you'd get from hitting "share → embed" on any video. That's
fully within YouTube's rules, costs nothing, and the artists still get their
views. The trade-off: you can't strip the video away entirely — the player
has to exist in the page (this site keeps it 1×1 pixel and invisible, with
your own play/pause/volume UI on top).

## Files

```
prahar/
├── index.html    — page structure
├── style.css     — the whole visual design (one file, no build step)
└── script.js     — the prahar data, wheel drawing, YouTube player, timer
```

No framework, no build tools, no npm install — it's plain HTML/CSS/JS so
GitHub Pages can serve it as-is.

## Deploy it on GitHub Pages — step by step

1. **Create the repo.** On github.com, click **New repository**. Name it
   something like `prahar` (or `<your-username>.github.io` if you want it at
   the root of your GitHub domain). Keep it public. Don't add a README from
   the web UI since you already have one here.

2. **Get the files onto your machine.** Download the three files above (plus
   this README) into a single folder called `prahar`.

3. **Push it up.** In a terminal, inside that folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/prahar.git
   git push -u origin main
   ```
   (No git installed, or don't want the terminal? On the repo page, click
   **Add file → Upload files** and drag `index.html`, `style.css`, and
   `script.js` in directly — that works too.)

4. **Turn on Pages.** In the repo, go to **Settings → Pages**. Under
   "Build and deployment", set **Source** to `Deploy from a branch`, branch
   `main`, folder `/ (root)`. Save.

5. **Wait ~1 minute, then visit** `https://<your-username>.github.io/prahar/`.
   GitHub shows the live URL at the top of the Pages settings page once it's
   ready.

6. **Custom domain (optional).** Same Settings → Pages screen has a "Custom
   domain" field if you own one — add a `CNAME` record at your registrar
   pointing to `<your-username>.github.io`.

## Making it yours

- **Swap tracks:** open `script.js` and edit the `PRAHARS` array — each
  entry just needs a YouTube `videoId` (the part after `watch?v=` in any
  YouTube URL). Use tracks you have the right to embed, or that the uploader
  allows embedding for (most do, by default).
- **Colors/type:** everything lives in the `:root` variables at the top of
  `style.css`.
- **A track won't play:** some uploaders disable embedding. The player
  falls back to showing "open on YouTube" — swap that `videoId` for another
  version of the same raga.

## A note on the music

The eight watches and their ragas (Bhairav, Ahir Bhairav, Yaman, Darbari,
and so on) reflect real Hindustani classical time-theory — it's a genuine
tradition, not a design gimmick, and it's worth reading into if it's new to
you. The specific recordings linked are a starting set I found searching
YouTube for well-embedded Indian classical instrumental tracks; replace them
freely with performers or channels you want to support.
