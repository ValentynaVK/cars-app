import logosrc from "../../assets/cars-logo.svg";
import cars from "../../data/cars";
import Container from "../Container/Container";

function App() {
  return (
    <div>
      <header>
        <a href="/">
          <img src={logosrc} alt="logo" />
        </a>
      </header>

      <Container>
        <main>
          <p>В наявності {cars.length}</p>
        </main>
        <footer></footer>
      </Container>
    </div>
  );
}

export default App;
