import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import scss from './BackLink.module.scss';

const BackLink = () => {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={() => navigate(-1)} className={scss.backLink}>
        <IoMdArrowBack className={scss.linkIcon} />
        Go back
      </a>
    </>
  );
};

export default BackLink;
