import React from 'react';

import Overlay from './Main/Overlay';
import sidebarStore from './Sidebar/SidebarStore.js';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      SidebarIsCollapse: sidebarStore.getCurrentState(),
      MainContentPlaceholder: 'col-xs-12 col-sm-8 col-md-9 col-lg-9',
    };
  }

  componentDidMount() {
    this._onChange = () => {
      this.setState({ SidebarIsCollapse: sidebarStore.getCurrentState() }, () => {
        this.ChangePlaceholderState();
      });
    };
    sidebarStore.on('change', this._onChange);
  }
  componentWillUnmount() {
    sidebarStore.removeListener('change', this._onChange);
  }

  ChangePlaceholderState() {
    const MAIN_DefaultClasses = 'col-xs-12 col-sm-8 col-md-9 col-lg-9 ';

    if (this.state.SidebarIsCollapse) {
      this.setState({ MainContentPlaceholder: MAIN_DefaultClasses });
    } else {
      this.setState({ MainContentPlaceholder: MAIN_DefaultClasses + 'center-col' });
    }
  }
  render() {
    return (
      <main className={this.state.MainContentPlaceholder} id="main-content-placeholder">
        <Overlay />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center-col">
          {this.props.children}
        </div>
      </main>
    );
  }
}
