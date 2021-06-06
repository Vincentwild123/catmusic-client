import React from "react";
import { BrowserRouter, Route as ReactRoute, Redirect } from "react-router-dom";
//@ts-ignore
import router, { RouteType } from "./router/router.ts";
//@ts-ignore
import Asider from "@components/Asider/Asider.tsx";
import { useSelector } from "react-redux";
import { StateType } from "./reducers/index";
import Login from "@/pages/Login";
import style from "./App.module.less";
const App: React.FC<{}> = () => {
  //全局登录状态
  const haveLogin = useSelector((state: StateType) => state.haveLogin);
  return (
    <BrowserRouter>
      <div className={style.container}>
        <Asider router={router} />
        <div>
          <ReactRoute exact path="/login" component={Login} />
          {router.map((route: RouteType, index: number) => {
            if (route.needAuth && !haveLogin)
              return <Redirect key={index} to="/login" />;
            return (
              <ReactRoute
                exact
                key={index}
                path={route.to}
                component={route.component}
              />
            );
          })}
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
