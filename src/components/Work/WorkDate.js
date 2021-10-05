import "./WorkDate.css";

const WorkDate = (props) => {
  const day = props.date.toLocaleString("fa", { day: "numeric" });
  const month = props.date.toLocaleString("fa", { month: "long" });
  const year = props.date.toLocaleString("fa", { year: "numeric" });
  const hour = props.date.getHours();
  const minute = props.date.getMinutes();
  const second = props.date.getSeconds();
  return (
    <div className="work-date">
      <div className="work-date__C">
        <div className="work-date__day">{day}</div>
        <div className="work-date__month">{month}</div>
        <div className="work-date__year">{year}</div>
      </div>
      <div className="work-date__S">
        <div>{hour}</div>
        <div>{minute}</div>
        <div>{second}</div>
      </div>
    </div>
  );
};

export default WorkDate;
