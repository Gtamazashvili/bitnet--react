export default function Press() {
  return (
    <>
      <div className="Press">
        <h1>
          General <br />
          <span className="blue">Enquiries</span>
        </h1>
        <p>
          Contact us through any medium preferable to you or get in touch <br />
          with us by email, phone or social media:
        </p>
        <div className="number">
          <p className="block"></p>
          <p>+999 999 999</p>
        </div>
        <div className="mail">
          <p className="block"></p>
          <p>person@mail.com</p>
        </div>
        <div className="icons2">
          <div className="littleIcon">
            <i className="fa-brands fa-square-facebook"></i>
          </div>
          <div className="littleIcon">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="littleIcon">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="littleIcon">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <h1>
          Press <span>releases</span>
        </h1>
        <hr className="lastHr" />
      </div>
    </>
  );
}
