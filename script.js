const notes = {
  c: new Audio('notes/c-note.wav'),
}

function playNote(note) {
  notes[note].play()
}
