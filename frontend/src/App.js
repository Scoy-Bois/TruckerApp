import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          Welcome! Please Log In!
          <form>
            <label>
              <input type = "text" name = "username" />
            </label>
            {"\n"}
            <label>
              <input type = "text" name = "password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </header>
    </div>
  );
}

export default App;
