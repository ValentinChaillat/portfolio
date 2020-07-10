import React, { Component } from "react";

class Realisation extends Component {
  render() {
    return (
      <div className="realisation">
        <h1>Realisation</h1>
        <div className="col-12 p-0 m-0 row">
          <div className="col-6 item">
            <div className="col-8 offset-2">
              <a href="http://pcb-market.com/">
                <img
                  alt="img du site pcb-market.com"
                  src="../img/pcb-market.png"
                ></img>
              </a>
              <a href="http://pcb-market.com/">
                <p>pcb-market.com</p>
              </a>
            </div>
          </div>
          <div className="col-6 item">
            <div className="col-8 offset-2">
              <a>
                <img
                  alt="img du site pcb-market.com"
                  src="../img/soon.png"
                ></img>
              </a>
              <a>
                <p>À venir</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Realisation;
