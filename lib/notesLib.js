const fs = require("fs");
const path = require("path");

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(notes, null, 1)
  );
  return note;
}

function deleteNote(id, notes) {
  console.log(id);
  const projectIndex = notes.findIndex(p => p.id == id);

 notes.splice(projectIndex, 1);
 fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(notes, null, 1)
  );

  return notes;
}

module.exports = { createNewNote, deleteNote };
