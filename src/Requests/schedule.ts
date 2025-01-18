import {
  IScheduleResponse,
  IScheduleSearchParam,
} from "Interfaces/DTO/schedule";
import { postRequest } from "./requestTemplates";

export const getSchedule = (
  sp: IScheduleSearchParam
): Promise<IScheduleResponse> => postRequest("/schedule/getTerm", sp);
