function ChordForm( {rootNote, chordType, setRootNote, setChordType, toggleForm} ) {
    const notes = [
        "A", "A#", "B",
        "C", "C#", "D",
        "D#", "E", "F",
        "F#", "G", "G#"
    ];

    const handleTypeChange = (event) => {
        setChordType(event.target.value);
    }

    const handleRootChange = (event) => {
        setRootNote(event.target.value);
    }

    return (
        <div>
            <h1>Select Your Chord</h1>

            <select value={rootNote} onChange={handleRootChange}>
                {notes.map((note, i) => (
                    <option key={i} value={note}>
                        {note}
                    </option>
                ))}
            </select>

            <select value={chordType} onChange={handleTypeChange}>
                <option value="Major">major</option>
                <option value="Minor">minor</option>
            </select>

            <br />
            
            <button onClick={toggleForm}>Go!</button>
        </div>
    );
}

export default ChordForm;
