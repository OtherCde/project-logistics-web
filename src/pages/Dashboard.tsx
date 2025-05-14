
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ShipmentList from "../components/ShipmentList";
import Map from "../components/Map";
import OrderDetails from "../components/OrderDetails";
import { mockShipments } from "../data/mockData";
import { Download } from "lucide-react";

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the selected shipment or default to the first one
  const selectedShipment = id 
    ? mockShipments.find(s => s.id === id) || mockShipments[0]
    : mockShipments[0];
  
  return (
    <div className="flex h-screen bg-tracking-gray-lightest">
      <Sidebar />
      
      <div className="ml-20 flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Shipment list - collapses to full width on mobile */}
        <div className="w-full md:w-5/12 lg:w-4/12 h-1/2 md:h-full overflow-y-auto border-r border-gray-100">
          <ShipmentList />
        </div>
        
        {/* Right section with map and details */}
        <div className="w-full md:w-7/12 lg:w-8/12 h-1/2 md:h-full flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold">Order ID: #{selectedShipment.id}</h2>
            </div>
            <button className="flex items-center text-tracking-blue gap-2 font-medium">
              <Download size={18} />
              <span>Documentation</span>
            </button>
          </div>
          
          {/* Map section */}
          <div className="h-1/2 md:h-1/2 lg:h-3/5 p-4">
            <Map shipment={selectedShipment} />
          </div>
          
          {/* Details section */}
          <div className="h-1/2 md:h-1/2 lg:h-2/5 overflow-y-auto border-t border-gray-100">
            <OrderDetails shipment={selectedShipment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
