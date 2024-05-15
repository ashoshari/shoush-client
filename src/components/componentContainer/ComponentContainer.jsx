import { useParams } from "react-router-dom";
import ProjectsComponent from "./projects/ProjectsComponent";
import RequestVacationForm from "./formContainer/RequestVacationForm";
import ReportsComponent from "./reports/ReportsComponent";
import CareerForm from "./formContainer/CareerForm";
import ContactUsComponent from "./contactUs/ContactUsComponent";
import TableContainer from "./tableContainer/TableContainer";
function ComponentContainer() {
  const { component } = useParams();

  if (component === "employees") {
    return (
      <div className="componentContainer px-3">
        <TableContainer table={"Employee"} />
      </div>
    );
  } else if (component === "projects") {
    return (
      <div className="componentContainer px-3">
        <ProjectsComponent />
      </div>
    );
  } else if (component === "request-vacation") {
    return (
      <div className="componentContainer px-3">
        <RequestVacationForm />
      </div>
    );
  } else if (component === "vacations") {
    return (
      <div className="componentContainer px-3">
        <TableContainer table={"Vacation"} />
      </div>
    );
  } else if (component === "salaries") {
    return (
      <div className="componentContainer px-3">
        <TableContainer table={"Salary"} />
      </div>
    );
  } else if (component === "reports") {
    return (
      <div className="componentContainer px-3">
        <ReportsComponent />
      </div>
    );
  } else if (component === "careers") {
    return (
      <div className="componentContainer px-3">
        <CareerForm />
      </div>
    );
  } else if (component === "contact") {
    return (
      <div className="componentContainer px-3">
        <ContactUsComponent />
      </div>
    );
  }
}

export default ComponentContainer;
