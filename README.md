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

## 📦 Installation

### NPM
```bash
npm install svg-map-drawer
```

### CDN
Gunakan skrip berikut di HTML Anda:
```html
<script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist-app/svg-map.bundle.umd.js"></script>
```

---

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

## 📜 License
<!-- MIT © [Your Name](https://github.com/yourusername) -->