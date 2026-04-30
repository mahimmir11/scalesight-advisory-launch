#!/bin/bash

# Script to check file sizes of videos and images
# Run with: bash check-file-sizes.sh

echo "================================================"
echo "📊 Checking File Sizes in /public folder"
echo "================================================"
echo ""

echo "🎬 VIDEO FILES:"
echo "------------------------------------------------"
if ls public/*.mp4 1> /dev/null 2>&1; then
    ls -lh public/*.mp4 | awk '{print $9 " - " $5}'
    echo ""
    TOTAL_VIDEO=$(du -sh public/*.mp4 2>/dev/null | awk '{sum+=$1} END {print sum}')
    echo "Total Video Size: ${TOTAL_VIDEO}MB"
else
    echo "No MP4 files found"
fi

echo ""
echo "🖼️  IMAGE FILES (PNG):"
echo "------------------------------------------------"
if ls public/*.png 1> /dev/null 2>&1; then
    ls -lh public/*.png | awk '{print $9 " - " $5}'
else
    echo "No PNG files found"
fi

echo ""
echo "🖼️  IMAGE FILES (JPG):"
echo "------------------------------------------------"
if ls public/*.jpg 1> /dev/null 2>&1; then
    ls -lh public/*.jpg | awk '{print $9 " - " $5}'
else
    echo "No JPG files found"
fi

echo ""
echo "================================================"
echo "⚠️  RECOMMENDATIONS:"
echo "================================================"
echo "Videos should be: < 5MB each"
echo "Images should be: < 200KB each"
echo ""
echo "If files are larger, compress them using:"
echo "- Videos: HandBrake (https://handbrake.fr/)"
echo "- Images: Squoosh (https://squoosh.app/)"
echo "================================================"
