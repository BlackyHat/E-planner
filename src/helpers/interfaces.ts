export interface EventProps {
  data: IEvent;
}
export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  category: string;
  priority: string;
  imageURL?: string;
}
