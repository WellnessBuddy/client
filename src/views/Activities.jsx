import { useEffect, useState } from 'react';
import { FiPlus, FiFilter, FiCalendar } from 'react-icons/fi';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useActivitiesController from '../controllers/useActivitiesController';
import ActivityCard from '../components/Activities/ActivityCard';
import ActivityFilters from '../components/Activities/ActivityFilters';
import ActivityForm from '../components/Activities/ActivityForm';

function Activities() {
  const { 
    activities, 
    isLoading, 
    error, 
    fetchActivities,
    addActivity
  } = useActivitiesController();
  
  const [showFilters, setShowFilters] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);
  
  const handleAddActivity = async (activityData) => {
    const success = await addActivity(activityData);
    if (success) {
      setShowForm(false);
    }
  };

  if (isLoading && !activities.length) return <LoadingSpinner />;
  
  if (error && !activities.length) {
    return (
      <div className="p-6 bg-red-50 rounded-lg text-red-600">
        <h3 className="font-bold">Error loading activities</h3>
        <p>{error}</p>
        <button 
          onClick={fetchActivities} 
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
          <h1 className="text-2xl font-bold text-neutral-800">Activities</h1>
          <p className="text-neutral-500">Track and manage your physical activities</p>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline flex items-center"
          >
            <FiFilter className="mr-2" />
            Filter
          </button>
          
          <button 
            onClick={() => setShowForm(true)}
            className="btn btn-primary flex items-center"
          >
            <FiPlus className="mr-2" />
            Log Activity
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <ActivityFilters onApply={() => setShowFilters(false)} />
      )}
      
      {/* Activity Form Modal */}
      {showForm && (
        <ActivityForm 
          onSubmit={handleAddActivity}
          onCancel={() => setShowForm(false)}
        />
      )}
      
      {/* Activities List */}
      <div className="space-y-4">
        {activities.length === 0 ? (
          <div className="card text-center py-12">
            <h3 className="text-xl font-medium mb-2">No Activities Yet</h3>
            <p className="text-neutral-500 mb-6">Start tracking your workouts and physical activities</p>
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
            >
              Log Your First Activity
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Recent Activities</h3>
              <button className="flex items-center text-sm text-primary">
                <FiCalendar className="mr-1" />
                Calendar View
              </button>
            </div>
            
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Activities;