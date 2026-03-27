import React from 'react';
import { Link as ReactLink } from 'react-router';
import sidebarStore from './Sidebar/SidebarStore';
import lessonValues from '../../lessonValues';
import LessonStore from '../../LessonStore';
import SidebarLink from './Sidebar/SidebarLink';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    let windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let initialNavClass;
    if (windowWidth <= 768) {
      initialNavClass = 'hidden-xs col-sm-4 col-md-3 col-lg-3';
    } else {
      initialNavClass = 'col-sm-4 col-md-3 col-lg-3';
    }

    this.state = {
      SidebarIsCollapse: sidebarStore.getCurrentState(),
      NavMdPlaceholderClass: initialNavClass,
    };

    this.SetLessonDetails = this.SetLessonDetails.bind(this);
  }

  componentDidMount() {
    this._onChange = () => {
      this.setState({ SidebarIsCollapse: sidebarStore.getCurrentState() }, () => {
        this.ChangeSidebarState();
      });
    };
    sidebarStore.on('change', this._onChange);
  }
  componentWillUnmount() {
    sidebarStore.removeListener('change', this._onChange);
  }

  ChangeSidebarState() {
    const NAV_DefaultClasses = 'col-sm-4 col-md-3 col-lg-3 ';
    if (this.state.SidebarIsCollapse) {
      this.setState({ NavMdPlaceholderClass: NAV_DefaultClasses + 'slideInLeft' });
    } else {
      this.setState({ NavMdPlaceholderClass: NAV_DefaultClasses + 'slideOffLeft' });
    }
  }

  SetLessonDetails() {
    LessonStore.setLessonTitle('Δωρεάν μαθήματα ανάπτυξης web εφαρμογών.');
  }

  render() {
    return (
      <div className={this.state.NavMdPlaceholderClass} id="nav-md-placeholder">
        <nav id="sidebar">
          <ul id="main-menu">
            <li className="ripple-btn">
              <ReactLink to="/" onClick={this.SetLessonDetails}>
                <span className="item-align-fix">
                  <i className="glyphicon glyphicon-home" style={{ marginRight: '10px' }}></i>
                  <strong>
                    <span>AΡΧΙΚΗ</span>
                  </strong>
                </span>
              </ReactLink>
            </li>

            {lessonValues.map((link) => (
              <SidebarLink
                key={link.Id}
                url={link.url}
                isExercise={link.isExercise}
                title={link.title}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
