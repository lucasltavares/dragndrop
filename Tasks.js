const icons = document.querySelectorAll('.fas');

for (const icon of icons) {
    icon.addEventListener("click", newTask);
    //console.log(icon.parentElement.parentElement);
}

function newTask() {
    let card = this.parentElement.parentElement;
    let htmlString = '<div class="task" draggable="true"><p class="task-text" contenteditable="true">...</p></div>';
    let element = document.createElement('div');
    element.innerHTML = htmlString;
    card.append(element);
    Draggable.init();
}





