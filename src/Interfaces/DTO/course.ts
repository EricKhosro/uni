export interface ICourse {
  id: number;
  title: string;
  termNum: number;
  tutor: string;
  tutorId: number;
  daysOfWeek: number; // index from 0
  time: string; //10:45
}
