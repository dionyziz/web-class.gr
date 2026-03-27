import React from 'react';

import Header from './Header';
import LessonStore from '../LessonStore';
import Container from './Container';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      PageTitle: LessonStore.getLesson(),
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.PageTitle} />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
