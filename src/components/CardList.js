import React from 'react';
import Robot from './Robot';
import './CardList.css';

const CardList = ({robots}) => {
    //throw new Error('hoooolalala');
    return (
        <div className='robots__container'>
            {
                robots.map(item => {
                    return (
                        <Robot 
                            key={"#"+item.id}
                            id={item.id} 
                            name={item.name} 
                            email={item.email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

// class CardList extends Component {
//     render() {
//         const {robots} = this.props;
//         return (
//             <div className='robots__container'>
//                 {
//                     robots.map((item) => {
//                         return (
//                             <Robot 
//                                 key={"#"+item.id}
//                                 id={item.id} 
//                                 name={item.name} 
//                                 email={item.email} 
//                             />
//                         );
//                     })
//                 }
//             </div>
//         );
//     }
// }