import React from 'react';
import BgTop from '../assets/BgTopBar.svg';
import { GiCancel } from "react-icons/gi";

export default function TopBar({ setTopbar }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center py-2 px-3"
      style={{
        backgroundImage: `url(${BgTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full h-full flex items-center justify-center font-poppins font-semibold">
        <div className="flex items-center justify-center">
          <span className="me-2 flex items-center justify-center ">
            QUICK BUY! Get up to 25% off on All Stones
          </span>
          <span
            onClick={() => {
              setTopbar(false);
            }}
            className='close-button'
          >
            <GiCancel />
          </span>
        </div>
      </div>

    </div>
  );
}
