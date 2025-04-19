import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ icon, number, text }) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 text-center flex-1">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-2">{number}</div>
      <div className="text-sm text-gray-600">{text}</div>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default StatCard;