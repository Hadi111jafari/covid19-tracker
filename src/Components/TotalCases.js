import PropTypes from 'prop-types';
import renderImage from './ImageRenderer';

const TotalCases = (props) => {
  const { country } = props;

  return (
    <div className="details">
      {renderImage(country, 'top')}
      <div className="detailsL">
        <p className="Countries countriesAmount">{country?.name}</p>
        <p className="countriesAmount">
          <span>{country?.today_confirmed}</span>
          {' '}
          cases
        </p>
      </div>
    </div>
  );
};

TotalCases.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    today_confirmed: PropTypes.string,
  }).isRequired,
};

export default TotalCases;
