import { ISchedule, IScheduleSearchParam } from "Interfaces/DTO/schedule";
import { postRequest } from "./requestTemplates";

export const getSchedule = (sp: IScheduleSearchParam): Promise<ISchedule[]> =>
  postRequest("/schedule/getTerm", sp);
