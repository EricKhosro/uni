import { Routes as Switch, Route } from "react-router-dom";
import MasterPage from "Layout/MasterPage";
import Dashboard from "Pages/Dashboard";
import Tutors from "Pages/Tutors/Tutors";
import Courses from "Pages/Courses/Courses";
import Schedule from "Pages/Schedule";

const Routes = () => {
  return (
    <MasterPage>
      <Switch>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Tutors" element={<Tutors />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="Schedule" element={<Schedule />} />
      </Switch>
    </MasterPage>
  );
};

export default Routes;
