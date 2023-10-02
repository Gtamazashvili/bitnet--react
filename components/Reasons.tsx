import data from "./data";
import WhyBitnet from "./WhyBitnetDiv";
let divs = data.map((element) => (
  <WhyBitnet
    key={element.id}
    icon={element.icon}
    reason={element.title}
    paragraph={element.description}
  />
));
export default function Reasons() {
  return <div className="whyBitnetDivs">{divs}</div>;
}
