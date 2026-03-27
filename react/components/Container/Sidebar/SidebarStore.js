import { EventEmitter } from 'events';

class SidebarStore extends EventEmitter {
  constructor() {
    super();
    let windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth <= 768) {
      this.MenuIsCollapse = true;
    } else {
      this.MenuIsCollapse = false;
    }
  }

  getCurrentState() {
    return this.MenuIsCollapse;
  }

  revertCurrentState() {
    this.MenuIsCollapse = !this.MenuIsCollapse;
    this.emit('change');
  }
}

const sidebarStore = new SidebarStore();

export default sidebarStore;
