import React, { useState, useEffect } from 'react';
import './animate.css';
const messages = ["Think construction, Think MyCompanyName", "All that construction needs", "Let's build building together"];

function AnimatedText() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevious(current);
      setCurrent((current + 1) % messages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="text-container">
      {previous !== null && (
        <div className="animated-text previous">{messages[previous]}</div>
      )}
      {/* <div className="animated-text current">{messages[current]}</div> */}
    </div>
  );
}

export default AnimatedText;
