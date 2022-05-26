import PropTypes from 'prop-types';

const SearchItem = (props) => {
  const { item, searchItem, updateSearchItem } = props;

  const x = `Type to Search by ${item}`;

  return (
    <div className="searchSection">
      <h2>
        Search By
        {' '}
        {item}
      </h2>
      <input
        type="text"
        placeholder={x}
        className="countryInput"
        value={searchItem}
        onChange={updateSearchItem}
      />
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.string.isRequired,
  searchItem: PropTypes.string.isRequired,
  updateSearchItem: PropTypes.func.isRequired,
};

export default SearchItem;
