import "../src/CommonResource/css/styles.css";
import "../src/CommonResource/css/bootstrap.css";
// import '../src/CommonResource/js/bootstrap.css'
import Header from "./Components/Header";
import Alert from "./Components/Alert";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Fifth from './Components/Fifth'
import Sixth from "./Components/Sixth";
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer/>
    </div>
  );
}

export default App;

