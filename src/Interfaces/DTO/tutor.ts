import { ITableReport } from "Interfaces/Components-Interfaces/tableInterfaces";

export interface ITutor extends ITableReport {
  id: number;
  firstName: string;
  lastName: string;
  coursesIds: number[];
}
