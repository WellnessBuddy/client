// src/components/Features/FeatureSection.jsx
import React from 'react';
import { 
  Cog6ToothIcon, 
  ClockIcon, 
  DocumentTextIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  const features = [
    {
      icon: <Cog6ToothIcon className="w-16 h-16 text-green-700" />,
      title: 'Wellness Tracking',
      text: 'Track and analyze mood, stress, sleep, and work hours with insights.'
    },
    {
      icon: <ClockIcon className="w-16 h-16 text-green-700" />,
      title: 'Reminders',
      text: 'Manage self-care tasks with meal, water, and break alerts.'
    },
    {
      icon: <DocumentTextIcon className="w-16 h-16 text-green-700" />,
      title: 'Mental Health Support',
      text: 'Access meditation, breathing exercises, and help resources.'
    },
    {
      icon: <ArrowPathIcon className="w-16 h-16 text-green-700" />,
      title: 'Work-life Balance',
      text: 'Optimize work hours and celebrate achievements effortlessly.'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-green-700 my-16">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;