import { MapRegion } from '../types/map';

interface TooltipProps {
  region: MapRegion;
  position: { x: number; y: number };
}

export default function Tooltip({ region, position }: TooltipProps) {
  return (
    <div
      className="fixed z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl pointer-events-none border border-slate-700"
      style={{
        left: `${position.x + 15}px`,
        top: `${position.y + 15}px`,
        transform: 'translate(0, -50%)'
      }}
    >
      <div className="space-y-1">
        <div className="font-semibold text-sm">{region.name}</div>
        <div className="text-xs text-slate-300">ID: {region.id}</div>
        <div className="text-sm font-medium text-blue-300">Value: {region.value.toLocaleString()}</div>
      </div>
    </div>
  );
}
