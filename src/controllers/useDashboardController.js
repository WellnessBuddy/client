import { useState, useCallback } from 'react';
import DashboardModel from '../models/DashboardModel';

function useDashboardController() {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await DashboardModel.getDashboardData();
      setDashboardData(data);
    } catch (err) {
      setError(err.message || 'Failed to load dashboard data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateActivity = useCallback(async (activityData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await DashboardModel.logActivity(activityData);
      // Refresh dashboard data after logging activity
      await fetchDashboardData();
    } catch (err) {
      setError(err.message || 'Failed to update activity');
      return false;
    } finally {
      setIsLoading(false);
    }
    
    return true;
  }, [fetchDashboardData]);

  return {
    dashboardData,
    isLoading,
    error,
    fetchDashboardData,
    updateActivity
  };
}

export default useDashboardController;