
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { ShipmentData } from "../data/mockData";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {
  shipment: ShipmentData;
}

const Map: React.FC<MapProps> = ({ shipment }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  // Function to initialize the map
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;
    
    // Set mapbox token
    mapboxgl.accessToken = mapboxToken;
    
    // Create map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-65.17, -35.38], // Center of Argentina
      zoom: 4,
      maxBounds: [
        [-76.31, -55.98], // Southwest coordinates of Argentina
        [-53.63, -21.78]  // Northeast coordinates of Argentina
      ]
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add origin marker
    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add origin marker
      new mapboxgl.Marker({ color: "#4361ee" })
        .setLngLat([shipment.origin.lng, shipment.origin.lat])
        .addTo(map.current!);
      
      // Add destination marker
      new mapboxgl.Marker({ color: "#f72585" })
        .setLngLat([shipment.destination.lng, shipment.destination.lat])
        .addTo(map.current!);
      
      // Add current location marker if available
      if (shipment.currentLocation) {
        new mapboxgl.Marker({ color: "#4CC9F0" })
          .setLngLat([shipment.currentLocation.lng, shipment.currentLocation.lat])
          .addTo(map.current!);
      }
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  };

  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Re-initialize map when token changes
  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }
  }, [mapboxToken]);

  return (
    <div className="relative h-full w-full bg-tracking-gray-lightest rounded-lg overflow-hidden">
      {!mapboxToken ? (
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your Mapbox public token:
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="pk.eyJ1Ijoi..."
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Get your token at <a href="https://mapbox.com/" className="text-tracking-blue underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      ) : (
        <>
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <button 
              className="bg-white rounded-lg w-8 h-8 shadow-md flex items-center justify-center text-tracking-gray-dark"
              onClick={() => map.current?.zoomIn()}
            >
              +
            </button>
            <button 
              className="bg-white rounded-lg w-8 h-8 shadow-md flex items-center justify-center text-tracking-gray-dark"
              onClick={() => map.current?.zoomOut()}
            >
              -
            </button>
          </div>
          
          <div ref={mapContainer} className="h-full w-full" />
          
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
              <p>Loading map...</p>
            </div>
          )}
          
          {shipment.stats && (
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-md p-4 z-10">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-tracking-gray mb-1">Current location</p>
                  <p className="text-sm font-medium">{shipment.stats.currentLocation}</p>
                </div>
                <div>
                  <p className="text-xs text-tracking-gray mb-1">Speed</p>
                  <p className="text-sm font-medium">{shipment.stats.speed}</p>
                </div>
                <div>
                  <p className="text-xs text-tracking-gray mb-1">Kilometers left</p>
                  <p className="text-sm font-medium">{shipment.stats.remainingDistance}</p>
                </div>
                <div>
                  <p className="text-xs text-tracking-gray mb-1">Last stop</p>
                  <p className="text-sm font-medium">{shipment.stats.lastStop}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Map;
