import React, { Fragment } from "react";

class SubTitle extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="mainHeader">
          <h2
            className="header"
            style={{ color: this.props.isLight ? "black" : "snow" }}
          >
            {this.props.title}
          </h2>
          <div onClick={this.props.changeTheme} className="BTN">
            <input type={"checkbox"} className="checkbox" />
            <label
              for={"checkbox"}
              className="label"
              style={{ backgroundColor: this.props.isLight ? "#020011" : "snow" }}
            >
              <div
                className="btn-d-l"
                style={{
                  backgroundColor: this.props.isLight ? "snow" : "#020011",
                }}
              ></div>
            </label>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default SubTitle;
