# 📍 svg-map-drawer

**Interactive SVG Map Component for React**  
Easy to use, supports zoom, tooltips, and custom colors for each region.

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/image/preview/preview-img-1.png" alt="Preview" width="80%">
</p>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/image/preview/preview-img-2.png" alt="Preview" width="80%">
</p>

---


## SVG Image List
A list of SVG maps with direct links.

### List
1. **Indonesia Map**
   * Direct link: [https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg](https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg)
2. **World Map**
   * Direct link: [https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/world.svg](https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/world.svg)
3. **Quick Access**
   * Map SVGs: [https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/](https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/)

### Notes
* Both files are served from the `jsdelivr` CDN (package `svg-map-drawer`). Make sure your internet connection or hosting allows loading from this CDN.
* If you want to store local copies, download the SVG files and include them in your repository, then update the `src`/link paths accordingly.

---


## ✨ Features

- 🗺️ Render SVG-based maps
- 🎨 Custom colors per region
- 🔍 Interactive zoom & pan
- 💬 Tooltips for additional info
- ⚡ Available via **React (npm)** or **CDN**

---

## 📦 Installation

### 1️⃣ Install the main package

```bash
npm install svg-map-drawer
```

### 2️⃣ Install peer dependencies (required)

This library requires `react`, `react-dom`, and `tailwindcss`.

If you don't have them in your project yet, run:

```bash
npm install react react-dom tailwindcss
```

> 💡 If you already have `react` and `tailwindcss` in your project, just make sure the versions are compatible (`React >=18`, `Tailwind >=3`).

---

## ⚙️ Tailwind Setup

If you haven't set up Tailwind in your project yet, follow these quick steps:

### 1. Initialize Tailwind

```bash
npx tailwindcss init -p
```

### 2. Configure `tailwind.config.js`

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

### 3. Add Tailwind directives to your main CSS file

Example in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Import the CSS file

Make sure to import it in your `main.tsx` or `index.tsx`:

```tsx
import './index.css';
```

---

## 🚀 Usage

### React Component (NPM)

```jsx
import SVGMap from 'svg-map-drawer';

const regions = [
  { id: "ID31", name: "Jakarta", color: "#10b981", value: 35000 },
  { id: "ID32", name: "West Java", color: "#f59e0b", value: 25000 },
];

function App() {
  return (
    <SVGMap 
      svgUrl="./indonesia.svg" 
      regions={regions}
    />
  );
}
```

### CDN Usage (Standalone)

Use this script in your HTML if you want to use it without a React bundler:

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
    // Example data for Indonesian provinces
    const regions = [
      { "id": "ID11", "name": "Aceh", "color": "#10b981", "value": 11500 },
      { "id": "ID12", "name": "North Sumatra", "color": "#f59e0b", "value": 15000 },
      { "id": "ID13", "name": "West Sumatra", "color": "#3b82f6", "value": 8000 },
      { "id": "ID14", "name": "Riau", "color": "#ef4444", "value": 7500 },
      { "id": "ID15", "name": "Jambi", "color": "#8b5cf6", "value": 5500 },
      { "id": "ID16", "name": "South Sumatra", "color": "#10b981", "value": 11000 },
    ];

    const container = document.getElementById("map-container");
    const root = SVGMap.ReactDOM.createRoot(container);

    root.render(
      SVGMap.React.createElement(SVGMap.default, {
        regions,
        svgUrl: "https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/indonesia.svg"
      })
    );
  </script>
</body>
</html>
```

---

## 🔧 API Reference

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `svgUrl` | `string` | Yes | URL to the SVG map file |
| `regions` | `Array<Region>` | Yes | Array of region data objects |

### Region Object

```typescript
{
  id: string;      // Region ID (must match SVG path id)
  name: string;    // Display name
  color: string;   // Hex color code
  value: number;   // Numeric value for tooltip
}
```

---

## 🧠 Troubleshooting

### ❌ Error: "A React Element from an older version of React was rendered"

This occurs when there's a version mismatch between your app's React and the library's React.

**Solution:** Ensure `react` and `react-dom` are only installed once. Check with:

```bash
npm ls react
```

If you see duplicates, remove them from the library's dependencies.

### ❌ Tailwind styling not appearing

Make sure `node_modules/svg-map-drawer/dist/**/*` is included in your `tailwind.config.js` → `content` array.

### ❌ Map not rendering

- Verify the SVG URL is correct and accessible
- Check that region IDs in your data match the `id` attributes in the SVG file
- Open browser console to check for error messages

---

## 📜 License

MIT © [defazr](https://github.com/zedfar)

---

## 🔗 Links

- 🌍 [Demo & Documentation](https://svg-map-drawer.netlify.app/)
- 💻 [GitHub Repository](https://github.com/zedfar/svg-map-drawer)
- 📦 [npm Package](https://www.npmjs.com/package/svg-map-drawer)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Support

If you find this project helpful, please give it a star on GitHub!