import { useState, useEffect } from "react";
import Logs from "./Logs";
import Pagination from "./Pagination";
import "./Log.css";

const LogsPages = () => {
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(10);

  useEffect(() => {
    const getLogs = async () => {
      const logsFromServer = await fetchLogs();
      setLogs(logsFromServer);
    };
    getLogs();
  }, []);

  const fetchLogs = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return data;
  };

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="center">
      <div className="table">
        <Logs logs={currentLogs} />
      </div>
      <Pagination
        logsPerPage={logsPerPage}
        totalLogs={logs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default LogsPages;
