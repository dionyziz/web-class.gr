import React from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Exercise1 from './pages/Exercises/Exercise1';
import Exercise2 from './pages/Exercises/Exercise2';
import Exercise3 from './pages/Exercises/Exercise3';
import Exercise4 from './pages/Exercises/Exercise4';
import Exercise5 from './pages/Exercises/Exercise5';
import Exercise6 from './pages/Exercises/Exercise6';
import Exercise7 from './pages/Exercises/Exercise7';

import Index from './pages/Index';
import Lesson from './pages/Lesson';

const app = document.getElementById('app');
ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="exercise-1" name="exercise-1" component={Exercise1}></Route>
      <Route path="exercise-2" name="exercise-2" component={Exercise2}></Route>
      <Route path="exercise-3" name="exercise-3" component={Exercise3}></Route>
      <Route path="exercise-4" name="exercise-4" component={Exercise4}></Route>
      <Route path="exercise-5" name="exercise-5" component={Exercise5}></Route>
      <Route path="exercise-6" name="exercise-6" component={Exercise6}></Route>
      <Route path="exercise-7" name="exercise-7" component={Exercise7}></Route>
      <Route path=":lessonName" name="lesson" component={Lesson}></Route>
    </Route>
  </Router>,
  app
);
