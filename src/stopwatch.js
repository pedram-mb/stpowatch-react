import React, { Fragment } from "react";
import { testContext } from "./testcontext";

var interval;
class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      isStart: false,
    };
  }
  static contextType = testContext;
  startInterval = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            inute: this.state.minute + 1,
          });
        }
        if (this.state.minute === 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };
  stopinteval = () => {
    clearInterval(interval);
    this.setState({
      isStart: false,
    });
  };
  resetInterval = () => {
    this.stopinteval();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };
  HandelSaveTime = ()=>{
    let s = this.state.second;
    let m = this.state.minute;
    let h = this.state.hour;
    let savetime = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`
    this.context.setTimeArr([...this.context.timeArr , savetime])
  }
  render() {
    let s = this.state.second;
    let m = this.state.minute;
    let h = this.state.hour;
    return (
      <Fragment>
        <div
          className="sectionStwatch"
          style={{ color: this.props.isLight ? "black" : "snow" }}
        >
          <h2 className="stwatch">
            {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
              s > 9 ? s : "0" + s
            }`}
          </h2>
        </div>
        <div className="btnsection">
          <button onClick={this.stopinteval} className="btn-stop btn"
          style={{
          color : this.props.isLight ? "black" : "snow"
        }}
          >
            <span style={{backgroundColor : this.props.isLight ? "snow" : "#020011"}}>stop</span>
          </button>
          <button onClick={this.startInterval} className="btn-start btn" 
          style={{
            color : this.props.isLight ? "black" : "snow"
          }}
          >
            <span style={{backgroundColor : this.props.isLight ? "snow" : "#020011"}}>start</span>
          </button>
          <button onClick={this.resetInterval} className="btn-reset btn"
          style={{
            color : this.props.isLight ? "black" : "snow"
          }}
          >
            <span style={{backgroundColor : this.props.isLight ? "snow" : "#020011"}}>reset</span>
          </button>
        </div>
        <div
          className="lastBtnSection"
          style={{ color: this.props.isLight ? "black" : "snow" }}
        >
          <button type="" className="btn-savetime" onClick={this.HandelSaveTime}
          style={{backgroundColor : this.props.isLight ? "snow" : "#020011",
          borderColor : this.props.isLight ? "black" : "snow",
          color : this.props.isLight ? "black" : "snow"
        }}
          >
            {" "}
            +{" "}
          </button>
          <p style={{color : this.props.isLight ? "black" : "snow"}}>lap 1</p>
          <p style={{color : this.props.isLight ? "black" : "snow"}}>00 : 00 : 00</p>
        </div>
      </Fragment>
    );
  }
}
export default Stopwatch;
