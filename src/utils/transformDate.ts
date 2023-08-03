import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(new Date(date), 'dd/MM');
};
export const formatTime = (time: Date) => {
  return format(new Date(time), 'hh:mm a');
};
