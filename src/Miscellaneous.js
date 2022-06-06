import React, {Component} from 'react'
import Trilingual from './Trilingual'
import URL from './Utility'

const title = 
{
    en: 'Miscellaneous',
    zh: "杂项",
    ja: "雑件"
}

const WhatToPlay =
{
    url: 'whattoplay/index.html',
    text: '今天玩什么'
}

const XiamiExport =
{
    url: '1590509_song.html',
    text: '虾米歌单备份'
}


class Miscellaneous extends Component {
    render() {
        return (
        <div>
            <Trilingual message={title}/>
            <ul className="indent">
                  <li><URL info={WhatToPlay}/></li>
                  <li><URL info={XiamiExport}/></li>
            </ul>
        </div>
        )
    }
}

export default Miscellaneous