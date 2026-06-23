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
        <div className='price'>
          <div className='priceWidget fanZone'>
            <div className='priceText'>
              <span className='titlePrice'>Fan Zone</span>
              <p className='aboutZone'>найближча зона до сцени. квиток коштує 4500 грн</p>
            </div>
            <button className='buy'>
              <p className='buyButtonText'>Купити</p>
              <img src='./images/buyIcon.svg' alt='buy icon' className='buyIcon' />
            </button>
          </div>
          <div className='priceWidget sector'>
            <div className='priceText'>
              <span className='titlePrice'>Sector</span>
              <p className='aboutZone'>зона сектору з сидіннями. квиток коштує 2200 грн</p>
            </div>
            <button className='buy'>
              <p className='buyButtonText'>Купити</p>
              <img src='./images/buyIcon.svg' alt='buy icon' className='buyIcon' />
            </button>
          </div>
        </div>
        <section className='twentyOnePilots'>
          <div className='bio'>
            <span className='bioTitle'>Twenty Øne Piløts</span>
            <p className='aboutTOP'>Американський музичний дует із міста Колумбус, штат Огайо. Це мікс фортепіано, синтезатора, барабанів, вокалу, укулеле і бас-гітари. Їхня історія про місто “Dema” та континент “Trench” вас зацікавить</p>
          </div>
          <div className='cards'>
            <div className='card tyler'>
              <img src='./images/tylerImg.jpg' className='tylerImg' alt='tyler' />
              <div className='cardDescription'>
                <div className='cardsDescHat'>
                  <div className='nameAndRole'>
                    <span className='name'>Тайлер Джозеф</span>
                    <p className='role'>фронтмен</p>
                  </div>
                  <img src='./images/microphoneIcon.svg' alt='microphone' />
                </div>
                <span className='aboutArtist'>Грає на клавішах, укулеле, бас-гітарі. Тайлер пише тексти пісень і є засновником гурту. Йому 37 років.  Має дружину і трьох дітей</span>
              </div>
            </div>
            <div className='card josh'>
              <img src='./images/joshImg.jpg' className='joshImg' alt='josh' />
              <div className='cardDescription'>
                <div className='cardsDescHat'>
                  <div className='nameAndRole'>
                    <span className='name'>Джош Дан</span>
                    <p className='role'>барабанщик</p>
                  </div>
                  <img src='./images/drumsIcon.svg' alt='drums' />
                </div>
                <span className='aboutArtist'>Грає на барабанах і заряджає атмосферою. Він дуже важлива частина гурту. Має дружину та дитину.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
