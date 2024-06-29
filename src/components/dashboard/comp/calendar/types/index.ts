export type Appointment = {
  id: number;
  title: string;
  description: string;
  location: string;
  resource: string;
};

export type Blockout = { id: number; name: string };

export type EventItem = {
  start?: Date;
  end?: Date;
  data?: { appointment?: Appointment; blockout?: Blockout };
  isDraggable?: boolean;
  resourceId?: number;
};
