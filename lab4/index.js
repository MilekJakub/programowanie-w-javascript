const addNoteBtn = document.querySelector('#add-note');
const saveNoteBtn = document.querySelector('#save-note');

class Note
{
    constructor(
        title = 'Put your note title here...',
        content = 'Put your note content here...',
        color,
        pin = false, 
        createdAt = new Date().toISOString(),
        updatedAt = new Date().toISOString()
    ) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.pin = pin;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    debugInfo() {
        console.log(`title: ${this.title}\ncontent: ${this.content}\ncolor: ${this.color}\npin: ${this.pin}\ncreatedAt: ${this.createdAt}`);
    }
}

let notes = null;
let currentNote = null;

const storage = localStorage.getItem('notes');

if (storage === null) {
    notes = [];
    currentNote = new Note();
    notes.push(currentNote);
} else {
    notes = JSON.parse(storage);
}

addNoteBtn.addEventListener('click', function() {
    console.log('add');
});

saveNoteBtn.addEventListener('click', function() {
    console.log('save');
    if (addr == null || addr.trim() === '') {
        console.log('cannot save');
    }
});
