import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inscription au workshop</h1>
        <h3>Veuillez saisir vos coordonnées</h3>
        <form>
        <label for="fname">Prénom:</label>
        <input type="text" id="fname" name="fname"></input>
<br></br>

        <label for="fname">Nom de famille:</label>
        <input className='essaie' type="text" id="fname" name="fname"></input>

<br></br><br></br>
        <label for="fname">Sexe:</label>

        </form>
        <select class="custom-select">
           <option value="1">Homme</option>
           <option value="2">Femme</option>
      
        </select>
        <br></br>
        <button type="button" class="btn btn-dark">Valider</button>

    
      </header>
    </div>
  );
}

export default App;
