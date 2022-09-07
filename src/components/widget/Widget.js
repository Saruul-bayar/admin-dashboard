import React, { useState, useEffect } from "react";
import "./widget.scss";
import {
  KeyboardArrowUp,
  PersonOutline,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";
const Widget = ({ type }) => {
  const [data, setData] = useState({});

  //   TEMP
  const amount = 100;
  const diff = 20;

  useEffect(() => {
    switch (type) {
      case "user":
        setData({
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutline
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        });
        break;
      case "order":
        setData({
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlined
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)",
              }}
            />
          ),
        });
        break;
      case "earning":
        setData({
          title: "EARNINGS",
          isMoney: true,
          link: "View net earning",
          icon: (
            <MonetizationOnOutlined
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),
        });
        break;
      case "balance":
        setData({
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlined
              className="icon"
              style={{
                color: "purple",
                backgroundColor: "rgba(128, 0, 128, 0.2)",
              }}
            />
          ),
        });
        break;
      default:
        break;
    }
  }, [type]);
  return (
    <section className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}
        </div>
        {data.icon}
        {/* <PersonOutline className="icon" /> */}
      </div>
    </section>
  );
};

export default Widget;
