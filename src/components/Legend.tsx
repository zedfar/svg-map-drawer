import { MapRegion } from '../types/map';

interface LegendProps {
  regions: MapRegion[];
}

export default function Legend({ regions }: LegendProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Regions</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {regions.map(region => (
          <div key={region.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded transition-colors">
            <div
              className="w-6 h-6 rounded border-2 border-slate-300 flex-shrink-0"
              style={{ backgroundColor: region.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-slate-800 truncate">{region.name}</div>
              <div className="text-xs text-slate-500">Value: {region.value.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
