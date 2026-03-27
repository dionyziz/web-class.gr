import React from 'react';
import LessonStore from '../../LessonStore';

export default class Exercise3 extends React.Component {
  componentDidMount() {
    LessonStore.setLesson('exercise-3');
  }

  render() {
    return (
      <section id="exercise-description">
        <div id="introduction">
          <p>
            {' '}
            <span className="glyphicon glyphicon-star"></span> Μετά το half cleanroom της δεύτερης
            εργασίας αυτή τη φορά έχετε να κάνετε ένα πλήρες cleanroom.
          </p>
        </div>
        <div id="curriculum">
          <p>
            {' '}
            <span className="glyphicon glyphicon-education"></span> Ύλη: Ότι διδάχθηκε μέχρι αυτή
            την εργασία.{' '}
          </p>
        </div>
        <div id="problem">
          <h3>Εκφώνηση</h3>
          <p>
            Ο στόχος αυτής της εργασίας χωρίζεται σε δύο στάδια. Στο πρώτο στάδιο θα πρέπει να
            περιγράψετε με σωστό σημασιολογικά τρόπο το έγγραφο που βλέπετε στο screenshot. Στο
            δεύτερο στάδιο θα πρέπει να γράψετε τους κανόνες CSS που θα εφαρμοστούν στο έγγραφο που
            θα φτιάξετε και θα το κάνουν να φαίνεται όπως και στο screenshot.{' '}
          </p>
          <p>
            Το αποτέλεσμα μετά την εφαρμογή του CSS θα πρέπει να είναι ποιοτικά ίδιο με την έκδοση
            του screenshot. Αυτό σημαίνει ότι δεν είναι απαραίτητο να κάνετε ακριβείς μετρήσεις για
            τις αποστάσεις κλπ.{' '}
          </p>
          <ul>
            Δίνονται
            <li>
              <a href="http://web-class.gr/resources/assignment3/zen/zen.png">
                Η εικόνα που χρησιμοποίηθηκε
              </a>
            </li>
            <li>
              <a href="http://web-class.gr/resources/assignment3/screenshot.png">
                Το screenshot της σελίδας
              </a>
            </li>
            <li>
              <a href="http://web-class.gr/resources/assignment3/notes.png">Οι σημειώσεις</a>
            </li>
            <li>
              <a href="http://web-class.gr/resources/assignment3/knight.txt">Το κείμενο</a>
            </li>
          </ul>
        </div>
        <div id="tip">
          <p>
            {' '}
            <span className="glyphicon glyphicon-exclamation-sign"></span> Προσπαθήστε να φτιάξετε
            το γενικό layout με άδεια divs και ύστερα προσθέστε σε αυτά το περιεχόμενό σας.{' '}
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
              <a href="http://web-class.gr/resources/assignment3/rigas"> Ρήγας Παπαθανασόπουλος</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
