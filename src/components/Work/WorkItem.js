import "./WorkItem.css";
import WorkDate from "./WorkDate";

const WorkItem = ({title, date, onDeleted, onFinishingWork, style}) => {



  return (
    <div className="div-work">
      <div className="work-title-buttons">
        <p className="work-title" style={style}>{title}</p>
        <div className="div-button">
          <i className="fa fa-trash" onClick={onDeleted}></i>
          <i className="fa fa-check" onClick={onFinishingWork}></i>
        </div>
      </div>
{      <WorkDate date={date} />}
    </div>
  );
};

export default WorkItem;
