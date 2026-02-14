import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label="Your Name" id="name" type="text" ref={input} />
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
        <h1>Container</h1>
      </Container>
    </main>
  );
}

export default App;
