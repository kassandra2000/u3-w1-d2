import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import MyAllTheBooks from "./components/MyAllTheBooks";
import scifi from "../src/data/scifi.json";
import romance from "../src/data/romance.json";
import history from "../src/data/history.json";
import horror from "../src/data/horror.json";
import fantasy from "../src/data/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNavbar brandName="EpicLibrary" />
      <MyWelcome variant="secondary my-3 w-25" text="Hello in EpicLibrary" />
      <h1 className="text-center my-5  ">EpicLibrary</h1>
      <div className="card-container">
        {/* <MyAllTheBooks category={scifi}/>
        <MyAllTheBooks category={history}/>
        <MyAllTheBooks category={romance}/>
        <MyAllTheBooks category={fantasy}/> */}
        <MyAllTheBooks category={horror}/>
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
