const fs = require("fs");
const path = require("path");

function createNewNote(body) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}
