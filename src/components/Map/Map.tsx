import React, { useRef, useEffect } from 'react';
import mapboxgl, { Map, Popup as PopupType } from 'mapbox-gl';

import './_map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BIKE_FACILITIES_SOURCE = 'bike-facilities';
const BIKE_FACILITIES_LAYER = 'bike-facilities-layer';

const App: React.SFC = () => {
  const mapRef = useRef<Map | null>();
  const mapContainerRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-122.4787, 48.7519],
      zoom: 12,
    })
      .addControl(new mapboxgl.NavigationControl(), 'bottom-right')
      .on('load', async () => {
        mapRef?.current
          ?.addSource(BIKE_FACILITIES_SOURCE, {
            type: 'vector',
            url: 'mapbox://laneysmith.6ack4nd8',
          })
          .addLayer(
            {
              id: BIKE_FACILITIES_LAYER,
              source: BIKE_FACILITIES_SOURCE,
              'source-layer': 'bham-bicycle-master-plan-cecvw7',
              type: 'line',
              layout: {
                'line-cap': 'round',
                'line-join': 'bevel',
              },
              paint: {
                'line-width': ['interpolate', ['exponential', 10], ['zoom'], 12, 3, 13, 6],
                'line-opacity': 0.6,
                'line-color': [
                  'match',
                  ['get', 'FacilityTy'],
                  'Marked Routes',
                  'red',
                  'Shared Lane Markings',
                  'purple',
                  'EXISTING SHARED LANE MARKINGS',
                  '#ff5349',
                  'SHARED LANE MARKINGS',
                  '#ff5349',
                  'CLIMBING LANES',
                  'orange',
                  'EXISTING CLIMBING LANES',
                  'orange',
                  'EXISTING PAVED SHOULDER',
                  'yellow',
                  'EXISTING BIKE LANES',
                  '#ffae42', // yellow orange
                  'BIKE LANES',
                  '#ffae42', // yellow orange
                  'EXISTING PROTECTED BIKE LANES',
                  'lightgreen',
                  'EXISTING BUFFERED BIKE LANES',
                  'lightgreen',
                  'BUFFERED BIKE LANES',
                  'lightgreen',
                  'EXISTING BIKE BOULEVARD',
                  'green',
                  'BIKE BOULEVARD',
                  'green',
                  'EXISTING CYCLE TRACK',
                  'darkgreen',
                  'OFF-STREET CONNECTION',
                  'brown',
                  'EXISTING TRAIL',
                  'brown',
                  'FURTHER STUDY NEEDED',
                  'transparent',
                  'NOT PART OF BMP',
                  'transparent',
                  '#ccc',
                ],
              },
            },
            'road-label'
          );
      });

    return (): void => mapRef?.current?.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
