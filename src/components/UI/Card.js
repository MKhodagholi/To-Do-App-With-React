/* This components is for background of our app */
import "./Card.css";
const Card = (props) => {
  const classes = props.className + " card";
  return <div className={classes}>{props.children}</div>;
};

export default Card;
