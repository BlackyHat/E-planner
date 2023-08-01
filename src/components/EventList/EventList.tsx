import EventListItem from '../EventListItem/EventListItem';
import scss from './EventList.module.scss';
const list = [
  {
    id: '001',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
  {
    id: '002',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
  {
    id: '003',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
  {
    id: '004',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
  {
    id: '005',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
  {
    id: '006',
    title: 'Kyiv Conference',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '12/07/2023',
    time: '12:03 am',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
  },
];

const EventList = () => {
  return (
    <ul className={scss.container}>
      {list.map((event) => (
        <EventListItem key={event.id} data={event} />
      ))}
    </ul>
  );
};

export default EventList;
