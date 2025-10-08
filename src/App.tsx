import { useState } from 'react';
import { Map, Upload, FileJson, Play } from 'lucide-react';
import SVGMap from './components/SVGMap';
import Legend from './components/Legend';
import { sampleRegions, sampleWorld } from './data/sampleData';
import { MapRegion } from './types/map';
import indonesiaSVG from '../public/indonesia.svg?raw';
import worldSVG from '../public/world.svg?raw';



function App() {
  const [availableSvgs] = useState(() => [
    { id: 'indonesia', name: 'Indonesia Map', file: indonesiaSVG, data: sampleRegions },
    { id: 'world', name: 'World Map', file: worldSVG, data: sampleWorld },
  ]);
  const [regions, setRegions] = useState<MapRegion[]>([]);
  const [svgContent, setSvgContent] = useState<string>('');
  const [svgUrl, setSvgUrl] = useState<string>('');
  const [tempSvgUrl, setTempSvgUrl] = useState<string>('');
  const [tempSvgFile, setTempSvgFile] = useState<string>('');
  const [selectedSvg, setSelectedSvg] = useState<string>('');
  const [jsonInput, setJsonInput] = useState<string>('');
  // JSON.stringify(sampleRegions, null, 2)

  const [error, setError] = useState<string>('');

  const [worldData] = useState<MapRegion[]>(() => sampleWorld);
  const [svgContentWolrd] = useState<string>(() => worldSVG);

  const [indonesiaData] = useState<MapRegion[]>(() => sampleRegions);
  const [svgContentIndonesia] = useState<string>(() => indonesiaSVG);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setTempSvgFile(content);
        setTempSvgUrl('');
        setSelectedSvg('');
      };
      reader.readAsText(file);
    }
  };

  const handleSvgSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const svgId = event.target.value;
    setSelectedSvg(svgId);
    setSvgContent("")
    setSvgUrl("")
    setJsonInput("")
    if (svgId) {
      const selected = availableSvgs.find(svg => svg.id === svgId);
      if (selected) {
        setTempSvgFile(selected.file);
        setTempSvgUrl('');
        setJsonInput(JSON.stringify(selected.data, null, 2))
      }
    }
  };

  // const handleUrlChange = (url: string) => {
  //   setSvgUrl(url);
  //   setSvgContent('');
  // };

  const handleRender = () => {
    setError('');

    if (!tempSvgUrl && !tempSvgFile) {
      setError('Please provide SVG URL or upload SVG file');
      return;
    }

    if (!jsonInput.trim()) {
      setError('Please provide JSON data');
      return;
    }

    try {
      const parsedData = JSON.parse(jsonInput);

      if (!Array.isArray(parsedData)) {
        setError('JSON must be an array of objects');
        return;
      }

      const validData = parsedData.every(
        (item) =>
          item.id &&
          item.name &&
          item.color &&
          typeof item.value === 'number'
      );

      if (!validData) {
        setError('Each object must have: id, name, color, and value (number)');
        return;
      }

      setRegions(parsedData);

      if (tempSvgFile) {
        setSvgContent(tempSvgFile);
        setSvgUrl('');
      } else if (tempSvgUrl) {
        setSvgUrl(tempSvgUrl);
        setSvgContent('');
      }

      setError('');
    } catch (e) {
      setError('Invalid JSON format: ' + (e as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Map className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">SVG Map Renderer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <FileJson className="w-5 h-5" />
              Configure Map Data
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Predefined SVG
                  </label>
                  <select
                    value={selectedSvg}
                    onChange={handleSvgSelect}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">-- Choose a map --</option>
                    {availableSvgs.map(svg => (
                      <option key={svg.id} value={svg.id}>{svg.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    SVG URL
                  </label>
                  <input
                    type="text"
                    value={tempSvgUrl}
                    onChange={(e) => setTempSvgUrl(e.target.value)}
                    placeholder="https://example.com/map.svg"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Or Upload SVG File
                  </label>
                  <label className="cursor-pointer">
                    <div className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                      <Upload className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-600">
                        {tempSvgFile ? 'SVG Uploaded ✓' : 'Click to Upload'}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept=".svg,image/svg+xml"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Region Data (JSON)
                </label>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder={`[\n  {\n    "id": "region-1",\n    "name": "Region Name",\n    "color": "#3b82f6",\n    "value": 12500\n  }\n]`}
                  rows={8}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-mono text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleRender}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5" />
                Render Map
              </button>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {svgContent && (
              <>
                <div className="lg:col-span-3">
                  <div className="h-[600px]">
                    <SVGMap
                      regions={regions}
                      svgUrl={svgUrl}
                      svgContent={svgContent}
                    />
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
                    <p className="text-sm text-slate-600">
                      <strong>Tips:</strong> Hover over regions to see details. Click to zoom in/out.
                      Ensure your SVG elements have IDs matching the region data.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="h-[600px]">
                    <Legend regions={regions} />
                  </div>
                </div>
              </>
            )}
          </div>




          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="h-[600px]">
                <SVGMap
                  regions={indonesiaData}
                  svgUrl={''}
                  svgContent={svgContentIndonesia}
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="h-[600px]">
                <Legend regions={indonesiaData} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="h-[800px]">
                <SVGMap
                  regions={worldData}
                  svgUrl={''}
                  svgContent={svgContentWolrd}
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="h-[800px]">
                <Legend regions={worldData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
