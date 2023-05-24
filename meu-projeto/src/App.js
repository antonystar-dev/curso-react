
import './App.css';
import OlaMundo from './components/OlaMundo';

function App() {
  const name = 'Antonio'
  const url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png'
  return (
    <div className="App">
      <h2>Meu programa</h2>
      <p>Olá, {name}</p>
      <img src={url} height="50px"alt="Imagem teste"/>
      <OlaMundo/>
      </div>
      
    
  );
}

export default App;
