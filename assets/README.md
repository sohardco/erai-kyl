# Assets Directory

This directory should contain all the images, audio files, and icons needed for the music track sharing page.

## Required Files

### Images

- `track-cover.jpg` - Main track cover art (400x400px, < 100KB)
- `track-cover.webp` - WebP version of track cover for better performance
- `artist-avatar.jpg` - Artist profile picture (120x120px, < 50KB)
- `artist-avatar.webp` - WebP version of artist avatar
- `amuse-logo.svg` - Amuse platform logo
- `favicon.ico` - Website favicon (16x16px, 32x32px)

### Audio

- `preview.mp3` - Track preview/sample (30-60 seconds, < 10MB)

### Platform Icons (32x32px each)

- `spotify-icon.svg` - Spotify logo
- `apple-music-icon.svg` - Apple Music logo
- `youtube-icon.svg` - YouTube Music logo
- `amazon-icon.svg` - Amazon Music logo
- `deezer-icon.svg` - Deezer logo
- `tidal-icon.svg` - Tidal logo

## Optimization Tips

1. **Images**: Use WebP format with JPEG fallback
2. **Audio**: Use MP3 format with reasonable bitrate (128-192 kbps)
3. **Icons**: Use SVG format for scalability
4. **Compression**: Optimize all files for web delivery

## File Structure

```
assets/
├── track-cover.jpg
├── track-cover.webp
├── artist-avatar.jpg
├── artist-avatar.webp
├── amuse-logo.svg
├── favicon.ico
├── preview.mp3
├── spotify-icon.svg
├── apple-music-icon.svg
├── youtube-icon.svg
├── amazon-icon.svg
├── deezer-icon.svg
└── tidal-icon.svg
```

## Note

Add your actual files to this directory and update the paths in the HTML if needed.
