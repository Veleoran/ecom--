import React from 'react';
import deliveryIcon from '../assets/icons/Delivery.svg';
import checkmarkIcon from '../assets/icons/Checkmark--outline.svg';
import purchaseIcon from '../assets/icons/Purchase.svg';
import sproutIcon from '../assets/icons/Sprout.svg';
import Typography from '../common/Typography';

function Features() {
  const features = [
    {
      icon: deliveryIcon,
      title: "Next day as standard",
      content: "Order before 3pm and get your order the next day as standard"
    },
    {
      icon: checkmarkIcon,
      title: "Made by true artisans",
      content: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      icon: purchaseIcon,
      title: "Unbeatable prices",
      content: "For our materials and quality you won’t find better prices anywhere"
    },
    {
      icon: sproutIcon,
      title: "Recycled packaging",
      content: "We use 100% recycled packaging to ensure our footprint is manageable"
    }
  ];

  return (
    <div className="mt-12 mb-20">
      <Typography customClasses="md:text-center md:mb-16" tag="h3">What makes our brand different</Typography>
      <div className="md:grid xl:grid-cols-4 md:grid-cols-2 gap-12 grid-cols-1 justify-items-center">
        {features.map((feature) => (
          <div key={feature.title} className="w-72 mb-12">
            <img className="mb-4" src={feature.icon} alt={feature.title} />
            <Typography customClasses="mb-2" tag="h4">{feature.title}</Typography>
            <Typography tag="p">{feature.content}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

