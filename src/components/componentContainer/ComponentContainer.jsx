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
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <TableContainer table={"Employee"} />
      </div>
    );
  } else if (component === "projects") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <ProjectsComponent />
      </div>
    );
  } else if (component === "request-vacation") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <RequestVacationForm />
      </div>
    );
  } else if (component === "vacations") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <TableContainer table={"Vacation"} />
      </div>
    );
  } else if (component === "salaries") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <TableContainer table={"Salary"} />
      </div>
    );
  } else if (component === "reports") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <ReportsComponent />
      </div>
    );
  } else if (component === "careers") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <CareerForm />
      </div>
    );
  } else if (component === "contact") {
    return (
      <div className="componentContainer" style={{ padding: "0 12px" }}>
        <ContactUsComponent />
      </div>
    );
  }
}

export default ComponentContainer;
