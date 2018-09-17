'use strict'

// load opensource code
import React from 'react';
import ReactDOM from 'react-dom';

// load self code
import css from './../css/resume.css';

// load config
import resumeInfo from './../config/resumeinfo';
console.log(resumeInfo)

// global variable
import meImg from './../images/me.jpg';

class BaseInfo extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('baseInfo', this.props.baseInfo)
    this.baseInfo = this.props.baseInfo || {};
  }

  componentDidMount() {
    this.loadMePhotoInfo();
  }

  loadMePhotoInfo() {
    let cls = ReactDOM.findDOMNode(this).getElementsByClassName('resume_me_photo');
    if (cls && cls.length > 0) {
      let img = new Image();
      img.src = meImg;

      let baseInfoBox = cls[0];
      baseInfoBox.appendChild(img);
    }
  }

  render() {
    const baseInfo = this.baseInfo;
    return (
      <div className="resume_base_info border_bottom">
        <div className="resume_me_photo"></div>
        <div>
          <p id="name_and_title_box">
            <span>{baseInfo.name}</span>
            <span>{baseInfo.sex}</span>
          </p>
          <p>
            <label>教育经历</label><span>{baseInfo.education}</span>
          </p>
          <p>
            <label>期望职位</label><span>{baseInfo.job}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default class Resume extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <BaseInfo baseInfo={resumeInfo.baseInfo} />
      </div>
    )
  }
}
