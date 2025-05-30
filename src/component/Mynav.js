import React, {Component} from "react";

class Mynav extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log("sh 작동");
        console.log(newProps.data, this.props.data)
        if (newProps.data === this.props.data) {
            return false;
        }
        return true;
    }

    render() {
        console.log("Mynav 실행");
        let data = this.props.data;
        let lists = []

        data.forEach(v => {
            lists.push(<li key={v.id}><a href="/"
            onClick={(e) => {
               e.preventDefault();
               this.props.onChangePage(v.id);
            }}
            >{v.title}</a></li>);
        });

        // let i = 0;
        // while (i < data.length) {
        //     lists.push(<li key={data[i].id}><a href="/">{data[i].title}</a></li>);
        //     i++;
        // }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Mynav;