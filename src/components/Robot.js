import React from 'react';
import './Robot.css';
import 'tachyons';

const Robot = ({id, name, email}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-1'>
      <img src={"https://robohash.org/"+id+"?size=200x200"} alt="robotica" />
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
}

export default Robot;

// class Robot extends React.Component {
//   render() {
//     const {id, name, email} = this.props;
//     return (
//       <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-1'>
//         <img src={"https://robohash.org/"+id+"?size=200x200"} alt="robotica" />
//         <div>
//           <h2> {name} </h2>
//           <p> {email} </p>
//         </div>
//       </div>
//     );
//   }
// }