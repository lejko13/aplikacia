import React from 'react';
import './spodokdetail.css';

const Spodokdetail = () => {
  return (
    <div className="stepperBox">
      <div className="stepperStep stepperCompleted">
        <div className="stepperCircle">
          <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16}>
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
          </svg>
        </div>
        <div className="stepperLine" />
        <div className="stepperContent">
          <div className="stepperTitle">Order Placed</div>
          <div className="stepperStatus">Completed</div>
          <div className="stepperTime">May 28, 10:24 AM</div>
        </div>
      </div>

      <div className="stepperStep stepperActive">
        <div className="stepperCircle">2</div>
        <div className="stepperLine" />
        <div className="stepperContent">
          <div className="stepperTitle">Processing</div>
          <div className="stepperStatus">In Progress</div>
          <div className="stepperTime">May 29, 02:15 PM</div>
        </div>
      </div>

      <div className="stepperStep stepperPending">
        <div className="stepperCircle">3</div>
        <div className="stepperContent">
          <div className="stepperTitle">Shipping</div>
          <div className="stepperStatus">Pending</div>
          <div className="stepperTime">Estimated: May 30</div>
        </div>
      </div>

      <div className="stepperControls">
        <button className="stepperButton">Previous</button>
        <button className="stepperButton stepperButtonPrimary">Next</button>
      </div>
    </div>
  );
};

export default Spodokdetail;
