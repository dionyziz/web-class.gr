import React from 'react';
import LessonStore from '../../LessonStore';

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      LessonDetails: LessonStore.getLesson(),
    };
  }
  componentDidMount() {
    this._onChange = () => {
      this.setState({
        LessonDetails: LessonStore.getLesson(),
      });
    };
    LessonStore.on('change', this._onChange);
  }
  componentWillUnmount() {
    LessonStore.removeListener('change', this._onChange);
  }

  render() {
    return (
      <h2 className="text-center" id="app-bar__lesson-title">
        {this.state.LessonDetails.title}
      </h2>
    );
  }
}
