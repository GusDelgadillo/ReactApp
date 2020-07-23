import React from 'react';
import './Menu.css'

export default class Menu extends React.Component{
    // eslint-disable-next-line react/require-render-return
    render(){
        return(
        <div className="Menu">
        <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>History</a></li>
                <li><a href='#'>Contact</a></li>
                </ul>
        </nav>
        </div>
        )
    }
}