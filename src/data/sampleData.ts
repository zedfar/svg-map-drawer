import { MapRegion } from '../types/map';
import svgUrl from './id.svg';

export const sampleRegions: MapRegion[] = [
  { "id": "ID11", "name": "Aceh", "color": "#10b981", "value": 11500 },
  { "id": "ID12", "name": "Sumatera Utara", "color": "#f59e0b", "value": 15000 },
  { "id": "ID13", "name": "Sumatera Barat", "color": "#3b82f6", "value": 8000 },
  { "id": "ID14", "name": "Riau", "color": "#ef4444", "value": 7500 },
  { "id": "ID15", "name": "Jambi", "color": "#8b5cf6", "value": 5500 },
  { "id": "ID16", "name": "Sumatera Selatan", "color": "#10b981", "value": 11000 },
  { "id": "ID17", "name": "Bengkulu", "color": "#f59e0b", "value": 4800 },
  { "id": "ID18", "name": "Lampung", "color": "#3b82f6", "value": 6500 },
  { "id": "ID19", "name": "Kepulauan Bangka Belitung", "color": "#ef4444", "value": 5000 },
  { "id": "ID21", "name": "Kepulauan Riau", "color": "#8b5cf6", "value": 4000 },
  { "id": "ID31", "name": "DKI Jakarta", "color": "#10b981", "value": 35000 },
  { "id": "ID32", "name": "Jawa Barat", "color": "#f59e0b", "value": 25000 },
  { "id": "ID33", "name": "Jawa Tengah", "color": "#3b82f6", "value": 22000 },
  { "id": "ID34", "name": "DI Yogyakarta", "color": "#ef4444", "value": 6000 },
  { "id": "ID35", "name": "Jawa Timur", "color": "#8b5cf6", "value": 26000 },
  { "id": "ID36", "name": "Banten", "color": "#10b981", "value": 18000 },
  { "id": "ID51", "name": "Bali", "color": "#f59e0b", "value": 9000 },
  { "id": "ID52", "name": "Nusa Tenggara Barat", "color": "#3b82f6", "value": 5000 },
  { "id": "ID53", "name": "Nusa Tenggara Timur", "color": "#ef4444", "value": 5200 },
  { "id": "ID61", "name": "Kalimantan Barat", "color": "#8b5cf6", "value": 8000 },
  { "id": "ID62", "name": "Kalimantan Tengah", "color": "#10b981", "value": 6000 },
  { "id": "ID63", "name": "Kalimantan Selatan", "color": "#f59e0b", "value": 7000 },
  { "id": "ID64", "name": "Kalimantan Timur", "color": "#3b82f6", "value": 7500 },
  { "id": "ID65", "name": "Kalimantan Utara", "color": "#ef4444", "value": 3500 },
  { "id": "ID71", "name": "Sulawesi Utara", "color": "#8b5cf6", "value": 4000 },
  { "id": "ID72", "name": "Sulawesi Tengah", "color": "#10b981", "value": 4500 },
  { "id": "ID73", "name": "Sulawesi Selatan", "color": "#f59e0b", "value": 16000 },
  { "id": "ID74", "name": "Sulawesi Tenggara", "color": "#3b82f6", "value": 3500 },
  { "id": "ID75", "name": "Gorontalo", "color": "#ef4444", "value": 3800 },
  { "id": "ID76", "name": "Sulawesi Barat", "color": "#8b5cf6", "value": 2500 },
  { "id": "ID81", "name": "Maluku", "color": "#10b981", "value": 3000 },
  { "id": "ID82", "name": "Maluku Utara", "color": "#f59e0b", "value": 3200 },
  { "id": "ID91", "name": "Papua", "color": "#3b82f6", "value": 10000 },
  { "id": "ID92", "name": "Papua Barat", "color": "#ef4444", "value": 4500 },
  { "id": "ID93", "name": "Papua Selatan", "color": "#8b5cf6", "value": 2000 },
  { "id": "ID94", "name": "Papua Tengah", "color": "#10b981", "value": 2100 },
  { "id": "ID95", "name": "Papua Pegunungan", "color": "#f59e0b", "value": 2300 },
  { "id": "ID96", "name": "Papua Barat Daya", "color": "#3b82f6", "value": 2200 }
];

export const sampleSVG = svgUrl

// export const sampleSVG = `
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
//   <rect id="region-1" x="300" y="50" width="200" height="150" fill="#cccccc" />
//   <path id="region-2" d="M 100 400 L 250 300 L 350 450 L 150 500 Z" fill="#cccccc" />
//   <circle id="region-3" cx="650" cy="300" r="100" fill="#cccccc" />
//   <polygon id="region-4" points="100,100 200,80 250,180 150,200" fill="#cccccc" />
//   <ellipse id="region-5" cx="400" cy="400" rx="120" ry="80" fill="#cccccc" />
// </svg>
// `;
