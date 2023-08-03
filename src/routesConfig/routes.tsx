import { MainPage } from '../pages/MainPage/MainPage';
import { CreateEventPage } from '../pages/CreateEventPage/CreateEventPage';
import { EventPage } from '../pages/EventPage/EventPage';
import { EditEventPage } from '../pages/EditEventPage/EditEventPage';
import Layout from '../components/Layout/Layout';

import { Navigate } from 'react-router-dom';

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/create-event',
        element: <CreateEventPage />,
      },

      {
        path: '/edit-event/:eventId',
        element: <EditEventPage />,
      },
      {
        path: '/event/:eventId',
        element: <EventPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
];
