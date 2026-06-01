# ==============================================================================
# Arthur Valente — JPG to WebP converter
# Downloads cwebp (Google) if needed, converts all JPGs to WebP at quality 85.
# Run with: powershell -ExecutionPolicy Bypass -File convert-webp.ps1
# ==============================================================================

$ErrorActionPreference = "Stop"

$cwebpUrl = "https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.3.2-windows-x64.zip"
$libwebpZip = Join-Path $PSScriptRoot "libwebp.zip"
$libwebpDir = Join-Path $PSScriptRoot "libwebp"
$cwebp = Join-Path $libwebpDir "libwebp-1.3.2-windows-x64\bin\cwebp.exe"

# Download cwebp if not present
if (-not (Test-Path $cwebp)) {
    Write-Host "Downloading cwebp from Google..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $cwebpUrl -OutFile $libwebpZip
    Write-Host "Extracting..."
    Expand-Archive -Path $libwebpZip -DestinationPath $libwebpDir -Force
    Remove-Item $libwebpZip
    Write-Host "cwebp ready at $cwebp" -ForegroundColor Green
}

# Find all JPGs in this folder
$jpgs = Get-ChildItem -Path $PSScriptRoot -Filter "*.jpg" -File
$total = $jpgs.Count
$totalSaved = 0
$i = 0

Write-Host ""
Write-Host "Converting $total JPG files to WebP (quality 85)..." -ForegroundColor Cyan
Write-Host ""

foreach ($jpg in $jpgs) {
    $i++
    $webp = $jpg.FullName -replace '\.jpg$', '.webp'

    if (Test-Path $webp) {
        Write-Host "[$i/$total] Skip (already exists): $($jpg.Name)" -ForegroundColor DarkGray
        continue
    }

    & $cwebp -q 85 -quiet $jpg.FullName -o $webp

    $origKB = [math]::Round((Get-Item $jpg.FullName).Length / 1KB, 0)
    $newKB  = [math]::Round((Get-Item $webp).Length / 1KB, 0)
    $savedKB = $origKB - $newKB
    $pct = [math]::Round(($savedKB / $origKB) * 100, 0)
    $totalSaved += $savedKB

    Write-Host "[$i/$total] $($jpg.Name) -> $newKB KB (was $origKB KB, -$pct%)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Done. Total saved: $([math]::Round($totalSaved / 1024, 1)) MB" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Upload all .webp files to your GitHub repo"
Write-Host "  2. Original .jpg files stay (used as fallback for old browsers)"
Write-Host "  3. The code already uses <picture> with WebP first, JPG fallback"
