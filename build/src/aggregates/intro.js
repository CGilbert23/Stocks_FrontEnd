function Intro({currentDate}) {

  
    return (
      <div>
        <div className="main">
          <div className="page-header">
            <h1 className="date">{currentDate}</h1>
            <h2 className="store-name">Stock Analysis</h2>
            <h3 className="page-description">
              Aggregate Values
            </h3>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Intro;
  