import { useState } from 'react'
import './ChordLibrary.css'
import Chord from './components/chord'
import ChordForm from './components/chordform'

function ChordLibrary() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [rootNote, setRootNote] = useState("C")
  const [chordType, setChordType] = useState("Major");

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  if (isFormOpen) {
    return <ChordForm
      rootNote={rootNote}
      chordType={chordType}
      setRootNote={setRootNote}
      setChordType={setChordType}
      toggleForm={toggleForm}/>;
  }

  return (
    <div>
      <Chord rootNote={rootNote} type={chordType} toggleForm={toggleForm} />
    </div>
  );
}

export default ChordLibrary;
