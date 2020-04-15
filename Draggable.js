class Draggable {

    constructor() {
        this.tasks = document.querySelectorAll('.task');
        this.cards = document.querySelectorAll('.card');
        this.taskIndex = 0;
        this.appendArray = [];
        // Array to get the index later.
        for (let i =0; i<this.tasks.length; i++) {
            this.appendArray[i] = this.tasks[i].innerText;
        }

        this._addEventListener();
    }

    _addEventListener() {  

        for (const task of this.tasks) {
            task.addEventListener("dragstart", this.dragStart);
            task.addEventListener("dragend", this.dragEnd);
        }

        for (const card of this.cards) {
            card.addEventListener("dragenter", this.dragEnter);
            card.addEventListener("dragleave", this.dragLeave);
            card.addEventListener("dragover", this.dragOver);
            card.addEventListener("drop", this.dragDrop);
        }
    }

    dragStart() {
        this.className += ' hold';
        let taskContent = this.innerText; //Get the text of the Dragged element
        this.taskIndex = this.appendArray.indexOf(taskContent); // Get the index of Dragged element do append later.
    }

    dragEnd() {
        this.className += ' fill';
    }

    dragEnter(e) {
        e.preventDefault();
        this.className += ' hover';
    }

    dragLeave() {
        this.className = 'card';
    }

    dragOver(e) {
        e.preventDefault();
    }

    dragDrop() {
        this.className = 'card';
        this.append(this.tasks[this.taskIndex]); // Append the element that we get on the "taskIndex".
    }

    static init() {
        return new this();
    }
}