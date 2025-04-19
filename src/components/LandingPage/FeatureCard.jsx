import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-green-50 rounded-lg p-8 flex flex-col items-center text-center">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-green-700 mb-4">{title}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FeatureCard;