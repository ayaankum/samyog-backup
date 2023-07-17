import React, { useEffect } from "react";
import './club.css'
function Club(){
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    let index = 0;
    function animateBox() {
      if (index < boxes.length) {
        boxes[index].style.opacity = "1";
        index++;
        setTimeout(animateBox, 200);
      }
    }

    animateBox();
  }, []);

  return (
    <div>
      <center>
        <div id="container-main">
          <div className="box a1">
          <div class='clb'>CLUBS</div>
          </div>
          <div className="box a2" ></div>
          <div className="box a3"></div>
          <div className="box a4"></div>
          <div className="box a5"></div>
          <div className="box a6"></div>
          <div className="box a7"></div>
          <div className="box a8"></div>
          <div className="box a9"></div>
          <div className="box a10"></div>
          <div className="box aa1"></div>
        </div>
      </center>
    </div>
  );
};

export default Club;
