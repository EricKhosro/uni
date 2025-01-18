import Button from "Components/Button/Button";
import Modal from "Components/Modal/Modal";
import { CommonTableUI } from "Components/Table/CommonTableUI";
import { ITutor } from "Interfaces/DTO/tutor";
import { useEffect, useState } from "react";
import { getTutors } from "Requests/tutor";
import { errorHandler } from "Utilities/errorHandler";
import Add from "./Add";

const Tutors = () => {
  const [tutors, setTutors] = useState<ITutor[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    if (!refreshFlag) return;
    getList();
  }, [refreshFlag]);

  const getList = () => {
    setLoading(true);
    getTutors()
      .then((resp) => {
        setTutors(resp);
        setRefreshFlag(false);
      })
      .catch(errorHandler)
      .finally(() => setLoading(false));
  };

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
          text="افزودن استاد"
          type="primary"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {tutors ? (
        <CommonTableUI
          reports={{
            translatedHeaders: [
              { headerName: "row", translateHeaderName: "ردیف" },
              { headerName: "firstName", translateHeaderName: "نام" },
              { headerName: "lastName", translateHeaderName: "نام خانودگی" },
            ],
            report: tutors.map((t, i) => ({ ...t, row: i + 1 })),
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tutors;
