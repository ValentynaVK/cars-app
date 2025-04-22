import logosrc from "./assets/cars-logo.svg";
import cars from "./data/cars";

function App() {
  return (
    <div className="container">
      <header>
        <a href="/">
          <img src={logosrc} alt="logo" />
        </a>
      </header>
      <main>
        <p>В наявності {cars.length}</p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
