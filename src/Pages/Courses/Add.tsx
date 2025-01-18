import Button from "Components/Button/Button";
import StaticDropdown from "Components/Dropdown/StaticDropdown";
import FullScreenLoading from "Components/Loading/FullScreenLoading";
import TextInput from "Components/TextInput/TextInput";
import { ICourse } from "Interfaces/DTO/course";
import { useState } from "react";
import { toast } from "react-toastify";
import { addCourse } from "Requests/course";
import { errorHandler } from "Utilities/errorHandler";

interface IProps {
  onAdd: () => void;
  onClose: () => void;
}

const Add = ({ onAdd, onClose }: IProps) => {
  const [formValues, setFormValues] = useState({
    tutor: "",
  } as ICourse);
  const [loading, setLoading] = useState(false);

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
          onClose();
          toast.success(resp.msg);
        } else toast.error(resp.msg);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  };

  return (
    <div className="px-3 py-2 flex flex-col justify-start items-start gap-2 rounded">
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
        value={formValues.daysOfWeek}
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
