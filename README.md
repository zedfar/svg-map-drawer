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

```bash
import SVGMap from "svg-map-drawer";
import mapSVG from "./indonesia.svg?raw";

function App() {
  const regions = [
    { id: "ID31", name: "Jakarta", color: "#10b981", value: 35000 },
    { id: "ID32", name: "Jawa Barat", color: "#f59e0b", value: 25000 },
  ];

  return <SVGMap svgUrl={mapSVG} regions={regions} />;
}
```

### CDN
Gunakan skrip berikut di HTML Anda:
```html
<script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist-app/svg-map.bundle.umd.js"></script>
```


### CDN V2
Gunakan skrip berikut di HTML Anda:
```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/svg-map-drawer/dist-app/svg-map.bundle.umd.js"></script>

<div id="map-container"></div>

<script>
  const regions = [{ id: "ID31", name: "Jakarta", color: "#10b981" }];
  const root = ReactDOM.createRoot(document.getElementById("map-container"));
  root.render(React.createElement(SVGMap, { svgUrl: "indonesia.svg", regions }));
</script>

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
MIT License

Copyright (c) 2025 zedfar <ulfar.far@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.