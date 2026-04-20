$icons = @(
  "shield","dns","lock","policy","person_check","verified",
  "folder_open","inventory_2","quiz","mic","auto_awesome",
  "sim_card_download","warning","close","check","create_new_folder",
  "upload_file","picture_as_pdf","gavel","engineering","account_balance",
  "done_all","architecture","light_mode","dark_mode","arrow_forward",
  "arrow_back","check_circle","send","rocket_launch","security",
  "settings_input_component","timer","map","verified_user","menu"
)

$dest = ".\public\icons"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

foreach ($icon in $icons) {
  $url = "https://raw.githubusercontent.com/google/material-design-icons/master/symbols/web/$icon/materialsymbolsoutlined/${icon}_24px.svg"
  $out = "$dest\${icon}.svg"
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -ErrorAction Stop
    Write-Host "OK: $icon"
  } catch {
    Write-Host "FEHLER: $icon - $_"
  }
}

Write-Host "Fertig."
