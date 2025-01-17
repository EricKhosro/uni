import { ITutor } from "Interfaces/DTO/tutor";
import { getRequest, postRequest } from "./requestTemplates";
import { Packet } from "Interfaces/commonDTOs";

export const getTutors = (): Promise<ITutor[]> =>
  getRequest("/api/tutor/getList");

export const addTutor = (dto: ITutor): Promise<Packet<boolean>> =>
  postRequest("/api/tutor/add", dto);
