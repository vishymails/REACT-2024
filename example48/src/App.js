import { MyComponent, MyContextProvider } from "./demo";

function App() {
  return (
    <div>
      <MyContextProvider>
      <MyComponent />
      </MyContextProvider>
    </div>
  );

}

export default App;