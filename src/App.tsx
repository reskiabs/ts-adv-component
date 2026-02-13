import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/input";

function App() {
  return (
    <main>
      <Input label="Your Name" id="name" type="text" />
      <Input label="Email" id="email" type="email" />
      <p>
        <Button el="button">Submit</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          Linked
        </Button>
      </p>

      <Container as="button" onClick={() => {}} type="button">
        Submit
      </Container>
    </main>
  );
}

export default App;
