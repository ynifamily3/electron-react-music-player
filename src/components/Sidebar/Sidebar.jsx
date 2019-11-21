import React, { useCallback } from "react";
import "./Sidebar.css";
import { preventCallback } from "../../utility/index";
import { useDispatch } from "react-redux";
import * as TYPE from "../../store/types";
import { ActivateWebview } from "../../store/modules/webView";

const Sidebar = props => {
  const callback = (arg, e) => {
    return e => {
      //preventCallback(e);
      console.log(e);
      console.log(arg);
      dispatch(ActivateWebview(arg));
    };
  };

  const dispatch = useDispatch();
  return (
    <header className="header side_bar">
      <div className="menu_area">
        <ul role="menu" className="menu_list">
          <li role="presentation" className="menu_item">
            <a
              href="#"
              onClick={callback(TYPE.TODAY)}
              role="menuitem"
              aria-current="false"
              className="link_menu link_today"
            >
              <span className="text">투데이</span>
            </a>
          </li>
          <li role="presentation" className="menu_item">
            <a
              href="#"
              onClick={callback(TYPE.CHART)}
              role="menuitem"
              aria-current="false"
              className="link_menu link_chart"
            >
              <span className="text">차트</span>
            </a>
          </li>
          <li role="presentation" className="menu_item">
            <a
              href="#"
              onClick={callback(TYPE.DJ)}
              role="menuitem"
              aria-current="false"
              className="link_menu link_dj"
            >
              <span className="text">DJ 스테이션</span>
            </a>
          </li>
          <li role="presentation" className="menu_item">
            <a
              href="#"
              onClick={callback(TYPE.SEARCH)}
              role="menuitem"
              aria-current="false"
              className="link_menu link_mag"
            >
              <span className="text">검색</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
