import { clsx } from 'clsx';
import scss from './EventCard.module.scss';
import poster from '../../assets/Rectangle 350@1x.png';

const EventCard = ({ id }: { id: string }) => {
  console.log(id);
  //   const { title, description, date, time, location, category, priority } = data;
  const event = {
    id: '001',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  };
  const { title, description, date, time, location, category, priority } =
    event;
  return (
    <div className={scss.container}>
      <p className={scss.title}>{title}</p>
      <div className={scss.card}>
        <img className={scss.poster} src={poster} />
        <p className={scss.description}>{description}</p>
        <ul className={scss.badges}>
          <li>
            <span className={scss.chip}>{category}</span>
          </li>
          <li>
            <span className={clsx(scss.chip, scss[priority.toLowerCase()])}>
              {priority}
            </span>
          </li>
          <li>
            <span className={scss.chip}>{location}</span>
          </li>
          <li>
            <span className={scss.chip}>
              {date} at {time}
            </span>
          </li>
        </ul>
        <ul className={scss.buttonWrapper}>
          <button type="button" className={scss.editButton} onClick={() => {}}>
            Edit
          </button>
          <button
            type="button"
            className={scss.deleteButton}
            onClick={() => {}}
          >
            Delete event
          </button>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
