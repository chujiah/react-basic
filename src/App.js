import './App.css';
import Myheader from "./component/Myheader";
import Mynav from "./component/Mynav";
import Myarticle from "./component/Myarticle";

import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'welcome',
            selected_id:2,
            welcome: {
                title:'welcome',
                desc:'Welcome to FrontEnd'
            },
            subject: {
                title:"프론트엔드 개발자",
                desc: "기본언어인 html, css, javascript부터 학습합니다.",
            },
            menus:[
                {id:1, title:"UI/UX 개발", desc:"사용자 인터페이스와 사용자가 웹사이트를 이용하면 느끼고 생각하는 총체적 경험을 개발 "},
                {id:2, title:"재사용이 가능한 UI 개발 ", desc:"앵귤러, 리엑트, 뷰등의 자바스크립트 프레임워크를 가지고 재사용할 수 있는 UI를 만든다."},
                {id:3, title:"애니메이션 구현", desc:"CSS 또는 javascript를 사용해 다양한 효과의 애니메이션 구현한다."},
            ]
        }
    }
    render() {
        console.log('App 실행');
        let _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            let idx = this.state.menus.findIndex(item => item.id === this.state.selected_id);
            _title = this.state.menus[idx].title;
            _desc = this.state.menus[idx].desc;
        }
        return (
            <div className='App'>
                <Myheader
                    title={this.state.subject.title}
                    desc={this.state.subject.desc}
                    onChangeMode = {() => { this.setState({mode:'welcome'})}}/>
                {/*<header>*/}
                {/*    <h1 className="logo">*/}
                {/*        <a href="/"*/}
                {/*        onClick={(e) => {*/}
                {/*            e.preventDefault();*/}
                {/*            this.setState({mode:'welcome'})*/}
                {/*        }}>{this.state.subject.title}*/}
                {/*        </a>*/}
                {/*    </h1>*/}
                {/*    <p>{this.state.subject.desc}</p>*/}
                {/*</header>*/}
                <Mynav data={this.state.menus}
                onChangePage = {(id) => {
                    this.setState({
                        mode:'read',
                        selected_id:id
                    });
                }}
                />
                <Myarticle title={_title} desc={_desc} />
            </div>
    );
  }
}

export default App;
