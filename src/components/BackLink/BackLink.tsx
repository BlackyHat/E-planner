import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import scss from './BackLink.module.scss';

const BackLink = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <a onClick={() => navigate(-1)} className={scss.backLink}>
        <IoMdArrowBack className={scss.linkIcon} />
        {t('Go back')}
      </a>
    </>
  );
};

export default BackLink;
