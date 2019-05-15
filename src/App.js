import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Components1 from "./components/Components1";
import Components2 from "./components/Components2";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import myReducer from './components/MyReducer';

class App extends Component {
    state = {
        a: 'state 1 dari class App.js',
        b: 'state 2 dari class App.js'
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    INI UNTUK BASIC COMPONENT-REACT
                    2 Component dibawah di import dari kelas Component 1 dan Component 2
                    <Components1 propsA={this.state.a}/>
                    <Components2 propsB={this.state.b}/>

                    {/*INI UNTUK BASIC REACT-ROUTER*/}
                    {/*<NavBar/>*/}
                    {/*<Route exact path='/' component={Home}/>*/}
                    {/*<Route path='/About' component={About}/>*/}
                    {/*<Route path='/Contact' component={Contact}/>*/}

                    {/*INI UNTUK BASIC REACT-REDUX*/}
                    {/*<MyReducer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
