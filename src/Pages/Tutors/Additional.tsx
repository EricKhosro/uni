import { TableCell } from "@mui/material";
import { useState } from "react";
import {
  AdditionalColPlacement,
  IAdditional,
} from "Interfaces/Components-Interfaces/tableInterfaces";
import { ITutor } from "Interfaces/DTO/tutor";
import Button from "Components/Button/Button";
import Modal from "Components/Modal/Modal";
import CoursesTable from "Pages/Courses/CoursesTable";

const AdditionalHeader = () => {
  return (
    <>
      <TableCell>دروس</TableCell>
    </>
  );
};

const AdditionalCol: React.FC<{
  row: ITutor;
  onAction: () => void;
}> = ({ row, onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableCell>
        {isOpen ? (
          <Modal
            isOpen
            UI={<CoursesTable ids={row.coursesIds} />}
            onClose={() => setIsOpen(false)}
          />
        ) : (
          <></>
        )}
        <Button onClick={() => setIsOpen(true)} type="primary" text="مشاهده" />
      </TableCell>
    </>
  );
};

export const Additional: IAdditional<ITutor> = {
  getHeader: AdditionalHeader,
  getCol: AdditionalCol,
  colNumber: 3,
  placement: AdditionalColPlacement.Left,
};
