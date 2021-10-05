import "./Header.css";

const Header = ({onAddWork, onSetWork, title}) => {

  return (
    <div className="main-header">
      <header>
        <h1>فهرست کارهای روزانه</h1>
      </header>
      <div className="add-work">
        <input
          type="text"
          id="add-work-input"
          placeholder="چه برنامه ای دارید؟"
          onChange={(event) => (onSetWork(event))}
          value={title}
        />
        <button id="add-work-button" onClick={() => {onAddWork()}}>+</button>
      </div>
    </div>
  );
};

export default Header;
