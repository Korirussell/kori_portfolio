# Assets Guide

Where to place images and media files for your portfolio.

---

## Project Images

### Location
Place all project screenshots/images in:
```
winxpsite/assets/work/[PROJECT_NAME]/
```

### Example Structure
```
winxpsite/assets/work/
├── Tether/
│   ├── tether_1.png
│   ├── tether_2.png
│   └── tether_3.png
├── YourProject/
│   ├── screenshot_1.jpg
│   ├── screenshot_2.jpg
│   └── demo.png
└── AnotherProject/
    └── preview.png
```

### How to Use in Code

1. **Import the images** in `winxpsite/src/appData/index.tsx`:
   ```tsx
   import tether_1 from "../../assets/work/Tether/tether_1.png";
   import tether_2 from "../../assets/work/Tether/tether_2.png";
   import tether_3 from "../../assets/work/Tether/tether_3.png";
   ```

2. **Add to your project's gallery array**:
   ```tsx
   {
     id: 1,
     title: "Tether",
     date: "Aug 2025 - Present",
     gitURL: "https://github.com/yourusername/tether",
     techstack: [TechIcon.SWIFT, TechIcon.SUPABASE, TechIcon.PYTHON],
     gallery: [tether_1, tether_2, tether_3],  // <-- Add here
     overview: `Your project description...`,
   }
   ```

### Recommended Image Specs
- **Format**: PNG or JPG
- **Size**: 800-1200px width (will auto-scale)
- **Aspect ratio**: 16:9 or 4:3 works best
- **File size**: Keep under 500KB per image for performance

---

## Media Player Songs

### Location
Place MP3 files in:
```
winxpsite/public/music/
```

### Example Structure
```
winxpsite/public/music/
├── song1.mp3
├── song2.mp3
└── favorite_track.mp3
```

### How to Update Playlist

Edit `winxpsite/src/programs/MediaPlayer.tsx` and update the `PLAYLIST` array:

```tsx
const PLAYLIST: Track[] = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    src: "/music/song1.mp3",  // <-- Reference files in /public/music/
  },
  {
    title: "Another Track",
    artist: "Another Artist",
    src: "/music/song2.mp3",
  },
  {
    title: "Favorite Song",
    artist: "Your Favorite Artist",
    src: "/music/favorite_track.mp3",
  },
];
```

### Audio File Requirements
- **Format**: MP3 (best browser support)
- **Bitrate**: 128-192 kbps recommended
- **File size**: Keep under 5MB per track for fast loading

### Alternative: Use External URLs
You can also use external CDN/hosting URLs:
```tsx
{
  title: "Remote Song",
  artist: "Artist",
  src: "https://your-cdn.com/path/to/song.mp3",
}
```

---

## Project Icons

If you want custom icons for your projects (instead of the default file icon), place them in:
```
winxpsite/assets/workaccordion/
```

Then import and use in `appData/index.tsx`:
```tsx
import customIcon from "../../assets/workaccordion/custom_icon.png";

// In WorkAccordionContent array:
{
  id: 1,
  type: WorkType.WORK,
  icon: customIcon,  // <-- Custom icon
  title: "Your Project",
  content: { ... }
}
```

---

## Quick Checklist

- [ ] Create folder for each project: `assets/work/[PROJECT_NAME]/`
- [ ] Add 2-5 screenshots per project
- [ ] Import images in `appData/index.tsx`
- [ ] Add images to project's `gallery` array
- [ ] Place MP3s in `public/music/`
- [ ] Update `PLAYLIST` in `MediaPlayer.tsx`
- [ ] Test that images load in "My Work" modal
- [ ] Test that songs play in Media Player

---

## Tips

1. **Optimize images** before adding them (use tools like TinyPNG or ImageOptim)
2. **Consistent naming**: Use lowercase with underscores (e.g., `project_screenshot_1.png`)
3. **Git LFS**: If you have many large images, consider using Git Large File Storage
4. **Lazy loading**: Images in the gallery are already lazy-loaded for performance
