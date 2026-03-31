# Manual Hookup Guide

Quick setup steps for customizing your portfolio.

---

## 1. Media Player — Custom Playlist

The Media Player currently uses placeholder SoundHelix MP3s. To use your own tracks:

Edit `winxpsite/src/programs/MediaPlayer.tsx` and update the `PLAYLIST` array:

```ts
const PLAYLIST: Track[] = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    src: "https://your-cdn.com/song.mp3",   // or a /public path like "/music/song.mp3"
  },
  // ...
];
```

**Recommended:** Upload MP3s to your `winxpsite/public/music/` folder and reference them as `/music/song.mp3`.

**See `ASSETS_GUIDE.md` for detailed instructions on adding project images and music files.**

---

## 2. Resume PDF

Ensure your resume PDF is placed at:
```
winxpsite/public/Resume.pdf
```

This is already referenced throughout the site (`./Resume.pdf`).

---

## 3. Redux Persist — Clear Stale State

After deploying, if the theme or window state gets stuck from a previous localStorage snapshot, open the browser console and run:

```js
localStorage.clear();
location.reload();
```

Or bump the redux-persist key in `winxpsite/src/redux/store.tsx` to force a cache bust:

```ts
const tabPersistConfig = {
  key: "tab-v2",   // bump version to invalidate old persisted state
  ...
};
```

---

## What's Already Done

| Feature | Status |
|---|---|
| Works grid + detail modal | ✅ Done |
| Auto-open Welcome + My Work on load | ✅ Done |
| Mobile / PDA layout (< 768px) | ✅ Done |
| Redux Persist (theme + z-index) | ✅ Done |
| Display Themes (Luna Blue / Olive / Silver) | ✅ Done — Start Menu → Display Properties |
| Minesweeper | ✅ Done — Desktop icon or Start Menu |
| Media Player (Winamp-style) | ✅ Done — needs custom playlist (see above) |
| a11y (aria-labels, keyboard nav, skip link) | ✅ Done |
| Dynamic imports for new programs | ✅ Done |
