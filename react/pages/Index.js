/* The main index page of the app.
 * This page needs editing
 */

import React from 'react';
import { Link as ReactLink } from 'react-router';
import LessonStore from '../LessonStore';

export default class Index extends React.Component {
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
    LessonStore.on('change', this.getLesson);
    this.getLesson();
  }

  componentWillUnmount() {
    LessonStore.removeListener('change', this.getLesson);
  }

  handlePageChange() {
    // go to first lesson.
    LessonStore.setLesson('html-beginner');
  }

  render() {
    return (
      <div>
        <p className="text-center">
          Μάθε σήμερα ΔΩΡΕΑΝ ανάπτυξη web εφαρμογών μέσω βιντεοδιαλέξεων.
        </p>
        <ul id="lessons-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>MYSQL</li>
          <li>Javascript</li>
          <li>Subversion</li>
        </ul>
        <div id="go-to-first-lesson">
          <ReactLink
            to="html-beginner"
            onClick={() => this.handlePageChange()}
            id="first-lesson-button"
          >
            Ξεκίνα τώρα!
          </ReactLink>
        </div>
        <div id="footer">
          <p>
            Όλο το υλικό του μαθήματος υπόκειται στην άδεια χρήσης{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons 4.0</a>.
          </p>
          <p>
            Ο κώδικας της παρούσας ιστοσελίδας στην άδεια{' '}
            <a href="https://opensource.org/licenses/MIT">MIT</a>.
          </p>
          <p>
            <a href="https://github.com/dionyziz/web-class.gr">
              Διαβάστε περισσότερες πληροφορίες για αυτή την προσπάθεια!
            </a>
          </p>
        </div>
      </div>
    );
  }
}
