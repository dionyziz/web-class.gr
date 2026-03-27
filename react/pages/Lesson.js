/* The bellow component render each lesson to
 * container or returns NotFound page.
 */

import React from 'react';
import LessonStore from '../LessonStore';
import NotFound from '../NotFound';

export default class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      LessonDetails: null,
    };
    this.getLesson = this.getLesson.bind(this);
  }

  getLesson() {
    this.setState({
      LessonDetails: LessonStore.getLesson(),
    });
  }

  componentDidMount() {
    LessonStore.setLesson(this.props.params.lessonName);
    LessonStore.on('change', this.getLesson);
    this.getLesson();
  }

  componentWillUnmount() {
    LessonStore.removeListener('change', this.getLesson);
  }

  renderSuggestedReading(lesson) {
    if (!lesson.suggestedReading || lesson.suggestedReading.length === 0) return null;
    return (
      <span>
        <span key="suggested-reading-icon" className="glyphicon glyphicon-book"></span>
        <span key="suggested-reading-label">Προτεινόμενη ανάγνωση: </span>
        {lesson.suggestedReading.map((link, index) => (
          <a key={'reading-' + index} href={link.url}>
            {' <' + link.title + '> '}
          </a>
        ))}
      </span>
    );
  }

  renderDeepening(lesson) {
    if (!lesson.deepening || lesson.deepening.length === 0) return null;
    return (
      <span>
        <span key="deepening-icon" className="glyphicon glyphicon-search"></span>
        <span key="deepening-label">Εμβάθυνση: </span>
        {lesson.deepening.map((link, index) => (
          <a key={'deepening-' + index} href={link.url}>
            {' <' + link.title + '> '}
          </a>
        ))}
      </span>
    );
  }

  renderSyllabus(lesson) {
    if (!lesson.syllabus || lesson.syllabus.length === 0) return null;
    return (
      <div>
        {' '}
        <p>Ύλη που καλύπτεται:</p>
        <ul>
          {' '}
          {lesson.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{' '}
        </ul>{' '}
      </div>
    );
  }

  renderSlides(lesson) {
    if (!lesson.presentationSheetURL || lesson.presentationSheetURL.length === 0) return null;
    return (
      <div>
        {' '}
        <span className="glyphicon glyphicon-blackboard"></span>
        <a href={lesson.presentationSheetURL}>Διαφάνειες μαθήματος </a>{' '}
      </div>
    );
  }

  render() {
    if (!this.state.LessonDetails) return <NotFound />;
    return (
      <div>
        <section id="video-section">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item "
              src={'//www.youtube.com/embed/' + this.state.LessonDetails.videoURL}
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section id="lesson-details">
          <header>
            <h1 id="lesson-title">{this.state.LessonDetails.title}</h1>
          </header>
          <div id="lesson-description">
            <p dangerouslySetInnerHTML={{ __html: this.state.LessonDetails.description }}></p>
            {this.renderSyllabus(this.state.LessonDetails)}
            <div id="other-informations">
              <p id="presentaion-sheets">{this.renderSlides(this.state.LessonDetails)}</p>
              <p id="suggested-reading">{this.renderSuggestedReading(this.state.LessonDetails)}</p>
              <p id="deepening">{this.renderDeepening(this.state.LessonDetails)}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
