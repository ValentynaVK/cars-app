import cars from "../../data/cars";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <main>
          <p>В наявності {cars.length} автомобілів</p>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
