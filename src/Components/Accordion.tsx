import {
  Accordion as MUIAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./components.css";
import { useState } from "react";
interface IAccordionProps {
  header: string | JSX.Element;
  content: JSX.Element;
  className?: string;
  hasRequest?: boolean;
}

const Accordion = ({
  header,
  content,
  className,
  hasRequest,
}: IAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDetails = () => {
    if (!hasRequest) return content;
    if (isExpanded) return content;
    return <></>;
  };

  return (
    <div className="w-auto max-w-full">
      <MUIAccordion className={`accordion-box ${className}`}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="small" />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {header}
        </AccordionSummary>
        <AccordionDetails>{getDetails()}</AccordionDetails>
      </MUIAccordion>
    </div>
  );
};

export default Accordion;
