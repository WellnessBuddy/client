import { useEffect } from 'react';
import { FiActivity, FiCoffee, FiMoon, FiSun } from 'react-icons/fi';
import StatCard from '../components/UI/StatCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ActivityChart from '../components/Dashboard/ActivityChart';
import WellnessScore from '../components/Dashboard/WellnessScore';
import RecentActivities from '../components/Dashboard/RecentActivities';
import TodaysGoals from '../components/Dashboard/TodaysGoals';
import useDashboardController from '../controllers/useDashboardController';

function Dashboard() {
  const { 
    dashboardData, 
    isLoading, 
    error, 
    fetchDashboardData 
  } = useDashboardController();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg text-red-600">
        <h3 className="font-bold">Error loading dashboard</h3>
        <p>{error}</p>
        <button 
          onClick={fetchDashboardData} 
          className="mt-4 btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">Dashboard</h1>
          <p className="text-neutral-500">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        
        <button className="btn btn-primary">
          Log Activity
        </button>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Activity" 
          value={dashboardData?.stats?.steps || '0'} 
          description="steps today" 
          icon={<FiActivity />} 
          trend="up" 
          trendValue="12%"
        />
        <StatCard 
          title="Nutrition" 
          value={dashboardData?.stats?.calories || '0'} 
          description="calories consumed" 
          icon={<FiCoffee />} 
          trend="down" 
          trendValue="8%"
        />
        <StatCard 
          title="Sleep" 
          value={dashboardData?.stats?.sleep || '0h'} 
          description="last night" 
          icon={<FiMoon />} 
        />
        <StatCard 
          title="Meditation" 
          value={dashboardData?.stats?.meditation || '0'} 
          description="minutes today" 
          icon={<FiSun />} 
          trend="up" 
          trendValue="5%"
        />
      </div>
      
      {/* Charts and data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
            <ActivityChart data={dashboardData?.activityData || []} />
          </div>
        </div>
        
        <div>
          <WellnessScore score={dashboardData?.wellnessScore || 0} />
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities activities={dashboardData?.recentActivities || []} />
        <TodaysGoals goals={dashboardData?.todaysGoals || []} />
      </div>
    </div>
  );
}

export default Dashboard;