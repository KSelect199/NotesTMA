import "./App.css";

function App() {
  function calc2(a: number, b: number): number {
    return a + b;
  }

  const res = calc2(5, 5);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
