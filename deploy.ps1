# deploy.ps1 — gutachten-ai.de
# Ablegen in: C:\Users\BuelentDuezg_infyny6\gutachten-ai\
#
# USAGE:
# .\deploy.ps1 -src "page-mobile.tsx" -dest "gutachten-ai\app\page.tsx" -message "feat: add mobile hero"
# .\deploy.ps1 -src "layout-perf.tsx" -dest "gutachten-ai\app\layout.tsx" -message "fix: performance layout"
# .\deploy.ps1 -message "feat: add images" # nur pushen, kein copy

param(
    [string]$src = "",
    [string]$dest = "",
    [Parameter(Mandatory=$true)]
    [string]$message
)

$root = "C:\Users\BuelentDuezg_infyny6\gutachten-ai"
Set-Location $root

if ($src -ne "" -and $dest -ne "") {
    Write-Host "Kopiere $src -> $dest" -ForegroundColor Cyan
    Copy-Item -Path $src -Destination $dest -Force
}

git add .
git commit -m $message
git push

Write-Host "✅ Deployed: $message" -ForegroundColor Green
