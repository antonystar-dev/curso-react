
import './App.css';
import OlaMundo from './components/OlaMundo';
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Antonio'
  const url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png'
  const nome = 'Maria'
  return (
    <div className="App">
      <h2>Meu programa</h2>
      <p>Olá, {name}</p>
      <img src={url} height="50px"alt="Imagem teste"/>
      <OlaMundo/>
      <SayMayName nome="Mateus"/>
      <SayMayName nome="João"/>
      <SayMayName nome="Maria"/>
      <hr/>
      <Pessoa nome="Rodrigo"
       idade="28 anos"
      profissão="Programador"
      foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"/>

      </div>
      
    
  );
}

export default App;
