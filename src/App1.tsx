import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Form, { type FormHandle } from "./components/Form";
import Input from "./components/Input";

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input label="Your Name" id="name" type="text" />
        <Input label="Email" id="email" type="email" />
        <p>
          <Button el="button">Submit</Button>
        </p>
      </Form>

      <Container as="button" onClick={() => {}}>
        Click me
      </Container>

      <Container as="a" href="/home">
        Go home
      </Container>
    </main>
  );
}

export default App;
