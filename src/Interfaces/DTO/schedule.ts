export interface IScheduleSearchParam {
  tutorId: number;
  termNum: number;
  preferedDays: number[];
}

export interface ISchedule {
  id: number;
  dayOfWeek: number;
  coursesIds: number[];
}
