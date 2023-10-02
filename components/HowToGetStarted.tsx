export default function HowToGetStarted() {
  return (
    <div className="thirdDiv">
      <div className="howToGetStarted">
        <h1>
          <span>How to</span> get <br />
          started
        </h1>
        <div className="howToGetStartedDiv">
          <h3>01</h3>
          <div className="text">
            <h3>Register</h3>
            <p>easy and simple verification process</p>
          </div>
        </div>
        <div className=" two howToGetStartedDiv">
          <h3>02</h3>
          <div className="text">
            <h3>Fund your account</h3>
            <p>Using credit/debit cards or wire transactions</p>
          </div>
        </div>
        <div className=" three howToGetStartedDiv">
          <h3>03</h3>
          <div className="text">
            <h3>Exchange</h3>
            <p>Use your balance to exchange digital assets</p>
          </div>
        </div>
        <button className="getStarted" id="thirdDivBtn">
          Get Started
        </button>
      </div>
      <img
        src="../public/assets/images/frame-1.png"
        alt=""
        className="bigImage"
      />
    </div>
  );
}
