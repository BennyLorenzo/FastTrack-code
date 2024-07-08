

// setting document selection varaibles

const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const form = document.querySelector('form')
const cancelButton = document.querySelector('#cancel')
const noteSection = document.querySelector('.notes')

// variables

let incrementalNoteID = 0
incrementalNoteID = +localStorage.getItem("incrementalNoteID")
let completed = false

// functions

const cancel = () => {
    titleInput.value = ""
    descriptionInput.value = ""
    titleInput.style.display = "none"
    cancelButton.style.display = "none"
}

const createNote = (title, description) => {
    let note = document.createElement('div');
    note.classList.add('note');
    note.id = incrementalNoteID;
    //
    let noteTitle = document.createElement('div');
    noteTitle.classList.add('title');
    let noteTitleInput = document.createTextNode(title);
    noteTitle.appendChild(noteTitleInput)
    //
    let noteDescription = document.createElement('div');
    noteDescription.classList.add('description');
    let noteDescriptionInput = document.createTextNode(description);
    noteDescription.appendChild(noteDescriptionInput)
    //
    let deleteButton = document.createElement('div');
    deleteButton.textContent = "DELETE"
    deleteButton.classList.add('delete');
    //
    note.appendChild(noteTitle);
    note.appendChild(noteDescription);
    note.appendChild(deleteButton);
    noteSection.append(note)
}

const createStoredNote = (title, description, savedID) => {
    let note = document.createElement('div');
    note.classList.add('note');
    note.id = savedID;
    //
    let noteTitle = document.createElement('div');
    noteTitle.classList.add('title');
    let noteTitleInput = document.createTextNode(title);
    noteTitle.appendChild(noteTitleInput)
    //
    let noteDescription = document.createElement('div');
    noteDescription.classList.add('description');
    let noteDescriptionInput = document.createTextNode(description);
    noteDescription.appendChild(noteDescriptionInput)
    //
    let deleteButton = document.createElement('div');
    deleteButton.textContent = "DELETE"
    deleteButton.classList.add('delete');
    //
    note.appendChild(noteTitle);
    note.appendChild(noteDescription);
    note.appendChild(deleteButton);
    noteSection.append(note)
}

const storeNote = (title, description) => {
    let newNote = {
        title: title,
        description: description,
        noteID: incrementalNoteID
    }
    localStorage.setItem(incrementalNoteID, JSON.stringify(newNote))
    incrementalNoteID++
    localStorage.setItem("incrementalNoteID", incrementalNoteID)
}

const retrieveStoredNotes = () => {
    for (var i = 0; i < localStorage.length; i++ ) {
        if (localStorage.key(i) === "incrementalNoteID") {
            console.log("skipped")
        }
        else {
            createStoredNote(JSON.parse(localStorage.getItem(localStorage.key(i))).title, JSON.parse(localStorage.getItem(localStorage.key(i))).description, JSON.parse(localStorage.getItem(localStorage.key(i))).noteID)
        }
    }
}

// retrieving data from storage

retrieveStoredNotes()

// for (var key in localStorage) {
//     createNote(localStorage.getItem(key.title), localStorage.getItem(key.description))
// }

const completeTask = () => {
    event.target.style.textDecoration = "line-through"
    completed = true
}

const unCompleteTask = () => {
    event.target.style.textDecoration = "none"
    completed = false
}

// input events

descriptionInput.addEventListener('click', event => {
    titleInput.style.display = "block"
    cancelButton.style.display = "block"
})

cancelButton.addEventListener('click', event => {
    event.preventDefault()
    cancel()
})

form.addEventListener('submit', event => {
    event.preventDefault()
    if (title.value === "" || description.value === "")
    {
        alert("Cannot add empty note!")
    }
    else {
        createNote(title.value, description.value)
        storeNote(title.value, description.value)
        cancel()
    }
})

noteSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("description")) {
        !completed ? completeTask() : unCompleteTask()
    }
  });

noteSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      event.target.parentElement.remove();
      localStorage.removeItem(event.target.parentElement.id)
    }
    if (localStorage.length === 1) {
        incrementalNoteID = 0
    }
  });

// localStorage.clear();
// noteID = 0



