@echo off
REM Script to check file sizes of videos and images (Windows)
REM Run with: check-file-sizes.bat

echo ================================================
echo 📊 Checking File Sizes in /public folder
echo ================================================
echo.

echo 🎬 VIDEO FILES:
echo ------------------------------------------------
dir public\*.mp4 2>nul
if errorlevel 1 (
    echo No MP4 files found
)
echo.

echo 🖼️  IMAGE FILES (PNG):
echo ------------------------------------------------
dir public\*.png 2>nul
if errorlevel 1 (
    echo No PNG files found
)
echo.

echo 🖼️  IMAGE FILES (JPG):
echo ------------------------------------------------
dir public\*.jpg 2>nul
if errorlevel 1 (
    echo No JPG files found
)
echo.

echo ================================================
echo ⚠️  RECOMMENDATIONS:
echo ================================================
echo Videos should be: ^< 5MB each
echo Images should be: ^< 200KB each
echo.
echo If files are larger, compress them using:
echo - Videos: HandBrake (https://handbrake.fr/)
echo - Images: Squoosh (https://squoosh.app/)
echo ================================================
pause
