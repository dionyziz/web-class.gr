import React from 'react';
import LessonStore from '../../../LessonStore';
import sidebarStore from './SidebarStore';
import { Link as ReactLink } from 'react-router';

export default class SidebarLink extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  ChangeSidebarState() {
    let windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth <= 768) {
      sidebarStore.revertCurrentState();
    }
  }

  handlePageChange() {
    // change page title.
    LessonStore.setLesson(this.props.url);
    this.ChangeSidebarState();
  }

  render() {
    let glyphoconType = 'glyphicon ';
    glyphoconType += this.props.isExercise ? 'glyphicon-pencil' : 'glyphicon-ok-sign';
    glyphoconType += ' nav-ico untaken-lesson';

    return (
      <li className="ripple-btn">
        <ReactLink to={this.props.url} onClick={this.handlePageChange} activeClassName="nav-active">
          <span className="item-align-fix">
            <i className={glyphoconType}></i>
            <span>{this.props.title}</span>
          </span>
        </ReactLink>
      </li>
    );
  }
}
