import React, {Component} from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "./ErrorBoundary";
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            this.setState({ robots: json });
        }catch(error){
            console.log("error", error);
        }
    }

    onSearchChange = evt => {
        this.setState({searchfield: evt.target.value});
    }

    render () {
        const {robots, searchfield} = this.state;

        const filtered = robots.filter(item => 
            item.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        return !robots.length? 
            <h1 className="loading tc"> Loading... </h1>
            :(
                <>
                    <h1 className="tc f2 f1-l fw2 pa4 mb0 mt0 lh-title"> robofriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <ErrorBoundary>
                        <Scroll>
                            <CardList robots={filtered} />
                        </Scroll>
                    </ErrorBoundary>
                </>
            );
    }
}

export default App;