import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from 'react-redux';

import Components1 from "./components/Components1";
import Components2 from "./components/Components2";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
    // state = {
    //     a: 'state 1 dari class App.js',
    //     b: 'state 2 dari class App.js'
    // }

    render() {
        console.log(this.props);

        const {post} = this.props;

        return (
            // <BrowserRouter> hilangkan comment untuk mengaktifkan
            <div className="App">

                {/*INI UNTUK BASIC COMPONENT-REACT*/}
                {/*2 Component dibawah di import dari kelas Component 1 dan Component 2*/}
                {/*<Components1 propsA={this.state.a}/>*/}
                {/*<Components2 propsB={this.state.b}/>*/}

                {/*INI UNTUK BASIC REACT-ROUTER*/}
                {/*<NavBar/>*/}
                {/*<Route exact path='/' component={Home}/>*/}
                {/*<Route path='/About' component={About}/>*/}
                {/*<Route path='/Contact' component={Contact}/>*/}

                {/*INI UNTUK BASIC REACT-REDUX*/}
                <h1>{post}</h1>
            </div>
            // </BrowserRouter> hilangkan comment untuk mengaktifkan


        );
    }


}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
};
export default connect(mapStateToProps)(App)
