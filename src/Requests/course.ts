import { ICourse } from "Interfaces/DTO/course";
import { getRequest, postRequest } from "./requestTemplates";
import { Packet } from "Interfaces/commonDTOs";

export const getCourses = (): Promise<ICourse[]> =>
  getRequest("/course/get");

export const addCourse = (dto: ICourse): Promise<Packet<boolean>> =>
  postRequest("/course/add", dto);
