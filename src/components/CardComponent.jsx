import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validar props opcionales

function CardComponent({ title, description, imageUrl, onClick }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

// Definir tipos de las props y valores predeterminados opcionales
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CardComponent;
