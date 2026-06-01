import './App.css';

function App() {
  return (
    <div className="App">
            <header className="header">
                <div className="logoSection">
                  <img src="./images/logo.svg" className="logoHeader"/>
                  <span className="mainTitle">UA Fest Enjoyments</span>  
                </div>
                <div className="contacts">
                  <div className="contactItem">
                      <img src="./images/mailIcon.svg" className="mailIcon contactIcon"/>
                      <p className="contactText">uafestenjoyments@gmail.com</p>
                  </div>
                  <div className="contactItem">
                      <img src="./images/phoneIcon.svg" className="phoneIcon contactIcon"/>
                      <p className="contactText">067 784 1451</p>
                  </div>
                </div>
            </header>
        <main>
            <span className='mainDescription'>Twenty One Pilots в Україні. Маштабний виступ американського гурту в палаці спорту на UA Fest Enjoyments</span>
        </main>
    </div>
  );
}

export default App;
