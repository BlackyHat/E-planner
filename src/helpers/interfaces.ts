export interface EventProps {
  data: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    priority: string;
    imageURL?: string;
  };
}
