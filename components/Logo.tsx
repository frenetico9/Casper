
import React from 'react';
import { LOGO_TEAL_COLOR } from '../constants';

// THIS IS A SIMPLIFIED SVG REPRESENTATION OF THE PROVIDED LOGO.
// For best results, use the original vector asset or a high-quality image.
// The original logo features a hand-drawn style circular background,
// a custom 'C' shape, and a specific friendly ghost character.
const CasperFriendlyGhostLogo = ({ size = 128, className }: { size?: number, className?: string }) => {
  const fgColor = "#FFFFFF"; // White from logo

  // Calculate viewBox based on size to maintain aspect ratio if size prop is used for outer div
  const vbSize = 100; // Internal coordinate system size

  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${vbSize} ${vbSize}`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle with slight 'hand-drawn' feel attempt (using filter is too heavy, simple circle is fine) */}
        <circle cx={vbSize/2} cy={vbSize/2} r={vbSize/2 - 1} fill={LOGO_TEAL_COLOR} />

        {/* Letter 'C' - Simplified, thick, custom-like */}
        {/* Scaled to roughly occupy left part */}
        <path 
          d={`M${vbSize*0.55},${vbSize*0.22} 
             C${vbSize*0.25},${vbSize*0.22} ${vbSize*0.1},${vbSize*0.35} ${vbSize*0.1},${vbSize*0.5} 
             C${vbSize*0.1},${vbSize*0.65} ${vbSize*0.25},${vbSize*0.78} ${vbSize*0.55},${vbSize*0.78} 
             L${vbSize*0.55},${vbSize*0.66} 
             C${vbSize*0.33},${vbSize*0.66} ${vbSize*0.24},${vbSize*0.60} ${vbSize*0.24},${vbSize*0.5} 
             C${vbSize*0.24},${vbSize*0.40} ${vbSize*0.33},${vbSize*0.34} ${vbSize*0.55},${vbSize*0.34} 
             L${vbSize*0.55},${vbSize*0.22} Z`}
          fill={fgColor}
          transform={`translate(-${vbSize*0.05}, 0)`} // Shift C slightly to the left
        />

        {/* Ghost - Simplified, on the right side */}
        {/* Positioned and scaled to fit next to C */}
        <g transform={`translate(${vbSize*0.62}, ${vbSize*0.28}) scale(${vbSize*0.0045})`}>
          <path 
            d="M50,10 
               C35,10 25,25 25,40 
               L25,70 
               C25,70 28,85 35,75 
               C40,70 43,85 50,75
               C57,70 60,85 65,75
               C72,70 75,70 75,40
               C75,25 65,10 50,10 Z" 
            fill={fgColor} 
          />
          {/* Eyes - use background color to "punch out" */}
          <circle cx="40" cy="42" r="6" fill={LOGO_TEAL_COLOR} />
          <circle cx="60" cy="42" r="6" fill={LOGO_TEAL_COLOR} />
          {/* Eyebrows (arcs over eyes, using fgColor on bgColor circle) */}
          <path d="M35,32 Q40,28 45,32" stroke={fgColor} strokeWidth="2.5" fill="none" />
          <path d="M55,32 Q60,28 65,32" stroke={fgColor} strokeWidth="2.5" fill="none" />
          {/* Mouth - small circle, punch out */}
          <circle cx="50" cy="58" r="4" fill={LOGO_TEAL_COLOR} />
        </g>
      </svg>
    </div>
  );
};

export default CasperFriendlyGhostLogo;
