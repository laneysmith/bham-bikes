import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

import TrailIcon from './TrailIcon';

import './_legend-styles.css';

const Legend: React.SFC = () => {
  const [isLegendCollapsed, setIsLegendCollapsed] = useState(false);
  const toggleLegend = (): void => setIsLegendCollapsed((prevState) => !prevState);

  return (
    <div id="legend" className="legend">
      <div className="legend-section">
        <div className="legend-label">Legend</div>
        <button type="button" onClick={toggleLegend} aria-label="toggle legend visibility">
          {isLegendCollapsed ? 'show' : 'hide'}
        </button>
      </div>
      <Collapse isOpened={!isLegendCollapsed}>
        <>
          <div className="legend-section">
            <div className="legend-grid">
              <TrailIcon label="Marked Route" color="red" />
              <TrailIcon label="Shared Lane" color="#ff5349" />
              <TrailIcon label="Climbing Lane" color="orange" />
              <TrailIcon label="Paved Shoulder" color="yellow" />
              <TrailIcon label="Bike Lane" color="#ffae42" />
              <TrailIcon label="Protected Bike Lane" color="lightgreen" />
              <TrailIcon label="Buffered Bike Lane" color="lightgreen" />
              <TrailIcon label="Bike Boulevard" color="green" />
              <TrailIcon label="Cycle Track" color="darkgreen" />
              <TrailIcon label="Trail" color="brown" />
              {/* <TrailIcon label="Shared Roadway" color="#e7185a" />
              <TrailIcon label="Bike Lane" color="#FFA500" />
              <TrailIcon label="Buffered Bike Lane" color="#90EE90" />
              <TrailIcon label="Protected Bike Lane" color="#50C878" />
              <TrailIcon label="Shared Use Path" color="#006400" />
              <TrailIcon label="Trail" color="#A0522D" /> */}
            </div>
          </div>
          <div className="legend-section source-notes">
            <a
              href="https://github.com/laneysmith/denver-bikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              view source on github
            </a>
          </div>
        </>
      </Collapse>
    </div>
  );
};

export default Legend;
