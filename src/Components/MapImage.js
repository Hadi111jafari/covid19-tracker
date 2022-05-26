import { useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const imageMapping = (props) => {
  const {
    src, alt, imageClassName, iconClassName,
  } = props;

  const [err, setErr] = useState(false);
  const handleError = () => {
    setErr(true);
  };

  if (err) {
    return (
      <Icon
        icon="carbon:location-filled"
        width="80"
        height="80"
        className={iconClassName}
      />
    );
  }
  return (
    <img src={src} className={imageClassName} alt={alt} onError={handleError} />
  );
};

imageMapping.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};

export default imageMapping;
