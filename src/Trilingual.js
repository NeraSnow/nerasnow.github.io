import React, {Component} from 'react'
import LangContext from './Context'

const TrilingualBody = (props) => {
    
    const currLang = props.currLang
    // console.log(currLang)
    const Level = `${props.level}`

    if (currLang === 'en') {
      return <Level lang='en'>{props.message.en}</Level> 
    } else if (currLang === 'zh-Hans') {
      return <Level lang='zh-Hans'>{props.message.zh}</Level>
    } else if (currLang === 'ja') {
      return <Level lang='ja'>{props.message.ja}</Level>
    } else {
      return "No match"
    }
    // const retMessage = 

    // return <h2 lang={currLang}>{props.message.currLang}</h2>
}


class Trilingual extends Component {
  render() {
    const {message, level} = this.props 
    
    return (
        <LangContext.Consumer>
            {({lang, }) => <TrilingualBody message={message} currLang={lang} level={level}/>}
        </LangContext.Consumer>
    )
  }
}

export default Trilingual
