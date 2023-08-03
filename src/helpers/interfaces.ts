export interface EventProps {
  data: IEvent;
}
export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  priority: string;
  imageURL?: string;
  [key: string]: string | undefined;
}
