import './App.css';
import Libros from './Libros';


const App = () => { 
  return (
  <>
  <div className="App">
    <h2>Libros</h2>
    </div>
    {}
    <Libros nombre="La Guerra de los Mundos" precio="$1.000" autor="H. G. Welles" />
    {}
    <Libros nombre="Winnieh-ThePooh" precio="$1.500" autor="A. A. Milne" />
    {}
    <Libros nombre="Sherlock Holmes" precio="$1.350" autor="Arthur Conan Doyle" />
</>
);
 }

export default App;
