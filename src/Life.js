import React, {Component} from 'react'
import Trilingual from './Trilingual'

const ChineseText = {
    en: 'Please support the Chinese Text Project!',
    zh: '请支持中国哲学书电子化计划！',
    ja: '中国哲学書電子化計画にご協力お願いします。'
}

const bannerStyle = {
    "width": "350px",
    "height": "57px",
    "border": "1px solid #BBBBBB"
}

const OsuRecording = {
    en: 'My osu! Recordings',
    zh: '我的osu!打图录像',
    ja: 'osu!録画'
}


class Life extends Component {
    
    render() {
        return (
            <div>
            <Trilingual message={ChineseText} level="h2"/>
            <div align="center">
              <div style={bannerStyle}>
                <a href="https://ctext.org">
                  <img src="https://ctext.org/logos/ctplogo2.gif" border="0" alt="Chinese Text Project" />
                </a>
              </div>
            </div>
            <Trilingual message={OsuRecording} level="h2"/>
            <iframe title="My Osu! Recordings" width="612" height="345" src="https://www.youtube.com/embed/videoseries?list=PLMR6fjSMeG_cots2NEWG0Sv8C1TW0PXfJ" frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
            </div>
        )
    }
}

export default Life