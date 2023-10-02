import Person from "./Person";
import personData from "./personData";
export default function People() {
  let people = personData.map((person) => {
    return (
      <Person key={person.id} position={person.position} name={person.name} />
    );
  });
  return <div className="people">{people}</div>;
}
