import People from "./People";

export default function WhoWeAre() {
  return (
    <>
      <div className="startingText">
        <h1 className="whoWeAreh1">
          Who <span className="blue">we are </span>
        </h1>
        <p>
          We started in 2020 with the radical idea that anyone, anywhere, should
          be able to easily and <br />
          securely send and receive Bitcoin. Today, we offer a trusted and
          easy-to-use platform for <br />
          accessing the broader crypto economy
        </p>
      </div>
      <div className="picture">
        <h1 className="blue">Image space</h1>
      </div>
      <h1>
        <span className="blue">We are building the crypto economy </span>– a
        more fair, accessible, efficient, and transparent financial system
        enabled by crypto
      </h1>
      <h1 className="ourTeamh1">Our team</h1>
      <p>
        In the future, Bitnet plans to go beyond the borders of Georgia and
        offer its own platform <br />
        and services to users around the world.
      </p>
      <div className="whoWeAre">
        <People />
      </div>
      <div className="partnersOfTheCompany">
        <div className="divOfh1">
          <h1>
            <span className="blue">Our</span> partners
          </h1>
        </div>
        <div className="photosOfPartners">
          <div className="partnerCompany"></div>
          <div className="partnerCompany"></div>
          <div className="partnerCompany"></div>
          <div className="partnerCompany"></div>
          <div className="partnerCompany"></div>
          <div className="partnerCompany"></div>
        </div>
      </div>
    </>
  );
}
