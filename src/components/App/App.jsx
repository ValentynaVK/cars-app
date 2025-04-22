import cars from "../../data/cars";
import Container from "../Container/Container";
import Header from "../Header/Header";

function App() {
  return (
    <div>
      <Header />
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
