import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import AnswerBox from './components/AnswerBox';

function App() {



  function addQuestion(question){
   console.log(question)
  }
  return (
    <div className="App">
     <Navbar />
     <Home onAdd={addQuestion} />
     {/* <AnswerBox /> */}
     <Footer />
    </div>
  );
}

export default App;
