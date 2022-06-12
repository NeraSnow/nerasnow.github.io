import React, {Component} from 'react'
import Trilingual from './Trilingual'

const title = 
{
    en: 'East-Asia Studies',
    zh: "东亚研究",
    ja: "東アジア研究"
}

class EasiaStudy extends Component {
    render() {
        return (
        <div>
            <Trilingual message={title} level="h2"/>
            <ul className="indent">
                  <li><a href= "bookreview.docx">Book Review of The Chrysanthemum and the Sword</a></li>
                  <li><a href= "Comparison of the Confucianism in the Pre-Qin Period.docx">Comparison of the Confucianism in the Pre-Qin Period</a></li>
            </ul>
        </div>
        )
    }
}

export default EasiaStudy