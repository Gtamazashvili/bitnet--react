interface WhyDivProps {
  icon: string;
  reason: string;
  paragraph: string;
}

export default function WhyDiv({ icon, reason, paragraph }: WhyDivProps) {
  return (
    <div className="container">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h2>{reason}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
