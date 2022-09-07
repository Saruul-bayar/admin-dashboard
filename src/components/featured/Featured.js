import React from "react";
import {
  MoreVertOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Previous transaction processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Year</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount ">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount ">$2.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">This Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount ">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
