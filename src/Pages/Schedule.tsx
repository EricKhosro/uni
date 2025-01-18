import Button from "Components/Button/Button";
import StaticDropdown from "Components/Dropdown/StaticDropdown";
import { StaticMultiSelectDropdown } from "Components/Dropdown/StaticMultiSelectDropdown";
import FullScreenLoading from "Components/Loading/FullScreenLoading";
import { CommonTableUI } from "Components/Table/CommonTableUI";
import { ITableReport } from "Interfaces/Components-Interfaces/tableInterfaces";
import { ICourse } from "Interfaces/DTO/course";
import {
  IScheduleResponse,
  IScheduleSearchParam,
} from "Interfaces/DTO/schedule";
import { ITutor } from "Interfaces/DTO/tutor";
import { useEffect, useState } from "react";
import { getCourses } from "Requests/course";
import { getSchedule } from "Requests/schedule";
import { getTutors } from "Requests/tutor";
import { getFarsiDayOfWeek } from "Utilities/day";
import { errorHandler } from "Utilities/errorHandler";

interface IRow extends ITableReport {
  row: number;
  day: string;
  courseTitle: string;
  time: string;
}

const Schedule = () => {
  const [tutors, setTutors] = useState<ITutor[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({} as IScheduleSearchParam);
  const [schedule, setSchedule] = useState<IScheduleResponse | null>(null);
  const [courses, setCourses] = useState<ICourse[] | null>(null);

  useEffect(() => {
    setLoading(true);
    getTutors()
      .then((resp) => {
        setTutors(resp);
        getCourses()
          .then((resp) => {
            setCourses(resp);
          })
          .catch(errorHandler);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  }, []);

  const changeHandler = (name: string, value: any) => {
    setSearchParams({ ...searchParams, [name]: value });
  };

  const onSubmit = () => {
    setLoading(true);
    getSchedule(searchParams)
      .then((resp) => {
        setSchedule(resp);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  };

  const getTableData = () => {
    const row: IRow[] = [];
    if (!schedule || !schedule.schedules) return row;
    schedule.schedules.forEach((sIndex, i) => {
      sIndex.coursesIds.forEach((s) => {
        const targetCourse = courses?.find((c) => c.id === s);
        row.push({
          id: i,
          row: row.length + 1,
          day: getFarsiDayOfWeek(sIndex.dayOfWeek),
          courseTitle: targetCourse?.title || "-",
          time: targetCourse?.time || "-",
        });
      });
    });
    return row;
  };

  return (
    <div className="flex flex-col justify-start items-start gap-3">
      {loading ? <FullScreenLoading /> : <></>}
      <div className="flex flex-row justify-start items-center gap-3 w-[600px]">
        <StaticDropdown
          name="tutorId"
          value={searchParams.tutorId}
          onChange={changeHandler}
          options={
            tutors
              ? tutors.map((t) => ({
                  id: t.id,
                  name: t.firstName + " " + t.lastName,
                }))
              : []
          }
          placeholder="استاد"
        />
        <StaticMultiSelectDropdown
          name="termNum"
          label="شماره ترم"
          onChange={changeHandler}
          items={[
            { id: 1, name: "ترم 1" },
            { id: 2, name: "ترم 2" },
            { id: 3, name: "ترم 3" },
            { id: 4, name: "ترم 4" },
            { id: 5, name: "ترم 5" },
            { id: 6, name: "ترم 6" },
            { id: 7, name: "ترم 7" },
            { id: 8, name: "ترم 8" },
            { id: 9, name: "ترم 9" },
            { id: 10, name: "ترم 10" },
          ]}
          values={searchParams.termNum}
          hideTagBox
        />
        <StaticMultiSelectDropdown
          name="preferedDays"
          label="روز هفته"
          onChange={changeHandler}
          items={[
            { id: 0, name: "شنبه" },
            { id: 1, name: "یکشنبه" },
            { id: 2, name: "دوشنبه" },
            { id: 3, name: "سه شنبه" },
            { id: 4, name: "چهارشتبه" },
            { id: 5, name: "پنجشنبه" },
          ]}
          values={searchParams.preferedDays}
          hideTagBox
        />
        <Button onClick={onSubmit} text="جستجو" type="primary" />
      </div>
      {schedule ? (
        <CommonTableUI
          reports={{
            translatedHeaders: [
              { headerName: "row", translateHeaderName: "ردیف" },
              { headerName: "day", translateHeaderName: "روز" },
              { headerName: "courseTitle", translateHeaderName: "عنوان" },
              { headerName: "time", translateHeaderName: "ساعت" },
            ],
            report: getTableData(),
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Schedule;
