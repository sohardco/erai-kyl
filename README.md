# Erai Kolis - Ia Tezh Litav | Music Track Sharing Page

A modern, responsive music track sharing page inspired by Amuse.io's design, featuring optimized performance and Meta pixel integration.

## ✨ Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Performance Optimized**: Fast loading with image optimization and lazy loading
- **Audio Player**: Custom HTML5 audio player with progress tracking
- **Social Sharing**: Share track on Facebook, Twitter, Instagram, and copy link
- **Meta Pixel Integration**: Track user engagement, plays, shares, and more
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Web server (for local development)
- Meta (Facebook) Pixel ID for tracking

### Installation

1. Clone or download the project files
2. Place all files in your web server directory
3. Add your assets to the `assets/` folder (see Assets section below)
4. Configure your Meta Pixel ID (see Meta Pixel Setup section)
5. Open `index.html` in your web browser

## 📱 Meta Pixel Setup

### 1. Get Your Pixel ID

1. Go to [Facebook Events Manager](https://www.facebook.com/events_manager)
2. Create a new pixel or use an existing one
3. Copy your Pixel ID

### 2. Configure the Pixel

In `index.html`, find this line:

```javascript
fbq("init", "YOUR_PIXEL_ID_HERE"); // Replace with your actual pixel ID
```

Replace `YOUR_PIXEL_ID_HERE` with your actual Meta Pixel ID.

Also update the noscript tag:

```html
<img
  height="1"
  width="1"
  style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
/>
```

### 3. Events Being Tracked

The page automatically tracks these events:

- **PageView**: When page loads
- **Play**: When user plays the audio track
- **Share**: When user shares the track
- **ViewContent**: When user clicks on streaming platform links
- **ScrollDepth**: Track scroll engagement (25%, 50%, 75%, 100%)
- **ButtonClick**: Track all button interactions
- **JSError**: Track JavaScript errors for debugging

## 🎨 Assets Required

Place these files in the `assets/` folder:

### Required Images

- `track-cover.jpg` - Track cover art (400x400px recommended)
- `track-cover.webp` - WebP version for better performance
- `artist-avatar.jpg` - Artist profile picture (120x120px)
- `artist-avatar.webp` - WebP version
- `amuse-logo.svg` - Amuse logo
- `favicon.ico` - Website favicon

### Audio Files

- `preview.mp3` - Track preview/sample (30-60 seconds recommended)

### Platform Icons

- `spotify-icon.svg` - Spotify logo
- `apple-music-icon.svg` - Apple Music logo
- `youtube-icon.svg` - YouTube Music logo
- `amazon-icon.svg` - Amazon Music logo
- `deezer-icon.svg` - Deezer logo
- `tidal-icon.svg` - Tidal logo

### Image Optimization Tips

1. **Use WebP format** for better compression
2. **Optimize file sizes**:
   - Track cover: < 100KB
   - Artist avatar: < 50KB
   - Icons: < 10KB each
3. **Use proper dimensions**:
   - Track cover: 400x400px (square)
   - Artist avatar: 120x120px (square)
   - Icons: 32x32px

## 🔧 Customization

### Track Information

Edit these sections in `index.html`:

```html
<h1 class="track-title">Ia Tezh Litav</h1>
<h2 class="artist-name">Erai Kolis</h2>
<p class="track-description">Your track description...</p>
```

### Release Information

Update the release details:

```html
<div class="info-item">
  <span class="info-label">Release Date:</span>
  <span class="info-value">January 15, 2025</span>
</div>
```

### Artist Information

Customize the artist section:

```html
<h4 class="artist-title">Erai Kolis</h4>
<p class="artist-bio">Your artist biography...</p>
```

### Colors and Styling

Modify CSS variables in `styles.css`:

```css
:root {
  --primary-color: #ff6b35; /* Main accent color */
  --secondary-color: #1a1a1a; /* Dark text color */
  --text-color: #333; /* Regular text */
  --text-light: #666; /* Light text */
  --bg-color: #ffffff; /* Background */
  --bg-secondary: #f8f9fa; /* Secondary background */
}
```

## 📊 Performance Features

### Image Optimization

- WebP format support with JPEG fallback
- Lazy loading for non-critical images
- Preloading of critical resources

### JavaScript Optimization

- Modular class-based architecture
- Efficient event handling
- Intersection Observer for animations
- Service Worker ready

### CSS Optimization

- CSS custom properties for theming
- Mobile-first responsive design
- Hardware acceleration for animations
- Reduced motion support for accessibility

## 🔗 Streaming Platform Links

Update the platform links in `index.html`:

```html
<a
  href="https://open.spotify.com/track/YOUR_TRACK_ID"
  class="platform-link spotify"
>
  <img src="./assets/spotify-icon.svg" alt="Spotify" />
  <span>Spotify</span>
</a>
```

Replace `YOUR_TRACK_ID` with actual track IDs from each platform.

## 🚀 Deployment

### Static Hosting

This page works with any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Google Cloud Storage

### Domain Setup

1. Upload all files to your web server
2. Ensure proper MIME types for audio files
3. Configure HTTPS for best performance
4. Set up proper cache headers for assets

## 🔒 Privacy & GDPR

If you're targeting EU users, consider adding:

1. Cookie consent banner
2. Privacy policy link
3. Data processing information
4. User consent before Meta Pixel activation

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Meta Pixel Not Tracking

1. Check browser console for errors
2. Verify Pixel ID is correct
3. Use Facebook Pixel Helper extension
4. Ensure HTTPS is enabled

### Audio Not Playing

1. Check audio file path
2. Verify file format (MP3 recommended)
3. Ensure file size is reasonable (< 10MB)
4. Check browser audio permissions

### Images Not Loading

1. Verify file paths in HTML
2. Check file extensions match actual files
3. Ensure proper file permissions
4. Use browser developer tools to debug

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this project.

## 📞 Support

For support or questions, please open an issue in the project repository.

---

**Note**: Remember to replace placeholder content with your actual track information and obtain proper licensing for any copyrighted material.
