import React from 'react';
import Overview from '../components/overview';
import './body.css';
import BodyLink from './bodyLink';
export default function Body() {
    return <div className='dash-board'>
        <div className='dash-board-left'>
            <BodyLink />
        </div>
        <div className='dash-board-right'>
            <Overview />
        </div>
    </div>;
}
