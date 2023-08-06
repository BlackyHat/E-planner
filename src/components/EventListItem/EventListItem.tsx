import { useNavigate } from 'react-router-dom';
import { formatDate, formatTime } from '../../utils/transformDate';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { EventProps } from '../../helpers/interfaces';
import splash from '../../assets/image-placeholder.svg';
import scss from './EventListItem.module.scss';

const EventListItem: React.FC<EventProps> = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    _id,
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
    imageURL,
  } = data;

  const handleMoreInfo = () => {
    if (!_id) {
      navigate(`/`);
    }
    navigate(`/event/${_id}`);
  };

  return (
    <li className={scss.card}>
      <div
        className={scss.media}
        style={{ backgroundImage: `url(${imageURL || splash})` }}
      >
        <div className={scss.badges}>
          <span className={scss.category}>{t(category)}</span>
          <span className={clsx(scss.priority, scss[priority])}>
            {t(priority)}
          </span>
        </div>
        <div className={scss.cardLabel}>
          <span className={scss.dateLabel}>
            {formatDate(date)} {t('at')} {formatTime(time)}
          </span>
          <span className={scss.location}>{location}</span>
        </div>
      </div>
      <div className={scss.cardInfo}>
        <p className={scss.title}>{title}</p>
        <p className={scss.description}>{description}</p>
      </div>
      <button
        type="button"
        className={scss.moreInfoButton}
        onClick={handleMoreInfo}
      >
        {t('More info')}
      </button>
    </li>
  );
};

export default EventListItem;
