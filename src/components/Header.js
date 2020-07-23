import React from 'react';
import './Header.css'


// export default function Header() {
//     return (
//         <h1>Hello World</h1>
//     );
// }

export default class Header extends React.Component{
    render(props){
        const{name}=this.props;
        return(
        <div>
           
        <h1>Hello {name} </h1>
        </div>
        );
    }
}