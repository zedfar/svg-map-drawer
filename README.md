# 📍 svg-map-drawer

**Interactive SVG Map Component for React**  
Mudah dipakai, mendukung zoom, tooltip, dan custom warna setiap region.

<p align="center">
  <img src="https://cdn.jsdelivr.net/npm/svg-map-drawer@latest/dist/preview-img.png" alt="Preview" width="80%">
</p>

---

## ✨ Features
- 🗺️ Render peta berbasis SVG  
- 🎨 Custom warna tiap region  
- 🔍 Zoom & pan interaktif  
- 💬 Tooltip untuk info tambahan  
- ⚡ Bisa dipakai via **React (npm)** atau **CDN**  

---

### 1️⃣ Install package utama
```bash
npm install svg-map-drawer
```

### 2️⃣ Install peer dependencies (wajib)
Library ini membutuhkan `react`, `react-dom`, `lucide-react`, dan `tailwindcss`.

Jika belum ada di proyekmu, jalankan:
```bash
npm install react react-dom lucide-react tailwindcss
```

> 💡 Jika kamu sudah punya `react` dan `tailwindcss` di proyek, cukup pastikan versinya sesuai (`React >=18`, `Tailwind >=3`).

---

## ⚙️ Tailwind Setup (jika belum ada)

Jika kamu belum mengatur Tailwind di proyekmu, lakukan langkah cepat ini:

1. Inisialisasi Tailwind:
   ```bash
   npx tailwindcss init -p
   ```

2. Edit `tailwind.config.js`:
   ```js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/svg-map-drawer/dist/**/*.{js,ts,jsx,tsx}"
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. Tambahkan direktif Tailwind ke file CSS utama (misalnya `src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Pastikan file CSS di-import di `main.tsx` atau `index.tsx`:
   ```tsx
   import './index.css';
   ```

---


### CDN
Gunakan skrip berikut di HTML Anda:
```html
<script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist-app/svg-map.bundle.umd.js"></script>
```


## 🌐 CDN Usage (tanpa React bundler)

Kalau kamu ingin langsung pakai dari browser tanpa setup React build:

```html
<!-- React dan ReactDOM -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- SVG Map Drawer -->
<script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist/svg-map.umd.js"></script>

<div id="svg-map-root"></div>

<script>
  const regions = [
    { id: "ID31", name: "Jakarta", color: "#10b981", value: 35000 },
    { id: "ID32", name: "Jawa Barat", color: "#f59e0b", value: 25000 },
  ];

  const svgMap = React.createElement(SVGMap, { 
    svgUrl: "./indonesia.svg", 
    regions 
  });

  ReactDOM.createRoot(document.getElementById("svg-map-root")).render(svgMap);
</script>
```

---


## 🌐 CDN Usage (dengan React bundler)
# 🌍 SVG Map Drawer Demo (Indonesia Map)

Demo sederhana untuk menampilkan dan mengonfigurasi peta interaktif **Indonesia** menggunakan **`svg-map-drawer`** via CDN.

## 🚀 Getting Started

Untuk menjalankan demo ini, cukup buat satu file HTML dan buka di browser.

### 📋 Prerequisites
Pastikan koneksi internet aktif untuk memuat resource berikut:
- **`tailwindcss`** (styling)
- **`svg-map-drawer`** (library utama)
- **`indonesia.svg`** (data SVG peta)

---

## 🧱 HTML Structure (`index.html`)

Salin kode berikut ke dalam file `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SVG Map Demo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    #map-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  </style>
</head>

<body>
  <div id="map-container">
    <h1 class="text-2xl font-bold mb-4">Indonesia Region Data Map</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist-app/svg-map.bundle.umd.js"></script>

  <script>
    // Contoh data provinsi Indonesia
    const regions = [
      { "id": "ID11", "name": "Aceh", "color": "#10b981", "value": 11500 },
      { "id": "ID12", "name": "Sumatera Utara", "color": "#f59e0b", "value": 15000 },
      { "id": "ID13", "name": "Sumatera Barat", "color": "#3b82f6", "value": 8000 },
      { "id": "ID14", "name": "Riau", "color": "#ef4444", "value": 7500 },
      { "id": "ID15", "name": "Jambi", "color": "#8b5cf6", "value": 5500 },
      { "id": "ID16", "name": "Sumatera Selatan", "color": "#10b981", "value": 11000 },
    ];

    const container = document.getElementById("map-container");
    const root = SVGMap.ReactDOM.createRoot(container);

    root.render(
      SVGMap.React.createElement(SVGMap.default, {
        regions,
        svgUrl: "https://cdn.jsdelivr.net/npm/svg-map-drawer/dist/indonesia.svg"
      })
    );
  </script>
</body>
</html>
```

---


## 🧠 Troubleshooting

### ❌ Error: “A React Element from an older version of React was rendered”
➡️ Terjadi karena versi React berbeda antara app dan library.  
**Solusi:** Pastikan `react` dan `react-dom` hanya diinstal sekali (gunakan `npm ls react` untuk memeriksa).

### ❌ Styling Tailwind tidak muncul
➡️ Pastikan `node_modules/svg-map-drawer/dist/**/*` disertakan di `tailwind.config.js` → `content`.

---

## 📜 License

MIT © [defazr](https://github.com/zedfar)

---

## 🌍 Homepage

🔗 [Demo & Dokumentasi](https://svg-map-drawer.netlify.app/)  
🔗 [GitHub Repository](https://github.com/zedfar/svg-map-drawer)
