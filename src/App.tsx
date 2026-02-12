import Input from "./components/input";

function App() {
  return (
    <main>
      <Input label="Your Name" id="name" type="text" />
      <Input label="Email" id="email" type="email" />
    </main>
  );
}

export default App;
