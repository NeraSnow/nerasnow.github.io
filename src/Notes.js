import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, {Component} from 'react'
import Trilingual from './Trilingual'
import URL from './Utility'

const title = 
{
    en: 'Lecture Notes',
    zh: "课程笔记",
    ja: "授業ノート"
}

const ListOfNotes = [
  {
    url: "Notes/MATH 237.pdf",
    text: "MATH 237"
  },
  {
    url: "Notes/MATH 247.pdf",
    text: "MATH 247"
  },
  {
    url: "Notes/MATH 249.pdf",
    text: "MATH 249"
  },
  {
    url: "Notes/PMATH 347.pdf",
    text: "PMATH 347"
  },
  {
    url: "Notes/PMATH 352.pdf",
    text: "PMATH 352"
  },
  {
    url: "Notes/PMATH 450.pdf",
    text: "PMATH 450"
  }
]

const NotesBody = (props) => {
    const rows = props.dicts.map((note, index) => {
      return (
        <li key = {index}>
          <URL info={note}/>
        </li>
      )
    })

    return <ul className="indent">{rows}</ul>
}

class Notes extends Component {
    

    render() {
        return (
        <div>
            <Trilingual message={title} level="h2"/>
            <NotesBody dicts={ListOfNotes}/>
        </div>
        )
    }
}

export default Notes