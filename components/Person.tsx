interface personInfo {
  name: string;
  position: string;
}
export default function Person({ name, position }: personInfo) {
  return (
    <div className="person">
      <div className="photo"></div>
      <h3 className="name">{name}</h3>
      <p>{position}</p>
    </div>
  );
}
