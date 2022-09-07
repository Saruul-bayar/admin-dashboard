import React from "react";
import {
  Search,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlined,
  ListOutlined,
} from "@mui/icons-material";
import "./navbar.scss";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <Search />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" /> English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              className="avatar"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
