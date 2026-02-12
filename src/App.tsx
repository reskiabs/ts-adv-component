import Button from "./components/Button";
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
    </main>
  );
}

export default App;
