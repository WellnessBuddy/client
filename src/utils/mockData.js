export const MOCK_DATA = {
    dashboard: {
      stats: {
        steps: '8,432',
        calories: '1,845',
        sleep: '7.5h',
        meditation: '15',
      },
      wellnessScore: 78,
      activityData: [
        { day: 'Mon', steps: 7200, activeMinutes: 35 },
        { day: 'Tue', steps: 8100, activeMinutes: 42 },
        { day: 'Wed', steps: 6500, activeMinutes: 30 },
        { day: 'Thu', steps: 9300, activeMinutes: 48 },
        { day: 'Fri', steps: 8430, activeMinutes: 41 },
        { day: 'Sat', steps: 10200, activeMinutes: 55 },
        { day: 'Sun', steps: 7600, activeMinutes: 38 },
      ],
      recentActivities: [
        {
          title: 'Morning Run',
          type: 'run',
          time: '7:30 AM',
          value: '3.2',
          unit: 'miles'
        },
        {
          title: 'Breakfast',
          type: 'nutrition',
          time: '8:45 AM',
          value: '420',
          unit: 'calories'
        },
        {
          title: 'Meditation Session',
          type: 'meditation',
          time: '9:15 AM',
          value: '15',
          unit: 'minutes'
        },
        {
          title: 'Lunch Break',
          type: 'nutrition',
          time: '12:30 PM',
          value: '680',
          unit: 'calories'
        },
      ],
      todaysGoals: [
        {
          title: 'Walk 10,000 steps',
          target: '8,432/10,000',
          completed: false,
        },
        {
          title: 'Drink 8 glasses of water',
          target: '6/8 glasses',
          completed: false,
        },
        {
          title: 'Meditate for 15 minutes',
          target: '15 min',
          completed: true,
        },
        {
          title: 'Log all meals',
          target: '3/3 meals',
          completed: true,
        },
      ],
    },
    
    profile: {
      personalInfo: {
        name: 'John Smith',
        age: 32,
        height: '5\'10"',
        weight: '175 lbs',
        email: 'john.smith@example.com',
        memberSince: 'January 2023',
        plan: 'Premium'
      },
      healthMetrics: {
        bmi: 24.6,
        restingHeartRate: 68,
        avgSleep: '7.2h',
        avgSteps: '8,745',
      },
      goals: {
        primary: 'Improve overall fitness',
        weight: 'Maintain current weight',
        steps: '10,000 daily',
        sleep: '8 hours nightly',
        nutrition: 'Balanced diet with 2,200 calories'
      }
    },
    
    activities: {
      recent: [
        {
          id: 1,
          type: 'Run',
          date: '2023-04-18',
          time: '7:30 AM',
          duration: '28m',
          distance: '3.2 miles',
          calories: 320,
          details: {
            pace: '8:45/mile',
            heartRate: '145 bpm',
            elevation: '56 ft',
          }
        },
        {
          id: 2,
          type: 'Gym',
          date: '2023-04-17',
          time: '6:15 PM',
          duration: '45m',
          calories: 380,
          details: {
            focus: 'Upper body, Core',
            heartRate: '135 bpm',
            sets: 12,
          }
        },
        {
          id: 3,
          type: 'Yoga',
          date: '2023-04-16',
          time: '8:00 AM',
          duration: '60m',
          calories: 220,
          details: {
            style: 'Vinyasa',
            intensity: 'Moderate',
            heartRate: '105 bpm',
          }
        },
        {
          id: 4,
          type: 'Walk',
          date: '2023-04-15',
          time: '12:30 PM',
          duration: '35m',
          distance: '1.8 miles',
          calories: 140,
          details: {
            pace: '19:26/mile',
            heartRate: '110 bpm',
            steps: 3850,
          }
        },
      ]
    },
    
    nutrition: {
      summary: {
        today: {
          calories: 1845,
          protein: 95,
          carbs: 210,
          fat: 60,
          water: '5/8 glasses'
        },
        calorieGoal: 2200,
        macroSplit: {
          protein: '25%',
          carbs: '50%',
          fat: '25%'
        }
      },
      meals: [
        {
          id: 1,
          type: 'Breakfast',
          time: '8:45 AM',
          calories: 420,
          items: [
            { name: 'Oatmeal with berries', calories: 280 },
            { name: 'Greek yogurt', calories: 100 },
            { name: 'Black coffee', calories: 5 },
            { name: 'Almonds', calories: 35 }
          ]
        },
        {
          id: 2,
          type: 'Lunch',
          time: '12:30 PM',
          calories: 680,
          items: [
            { name: 'Grilled chicken sandwich', calories: 450 },
            { name: 'Side salad', calories: 120 },
            { name: 'Apple', calories: 80 },
            { name: 'Sparkling water', calories: 0 }
          ]
        },
        {
          id: 3,
          type: 'Snack',
          time: '3:15 PM',
          calories: 180,
          items: [
            { name: 'Protein bar', calories: 180 }
          ]
        },
        {
          id: 4,
          type: 'Dinner',
          time: '7:00 PM',
          calories: 565,
          items: [
            { name: 'Salmon', calories: 300 },
            { name: 'Brown rice', calories: 150 },
            { name: 'Roasted vegetables', calories: 95 },
            { name: 'Herbal tea', calories: 0 }
          ]
        }
      ]
    },
    
    sleep: {
      lastNight: {
        duration: '7h 30m',
        quality: 'Good',
        bedtime: '11:05 PM',
        wakeup: '6:35 AM',
        deepSleep: '1h 45m',
        remSleep: '2h 10m',
        lightSleep: '3h 35m'
      },
      weekly: [
        { day: 'Mon', hours: 7.2, quality: 78 },
        { day: 'Tue', hours: 6.5, quality: 65 },
        { day: 'Wed', hours: 7.8, quality: 82 },
        { day: 'Thu', hours: 7.5, quality: 75 },
        { day: 'Fri', hours: 6.8, quality: 70 },
        { day: 'Sat', hours: 8.2, quality: 85 },
        { day: 'Sun', hours: 7.6, quality: 80 }
      ],
      insights: [
        'Your average sleep duration this week is 7.4 hours',
        'You fall asleep fastest when you go to bed between 10:30-11:00 PM',
        'Your sleep quality is 12% better when you exercise during the day',
        'Screen time within 1 hour of bedtime decreases your sleep quality'
      ],
      recommendation: 'Try to maintain a consistent sleep schedule. Aim to go to bed around 10:45 PM for optimal rest.'
    }
  };