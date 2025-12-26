import { Note, Interval } from "tonal";
import major from '../assets/MajorDiagram.png'
import minor from '../assets/MinorDiagram.png'


// C minor chord: -, -, 1, b3, 5, 1
// C major chord: 3, 1, 3, 5, 1, 3

function PrintNotes(notes)
{
    let result = [];
    for (let i = 0; i < notes.length; i++)
    {
        result[i] = notes[i] === "" ? "x" : notes[i];
    }

    return result.join(" ");
}

function Chord( { type, rootNote, toggleForm } )
{
    const strings = ["E2", "A2", "D3", "G3", "B3", "E4"]
    let myNote = Note.get("E2");
    let intervals = ["", "", "", "", "", ""];

    if (type === "Major") {
        myNote = Note.get("E2")
        intervals = ["1P", "5P", "1P", "3M", "5P", "1P"];
    }
    else {
        myNote = Note.get("E2")
        intervals = ["1P", "5P", "1P", "3m", "5P", "1P"];
    }

    let myInterval = Note.distance(myNote, rootNote);
    console.log(myInterval, Interval.semitones(myInterval), Note.transpose(myNote, myInterval))
    let fret = Interval.semitones(myInterval);

    const notes = intervals.map(Note.transposeFrom(rootNote));

    return (

        <div>
            <button onClick={toggleForm}>Back</button> <br></br>

            <h1>{rootNote} {type} Chord</h1>

            <div class="image-container">
                {
                    type === "Major" ? 
                    <img src={major} alt="A major chord" /> :
                    <img src={minor} alt="A minor chord" />
                }
                
                <div class="string-labels">
                    <p>{PrintNotes(notes)}</p>
                </div>

                <div class="fret-labels">
                    <p>{fret+1}</p>
                </div>
            </div>
        </div>
    );
}

export default Chord;
