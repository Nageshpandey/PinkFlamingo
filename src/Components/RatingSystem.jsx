import React from 'react'
import { FaStar } from 'react-icons/fa';


export default function RatingSystem({rating}) {
    
  const starIcons = [];
  const fullStars = Math.floor(rating);
  const halfStar = (rating % 1)*100;

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} color='#FFD700' />);
  }

  if (halfStar) {
    starIcons.push(<FaStar key='half' color='#FFD700' style={{ clipPath: `polygon(0 0, ${halfStar}% 0%, ${halfStar}% 100%, 0 100%)` }} />);
  }

  const remainingStars = 5 - starIcons.length;
  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<FaStar key={`empty-${i}`} color='#D3D3D3' />);
  }

  return <div className='flex flex-row'>{starIcons}</div>;
}
