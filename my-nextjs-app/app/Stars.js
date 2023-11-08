import React, { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const numStars = 350; // Adjust the number of stars as needed
    const starsArray = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * 3) + 1; // Random star size
      const x = Math.random() * window.innerWidth; // Random X position within viewport width
      const y = Math.random() * window.innerHeight; // Random Y position within viewport height

      // Random color (for example, you can use 'white' or 'yellow')
      const color = 'white';

      // Random opacity for twinkling effect
      const opacity = Math.random() * 0.5 + 0.5; // Adjust the range as needed

      // Random delay for the twinkling animation
      const animationDelay = Math.random() * 5 + 's'; // Adjust the range as needed

      starsArray.push({ x, y, size, color, opacity, animationDelay });
    }

    setStars(starsArray);
  };

  useEffect(() => {
    // Initial star generation
    generateStars();

    // Regenerate stars when the window is resized
    window.addEventListener('resize', generateStars);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <div className="star-field">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star twinkle`} // Apply the "twinkle" class to all stars
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            backgroundColor: star.color,
            left: star.x + 'px',
            top: star.y + 'px',
            opacity: star.opacity,
            animation: `twinkle 2s infinite alternate ${star.animationDelay}`,
          }}
        ></div>
      ))}
    </div>
  );
}
