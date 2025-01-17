import Button from "Components/Button/Button";
import { StaticMultiSelectDropdown } from "Components/Dropdown/StaticMultiSelectDropdown";
import FullScreenLoading from "Components/Loading/FullScreenLoading";
import TextInput from "Components/TextInput/TextInput";
import { ICourse } from "Interfaces/DTO/course";
import { ITutor } from "Interfaces/DTO/tutor";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCourses } from "Requests/course";
import { addTutor } from "Requests/tutor";
import { errorHandler } from "Utilities/errorHandler";

interface IProps {
  onAdd: () => void;
}

const Add = ({ onAdd }: IProps) => {
  const [formValues, setFormValues] = useState({} as ITutor);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<ICourse[] | null>(null);

  const changeHandler = (name: string, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    setLoading(true);
    getCourses()
      .then((resp) => {
        setCourses(resp);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = () => {
    setLoading(true);
    addTutor(formValues)
      .then((resp) => {
        if (resp.data) {
          onAdd();
          toast.success(resp.msg);
        } else toast.error(resp.msg);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  };

  return (
    <div className="px-3 py-2 flex flex-col justify-start items-start gap-2 border border-gray2 rounded">
      {loading ? <FullScreenLoading /> : <></>}
      <TextInput
        label="نام"
        onChange={changeHandler}
        value={formValues.firstName}
      />
      <TextInput
        label="نام خانوادگی"
        onChange={changeHandler}
        value={formValues.firstName}
      />
      <StaticMultiSelectDropdown
        items={courses ? courses.map((c) => ({ id: c.id, name: c.title })) : []}
        values={formValues.coursesIds}
        name="coursesIds"
        label="دروس"
        onChange={changeHandler}
        isModal
      />
      <Button text="ثبت" onClick={onSubmit} type="primary" />
    </div>
  );
};

export default Add;
