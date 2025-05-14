
import { useState } from "react";
import { ShipmentData } from "../data/mockData";
import { Star } from "lucide-react";

interface OrderDetailsProps {
  shipment: ShipmentData;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ shipment }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'vehicle' | 'driver' | 'customer'>('vehicle');
  
  if (!shipment.vehicle) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Main info</h2>
        <p className="text-tracking-gray">No detailed information available for this shipment.</p>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Main info</h2>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-4 px-1 text-sm font-medium ${
              activeTab === 'details'
                ? 'border-b-2 border-tracking-blue text-tracking-blue'
                : 'border-transparent text-tracking-gray hover:text-tracking-gray-dark'
            }`}
          >
            Order details
          </button>
          <button
            onClick={() => setActiveTab('vehicle')}
            className={`pb-4 px-1 text-sm font-medium ${
              activeTab === 'vehicle'
                ? 'border-b-2 border-tracking-blue text-tracking-blue'
                : 'border-transparent text-tracking-gray hover:text-tracking-gray-dark'
            }`}
          >
            Vehicle
          </button>
          <button
            onClick={() => setActiveTab('driver')}
            className={`pb-4 px-1 text-sm font-medium ${
              activeTab === 'driver'
                ? 'border-b-2 border-tracking-blue text-tracking-blue'
                : 'border-transparent text-tracking-gray hover:text-tracking-gray-dark'
            }`}
          >
            Driver information
          </button>
          <button
            onClick={() => setActiveTab('customer')}
            className={`pb-4 px-1 text-sm font-medium ${
              activeTab === 'customer'
                ? 'border-b-2 border-tracking-blue text-tracking-blue'
                : 'border-transparent text-tracking-gray hover:text-tracking-gray-dark'
            }`}
          >
            Customer information
          </button>
        </nav>
      </div>
      
      <div className="mt-6">
        {activeTab === 'vehicle' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img 
                  src={shipment.vehicle.image} 
                  alt="Vehicle" 
                  className="max-w-full h-auto" 
                />
                <div className="absolute top-0 left-0 bottom-0 w-[70%] bg-tracking-blue flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {shipment.vehicle.capacity.usedPercentage}%
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium">H</span>
                  </div>
                  <span className="text-lg font-medium">
                    {shipment.vehicle.manufacturer}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-medium mr-1">{shipment.vehicle.rating}</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-tracking-gray mb-1">MODEL</p>
                  <p className="font-medium">{shipment.vehicle.model}</p>
                </div>
                <div>
                  <p className="text-sm text-tracking-gray mb-1">SPACE</p>
                  <p className="font-medium">
                    {shipment.vehicle.capacity.usedPercentage}% / {shipment.vehicle.capacity.totalPercentage}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-tracking-gray mb-1">WEIGHT</p>
                  <p className="font-medium">{shipment.vehicle.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-tracking-gray mb-1">LOAD VOLUME</p>
                  <p className="font-medium">{shipment.vehicle.volume}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'details' && (
          <div className="p-4">
            <p className="text-tracking-gray">Order details content would go here.</p>
          </div>
        )}
        
        {activeTab === 'driver' && (
          <div className="p-4">
            <p className="text-tracking-gray">Driver information content would go here.</p>
          </div>
        )}
        
        {activeTab === 'customer' && (
          <div className="p-4">
            <p className="text-tracking-gray">Customer information content would go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
