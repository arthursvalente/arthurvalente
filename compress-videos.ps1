# ==============================================================================
# Arthur Valente — Video compressor for web
# Downloads ffmpeg, compresses all .mp4 in animation/ to under ~25 MB each.
# Output goes to animation/optimized/ so originals are kept safe.
# Run: powershell -ExecutionPolicy Bypass -File compress-videos.ps1
# ==============================================================================

$ErrorActionPreference = "Stop"

$baseDir   = $PSScriptRoot
$animDir   = Join-Path $baseDir "animation"
$outDir    = Join-Path $animDir "optimized"
$toolsDir  = Join-Path $animDir "_tools"
$ffmpegZip = Join-Path $toolsDir "ffmpeg.zip"
$ffmpegExe = Join-Path $toolsDir "ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe"

# Make folders
foreach ($d in @($toolsDir, $outDir)) {
    if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d | Out-Null }
}

# Download ffmpeg if not present
if (-not (Test-Path $ffmpegExe)) {
    Write-Host "Downloading ffmpeg (~120 MB, only first time)..." -ForegroundColor Cyan
    $url = "https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
    Invoke-WebRequest -Uri $url -OutFile $ffmpegZip
    Write-Host "Extracting..." -ForegroundColor Cyan
    Expand-Archive -Path $ffmpegZip -DestinationPath $toolsDir -Force
    Remove-Item $ffmpegZip
    Write-Host "ffmpeg ready." -ForegroundColor Green
}

# Find all .mp4 files in animation/ (skip _tools and optimized subfolders)
$videos = Get-ChildItem -Path $animDir -Filter "*.mp4" -File
$total = $videos.Count
$i = 0
$totalSavedMB = 0

Write-Host ""
Write-Host "Compressing $total videos (target < 25 MB each, no audio, H.264, max 1920px wide, 30fps)..." -ForegroundColor Cyan
Write-Host ""

foreach ($video in $videos) {
    $i++
    $output = Join-Path $outDir $video.Name

    if (Test-Path $output) {
        Write-Host "[$i/$total] Skip (already optimized): $($video.Name)" -ForegroundColor DarkGray
        continue
    }

    $origMB = [math]::Round($video.Length / 1MB, 1)
    Write-Host "[$i/$total] $($video.Name) ($origMB MB) ..." -ForegroundColor Yellow -NoNewline

    # First pass: CRF 28 (good balance)
    & $ffmpegExe -hide_banner -loglevel error `
        -i $video.FullName `
        -c:v libx264 -preset slow -crf 28 `
        -vf "scale='min(1920,iw)':-2,fps=30" `
        -an -movflags +faststart `
        -y $output 2>$null

    $newMB = [math]::Round((Get-Item $output).Length / 1MB, 1)

    # If still over 25 MB, re-encode with more aggressive settings
    if ($newMB -gt 25) {
        Write-Host " ($newMB MB, redoing tighter)..." -NoNewline
        Remove-Item $output -Force
        & $ffmpegExe -hide_banner -loglevel error `
            -i $video.FullName `
            -c:v libx264 -preset slow -crf 32 `
            -vf "scale='min(1600,iw)':-2,fps=30" `
            -an -movflags +faststart `
            -y $output 2>$null
        $newMB = [math]::Round((Get-Item $output).Length / 1MB, 1)
    }

    $savedMB = $origMB - $newMB
    $pct = [math]::Round(($savedMB / $origMB) * 100, 0)
    $totalSavedMB += $savedMB

    if ($newMB -le 25) {
        Write-Host " -> $newMB MB (-$pct%)" -ForegroundColor Green
    } else {
        Write-Host " -> $newMB MB (-$pct%) STILL OVER 25" -ForegroundColor Magenta
    }
}

Write-Host ""
Write-Host "Done. Total saved: $([math]::Round($totalSavedMB, 1)) MB" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Check files in: $outDir"
Write-Host "  2. If quality is OK, replace originals:"
Write-Host "     Move-Item -Path '$outDir\*.mp4' -Destination '$animDir' -Force"
Write-Host "  3. Upload optimized .mp4 files to GitHub"
