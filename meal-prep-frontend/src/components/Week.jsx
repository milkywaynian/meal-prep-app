import React from 'react';
import { Day } from './Day';

const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

export const Week = () => {
    return (
    <div>
        {daysOfTheWeek.map(day=><Day day={day} />)}
    </div>
)
}