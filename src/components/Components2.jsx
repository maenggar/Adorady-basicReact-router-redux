import React, {Component} from 'react';

class Components2 extends Component {
    render() {
        return (
            // tulisan Heading ini akan di eksport ke kelas App.js
            <div>
                <h1>Heading ini dari Class Component 2</h1>
                <h3>{this.props.propsB}</h3>
                <hr/>
            </div>
        );
    }
}

export default Components2;