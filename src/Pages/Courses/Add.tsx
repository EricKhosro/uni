import Button from "Components/Button/Button";
import CustomStaticDropdown from "Components/Dropdown/Custom/CustomStaticDropdown";
import StaticDropdown from "Components/Dropdown/StaticDropdown";
import { StaticMultiSelectDropdown } from "Components/Dropdown/StaticMultiSelectDropdown";
import FullScreenLoading from "Components/Loading/FullScreenLoading";
import TextInput from "Components/TextInput/TextInput";
import { ICourse } from "Interfaces/DTO/course";
import { ITutor } from "Interfaces/DTO/tutor";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addCourse, getCourses } from "Requests/course";
import { addTutor, getTutors } from "Requests/tutor";
import { errorHandler } from "Utilities/errorHandler";

interface IProps {
  onAdd: () => void;
}

const Add = ({ onAdd }: IProps) => {
  const [formValues, setFormValues] = useState({} as ICourse);
  const [loading, setLoading] = useState(false);
  const [tutors, setTutors] = useState<ITutor[] | null>(null);

  useEffect(() => {
    setLoading(true);
    getTutors()
      .then((resp) => {
        setTutors(resp);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  }, []);

  const changeHandler = (name: string, value: any) => {
    if (name === "tutor")
      setFormValues({
        ...formValues,
        [name]: value.name,
        [`${name}Id`]: value.id,
      });
    else setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    setLoading(true);
    addCourse(formValues)
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
        label="نام درس"
        onChange={changeHandler}
        value={formValues.title}
        name="title"
      />
      <TextInput
        label="شماره ترم"
        onChange={changeHandler}
        value={formValues.termNum?.toString()}
        name="termNum"
      />
      <CustomStaticDropdown
        onChange={changeHandler}
        value={formValues.tutor?.toString()}
        name="tutor"
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
      <StaticDropdown
        name="daysOfWeek"
        placeholder="روز هفته"
        onChange={changeHandler}
        options={[
          { id: 0, name: "شنبه" },
          { id: 1, name: "یکشنبه" },
          { id: 2, name: "دوشنبه" },
          { id: 3, name: "سه شنبه" },
          { id: 4, name: "چهارشتبه" },
          { id: 5, name: "پنجشنبه" },
        ]}
      />
      <TextInput
        label="زمان"
        onChange={changeHandler}
        value={formValues.time?.toString()}
        name="time"
      />

      <Button text="ثبت" onClick={onSubmit} type="primary" />
    </div>
  );
};

export default Add;
