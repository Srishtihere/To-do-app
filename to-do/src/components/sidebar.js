import { useState } from "react";
import TodoOutputCard from "./todooutputcard";
import initiallist from "../initialitems";
import { v4 as uuidv4 } from "uuid";
import "./sidebar.css";

function Sidebar() {
  const [item, setitem] = useState(" ");
  const [list, setlist] = useState([...initiallist]);

  const inputhandlechange = (e) => {
    if ((e.target.name = "inputtext")) {
      setitem(e.target.value);
    }
  };

  const deletetodo = (id) => {
    let templist = [...list];
    templist = templist.filter((item) => item.id !== id );
    setlist([...templist]);
  }

  const additem = () => {
    if (item === " ") return alert("add a valid input");
    let newlist = [...list];
    newlist.push({ name: item, id: uuidv4() });
    setlist([...newlist]);
    setitem(" ");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap bg-img">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-1 fst-italic d-none d-sm-inline">
                  To-do App
                </span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className=" bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">My day</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className=" bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">
                      Important
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">
                      Planned
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className=" bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">
                      Assigned To me
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className=" bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fs-4">Tasks</span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col py-3">
            <div className="w-100 d-flex justify-content-center align-item-center" style={{height:'10%',}}>
              <h1 className="align-self-center fs-1 text-light">
                Tasks
              </h1>
            </div>
            <div 
              className="w-100 d-flex justify-content-center align-item-center bg-img2"
              style={{height:'80%',}}
              >
              <span className="align-self-start h-auto w-100 m-3">
                {list.map((listitem) => (
                  <TodoOutputCard key={listitem.id} name={listitem.name} id={listitem.id} deletetodohandler={deletetodo}/>
                ))}
              </span>
            </div>
            <div className="w-100 d-flex justify-content-center align-item-center" style={{height:'10%',}}>
              <h3 className="w-100 align-self-end">
                <div class="input-group" style={{ height: "50px" }}>
                  <button
                    class="btn btn-outline-light"
                    type="button"
                    id="button-addon1"
                    onClick={additem}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    name="inputtext"
                    class="form-control"
                    placeholder="enter task"
                    onChange={inputhandlechange}
                    value={item}
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{backgroundColor:"rgba(137, 43, 226, 0.132)"}}
                  />
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
