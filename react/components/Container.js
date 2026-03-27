import React from 'react';

import Sidebar from './Container/Sidebar';
import Main from './Container/Main';

export default class Container extends React.Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <Main>{this.props.children}</Main>
      </div>
    );
  }
}
