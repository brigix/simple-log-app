import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { LogObj } from "./LogObj";
import "./Log.css";

const AddLog = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredUserId, setEnteredUserId] = useState("");
  const [submitedSuccess, setSubmitedSuccess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState(false);

  const titleInputChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    formValidation();
  };

  const bodyInputChangeHandler = (event) => {
    setEnteredBody(event.target.value);
    formValidation();
  };

  const userIdInputChangeHandler = (event) => {
    setEnteredUserId(event.target.value);
    formValidation();
  };

  const titleInputBlurHandler = (event) => {
    setFormValid(false);
    setSubmitedSuccess(false);
    formValidation();
  };
  const bodyInputBlurHandler = (event) => {
    setFormValid(false);
    setSubmitedSuccess(false);
    formValidation();
  };
  const userIdInputBlurHandler = (event) => {
    setFormValid(false);
    setSubmitedSuccess(false);
    formValidation();
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const Log = new LogObj(enteredUserId, enteredTitle, enteredBody);
    addLogToServer(Log);
    setEnteredTitle("");
    setEnteredUserId("");
    setEnteredBody("");
    setSubmitedSuccess(false);
    setFormValid(false);
  };

  const formValidation = () => {
    if (!(enteredTitle === "" || enteredUserId === "" || enteredBody === "")) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const responseBack = (resp) => {
    if (
      resp.title === enteredTitle &&
      resp.userId === enteredUserId &&
      resp.body === enteredBody
    ) {
      setSubmitedSuccess(true);
    } else {
      setError(true);
    }
  };

  const addLogToServer = async (log) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: log.title,
        body: log.body,
        userId: log.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => responseBack(json));
  };

  return (
    <>
      <div className="flex-form">
        <form onSubmit={formSubmissionHandler}>
          <div className="form">
            <div className="H1">Add new Log</div>
            <div className="H1">
              <Link to="/">
                <Button name="X" size="Button Button-Small"></Button>
              </Link>
            </div>
          </div>
          <div className="control-group">
            <div className="form-control">
              <label htmlFor="name">User Id</label>
              <input
                type="number"
                id="UserId"
                onChange={userIdInputChangeHandler}
                onBlur={userIdInputBlurHandler}
                value={enteredUserId}
              />
            </div>
            <div className="form-control">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                id="Title"
                onChange={titleInputChangeHandler}
                onBlur={titleInputBlurHandler}
                value={enteredTitle}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="name">Body</label>
            <input
              type="text"
              id="Body"
              onChange={bodyInputChangeHandler}
              onBlur={bodyInputBlurHandler}
              value={enteredBody}
            />
          </div>
          <div className="form-actions">
            <Button
              name="Submit"
              size="Button Button-Large"
              disabled={!formValid}
            ></Button>
          </div>
        </form>
      </div>
      <div>
        {submitedSuccess === true ? (
          <h2>Submited succsesfully!</h2>
        ) : error === true ? (
          <h2>Error!</h2>
        ) : (
          <h2> </h2>
        )}
      </div>
    </>
  );
};
export default AddLog;
