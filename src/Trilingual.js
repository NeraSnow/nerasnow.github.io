import React, {Component} from 'react'
import LangContext from './Context'

const TrilingualBody = (props) => {
    
    const currLang = props.currLang
    // console.log(currLang)

    if (currLang === 'en') {
      return <h2 lang='en'>{props.message.en}</h2>
    } else if (currLang === 'zh-Hans') {
      return <h2 lang='zh-Hans'>{props.message.zh}</h2>
    } else if (currLang === 'ja') {
      return <h2 lang='ja'>{props.message.ja}</h2>
    } else {
      return "No match"
    }
    // const retMessage = 

    // return <h2 lang={currLang}>{props.message.currLang}</h2>
}


class Trilingual extends Component {
  render() {
    const {message} = this.props 
    
    return (
        <LangContext.Consumer>
            {({lang, }) => <TrilingualBody message={message} currLang={lang}/>}
        </LangContext.Consumer>
    )
  }
}

export default Trilingual
