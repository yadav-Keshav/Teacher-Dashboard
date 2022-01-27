import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './scheduleBody.css';
export default function ScheduleBody() {
    const [calDate, setCalDate] = useState(new Date());
    function onChange(calDate) {

        setCalDate(calDate)
    }
    return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45vw' }} >
            <h1>Today</h1>
            <div style={{ boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, .2)',margin:'20px',padding:'5px 10px' }}>
                <h4>Free Live Class</h4>
                <h3>Indian Economy Survey Unit</h3>
                <p>2:30 PM -4:30 PM</p>
            </div>
            <div style={{ boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, .2)',margin:'20px',padding:'5px 10px'}}>
                <h4>Free Live Class</h4>
                <h3>Indian Economy Survey Unit</h3>
                <p>2:30 PM -4:30 PM</p>
            </div>
        </div>
        <div className="result-calendar">
            <Calendar onChange={onChange} value={calDate} />
        </div>
    </div >;
}
