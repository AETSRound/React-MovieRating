import React from 'react'
import "./About.css"

export default function About(props) {
    console.log(props);
    return (
        <div>
            <p className="about__container">
                <a href="http://github.com/tonypark-cw"><img alt="ToRootGit" className="root_git" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"></img></a>
                이 사이트는 개발용 입니다.<br/>
                Nomad Coder Nicolas의 Movie Rating Web <br/>
                강의를 통한 클론 코딩 페이지입니다.
                <span>
                    <span>개발자 :  TonyPark</span>
                    <span><a href="http://github.com/tonypark-cw/react-movierating"><img className="git_Icon" alt="ToMovieRatingGit" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/todochrome/">🎈VanillaJS로 만든 TODO앱</a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/painterjs/">🎈VanillaJS로 만든 Painter</a></span><br/>
                    <span><a href="https://tonypark-cw.github.io/goyange/">🎈고양이 이미지 검색 페이지</a></span><br/>
                </span>
            </p>
        </div>
    )
}
