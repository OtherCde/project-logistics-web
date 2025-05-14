
import { X } from "lucide-react";

interface FilterBadgeProps {
  label: string;
  onRemove: () => void;
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ label, onRemove }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 rounded-full mr-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button 
        onClick={onRemove} 
        className="ml-1 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default FilterBadge;
