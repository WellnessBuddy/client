import { FiClock, FiMap, FiActivity, FiCoffee, FiMoon, FiHeart } from 'react-icons/fi';

function RecentActivities({ activities }) {
  // Helper to get the icon based on activity type
  const getActivityIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'run':
      case 'walk':
      case 'hike':
        return <FiMap className="text-blue-500" />;
      case 'workout':
      case 'gym':
      case 'exercise':
        return <FiActivity className="text-purple-500" />;
      case 'meal':
      case 'food':
      case 'nutrition':
        return <FiCoffee className="text-green-500" />;
      case 'sleep':
        return <FiMoon className="text-indigo-500" />;
      case 'meditation':
      case 'mindfulness':
        return <FiHeart className="text-red-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Recent Activities</h3>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>
      
      {activities.length === 0 ? (
        <div className="text-center py-6 text-neutral-500">
          <p>No recent activities to display</p>
          <button className="mt-3 btn btn-outline">Log an Activity</button>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-4">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-neutral-800">{activity.title}</h4>
                <p className="text-sm text-neutral-500">{activity.time}</p>
              </div>
              <div className="text-right">
                <span className="font-medium">{activity.value}</span>
                <p className="text-sm text-neutral-500">{activity.unit}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentActivities;