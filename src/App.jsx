import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Provider } from "react-redux";
import store from "./data/Stores/store";
import Sidebar from "./components/Sidebar";
import Results from "./components/Results";
import Main from "./components/Main";
import Player from "./components/Player";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Results />
        <Main />
      </div>
      <Player />
    </div>
    <div>
      <Footer />
    </div>
    <NotFound />
  </Provider>
);

export default App;
