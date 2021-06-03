import React from "react";
import style from "./App.module.less";
import HelloWorld from "./components/HelloWorld.jsx";
import Counter from "./components/Counter.jsx";
import Default from "./components/Defaulte.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";
//@ts-ignore
import Asider from "./components/rootComponents/Asider.tsx";
//最外围页面框架

export default function App(): React.ReactNode {
  const itemList = ["a", "b", "c"];
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Asider itemList={itemList} />
        <div className={style.route}>
          <Route exact path="/" component={Default} />
          <Route path="/counter" component={Counter} />
          <Route path="/helloworld" component={HelloWorld} />
        </div>
      </div>
    </BrowserRouter>
  );
}
