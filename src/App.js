import "./App.css";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CountriesList />
      </main>
    </Fragment>
  );
}

export default App;
