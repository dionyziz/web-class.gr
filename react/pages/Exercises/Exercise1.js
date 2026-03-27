import React from 'react';
import LessonStore from '../../LessonStore';

export default class Exercise1 extends React.Component {
  componentDidMount() {
    LessonStore.setLesson('exercise-1');
  }

  render() {
    return (
      <section id="exercise-description">
        <div id="introduction">
          <p>
            {' '}
            <span className="glyphicon glyphicon-star"></span> Πλέον είστε σε θέση να δημιουργήσετε
            την δικιά σας σελίδα!
          </p>
        </div>
        <div id="curriculum">
          <p>
            {' '}
            <span className="glyphicon glyphicon-education"></span> Ύλη: Οι δύο πρώτες
            διαλέξεις.{' '}
          </p>
        </div>
        <div id="problem">
          <h3>Εκφώνηση</h3>
          <p>
            Δημιουργήστε μία προσωπική ιστοσελίδα που να περιλαμβάνει το <strong>όνομά</strong> σας,
            το <strong>επώνυμό</strong> σας, και το <strong>e-mail</strong> σας. Προσθέστε λίγα
            λόγια για τον εαυτό σας, μία φωτογραφία που σας αρέσει, μία λίστα, και έναν πίνακα της
            επιλογής σας.{' '}
          </p>
        </div>
        <div id="solution">
          <p>
            {' '}
            <span className="glyphicon glyphicon-thumbs-up"></span> Ολοκληρώνοντας την εργασία σας
            μην διστάσετε να ρίξετε μια ματιά στις παρακάτω πρότυπες λύσεις:
          </p>
          <ul>
            <li>
              <a href="http://web-class.gr/resources/assignment1/solutions/makis/homepage.html">
                {' '}
                Μάκης Αρσένης
              </a>
            </li>
            <li>
              <a href="http://web-class.gr/resources/assignment1/solutions/christine/site.html">
                {' '}
                Χριστίνα Τσικαλάκη
              </a>
            </li>
            <li>
              <a href="http://web-class.gr/resources/assignment1/solutions/giorgos/site.html">
                {' '}
                Γιώργος Παυλάκος
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
