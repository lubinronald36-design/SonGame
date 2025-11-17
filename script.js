
// Get the input field and button
const noteInput = document.getElementById('note-input');
const playBtn = document.getElementById('play-btn');

// Define the notes and their corresponding audio files
const notes = {
  'C': 'c-note.mp3',
  'D': 'd-note.mp3',
  'E': 'e-note.mp3',
  // Add more notes as needed
};

// Function to play the note
function playNote(note) {
  try {
    const audio = new Audio(notes/${notes[note]});
    audio.play();
  } catch (error) {
    console.error(Error playing note: ${error});
  }
}

// Add event listener to the button
playBtn.addEventListener('click', () => {
  const note = noteInput.value.trim().toUpperCase();
  if (note && notes[note]) {
    playNote(note);
  } else {
    console.log(Note not found: ${note});
  }
});
