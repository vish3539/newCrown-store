// this component handles the title and shop now of our homepage display
import React from "react";
import {withRouter} from 'react-router-dom';
import "./MenuItemStyles.scss";

function MenuItemComp({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItemComp);
