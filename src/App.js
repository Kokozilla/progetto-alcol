import {useState, useEffect} from 'react';
import logo from './Alcol.gif';
import video from './alcolvideo.gif'
import './App.css';

function LoadingScreen({onLoaded}) {
  useEffect(() => {
    setTimeout(onLoaded, 3000); //3000 millisecondi = 3sec
  }, [onLoaded]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='loading-text'>
          Sta caricando...
        </p>
      </header>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".App-header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={video} className='sfondo-video' alt='video di sfondo'/>
        <h1 className='titolo1'>Welcome su AlcoLovers</h1>
      </header>

      <h2>Chi Siamo?</h2>
      <section className='chisiamo'>
      <p>Ciao! 🎉 Sono una studentessa annoiata con troppa fantasia e troppo tempo libero. 
      Così, invece di guardare serie TV per la millesima volta, ho deciso di creare AlcoLovers: 
      un sito interattivo per esplorare il mondo degli alcolici con quiz, test e curiosità! 🍹✨
      Non sono un'esperta di alcol (giuro! 🤞), ma mi sono divertita a raccogliere info, 
      creare giochini e dare un senso alla mia procrastinazione. 
      Quindi... buon divertimento! E ricordati: bere con moderazione, ma esplorare senza limiti! 😉🔥</p>
      </section>
      <h1>🍹🍹🍹</h1>
      <h2>Glossario Alcolico</h2>
      <a href='#A'>A</a> <a href='#B'>B</a> <a href='#C'>C</a>
      <a href='#D'>D</a> <a href='#E'>E</a> <a href='#F'>F</a>
      <a href='#G'>G</a> <a href='#H'>H</a> <a href='#I'>I</a>
      <a href='#J'>J</a> <a href='#K'>K</a> <a href='#L'>L</a>
      <a href='#M'>M</a> <a href='#N'>N</a> <a href='#O'>O</a>
      <a href='#P'>P</a> <a href='#Q'>Q</a> <a href='#R'>R</a>
      <a href='#S'>S</a> <a href='#T'>T</a> <a href='#U'>U</a>
      <a href='#V'>V</a> <a href='#W'>W</a> <a href='#X'>X</a>
      <a href='#Y'>Y</a> <a href='#Z'>Z</a>
      <ul className='glossario'>
        <li className='lista_glossario' id='A'>A - Absinthe 🟢</li>
        <p>Liquore ad alta gradazione con estratti di assenzio, 
          noto per la sua storia controversa e il colore verde smeraldo.</p>
        <li className='lista_glossario' id='B'>B - Bloody Mary 🍅</li>
        <p>Cocktail a base di vodka, succo di pomodoro, tabasco e spezie, 
          perfetto per il brunch.</p>
        <li className='lista_glossario' id='C'>C - Caipirinha 🇧🇷</li>
        <p>Cocktail brasiliano con cachaça, lime, zucchero e ghiaccio tritato.</p>
        <li className='lista_glossario' id='D'>D - Daiquiri 🍋</li>
        <p>Cocktail cubano con rum, lime e sciroppo di zucchero, amato anche da Hemingway.</p>
        <li className='lista_glossario' id='E'>E - Espresso Martini ☕</li>
        <p>Cocktail a base di vodka, liquore al caffè (Kahlúa) ed espresso, 
          energizzante e sofisticato.</p>
        <li className='lista_glossario' id='F'>F - Fernet 🇮🇹</li>
        <p>Amaro italiano alle erbe, noto per il suo gusto forte e il suo ruolo nei digestivi.</p>
        <li className='lista_glossario' id='G'>G - Gin Tonic 🍋</li>
        <p>Mix semplice e raffinato di gin, acqua tonica e fettina di limone o lime.</p>
        <li className='lista_glossario' id='H'>H - Hurricane 🌪️</li>
        <p>Cocktail tropicale con rum scuro e chiaro, succo di frutto della passione e lime.</p>
        <li className='lista_glossario' id='I'>I - Irish Coffee 🇮🇪</li>
        <p>Bevanda calda a base di caffè, whiskey irlandese, zucchero e panna.</p>
        <li className='lista_glossario' id='J'>J - Jägermeister 🌿</li>
        <p>Liquore tedesco alle erbe, spesso servito ghiacciato o nei famosi shot "Jägerbomb".</p>
        <li className='lista_glossario' id='K'>K - Kir Royale 🍷</li>
        <p>Cocktail francese con crema di cassis (liquore al ribes nero) e champagne.</p>
        <li className='lista_glossario' id='L'>L - Limoncello 🇮🇹</li>
        <p>Liquore italiano a base di scorze di limone, perfetto come digestivo.</p>
        <li className='lista_glossario' id='M'>M - Margarita 🍋</li>
        <p>Cocktail messicano con tequila, triple sec e succo di lime, servito con bordo di sale.</p>
        <li className='lista_glossario' id='N'>N - Negroni 🇮🇹</li>
        <p>Iconico cocktail italiano con gin, vermouth rosso e Campari, perfetto per l’aperitivo.</p>
        <li className='lista_glossario' id='O'>O - Old Fashioned 🥃</li>
        <p>Cocktail classico con bourbon o rye whiskey, zucchero, angostura e scorza d’arancia.</p>
        <li className='lista_glossario' id='P'>P - Piña Colada 🍍</li>
        <p>Cocktail tropicale a base di rum, ananas e latte di cocco, simbolo dell’estate.</p>
        <li className='lista_glossario' id='Q'>Q - Quarantini 🍸</li>
        <p>Nome ironico per un Martini fai-da-te nato durante i lockdown.</p>
        <li className='lista_glossario' id='R'>R - Rum Punch 🍹</li>
        <p>Miscela esotica di rum, succhi di frutta e spezie, tipica dei Caraibi.</p>
        <li className='lista_glossario' id='S'>S - Sangria 🍷</li>
        <p>Bevanda spagnola a base di vino rosso, frutta fresca e spezie.</p>
        <li className='lista_glossario' id='T'>T - Tequila Sunrise 🌅</li>
        <p>Cocktail con tequila, succo d’arancia e granatina, dal caratteristico effetto sfumato.</p>
        <li className='lista_glossario' id='U'>U - U-Boot 🇩🇪</li>
        <p>Shot di vodka immerso in un boccale di birra, una sfida per stomaci forti.</p>
        <li className='lista_glossario' id='V'>V - Vodka Martini 🍸</li>
        <p>Cocktail elegante a base di vodka e vermouth, il preferito di James Bond.</p>
        <li className='lista_glossario' id='W'>W - Whisky Sour 🥃</li>
        <p>Cocktail con whiskey, succo di limone, sciroppo di zucchero e albume d’uovo.</p>
        <li className='lista_glossario' id='X'>X - Xeres (Sherry) 🇪🇸</li>
        <p>Vino liquoroso spagnolo, spesso servito come aperitivo o nei cocktail.</p>
        <li className='lista_glossario' id='Y'>Y - Yellow Bird 🐦</li>
        <p>Cocktail esotico con rum, triple sec, Galliano e succo di lime.</p>
        <li className='lista_glossario' id='Z'>Z - Zombie 🧟‍♂️</li>
        <p>Cocktail tiki ultra-alcolico con vari tipi di rum, lime, ananas e spezie.</p>
      </ul>
      <footer>
        <MenuQuiz/>
      </footer>
    </div>
  )
}


