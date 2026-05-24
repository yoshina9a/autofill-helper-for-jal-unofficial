# Publishing Checklist

## Local Test

1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Click "Load unpacked".
4. Select this repository folder.
5. Open the JAL login page.
6. Confirm the JMB number field receives `autocomplete="username"`.
7. Confirm Bitwarden or browser autofill can recognize the field.

## Package

From this repository root:

```sh
zip -r dist/autofill-helper-for-jal-unofficial.zip \
  manifest.json \
  content.js \
  icons/icon-16.png \
  icons/icon-32.png \
  icons/icon-48.png \
  icons/icon-128.png
```

The ZIP must contain `manifest.json` at its root.

## Chrome Web Store

Use the Chrome Web Store developer account you intend to publish from.

Upload:

- extension ZIP
- store icon
- screenshots
- short description
- detailed description
- privacy policy URL

## Privacy Policy URL

Use the public GitHub URL for `PRIVACY.md`, or a GitHub Pages page generated from it.

## Notes

Do not use JAL logos, official icons, or official screenshots unless you have permission.
