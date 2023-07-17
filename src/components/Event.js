import React from "react";
import "./events.css"; // Import the CSS file

const Events = () => {
  return (
    <div className="container-event">
      <center>
        <h1 class = "eve" style={{ color: "white" }}>Events</h1>
      </center>
      <div className="container">
        <div className="row">

        <div class = "even1">
        <div className="btnJun ">
            <button className="btn btn-primary hu">Jul</button>
            <br />
            <button className="btn btn-light date">16</button>
          </div>
          <div className="col-2 ha">
            <h5>
              <b>2023 Nebraska Football Road</b>
            </h5>
            <h7>🕗8:00 AM</h7>
            <br />
            <h7>📌Memorial Stadium</h7>
          </div>
        </div>

        <div class = "even1">
        <div className="btnJun ">
            <button className="btn btn-primary hu">Jul</button>
            <br />
            <button className="btn btn-light date">16</button>
          </div>
          <div className="col-2 ha">
            <h5>
              <b>2023 Nebraska Football Road</b>
            </h5>
            <h7>🕗8:00 AM</h7>
            <br />
            <h7>📌Memorial Stadium</h7>
          </div>
        </div>

        <div class = "even1">
        <div className="btnJun ">
            <button className="btn btn-primary hu">Jul</button>
            <br />
            <button className="btn btn-light date">16</button>
          </div>
          <div className="col-2 ha">
            <h5>
              <b>2023 Nebraska Football Road</b>
            </h5>
            <h7>🕗8:00 AM</h7>
            <br />
            <h7>📌Memorial Stadium</h7>
          </div>
        </div>

        <div class = "even1">
        <div className="btnJun ">
            <button className="btn btn-primary hu">Jul</button>
            <br />
            <button className="btn btn-light date">16</button>
          </div>
          <div className="col-2 ha">
            <h5>
              <b>2023 Nebraska Football Road</b>
            </h5>
            <h7>🕗8:00 AM</h7>
            <br />
            <h7>📌Memorial Stadium</h7>
          </div>
        </div>
          
        </div>
      </div>

      <div className="row1">
        <center>
          <button className="more-event">
            more events
          </button>
        </center>
      </div>
      <br></br>
      <hr></hr>
    </div>
  );
};

export default Events;
