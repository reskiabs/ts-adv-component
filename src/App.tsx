import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Your Name" id="name" type="text" />
        <Input label="Email" id="email" type="email" />
        <p>
          <Button el="button">Submit</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
