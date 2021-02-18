import React from 'react'
import "./About.css"

export default function About(props) {
    console.log(props);
    return (
        <div>
            <p className="about__container">
                이 사이트는 개발용 입니다.<br/>
                Nomad Coder Nicolas의 Movie Rating Web <br/>
                강의를 통한 클론 코딩 결과입니다.
                <span>
                    <span>개발자 :  TonyPark</span>
                    <span>GIT : <a href="http://github.com/tonypark-cw">깃허브</a></span>
                </span>
            </p>


        </div>
    )
}
