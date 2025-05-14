
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { ShipmentData } from "../data/mockData";

interface MapProps {
  shipment: ShipmentData;
}

const Map: React.FC<MapProps> = ({ shipment }) => {
  // This is a placeholder for a real map implementation
  // In a real app, we would use a library like Mapbox, Google Maps, or Leaflet
  
  return (
    <div className="relative h-full w-full bg-tracking-gray-lightest rounded-lg overflow-hidden">
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button className="bg-white rounded-lg w-8 h-8 shadow-md flex items-center justify-center text-tracking-gray-dark">
          +
        </button>
        <button className="bg-white rounded-lg w-8 h-8 shadow-md flex items-center justify-center text-tracking-gray-dark">
          -
        </button>
      </div>
      
      <div className="map-placeholder h-full w-full flex items-center justify-center">
        <div className="text-center p-4">
          <div className="flex justify-center mb-4">
            <MapPin size={48} className="text-tracking-blue" />
          </div>
          <p className="text-tracking-gray-dark text-lg mb-1">Map Placeholder</p>
          <p className="text-tracking-gray text-sm mb-4">In a real application, this would be an actual map</p>
          
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs mx-auto">
            <div className="flex items-start mb-3">
              <div className="bg-tracking-blue rounded-full w-3 h-3 mt-1.5 mr-2"></div>
              <div className="text-left">
                <p className="text-xs text-tracking-gray mb-0.5">{shipment.origin.address}</p>
                <p className="text-sm font-medium">{shipment.origin.postalCode} {shipment.origin.city}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-tracking-blue rounded-full w-3 h-3 mt-1.5 mr-2"></div>
              <div className="text-left">
                <p className="text-xs text-tracking-gray mb-0.5">{shipment.destination.address}</p>
                <p className="text-sm font-medium">{shipment.destination.postalCode} {shipment.destination.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
    </div>
  );
};

export default Map;
