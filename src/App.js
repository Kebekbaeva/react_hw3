import logo from './logo.svg';
import './App.css';
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import NamePage from "./pages/namePage/NamePage";

function App() {
    const arr = ["Mahabat", "Aigul"]
  return (
    <div className="App">
      <PortfolioPage user={arr}/>

        ---------------------------------

      <NamePage array={arr}/>



    </div>
  );
}

export default App;
