import React from 'react';
import { UserGroupIcon, BuildingOfficeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import StatCard from './StatCard';

const Stats = () => {
  const stats = [
    {
      icon: <UserGroupIcon className="w-12 h-12 text-green-700" />,
      number: '5000+',
      text: 'HAPPY USERS'
    },
    {
      icon: <BuildingOfficeIcon className="w-12 h-12 text-green-700" />,
      number: '15+',
      text: 'GUIDED PROGRAMS'
    },
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-green-700" />,
      number: '200+',
      text: 'DAILY REMINDERS SENT'
    }
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between gap-6 my-16">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          icon={stat.icon}
          number={stat.number}
          text={stat.text}
        />
      ))}
    </section>
  );
};

export default Stats;