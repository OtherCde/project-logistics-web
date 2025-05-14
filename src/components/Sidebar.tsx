
import { useNavigate } from "react-router-dom";
import { Box, Home, Map, Package, ShoppingCart, User } from "lucide-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-full w-20 bg-white shadow-md flex flex-col items-center py-8 fixed left-0 top-0 z-40">
      <div className="mb-10">
        <div className="h-12 w-12 bg-tracking-blue rounded-lg flex items-center justify-center">
          <Box className="text-white" size={24} />
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-8 flex-1">
        <button className="p-2 text-tracking-gray hover:text-tracking-blue transition-colors">
          <Home size={24} />
        </button>
        
        <button 
          className="p-2 bg-tracking-blue/10 text-tracking-blue rounded-lg transition-colors"
          onClick={() => navigate('/')}
        >
          <Package size={24} />
        </button>
        
        <button className="p-2 text-tracking-gray hover:text-tracking-blue transition-colors">
          <Map size={24} />
        </button>
        
        <button className="p-2 text-tracking-gray hover:text-tracking-blue transition-colors">
          <ShoppingCart size={24} />
        </button>
      </div>
      
      <div>
        <button className="p-2 text-tracking-gray hover:text-tracking-blue transition-colors">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
