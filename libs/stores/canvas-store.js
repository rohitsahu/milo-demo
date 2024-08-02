import { makeAutoObservable } from 'mobx';

class CanvasStore {
  elements = [];

  constructor() {
    makeAutoObservable(this);
  }

  addElement(componentString) {
    this.elements.push(componentString);
  }

  reorderElements(draggedIndex, targetIndex) {
    const [removed] = this.elements.splice(draggedIndex, 1);
    this.elements.splice(targetIndex, 0, removed);
  }
}

const canvasStore = new CanvasStore();