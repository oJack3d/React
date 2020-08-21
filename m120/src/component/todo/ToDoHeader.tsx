import React from 'react';
import { Link } from 'react-router-dom'

const ToDoHeader: React.FC = () => {
    return (<>
        <h1>gagaHeader</h1>
        <ul>
            <li><Link to="todo">Todo</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="gaga">GAGA</Link></li>
        </ul>
    </>)
}

export default ToDoHeader