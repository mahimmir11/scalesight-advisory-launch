# Video & Image Optimization Guide for Vercel Deployment

## Current Optimizations Applied ✅

### 1. Video Optimizations
- ✅ Added `preload="metadata"` to all videos (loads only metadata, not full video)
- ✅ Fixed aspect ratios to prevent layout shifts
- ✅ Removed white space issues in About page video
- ✅ All videos use `muted` and `playsInline` for better mobile performance

### 2. What's Already Working
- Videos are served from `/public` folder
- Vercel automatically serves static assets via CDN
- Videos use lazy loading (only load when needed)

## 🚀 Recommended Next Steps for Even Faster Loading

### A. Compress Your Videos (CRITICAL - Do This First!)
Your videos are likely too large. Compress them before uploading:

**Recommended Settings:**
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (1080p) or 1280x720 (720p)
- **Bitrate:** 2-4 Mbps for 1080p, 1-2 Mbps for 720p
- **Frame Rate:** 30fps (not 60fps)
- **Target File Size:** Under 5MB per video

**Tools to Use:**
1. **HandBrake** (Free, Desktop)
   - Download: https://handbrake.fr/
   - Preset: "Web" → "Gmail Large 3 Minutes 720p30"
   
2. **FFmpeg** (Command Line)
   ```bash
   # Compress to 720p, 2Mbps
   ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -b:v 2M -c:a aac -b:a 128k output.mp4
   ```

3. **Online Tools**
   - https://www.freeconvert.com/video-compressor
   - https://www.videosmaller.com/

### B. Convert Images to Modern Formats

**Current Issue:** PNG/JPG images are large
**Solution:** Convert to WebP or AVIF

**Tools:**
1. **Squoosh** (Online, Free)
   - https://squoosh.app/
   - Drag & drop images
   - Choose WebP format
   - Quality: 80-85%

2. **ImageMagick** (Command Line)
   ```bash
   # Convert to WebP
   magick convert input.png -quality 85 output.webp
   ```

### C. Implement Lazy Loading for Images

Add `loading="lazy"` to all images:

```tsx
<img 
  src="/hero.png" 
  alt="Hero" 
  loading="lazy"
  decoding="async"
/>
```

### D. Use Responsive Images

Serve different sizes for different devices:

```tsx
<img 
  srcSet="
    /hero-small.webp 640w,
    /hero-medium.webp 1024w,
    /hero-large.webp 1920w
  "
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
  src="/hero-large.webp"
  alt="Hero"
  loading="lazy"
/>
```

### E. Optimize Vercel Deployment

**In `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(mp4|webm)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📊 Expected Results After Optimization

| Asset Type | Before | After | Improvement |
|------------|--------|-------|-------------|
| Videos | 20-50MB | 2-5MB | 80-90% smaller |
| Images | 500KB-2MB | 50-200KB | 75-90% smaller |
| Load Time | 5-10s | 1-2s | 70-80% faster |

## 🎯 Priority Actions (Do These Now!)

1. **Compress all videos** using HandBrake or FFmpeg
2. **Convert images to WebP** using Squoosh
3. **Test on Vercel** after re-uploading optimized assets
4. **Monitor with Lighthouse** (Chrome DevTools)

## 📱 Mobile Optimization

Videos are especially heavy on mobile. Consider:
- Serving poster images instead of autoplay on mobile
- Using lower resolution videos for mobile devices
- Implementing intersection observer to load videos only when visible

## 🔍 How to Check Current File Sizes

```bash
# In your project directory
ls -lh public/*.mp4
ls -lh public/*.png
ls -lh public/*.jpg
```

## ⚡ Quick Win: Poster Images

Add poster images to videos (shows before video loads):

```tsx
<video
  src="/about.mp4"
  poster="/about-poster.jpg"  // Add this!
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
/>
```

## 📈 Monitoring Performance

Use these tools to track improvements:
1. **Lighthouse** (Chrome DevTools)
2. **WebPageTest** (https://www.webpagetest.org/)
3. **Vercel Analytics** (Built into Vercel dashboard)

---

**Remember:** The biggest impact will come from compressing your videos. A 50MB video compressed to 3MB will load 16x faster!
