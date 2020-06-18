import React from 'react';

const ServiceCard = (props) => {
  const { title, description, icon } = props;
  return (
    <div className="columns is-0">
      <div className="column is-one-fifth">
        <span className="icon is-large">
          {icon}
        </span>
      </div>
      <div className="column">
        <p className="title">
          {title}
        </p>
        <p className="content">
          {description}
        </p>
      </div>
      <div className="column is-one-fifth" />
    </div>
  );
};

export default ServiceCard;
