import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { IoMdArrowBack } from 'react-icons/io';
import scss from './BackLink.module.scss';

const BackLink = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <a onClick={() => navigate(-1)} className={scss.backLink}>
        <IoMdArrowBack
          className={scss.linkIcon}
          aria-label={t('Language menu')}
        />
        {t('Go back')}
      </a>
    </>
  );
};

export default BackLink;
