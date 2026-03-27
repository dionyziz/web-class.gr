import React from 'react';

import sidebarStore from '../Sidebar/SidebarStore.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      SidebarIsCollapse: sidebarStore.getCurrentState(),
      OverlayClass: 'hidden',
    };
  }

  componentDidMount() {
    this._onChange = () => {
      this.setState({ SidebarIsCollapse: sidebarStore.getCurrentState() }, () => {
        this.SetOverlayState();
      });
    };
    sidebarStore.on('change', this._onChange);
  }
  componentWillUnmount() {
    sidebarStore.removeListener('change', this._onChange);
  }

  SetOverlayState() {
    if (this.state.SidebarIsCollapse) {
      this.setState({ OverlayClass: 'hidden-sm hidden-md hidden-lg' });
    } else {
      this.setState({ OverlayClass: 'hidden' });
    }
  }

  render() {
    return <div className={this.state.OverlayClass} id="overlay"></div>;
  }
}
