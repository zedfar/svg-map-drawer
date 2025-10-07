import { useState, useEffect, useRef } from 'react';
import { Home, Plus, Minus } from 'lucide-react';
import { MapRegion } from '../types/map';
import Tooltip from './Tooltip';

interface SVGMapProps {
  regions: MapRegion[];
  svgUrl?: string;
  svgContent?: string;
}

export default function SVGMap({ regions, svgUrl, svgContent }: SVGMapProps) {
  const [svg, setSvg] = useState<string>('');
  const [hoveredRegion, setHoveredRegion] = useState<MapRegion | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [zoomedRegion, setZoomedRegion] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | any>(null);
  const labelsGroupRef = useRef<SVGGElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (svgContent) {
      setSvg(svgContent);
    } else if (svgUrl) {
      fetch(svgUrl)
        .then(res => res.text())
        .then(data => setSvg(data))
        .catch(err => console.error('Error loading SVG:', err));
    }
  }, [svgUrl, svgContent]);

  useEffect(() => {
    if (!svg || !containerRef.current) return;

    const container = containerRef.current;
    const svgElement = container.querySelector('svg');

    if (!svgElement) return;

    svgRef.current = svgElement;

    regions.forEach(region => {
      const element: any = svgElement.querySelector(`#${region.id}`) ||
        svgElement.querySelector(`[id="${region.id}"]`) ||
        svgElement.querySelector(`[data-id="${region.id}"]`);

      if (element) {
        element.setAttribute('fill', region.color);
        element.style.cursor = 'pointer';
        element.style.transition = 'all 0.3s ease';
        element.style.strokeWidth = '1';
        element.style.stroke = '#ffffff';

        const handleMouseEnter = (e: MouseEvent) => {
          setHoveredRegion(region);
          setTooltipPosition({ x: e.clientX, y: e.clientY });
          element.style.opacity = '0.8';
          element.style.filter = 'brightness(1.2)';
        };

        const handleMouseMove = (e: MouseEvent) => {
          setTooltipPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseLeave = () => {
          setHoveredRegion(null);
          element.style.opacity = '1';
          element.style.filter = 'brightness(1)';
        };

        const handleClick = () => {
          if (zoomedRegion === region.id) {
            setZoomedRegion(null);
            resetZoom();
          } else {
            setZoomedRegion(region.id);
            zoomToElement(element as SVGElement, region);
          }
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('click', handleClick);
      }
    });

    svgRef.current.addEventListener('dblclick', function () {
      resetZoom();
    });
    // svgRef.current.addEventListener('click', function () {
    //   resetZoom();
    // });
  }, [svg, regions]);




  const animateViewBox = (
    fromViewBox: { x: number; y: number; width: number; height: number },
    toViewBox: { x: number; y: number; width: number; height: number },
    duration: number = 500,
    onComplete?: () => void
  ) => {
    if (!svgRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const svgElement = svgRef.current;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-in-out)
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const x = fromViewBox.x + (toViewBox.x - fromViewBox.x) * eased;
      const y = fromViewBox.y + (toViewBox.y - fromViewBox.y) * eased;
      const width = fromViewBox.width + (toViewBox.width - fromViewBox.width) * eased;
      const height = fromViewBox.height + (toViewBox.height - fromViewBox.height) * eased;

      svgElement.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const zoomToElement = (element: SVGElement | any, region: any = {}) => {
    if (!svgRef.current) return;

    let labelsGroup = labelsGroupRef.current;


    if (!labelsGroup) {
      labelsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      labelsGroup.setAttribute('id', 'labels-group');
      svgRef.current.appendChild(labelsGroup);
      labelsGroupRef.current = labelsGroup;
    }

    labelsGroup.innerHTML = '';

    const bbox = element.getBBox();
    const svgElement = svgRef.current;

    const currentViewBox = svgElement.viewBox.baseVal;
    const fromViewBox = {
      x: currentViewBox.x,
      y: currentViewBox.y,
      width: currentViewBox.width,
      height: currentViewBox.height
    };

    const scale = Math.min(
      currentViewBox.width / (bbox.width * 1.5),
      currentViewBox.height / (bbox.height * 1.5)
    );

    const newWidth = currentViewBox.width / scale;
    const newHeight = currentViewBox.height / scale;
    const x = bbox.x + bbox.width / 2 - newWidth / 2;
    const y = bbox.y + bbox.height / 2 - newHeight / 2;

    const toViewBox = { x, y, width: newWidth, height: newHeight };
    // svgElement.setAttribute('viewBox', `${x} ${y} ${newWidth} ${newHeight}`);
    // setZoomLevel(scale);

    animateViewBox(fromViewBox, toViewBox, 600, () => {
      setZoomLevel(scale);
    });


    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', centerX.toString());
    text.setAttribute('y', centerY.toString());
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', '#ffffff');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('pointer-events', 'none');
    text.style.textShadow = '0 0 3px black';



    const nameSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    nameSpan.textContent = region.name;

    // pecah teks panjang berdasarkan spasi
    // const words = nameSpan.textContent.split(/\s+/);


    nameSpan.setAttribute('x', centerX.toString());
    nameSpan.setAttribute('dy', '0');
    text.appendChild(nameSpan);

    labelsGroup!.appendChild(text);
  };



  const resetZoom = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;
    const originalViewBox = svgElement.getAttribute('data-original-viewbox');

    let labelsGroup = labelsGroupRef.current;

    if (!labelsGroup) {
      labelsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      labelsGroup.setAttribute('id', 'labels-group');
      svgRef.current.appendChild(labelsGroup);
      labelsGroupRef.current = labelsGroup;
    }

    labelsGroup.innerHTML = '';

    if (originalViewBox) {
      // svgElement.setAttribute('viewBox', originalViewBox);
      // setZoomLevel(1);
      // setZoomedRegion(null);

      const currentViewBox = svgElement.viewBox.baseVal;
      const fromViewBox = {
        x: currentViewBox.x,
        y: currentViewBox.y,
        width: currentViewBox.width,
        height: currentViewBox.height
      };

      const parts = originalViewBox.split(' ').map(Number);
      const toViewBox = {
        x: parts[0],
        y: parts[1],
        width: parts[2],
        height: parts[3]
      };

      animateViewBox(fromViewBox, toViewBox, 500, () => {
        setZoomLevel(1);
        setZoomedRegion(null);
        // hideLabels();
      });
    }
  };


  const zoomIn = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;
    const currentViewBox = svgElement.viewBox.baseVal;
    const scale = 1.3;

    // const newWidth = viewBox.width / scale;
    // const newHeight = viewBox.height / scale;
    // const x = viewBox.x + (viewBox.width - newWidth) / 2;
    // const y = viewBox.y + (viewBox.height - newHeight) / 2;

    const fromViewBox = {
      x: currentViewBox.x,
      y: currentViewBox.y,
      width: currentViewBox.width,
      height: currentViewBox.height
    };

    const newWidth = currentViewBox.width / scale;
    const newHeight = currentViewBox.height / scale;
    const x = currentViewBox.x + (currentViewBox.width - newWidth) / 2;
    const y = currentViewBox.y + (currentViewBox.height - newHeight) / 2;

    const toViewBox = { x, y, width: newWidth, height: newHeight };

    // svgElement.setAttribute('viewBox', `${x} ${y} ${newWidth} ${newHeight}`);
    // setZoomLevel(prev => prev * scale);

    const newZoomLevel = zoomLevel * scale;
    animateViewBox(fromViewBox, toViewBox, 300, () => {
      setZoomLevel(newZoomLevel);
      // if (newZoomLevel > 1.5) showLabels();
    });
  };

  const zoomOut = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;
    const currentViewBox = svgElement.viewBox.baseVal;
    const scale = 0.77;

    const newZoomLevel = zoomLevel * scale;

    if (newZoomLevel < 1) {
      resetZoom();
      return;
    }

    // const newWidth = viewBox.width / scale;
    // const newHeight = viewBox.height / scale;
    // const x = viewBox.x + (viewBox.width - newWidth) / 2;
    // const y = viewBox.y + (viewBox.height - newHeight) / 2;


    const fromViewBox = {
      x: currentViewBox.x,
      y: currentViewBox.y,
      width: currentViewBox.width,
      height: currentViewBox.height
    };

    const newWidth = currentViewBox.width / scale;
    const newHeight = currentViewBox.height / scale;
    const x = currentViewBox.x + (currentViewBox.width - newWidth) / 2;
    const y = currentViewBox.y + (currentViewBox.height - newHeight) / 2;

    const toViewBox = { x, y, width: newWidth, height: newHeight };

    animateViewBox(fromViewBox, toViewBox, 300, () => {
      setZoomLevel(newZoomLevel);
      // if (newZoomLevel <= 1.5) hideLabels();
    });

    // svgElement.setAttribute('viewBox', `${x} ${y} ${newWidth} ${newHeight}`);

    // setZoomLevel(newZoomLevel);
  };


  useEffect(() => {
    if (svgRef.current && !svgRef.current.getAttribute('data-original-viewbox')) {
      const viewBox = svgRef.current.getAttribute('viewBox');
      if (viewBox) {
        svgRef.current.setAttribute('data-original-viewbox', viewBox);
      }
    }
  }, [svg]);

  return (
    <>
      <div className="relative w-full h-full">
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center bg-slate-50 rounded-lg shadow-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={resetZoom}
            className="p-3 bg-white rounded-lg shadow-lg hover:bg-slate-100 transition-colors border border-slate-200"
            title="Reset Zoom"
          >
            <Home className="w-5 h-5 text-slate-700" />
            {/* <button><IconHome className="w-5 h-5 text-slate-700" /></button> */}
          </button>
          <button
            onClick={zoomIn}
            className="p-3 bg-white rounded-lg shadow-lg hover:bg-slate-100 transition-colors border border-slate-200"
            title="Zoom In"
          >
            <Plus className="w-5 h-5 text-slate-700" />
            {/* <button><IconPlus className="w-5 h-5 text-slate-700" /></button> */}
          </button>
          <button
            onClick={zoomOut}
            className="p-3 bg-white rounded-lg shadow-lg hover:bg-slate-100 transition-colors border border-slate-200"
            title="Zoom Out"
          >
            <Minus className="w-5 h-5 text-slate-700" />
            {/* <button><IconMinus className="w-5 h-5 text-slate-700" /></button> */}
          </button>
        </div>
      </div>
      {hoveredRegion && (
        <Tooltip
          region={hoveredRegion}
          position={tooltipPosition}
        />
      )}
    </>
  );
}

export type { SVGMapProps }

// export function IconHome(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
//       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//       <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
//     </svg>
//   );
// }

// export function IconPlus(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
//       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//       <path d="M12 5v14M5 12h14" />
//     </svg>
//   );
// }

// export function IconMinus(props: any) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none"
//       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//       <path d="M5 12h14" />
//     </svg>
//   );
// }

