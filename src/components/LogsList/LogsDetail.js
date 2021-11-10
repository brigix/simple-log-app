import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

const LogsDetail = () => {
  const params = useParams();
  const id = params.id;
  const [Log, setLog] = useState([]);

  useEffect(() => {
    const getLog = async () => {
      const LogFromServer = await fetchLog(id);
      setLog(LogFromServer);
    };
    getLog();
  }, [id]);

  const fetchLog = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  };

  return (
    <div className="center">
      <div className="flex-container">
        <div style={{ flexGrow: 1 }}>
          User id
          <p>{Log.userId}</p>
        </div>
        <div style={{ flexGrow: 1 }}>
          Title
          <p>{Log.title}</p>
        </div>
        <div style={{ flexGrow: 3 }}>
          Body
          <p>{Log.body}</p>
        </div>
      </div>
      <Link to="/logsPages">
        <Button name="Back" size="Button Button-Large"></Button>
      </Link>
    </div>
  );
};

export default LogsDetail;
