import { EventEmitter } from 'events';
import lessonValues from './lessonValues';

class LessonStore extends EventEmitter {
  constructor() {
    super();
    this.LessonDetails = { title: 'Δωρεάν μαθήματα ανάπτυξης web εφαρμογών.' };
  }

  setLessonTitle(Title) {
    this.LessonDetails.title = Title;
  }

  setLesson(url) {
    this.LessonDetails = false;
    for (const lesson of lessonValues) {
      if (lesson.url === url) {
        this.LessonDetails = lesson;
      }
    }
    this.emit('change');
  }

  getLesson() {
    return this.LessonDetails;
  }
}

const lessonStore = new LessonStore();

export default lessonStore;
