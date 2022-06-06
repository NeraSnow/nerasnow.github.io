import React, {Component} from 'react'
import Trilingual from './Trilingual'

const title = 
{
    en: 'Lecture Notes',
    zh: "课程笔记",
    ja: "授業ノート"
}

class Notes extends Component {
    render() {
        return (
        <div>
            <Trilingual message={title}/>
            <ul className="indent">
                <li>
                    <a href="Notes/MATH 237.pdf">MATH 237</a>
                </li>
                <li>
                  <a href="Notes/MATH 247.pdf">MATH 247</a>
                </li>
                <li>
                  <a href="Notes/MATH 249.pdf">MATH 249</a>
                </li>
                <li>
                  <a href="Notes/PMATH 347.pdf">PMATH 347</a>
                </li>
                <li>
                  <a href="Notes/PMATH 352.pdf">PMATH 352</a>
                </li>
                <li>
                  <a href="Notes/PMATH 450.pdf">PMATH 450</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default Notes