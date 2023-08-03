import { clsx } from 'clsx';
import scss from './EventCard.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectEventById } from '../../redux/events/eventSelectors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import splash from '../../assets/image-placeholder.svg';
import { format } from 'date-fns';
import { removeEvent } from '../../redux/events/eventsOperations';

const EventCard = ({ id }: { id: string }) => {
  const event = useAppSelector(selectEventById(id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
  const formattedDate = format(new Date(date), 'dd/MM');
  const handleDelete = async () => {
    try {
      await dispatch(removeEvent(id));
      navigate('/');
      toast.success('Event deleted.');
    } catch (error) {
      toast.error('Something went wrong. Try a bit later');
    }
  };
  return (
    <div className={scss.container}>
      <p className={scss.title}>{title}</p>
      <div className={scss.card}>
        <img className={scss.poster} src={imageURL || splash} />
        <p className={scss.description}>{description}</p>
        <ul className={scss.badges}>
          <li>
            <span className={scss.chip}>{category}</span>
          </li>
          <li>
            <span className={clsx(scss.chip, scss[priority])}>{priority}</span>
          </li>
          <li>
            <span className={scss.chip}>{location}</span>
          </li>
          <li>
            <span className={scss.chip}>
              {formattedDate} at {time}
            </span>
          </li>
        </ul>
        <ul className={scss.buttonWrapper}>
          <button
            type="button"
            className={scss.editButton}
            onClick={() => navigate('/edit-event')}
          >
            Edit
          </button>
          <button
            type="button"
            className={scss.deleteButton}
            onClick={handleDelete}
          >
            Delete event
          </button>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
