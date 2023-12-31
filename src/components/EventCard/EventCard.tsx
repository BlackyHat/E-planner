import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { clsx } from 'clsx';
import { useMediaQuery } from 'react-responsive';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEventById } from '../../redux/events/eventSelectors';
import { removeEvent } from '../../redux/events/eventsOperations';
import { formatDate, formatTime } from '../../utils/transformDate';

import splash from '../../assets/image-placeholder.svg';
import scss from './EventCard.module.scss';

const EventCard = ({ id }: { id: string }) => {
  const event = useAppSelector(selectEventById(id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

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

  const retinaImage = imageURL
    ?.replace(/h=332/, 'h=664')
    .replace(/w=332/, 'w=664');

  const cardImage = isRetina ? retinaImage : imageURL;

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
          src={cardImage || splash}
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
