import { Icon } from '@iconify/react';
import MapImage from './MapImage';

const imageRendering = (country, kind) => {
  let alt = '';
  let imageClassName = '';
  let iconClassName = '';
  let size = '';

  if (kind === 'top') {
    alt = 'World Image';
    imageClassName = 'worldImg';
    iconClassName = 'Maps';
    size = '80';
  } else {
    alt = 'Country Image';
    imageClassName = 'countryImg';
    iconClassName = 'mapIcon';
    size = '50';
  }

  if (country?.image) {
    return (
      <MapImage
        src={country.image}
        alt={alt}
        imageClassName={imageClassName}
        iconClassName={iconClassName}
      />
    );
  }
  return <Icon icon="carbon:location-filled" width={size} height={size} className={iconClassName} />;
};

export default imageRendering;
