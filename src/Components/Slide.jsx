import SliderImg from '../assets/SliderImg.svg';

export default function Slide({ imgSrc = SliderImg, title }) {
  return (
    <div className='flex flex-col gap-4 md:flex-row justify-center w-full items-center py-4 px-16'>
      <img src={imgSrc} alt="sliderimg" />
      <h1 className='text-center md:text-left text-slide-heading w-full md:w-[50rem]'>
        {title}
      </h1>
    </div>
  );
}
