import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <strong data-testid="planet-name">{ planetName }</strong>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.protoType = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
