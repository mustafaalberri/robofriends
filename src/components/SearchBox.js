import React from "react";
import './SearchBox.css';
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return (
        <div className="center tc pa3 br4 w5 shadow-2 bg-light-green">
            <input 
                className="pa2 ba bw1 br4 bg-animate hover-bg-moon-gray mw6"
                type="search" 
                placeholder="Search here..." 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

// class SearchBox extends Component {
//     render() {
//         const {searchChange} = this.props;
//         return (
//             <div className="center tc pa3 br4 w5 shadow-2 bg-light-green">
//                 <input 
//                     className="pa2 ba bw1 br4 bg-animate hover-bg-moon-gray mw6"
//                     type="search" 
//                     placeholder="Search here..." 
//                     onChange={searchChange}
//                 />
//             </div>
//         );
//     }
// }