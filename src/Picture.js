import React from 'react';

const Picture = props => {
  let pictures = [
    <img src="picture0.png" className="pic" alt="hanger" />,
    <img src="picture1.png" className="pic" alt="hanger" />,
    <img src="picture2.png" className="pic" alt="hanger" />,
    <img src="picture3.png" className="pic" alt="hanger" />,
    <img src="picture4.png" className="pic" alt="hanger" />,
    <img src="picture5.png" className="pic" alt="hanger" />,
    <img src="picture6.png" className="pic" alt="hanger" />,
    <img src="picture7.png" className="pic" alt="hanger" />,
  ];
  return pictures[props.mistakes];
};

export default Picture;
