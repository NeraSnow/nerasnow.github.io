import React, {Component, useContext} from 'react'
import URL from './Utility'
import LangContext from './Context'


class Sidebar extends Component {
    render() {
    const Myhead = () => {
        return (
        <a href="head.png"><div className="me-img"></div></a>
        )
    }

    const Name = () => {
        return <div className="name" >Bingzhi (Benjamin) Chen</div>
    }

    const Email = () => {
        return (<div>
        <small>cbz1998@gmail.com</small> <br />
        <small>b246chen@uwaterloo.ca</small>
        </div>
        )
    }

    const Resources = [
        {
            url: "Benjamin_CV.pdf",
            text: "Remuse",
        },
        {
            url: "https://github.com/NeraSnow",
            text: "Github",
        },
        {
            url: "https://www.linkedin.com/in/benjamin-chen-983645164/",
            text: "LinkedIn"
        },
        {
            url: "https://www.quora.com/profile/Bingzhi-Chen",
            text: "Quora",
        },
        {
            url: "https://nerasnow.wordpress.com/",
            text: "Blog",
        },
    ]

    const ChineseSpecial = () => {
        const {lang, } = useContext(LangContext)
        if (lang === 'zh-Hans') {
                return (
                <>
                <h2 lang='zh-Hans'>中文特供</h2>
                <ul>
                <li lang='zh-Hans'><a href="https://www.zhihu.com/people/chen-bing-zhi-81/activities">知乎</a></li>    
                <li lang='zh-Hans'>QQ/微信: 610706557</li>
                <li lang='zh-Hans'><a href="http://weibo.com/522480456">微博</a></li>
                </ul>
                </>
                )       
        } else {
            return "";
        }
    }

    const URLList = (props) => {
        const rows = props.resource.map((row, index) => {
            return (
                <li key={index}><URL info={row}/></li>
            )
        })
        return <ul className="sidebar-nav">{rows}</ul>
    }

        return (
            <div className="sidebar-col">
                <Myhead />
                <Name />
                <Email />
                <br />
                <URLList resource={Resources}/>
                <ChineseSpecial />
                
                
                <img src="compact.jpg" alt="A joke about compactness in Chinese" width='182'></img>
            </div>

        )
    }
    

        
          

}

export default Sidebar


