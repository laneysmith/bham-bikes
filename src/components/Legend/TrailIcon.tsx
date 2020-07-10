import React, { HTMLAttributes } from 'react';

interface TrailIconProps extends HTMLAttributes<HTMLElement> {
  label: string;
  color: string;
}

const TrailIcon: React.SFC<TrailIconProps> = ({ label, color }) => {
  const labelAsId = `${label.replace(/\s/g, '')}Icon`;
  return (
    <>
      <svg className="legend-icon" viewBox="0 0 24 24" aria-labelledby={labelAsId} role="img">
        <title id={labelAsId}>{label}</title>
        <rect x="6" y="12" width="12" height="3" fill={color} style={{ opacity: 0.8 }} />
      </svg>
      <div className="legend-label">{label}</div>
    </>
  );
};

export default TrailIcon;
