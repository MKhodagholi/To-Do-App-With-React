import WorkItem from "./WorkItem";
import "./Work.css";

const Work = ({ works, onDeleteWork, onFinish }) => {
  return (
    <div className="work">
      {works.map((work) => (
        <WorkItem
          key={work.id}
          title={work.title}
          date={work.date}
          onDeleted={() => {
            onDeleteWork(work.id);
          }}
          style={work.style}
          onFinishingWork={() => onFinish(work.id)}
        />
      ))}
    </div>
  );
};

export default Work;
