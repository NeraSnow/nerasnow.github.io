import React, {Component} from 'react'
import Greetings from './Greetings'
import Sidebar from './Sidebar'
import LangContext from './Context'
import LangSelect from './LangSelect'
import EasiaStudy from './EasiaStudies'
import Miscellaneous from './Miscellaneous'
import Notes from './Notes'
import Life from './Life'

// export const LangContext = React.createContext('en');

class App extends Component {
  constructor(props) {
    super(props);
  
    this.setLang = (newLang) => {
        this.setState(state => ({
          lang: newLang
        }));
      }

    this.state = {
      lang : 'en',
      setLang : this.setLang,
    };

  }
  render() {
    

    return (
      <div className='wrapper'>
        <LangContext.Provider value={this.state}>
          <LangSelect />
          <div className="row">
                <Sidebar />
            <div className="content">
                <Greetings />
                <EasiaStudy />
                <Miscellaneous />
                <Notes />
                <Life />
            </div>
          </div>
          </LangContext.Provider>
      </div>
    )
  }
}

export default App