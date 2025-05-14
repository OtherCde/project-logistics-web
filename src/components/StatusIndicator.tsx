
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'Checking' | 'In transit' | 'Delivered';
  showLabel?: boolean;
  className?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  showLabel = true,
  className
}) => {
  const statusConfig = {
    'Checking': {
      bgColor: 'bg-tracking-yellow-light',
      textColor: 'text-tracking-yellow',
    },
    'In transit': {
      bgColor: 'bg-tracking-blue-light',
      textColor: 'text-tracking-blue',
    },
    'Delivered': {
      bgColor: 'bg-tracking-green-light',
      textColor: 'text-tracking-green',
    },
  };

  const config = statusConfig[status];

  return (
    <div className={cn('flex items-center', className)}>
      {showLabel && (
        <span className={cn('px-4 py-2 rounded-full text-sm font-medium', 
          config.bgColor, 
          config.textColor
        )}>
          {status}
        </span>
      )}
    </div>
  );
};

export default StatusIndicator;
