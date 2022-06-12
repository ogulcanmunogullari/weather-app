import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { LocationProvider } from "././context/Location_Context";
function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Header />
        <Main />
        <Footer />
      </LocationProvider>
    </div>
  );
}

export default App;
