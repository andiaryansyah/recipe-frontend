import React, { useState } from "react";
import { Button, Offcanvas} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const options = [
  {
    // name: "test",
    scroll: false,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="dark" onClick={toggleShow} className="me-2 border-2">
        <label id="nav-icon1" for="nav-menu1">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div>
            <Link to="/addrecipe">Add Recipe</Link>
          </div>
          <div>
            <Link to="/recipelist">All Recipes</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Sidebar = () => {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
};

export default Sidebar;
