export interface MapRegion {
  id: string;
  name: string;
  color: string;
  value: number;
}

export interface MapData {
  regions: MapRegion[];
  svgUrl?: string;
  svgContent?: string;
}
