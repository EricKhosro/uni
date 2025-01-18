import Modal from "Components/Modal/Modal";
import { useState } from "react";
import Add from "./Add";
import Button from "Components/Button/Button";
import CoursesTable from "./CoursesTable";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start gap-5 w-full">
      {isOpen ? (
        <Modal
          isOpen
          onClose={() => setIsOpen(false)}
          UI={
            <Add
              onClose={() => setIsOpen(false)}
              onAdd={() => setRefreshFlag(true)}
            />
          }
        />
      ) : (
        <></>
      )}
      <div className="w-min">
        <Button
          text="افزودن درس"
          type="primary"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <CoursesTable
        ids={null}
        refreshFlag={refreshFlag}
        onFetchComplete={() => setRefreshFlag(false)}
      />
    </div>
  );
};

export default Courses;
