import { useState } from 'react'
import DropDownArrow from '../assets/dropdown.svg'
import { Link } from 'react-router-dom';

export default function DropDown({ setShowDropDown }) {
  const [option, setOption] = useState('Dhoop Cones')
  const [showSubOption, setShowSubOption] = useState(false)
  const [subOption, setSubOption] = useState('Jar Cones')
  const handelOption = (op) => {
    setOption(op)
    op != 'Dhoop Cones' && setShowDropDown(false)
  }
  const handelSubOption = (sop) => {
    setOption('Dhoop Cones')
    setSubOption(sop)
    setShowDropDown(false)
  }
  return (
    <div className='flex flex-row bg-white rounded-sm shadow-sm'>
      <div className='w-[12rem] flex flex-col items-start gap-2 dropbox-shadow py-3'>
        <p
          className={`flex flex-row w-full justify-between px-5 py-1 hover:bg-[#FFEDF461] ${option === 'Dhoop Cones' ? 'option-active custom-style' : 'custom-style'}`}
          onClick={() => handelOption('Dhoop Cones')}
          onMouseEnter={() => setShowSubOption(true)}
        >
          <Link to='/products'>Dhoop Cones</Link>
          <img src={DropDownArrow} alt="Dropdown Arrow" />
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Holders' ? 'option-active' : ''}`}
          onClick={() => handelOption('Incense Holders')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Incense Holders</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Yantras' ? 'option-active' : ''}`}
          onClick={() => handelOption('Yantras')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Yantras</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Incense Sticks' ? 'option-active' : ''}`}
          onClick={() => handelOption('Incense Sticks')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Incense Sticks</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Pooja Thali Sets' ? 'option-active' : ''}`}
          onClick={() => handelOption('Pooja Thali Sets')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Pooja Thali Sets</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Shankh' ? 'option-active' : ''}`}
          onClick={() => handelOption('Shankh')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Shankh</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Kalash' ? 'option-active' : ''}`}
          onClick={() => handelOption('Kalash')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Kalash</Link>
        </p>
        <p
          className={`px-5 py-1 hover:bg-[#FFEDF461] w-full text-start ${option === 'Book Rests' ? 'option-active' : ''}`}
          onClick={() => handelOption('Book Rests')}
          onMouseEnter={() => setShowSubOption(false)}
        >
          <Link to='/products'>Book Rests</Link>
        </p>
      </div>
      <div className={`sub-option-container ${showSubOption ? 'flex' : 'hidden'} flex-col items-start text-start gap-2 px-5 py-3`}>
        <p
          className={`sub-option-item ${subOption === 'Jar Cones' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Jar Cones')}
        >
          <Link to='/products'>Jar Cones</Link>
        </p>
        <p
          className={`sub-option-item ${subOption === 'Chandan Bamboo Dhoop' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Chandan Bamboo Dhoop')}
        >
          <Link to='/products'>Chandan Bamboo Dhoop</Link>
        </p>
        <p
          className={`sub-option-item ${subOption === 'Backflow Cone Dhoop' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Backflow Cone Dhoop')}
        >
          <Link to='/products'>Backflow Cone Dhoop</Link>
        </p>
        <p
          className={`sub-option-item ${subOption === 'Buddha Red Incense Cone' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Buddha Red Incense Cone')}
        >
          <Link to='/products'>Buddha Red Incense Cone</Link>
        </p>
        <p
          className={`sub-option-item ${subOption === 'Mountain Sandal Dhoop' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Mountain Sandal Dhoop')}
        >
          <Link to='/products'>Mountain Sandal Dhoop</Link>
        </p>
        <p
          className={`sub-option-item ${subOption === 'Cone Sandal Dhoop' ? 'sub-option-active' : ''}`}
          onClick={() => handelSubOption('Cone Sandal Dhoop')}
        >
          <Link to='/products'>Cone Sandal Dhoop</Link>
        </p>
      </div>

    </div>
  )
}
