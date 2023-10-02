import img from "../src/assets/images/Screenshot 2023-09-15 045638.png";
export default function CryptoForEverybody() {
  return (
    <div className="firstDiv">
      <div className="cryptoForEverybody">
        <h1 className="cryptoForEverybodyh1">
          Crypto for <br />
          <span className="black"> everybody</span>
        </h1>
        <p className="cryptoForEverybodyp">
          Bitnet is the easiest place to buy, sell or hold your crypto assets.
          Get started today.
        </p>
        <button className="getStarted">Get started</button>
      </div>
      <img src={img} alt="" />
    </div>
  );
}
