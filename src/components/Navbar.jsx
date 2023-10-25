import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, resetPersons } from "../features/taskSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date().toLocaleString());
  const [inputValue, setInputValue] = useState("");

  const updateDate = () => {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
  };

  updateDate();

  const increaseTasks = () => {
    if (inputValue.length > 0) {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 1000),
          name: inputValue,
          counter: 0,
        })
      );
      setInputValue("");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ marginRight: "50px" }} href="#">
            Enter Task
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    className="form-control me-2"
                    type="search"
                    placeholder="Task Name"
                    aria-label="Search"
                  />
                </form>
              </li>
              <li className="nav-item">
                <button
                  onClick={increaseTasks}
                  className="btn btn-outline-success"
                >
                  Add Task
                </button>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <button
                  onClick={() => dispatch(resetPersons())}
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Reset Number Of Persons
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-danger" type="submit">
                {date}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
