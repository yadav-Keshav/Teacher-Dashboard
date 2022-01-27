import React from 'react';
import BodyLink from './components/bodyLink';
import ScheduleBody from './components/scheduleBody';
import Navbar from './components/Navbar';
function Schedule() {


    return <div>
        <Navbar />
        <div style={{ display: 'flex',padding: '0vw 5vw' }}>
            <div style={{ width: '20vw' }}>
                <BodyLink />
            </div>
            <div>
                <ScheduleBody />
            </div>
        </div>
    </div>;
}

export default Schedule;
