import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./style/index.less";
import appearImg from "./style/lingdang.jpg";
//@ts-ignore
import { RouteType } from "@/router.ts";
interface AsiderProps {
  router: RouteType[];
}
const Asider: React.FC<AsiderProps> = (props) => {
  //1. 解构props
  const { router } = props;
  //整个侧边栏的ref
  const asiderRef = useRef(null);
  //展开按钮的ref
  const showBtnRef = useRef(null);
  //2.初始化组件state
  const [activeID, setActiveID] = useState(0);
  const [isShow, setIsShow] = useState(true);
  //路由切换
  const _switch = (index: number): void => {
    setActiveID(index);
  };

  const toggle = (): void => {
    //展开
    if (isShow) {
      (asiderRef.current as any).className = style.hiddenasider;
      (showBtnRef.current as any).className = style.showbtnOut;
      setIsShow(false);
    } else {
      (asiderRef.current as any).className = style.asider;
      (showBtnRef.current as any).className = style.showbtn;
      setIsShow(true);
    }
  };

  const HiddenBtn = (
    <div className={style.hiddenbtn}>
      <FontAwesomeIcon
        icon="bars"
        size="2x"
        onClick={() => {
          toggle();
        }}
      />
    </div>
  );
  const ShowBtn = (
    <img
      ref={showBtnRef}
      onClick={() => toggle()}
      className={style.showbtn}
      src={appearImg}
    ></img>
  );
  const lis = router.map((route, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          _switch(index);
        }}
      >
        <Link to={route.to} className={style.link}>
          <FontAwesomeIcon
            className={activeID === index ? style.actived : ""}
            icon={route.icon}
            size={route.size}
          />
        </Link>
      </li>
    );
  });
  return (
    <div ref={asiderRef} className={style.asider}>
      {ShowBtn}
      {HiddenBtn}
      {lis}
    </div>
  );
};

export default Asider;
