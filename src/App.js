import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Button from "./components/Button/Button";
import AddLog from "./components/LogsList/AddLog";
import LogsDetail from "./components/LogsList/LogsDetail";
import LogsPages from "./components/LogsList/LogsPages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="Header">
          <p>Data from: jsonplaceholder.typicode.com/ </p>
          <Link to="/logsPages">
            <Button name="Log List" size="Button Button-Large"></Button>
          </Link>
          <Link to="/addLog">
            <Button name="Add new log" size="Button Button-Large"></Button>
          </Link>
          <Routes>
            <Route path="/" element={<LogsPages />} />
            <Route path="/addLog" element={<AddLog />} />
            <Route path="/logsPages" element={<LogsPages />} />
            <Route path="/detail/:id" element={<LogsDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
