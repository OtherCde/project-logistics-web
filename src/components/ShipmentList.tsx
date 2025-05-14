
import { useState } from "react";
import { mockShipments } from "../data/mockData";
import ShipmentCard from "./ShipmentCard";
import SearchBar from "./SearchBar";
import FilterBadge from "./FilterBadge";

const ShipmentList: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState([
    "21 Jan - 1 Feb",
    "Checking",
    "In Transit"
  ]);
  const [selectedShipment, setSelectedShipment] = useState(mockShipments[0].id);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-tracking-gray-dark mb-4">Tracking Delivery</h1>
        <SearchBar className="mb-4" />
        
        <div className="flex flex-wrap my-4">
          {activeFilters.map(filter => (
            <FilterBadge 
              key={filter} 
              label={filter} 
              onRemove={() => removeFilter(filter)} 
            />
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto px-4 pb-4">
        {mockShipments.map(shipment => (
          <ShipmentCard 
            key={shipment.id} 
            shipment={shipment}
            isActive={shipment.id === selectedShipment}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipmentList;
