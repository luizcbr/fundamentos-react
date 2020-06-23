import React from 'react';
import If from './If';

export default (props) => {
    return (
        <div>
            <h2>O número {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>é Par</span>
            </If>
            <If test={props.numero % 2 !== 0}>
            <span>é Ímpar</span>
            </If>
        </div>
    )
}