import React from 'react';
import Typography from '../../common/Typography';
import rightImage from '../../assets/Right Image.png';
import Button from '../../common/Button';

const HeroBlock = () => (
  <div className="flex justify-center items-center flex-row p-20 bg-light-grey" style={{ width: '1440px', height: '704px' }}>
    <div className="flex flex-col justify-start items-start bg-dark-primary text-white" style={{ width: '1280px', height: '584px' }}>
      <div className="flex flex-col gap-10 p-4">
        <Typography tag="h1" variant="white" customClasses="text-h1 font-normal leading-snug" style={{ fontFamily: "Clash Display" }}>
          The furniture brand for the future, with timeless designs
        </Typography>
        <Typography tag="div" variant="white" customClasses="text-body-lg font-normal font-['Satoshi'] leading-relaxed">
          A new era in eco friendly furniture with Avelon, the French luxury retail brand
          <br />
          with nice fonts, tasteful colors and a beautiful way to display things digitally
          <br />
          using modern web technologies.
        </Typography>
        <Button customClasses="mt-6">View collection</Button>
      </div>
    </div>
    <img className="w-[520px] h-[584px]" src={rightImage} alt="Furniture" />
  </div>
);

export default HeroBlock;
