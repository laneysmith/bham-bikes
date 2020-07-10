import React, { HTMLAttributes } from 'react';
import { MapboxGeoJSONFeature } from 'mapbox-gl';

import './_popup-styles.css';

interface PopupProps extends HTMLAttributes<HTMLElement> {
  feature: MapboxGeoJSONFeature;
}

const Popup: React.SFC<PopupProps> = ({ feature }) => {
  const { id, properties } = feature;

  return (
    <div id={`popup-${id}`}>
      <h3>{properties?.FULLNAME}</h3>
      <div>
        <b>Type:</b> {properties?.EXISTING_F}
      </div>
      <div>
        <b>Length:</b> {properties?.MILEAGE.toFixed(2)} miles
      </div>
    </div>
  );
};

export default Popup;
