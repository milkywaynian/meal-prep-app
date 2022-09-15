import React from 'react';
import { Cell } from './Cell';

export const Day = (props) => (
    <div>
        <h2>{props.day}</h2>
        <Cell />
        <Cell />
        <Cell />
    </div>
)