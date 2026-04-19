# Saan Napunta? 🇵🇭
### Imus City, Cavite · Open Government Budget Tracker

A free, offline-ready civic transparency web app for Imuseños.
Track your city's budget, officials, and projects — down to the centavo.

---

## 📁 Folder Structure

```
saan-napunta/
├── index.html              ← Main app (all 5 tabs)
├── manifest.json           ← PWA config (makes it installable)
├── sw.js                   ← Service worker (offline support)
├── README.md               ← This file
├── icons/
│   ├── icon-192.png        ← App icon (replace with your own)
│   └── icon-512.png        ← App icon large (replace with your own)
└── images/
    └── officials/
        ├── mayor-aa.jpg          ← Mayor Alex Advincula photo
        ├── vm-saquilayan.jpg     ← Vice Mayor Homer Saquilayan photo
        ├── councilor-jaro.jpg    ← Hon. Shernan Jaro
        ├── councilor-yen.jpg     ← Hon. Lloren Saquilayan
        ├── councilor-nato.jpg    ← Hon. Larry Nato
        ├── councilor-maliksi.jpg ← Hon. Jogie Lyn Maliksi
        ├── councilor-lacson.jpg  ← Hon. Dennis Lacson
        ├── councilor-remulla.jpg ← Hon. Darwin Remulla
        ├── councilor-villanueva.jpg ← Hon. Mark Villanueva
        ├── councilor-comia.jpg   ← Hon. Sherwin Comia
        ├── councilor-lara.jpg    ← Hon. Peter Emmanuel Lara
        ├── councilor-asistio.jpg ← Hon. Enzo Asistio
        ├── councilor-ocampo.jpg  ← Hon. Gregorio Ocampo Jr.
        └── councilor-sapitan.jpg ← Hon. David Sapitan Jr.
```

> **Note:** If photos are missing, the app automatically shows initials instead. Add photos anytime by dropping JPG files into `images/officials/` with the exact filenames above.

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and log in
2. Click the **+** button → **New repository**
3. Name it: `saan-napunta`
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload all files
1. Inside your new repository, click **"uploading an existing file"**
2. Drag and drop the entire contents of this folder
3. Make sure you upload ALL files including subfolders (`icons/`, `images/`)
4. Scroll down, write a commit message like `Initial upload` and click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under "Branch," select **main** and click **Save**
4. Wait 2–3 minutes

### Step 4 — Your app is live! 🎉
Your URL will be:
```
https://[your-github-username].github.io/saan-napunta
```

Share this link with fellow Imuseños!

---

## 📱 How Filipinos Can "Install" the App (No App Store Needed)

### On Android (Chrome):
1. Open the URL in Chrome
2. Tap the **3-dot menu** → **"Add to Home screen"**
3. Tap **Add** → Done! It appears on the home screen like a real app

### On iPhone (Safari):
1. Open the URL in Safari
2. Tap the **Share button** (box with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add** → Done!

---

## 🖼️ Adding Official Photos

1. Download official photos from [cityofimus.gov.ph](https://cityofimus.gov.ph/city_council.html)
2. Rename each photo to match the filenames in `images/officials/`
3. Go to your GitHub repository → `images/officials/` folder
4. Click **"Add file" → "Upload files"**
5. Upload the photos — the app will show them automatically

---

## 🗺️ Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| 1 | ✅ Done | Web App MVP — Officials, Budget, Barangay, Flag It |
| 2 | ✅ Done | PWA — Installable from browser, offline support |
| 3 | 🔜 Next | Live DILG data feed from Full Disclosure Policy portal |
| 4 | 🔜 Future | Android & iOS native apps |
| 5 | 🔜 Future | Expand to all Cavite LGUs |

---

## ⚠️ Disclaimer

This is an **independent civic technology project**. We are not affiliated with the City Government of Imus. All data is sourced from public government disclosures (DILG FDP, DBM, COA). Budget figures are estimates based on official LGU memoranda pending final disclosure.

---

## 📄 License

Open source — feel free to fork and adapt for your own LGU. 🇵🇭
