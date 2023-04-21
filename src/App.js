import GlobalStyle from "./components/GlobalStyle";

import Home from "./pages/Home";
import Nav from "../src/components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