function Menu() {
  const[isVisible, setisVisible] = useState(false);
  // const[changePage, setChangePage] = useState(<HomePage/>)

  useEffect(() => {
    setTimeout(() => setisVisible(true), 500); //late dissolv.
  }, []);

  return (
    <nav className={`menu ${isVisible ? "visible" : "hidden"}`}>
      
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#quiz'>Quiz</a></li>
        <li><a href='comingsoon'>COMING SOON</a></li>
      </ul>
    </nav>
  )
}

function MenuQuiz() {
  const questions = [
    { question: "Quale di questi alcolici ha la gradazione più alta?", option: ["Vodka", "Whisky", "Grappa"], correctAnswer: "Grappa" },
    { question: "Quale di questi cocktail contiene tequila?", option: ["Mojito", "Margarita", "Old Fashioned", "Negroni"], correctAnswer: "Margarita" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
    
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  }

  const handleNextQuestion = () => {
     if(selectedAnswer === questions[currentQuestion].correctAnswer) {
     setScore(score + 1);
     }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    };

    return (
      <div className='quiz-container' id='quiz'>
      <h1 className='titolo1'>Quiz Alcolico!!</h1>
        <h2 className='sfida'>Ti senti all'altezza della sfida?</h2>
        {showResults ? (
          <h2> Hai ottenuto {score} su {questions.length} punti!</h2>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].option.map((option, index) => (
  <button 
    key={index} 
    className={selectedAnswer === option ? "selected" : ""} 
    onClick={() => handleAnswerClick(option, index)}
  >
    {option}
  </button>
))}

            <button 
  className="next-button" 
  onClick={handleNextQuestion} 
  disabled={!selectedAnswer}
>
  Prossima
</button>

          </div>
        )}
      </div>
   );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(<HomePage/>);

  return isLoaded ? (
    <div>
      <Menu onChangePage={setCurrentPage} />
      {currentPage}
    </div>
  ) : (
    <LoadingScreen onLoaded={() => setIsLoaded(true)} />
  );
}

export default App;
