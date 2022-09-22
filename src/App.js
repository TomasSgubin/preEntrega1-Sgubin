import "./App.css";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar';

function App() {
  return (<div className="App">
    <NavBar />
    <ItemListContainer greeting={"Bienvenido!"}/>
  </div>
  );
}

export default App;
