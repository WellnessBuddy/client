function StatCard({ title, value, description, icon, trend, trendValue }) {
    const getTrendColor = () => {
      if (!trend) return 'text-neutral-500';
      return trend === 'up' ? 'text-green-500' : 'text-red-500';
    };
  
    const getTrendIcon = () => {
      if (!trend) return null;
      return trend === 'up' ? '↑' : '↓';
    };
  
    return (
      <div className="card">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-medium text-neutral-700">{title}</h3>
          {icon && <div className="text-xl text-primary">{icon}</div>}
        </div>
        
        <div className="flex items-baseline mb-1">
          <h2 className="text-2xl font-bold">{value}</h2>
          {trend && (
            <span className={`ml-2 text-sm ${getTrendColor()}`}>
              {getTrendIcon()} {trendValue}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>
    );
  }
  
  export default StatCard;