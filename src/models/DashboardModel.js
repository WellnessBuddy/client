import axios from 'axios';
import { MOCK_DATA } from '../utils/mockData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const USE_MOCK_DATA = true; // Set to false when your API is ready

class DashboardModel {
  static async getDashboardData() {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return MOCK_DATA.dashboard;
    }
    
    try {
      const response = await axios.get(`${API_URL}/dashboard`);
      return response.data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw new Error('Could not load dashboard data. Please try again.');
    }
  }
  
  static async logActivity(activityData) {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      return { success: true };
    }
    
    try {
      const response = await axios.post(`${API_URL}/activities`, activityData);
      return response.data;
    } catch (error) {
      console.error('Error logging activity:', error);
      throw new Error('Could not log activity. Please try again.');
    }
  }
  
  static async updateGoal(goalId, goalData) {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };
    }
    
    try {
      const response = await axios.put(`${API_URL}/goals/${goalId}`, goalData);
      return response.data;
    } catch (error) {
      console.error('Error updating goal:', error);
      throw new Error('Could not update goal. Please try again.');
    }
  }
}

export default DashboardModel;