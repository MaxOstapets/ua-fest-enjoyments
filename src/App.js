import './App.css';

function App() {
  return (
    <div className="App">
      <div className='start'>
        <header className="header">
          <div className="logoSection">
            <img src="./images/logo.svg" className="logoHeader" />
            <span className="mainTitle">UA Fest Enjoyments</span>
          </div>
          <div className="contacts">
            <div className="contactItem">
              <img src="./images/mailIcon.svg" className="mailIcon contactIcon" />
              <p className="contactText">uafestenjoyments@gmail.com</p>
            </div>
            <div className="contactItem">
              <img src="./images/phoneIcon.svg" className="phoneIcon contactIcon" />
              <p className="contactText">067 784 1451</p>
            </div>
          </div>
        </header>
        <span className='mainDescription'>Twenty One Pilots в Україні. Маштабний виступ американського гурту в палаці спорту на UA Fest Enjoyments</span>
      </div>
      <main>
        <div className='descriptors'>
          <div className='festDescriptor uaFest'>
            <div className='descriptorsHat'>
              <span className='descriptorsTitle'>UA Fest Enjoyments</span>
              <img src="./images/musicIcon.svg" className='descriptorsIcon' alt='music icon' />
            </div>
            <p className='descriptorsContext'>Це український фестиваль, на якому збираються виконавці з усього світу. Ми гарантуємо приємну музику, вайб, настрій, смачну їжу, приємні спілкування</p>
          </div>
          <div className='festDescriptor location'>
            <div className='descriptorsHat'>
              <span className='descriptorsTitle'>Де і коли?</span>
              <img src="./images/locationIcon.svg" className='descriptorsIcon' alt='location icon' />
            </div>
            <p className='descriptorsContext'>Дата: 22.10.2026 - 25.10.2026. Місто Київ, Палац Спорту</p>
          </div>
        </div>
        <div className='goal'>
          <img src='./images/festImg.jpg' className='festImg' alt='fest' />
          <span className='goalText'>Наша мета - об’єднати фанатів музики, показати людям, що вони не самі, що поруч завжди знайдеться той хто зрозуміє і підтримає</span>
        </div>

      </main>
    </div>
  );
}

export default App;
