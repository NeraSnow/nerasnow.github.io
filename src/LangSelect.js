import React, {Component} from 'react'
import LangContext from './Context'


class LangSelect extends Component {
    render() {
        return (
            <LangContext.Consumer>
            { ({lang, setLang}) => (
                
                <nav style={{textAlign: 'right'}}>
                    <button onClick={() => setLang('en')}>English</button>
                    <button onClick={() => setLang('zh-Hans')}>中文</button>
                    <button onClick={() => setLang('ja')}>日本語</button>
                </nav>
                )
            }   
            </LangContext.Consumer>
        )
    }
}

export default LangSelect

