import React, {Component} from "react";

class Mynav extends Component {
    render() {
        console.log("Mynav 실행");
        let data = this.props.data;
        let lists = []

        data.forEach(v => {
            lists.push(<li key={v.id}><a href="/">{v.title}</a></li>);
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