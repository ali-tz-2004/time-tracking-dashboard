import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Table from "./table/Table";
const App = () => {
  return (
    <Router>
      <div className="tables">
        <Table />
      </div>
    </Router>
  );
};
export default App;
