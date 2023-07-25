import React, { useEffect, useState } from 'react';
import '../CSS/Logo.css';

function Logo() {
  const [toggle, setToggle] = useState(false);
  const [zIndex, setZIndex] = useState({ s1: 1, s2: -1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prevToggle => !prevToggle);
      setTimeout(() => {
        setZIndex(prevZIndex => ({ s1: -prevZIndex.s1, s2: -prevZIndex.s2 }));
      }, 900); // delay of half the interval
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="s-container">
      <div className={`s s1 ${toggle ? 'back' : 'front'}`} style={{zIndex: zIndex.s1}}>S</div>
      <div className={`s s2 ${toggle ? 'front' : 'back'}`} style={{zIndex: zIndex.s2}}>S</div>
    </div>
  );
}

export default Logo;
