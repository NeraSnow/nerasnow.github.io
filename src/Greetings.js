import React, {Component} from 'react'
import Trilingual from './Trilingual'
import URL from './Utility'

const greetings =
{
    en: 'Hello!',
    zh: '你好！',
    ja: 'こんにちは！'
}

const UW = {
  url: "https://uwaterloo.ca/",
  text: "University of Waterloo"
}


const introduction =
{
    en: <>I'm an undergraduate mathematics student at <URL info={UW}/>. I am interested in Pure Mathematics, Statistics and Computer Science.</>,
    zh: <>我是 <URL info={UW}/> 数学系的一名本科生。我对纯数学，统计，和计算机科学感兴趣。</>,
    ja: <>私は <URL info={UW}/> の数学学部の大学生です。純粋数学、統計学とコンピュータ科学に興味があります。</>
}



const chart = {
  en: <>This <URL info={{
        url: "Course_Dependency.pdf",
        text: "PDF File"
      }}/> contains the chart that illustrates the courses I have taken so far.</>,
  zh: <>我把我上过的课整理成了表格的形式。查看文件请点
    <URL info={{url: "Course_Dependency.pdf",
                text: "这里"}}/></>,
  ja: <>今まで受けたクラスが整理されて、<URL info={{url: "Course_Dependency.pdf", text: "図"}}/>にしました。</>
}


class Greetings extends Component {
  render() {
    
    return (
    <div>
      <Trilingual message={greetings} level="h2"/>
      <Trilingual message={introduction} level="p"/>
      <Trilingual message={chart} level="p"/>
    </div>
    )
  }
}

export default Greetings