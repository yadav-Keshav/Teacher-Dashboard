import React from 'react';

function Overview() {
    return <div>
        <div className='main-card-top'>
            <div>
                <p>Hello,Keshav Kumar</p>
                <p><span style={{ backgroundColor: '#1572A1', color: 'white', padding: ' 2px 5px', borderRadius: '5px' }}>#26</span> in UPSC CSE</p>
            </div>
            <p style={{ justifyContent: "center", marginLeft: '30%' }}>
                Total hours Tough this month  <br />
                <span style={{ marginLeft: "30px", fontSize: '20px' }}>117/150</span> hours

            </p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <p>Live class <br /> 62.2/80 h</p>
                <p>Free live class <br /> 12/40 h</p>
                <p>YouTube <br /> 43/30 h</p>
            </div>
        </div>
        <div style={{ margin: '40px 0px', display: 'flex', justifyContent: 'space-between' }}>
            <div>OVERVIEW</div>
            <div>
                <select name="duration" id="duration">
                    <option value="this week">This Week</option>
                    <option value="this year">This Year</option>
                </select>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ width: '40%', padding: '20px', boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, .2)' }}>
                <h2>Views <br /> 512,325</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>Live courses <br /> 448</h5>
                    <h5>Free Live classes <br /> 1.7K</h5>
                    <h5>Free courses <br /> 816</h5>
                </div>
            </div>
            <div style={{ width: '40%', padding: '20px', boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, .2)' }}>
                <h2>Watch Minutes <br /> 512,325</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>Live courses <br /> 448</h5>
                    <h5>Free Live classes <br /> 1.7K</h5>
                    <h5>Free courses <br /> 816</h5>
                </div>
            </div>
        </div>
    </div>;
}

export default Overview;
