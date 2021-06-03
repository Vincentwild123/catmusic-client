import React from "react";
import style from "./App.module.css";
import HelloWorld from "./components/HelloWorld.jsx";
import Counter from "./components/Counter.jsx";
import Default from "./components/Defaulte.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";

interface AppProps {
  name?: string;
}
//root Componet
export default function App(props: AppProps): React.ReactNode {
  return (
    <BrowserRouter>
      <div className={style.container}>
        <button className={style.navbtn}>
          <Link className={style.navItem} to="/helloworld">
            Helloworld
          </Link>
        </button>
        <button className={style.navbtn}>
          <Link className={style.navItem} to="/counter">
            Counter
          </Link>
        </button>
        <div className={style.route}>
          <Route exact path="/" component={Default} />
          <Route path="/counter" component={Counter} />
          <Route path="/helloworld" component={HelloWorld} />
        </div>
      </div>
    </BrowserRouter>
  );
}
