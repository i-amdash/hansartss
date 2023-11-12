'useClient';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Modal = ({
  clickedImg,
  setClickedImg,
  setTitle,
  title
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setClickedImg(null);
      setTitle(null);
    }
  };

  return (
    <div className="z-50 lg:flex-row flex-col overlay dismiss" onClick={handleClick}>
      <div className="flex-[0.75]">
        <img src={clickedImg} alt="bigger pic" />
        <span className='dismiss z-50' onClick={handleClick}>
          <AiOutlineCloseCircle className='dismiss z-50' onClick={handleClick} />
        </span>
      </div>
      {/* <div className="flex-[0.25] flex justify-start flex-col imgText">
        <p className="imgTitle sm:text-[22px] text-[12px]">{title}</p>
      </div> */}
    </div>
  );
};

export default Modal;
