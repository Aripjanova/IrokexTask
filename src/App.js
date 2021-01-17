import Header from "./components/header/header";
import './App.css';
import Menu from "./components/menu/menu";
import PersonnelContent from "./components/personel/personels-content";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mainComponent">
          <Menu/>
          <PersonnelContent/>
      </div>

    </div>
  );
}

export default App;
