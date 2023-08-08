import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeEvent } from '../../redux/events/eventsOperations';
import { selectEventById } from '../../redux/events/eventSelectors';
import { formatDate, formatTime } from '../../utils/transformDate';
import { toast } from 'react-hot-toast';
import { clsx } from 'clsx';

import splash from '../../assets/image-placeholder.svg';
import scss from './EventCard.module.scss';

const EventCard = ({ id }: { id: string }) => {
  const event = useAppSelector(selectEventById(id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!event) {
    return null;
  }

  const {
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
    imageURL,
  } = event;
  const handleDelete = async () => {
    try {
      await dispatch(removeEvent(id));
      navigate('/');
      toast.success(t('notify.Event deleted.'));
    } catch (error) {
      toast.error(t('notify.Something went wrong. Try a bit later'));
    }
  };
  return (
    <div className={scss.container}>
      <p className={scss.title}>{title}</p>
      <div className={scss.card}>
        <img
          className={scss.poster}
          src={imageURL || splash}
          loading="lazy"
          alt={t(category)}
        />
        <p className={scss.description}>{description}</p>
        <ul className={scss.badges}>
          <li>
            <span className={scss.chip}>{t(category)}</span>
          </li>
          <li>
            <span className={clsx(scss.chip, scss[priority])}>
              {t(priority)}
            </span>
          </li>
          <li>
            <span className={scss.chip}>{location}</span>
          </li>
          <li>
            <span className={scss.chip}>
              {formatDate(date)} {t('at')} {formatTime(time)}
            </span>
          </li>
        </ul>
        <ul className={scss.buttonWrapper}>
          <button
            type="button"
            className={scss.editButton}
            onClick={() => navigate(`/edit-event/${id}`)}
            aria-label={t('Edit')}
          >
            {t('Edit')}
          </button>
          <button
            type="button"
            className={scss.deleteButton}
            onClick={handleDelete}
            aria-label={t('Delete event')}
          >
            {t('Delete event')}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
