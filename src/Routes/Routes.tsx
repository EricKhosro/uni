import { Routes as Switch, Route } from "react-router-dom";
import MasterPage from "Layout/MasterPage";
import Dashboard from "Pages/Dashboard";
import Tutors from "Pages/Tutors/Tutors";

const Routes = () => {
  return (
    <MasterPage>
      <Switch>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Tutors" element={<Tutors />} />
      </Switch>
    </MasterPage>
  );
};

export default Routes;
