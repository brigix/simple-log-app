import { Link } from "react-router-dom";
import "./Log.css";

const Log = (props) => {
  return (
    <>
      <Link to={"/detail/" + props.Id} className="link">
        <div className="row">{props.Id + " | " + props.Title}</div>
      </Link>
    </>
  );
};

export default Log;
