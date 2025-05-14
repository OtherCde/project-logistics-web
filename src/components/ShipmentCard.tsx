
import { MoreVertical } from "lucide-react";
import { ShipmentData } from "../data/mockData";
import StatusIndicator from "./StatusIndicator";
import { useNavigate } from "react-router-dom";

interface ShipmentCardProps {
  shipment: ShipmentData;
  isActive?: boolean;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ 
  shipment, 
  isActive = false 
}) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/shipment/${shipment.id}`);
  };
  
  return (
    <div 
      onClick={handleCardClick}
      className={`mb-4 rounded-lg overflow-hidden cursor-pointer transition-all ${
        isActive 
          ? 'bg-tracking-blue text-white' 
          : 'bg-white text-tracking-gray-dark hover:shadow-md'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm font-normal mb-1">Order ID:</p>
            <h3 className="text-lg font-bold">#{shipment.id}</h3>
          </div>
          
          {isActive ? (
            <StatusIndicator 
              status={shipment.currentStatus} 
              showLabel={true} 
              className="ml-auto"
            />
          ) : (
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              shipment.currentStatus === 'Checking' ? 'bg-tracking-yellow-light text-tracking-yellow' :
              shipment.currentStatus === 'In transit' ? 'bg-tracking-blue-light text-tracking-blue' :
              'bg-tracking-green-light text-tracking-green'
            }`}>
              {shipment.currentStatus}
            </div>
          )}
          
          <button className={`ml-2 p-1 rounded-full ${isActive ? 'text-white' : 'text-tracking-gray'}`}>
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="relative">
          <div 
            className={`h-2 w-full rounded-full ${
              isActive ? 'bg-white/30' : 'bg-gray-100'
            }`}
          >
            <div 
              className={`h-full rounded-full ${
                isActive 
                  ? 'bg-white' 
                  : shipment.currentStatus === 'Checking' 
                      ? 'bg-tracking-yellow' 
                      : 'bg-tracking-blue'
              }`} 
              style={{ width: `${shipment.progress}%` }}
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          {shipment.trackingEvents.map((event, index) => (
            <div key={index} className="flex items-center">
              <div className="relative flex flex-col items-center mr-4">
                <div 
                  className={`w-5 h-5 rounded-full ${
                    index === 0 || (event.time && event.time !== "--:--")
                      ? isActive 
                          ? 'bg-white' 
                          : 'bg-tracking-blue' 
                      : isActive 
                          ? 'border-2 border-white bg-transparent' 
                          : 'border-2 border-tracking-gray bg-white'
                  } flex items-center justify-center z-10`}
                />
                {index < shipment.trackingEvents.length - 1 && (
                  <div 
                    className={`absolute top-5 w-0.5 h-12 ${
                      isActive ? 'bg-white/50' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
              
              <div className="flex-grow">
                <p className={`text-sm ${isActive ? 'text-white/80' : 'text-tracking-gray-dark'}`}>
                  {event.date}
                </p>
                <p className={`font-medium ${isActive ? 'text-white' : 'text-tracking-gray-dark'}`}>
                  {event.status}
                </p>
              </div>
              
              {event.time && (
                <div className="ml-auto">
                  <p className={`text-sm ${isActive ? 'text-white' : 'text-tracking-gray'}`}>
                    {event.time}
                  </p>
                </div>
              )}
              
              {!event.time && (
                <div className="ml-auto">
                  <p className={`text-sm ${isActive ? 'text-white/50' : 'text-tracking-gray'}`}>
                    --:--
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentCard;
