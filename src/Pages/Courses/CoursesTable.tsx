import FullScreenLoading from "Components/Loading/FullScreenLoading";
import { CommonTableUI } from "Components/Table/CommonTableUI";
import { ICourse } from "Interfaces/DTO/course";
import { useEffect, useState } from "react";
import { getCourses } from "Requests/course";
import { getFarsiDayOfWeek } from "Utilities/day";
import { errorHandler } from "Utilities/errorHandler";

interface IProps {
  ids: number[] | null;
  refreshFlag: boolean;
  onFetchComplete: () => void;
}

const CoursesTable = ({ ids, refreshFlag, onFetchComplete }: IProps) => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCourses();
  }, []);
  useEffect(() => {
    if (refreshFlag) fetchCourses();
  }, [refreshFlag]);

  function fetchCourses() {
    setLoading(true);
    getCourses()
      .then((resp) => {
        setCourses(resp);
        onFetchComplete();
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  }

  return (
    <>
      {loading ? <FullScreenLoading /> : <></>}
      {courses ? (
        <CommonTableUI
          reports={{
            translatedHeaders: [
              { headerName: "row", translateHeaderName: "ردیف" },
              { headerName: "title", translateHeaderName: "عنوان" },
              { headerName: "termNum", translateHeaderName: "شماره ترم" },
              { headerName: "daysOfWeek", translateHeaderName: "روز" },
              { headerName: "time", translateHeaderName: "ساعت" },
            ],
            report: (ids && ids.length
              ? courses.filter((c) => ids.includes(c.id))
              : courses
            ).map((t, i) => ({
              ...t,
              row: i + 1,
              daysOfWeek: getFarsiDayOfWeek(t.daysOfWeek),
            })),
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CoursesTable;
