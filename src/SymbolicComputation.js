import React, {Component} from 'react'
import Trilingual from './Trilingual'
import URL from './Utility'

const title = 
{
    en: 'Symbolic Computation & Computer Algebra',
    zh: "符号计算及计算机代数",
    ja: "記号計算と計算機代数"
}

const CS487Project = {
    url: "report.pdf",
    text: "Primality Testing"
}

const CS487Intro = {
    url: "https://cs.uwaterloo.ca//current/courses/course_descriptions/cDescr/CS487",
    text: "CS 487 (Intro to Symbolic Computation)"
}

const CS487Message = {
    en: <>I took <URL info={CS487Intro}/> in Winter 2022 and elected to do an optional course project for undergraduate students: <URL info={CS487Project}/>.</>,
    zh: <>我在2022年的冬季学期选修了<URL info={CS487Intro}/>，并完成了一个可选的课程项目: <URL info={CS487Project}/>。</>,
    ja: <>2022年の冬学期で<URL info={CS487Intro}/>を受けて、選択の課題のレポートを書きました: <URL info={CS487Project}/>。</>
}

// const URA = {
//     en: <>I am now working part-time as a </>
// }
class SymbolicComputation extends Component {
    render() {
        return (
            <div>
                <Trilingual message={title} level="h2"/>
                <Trilingual message={CS487Message} level="p"/>
                
            </div>
        )
    }
}

export default SymbolicComputation