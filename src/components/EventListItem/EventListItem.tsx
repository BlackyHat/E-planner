import scss from './EventListItem.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { EventProps } from '../../helpers/interfaces';
import splash from '../../assets/image-placeholder.svg';
import { format } from 'date-fns';

const EventListItem: React.FC<EventProps> = ({ data }) => {
  const navigate = useNavigate();
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
  const formattedDate = format(new Date(date), 'dd/MM');

  return (
    <li className={scss.card}>
      <div
        className={scss.media}
        style={{ backgroundImage: `url(${imageURL || splash})` }}
      >
        <div className={scss.badges}>
          <span className={scss.category}>{category}</span>
          <span className={clsx(scss.priority, scss[priority.toLowerCase()])}>
            {priority}
          </span>
        </div>
        <div className={scss.cardLabel}>
          <span className={scss.dateLabel}>
            {formattedDate} at {time}
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
        More info
      </button>
    </li>
  );
};

export default EventListItem;
