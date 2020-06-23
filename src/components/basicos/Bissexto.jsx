import React from 'react';

export default (props) => {
    if (props.ano % 400 === 0 || (props.ano % 4 === 0 && props.ano % 100 !== 0)) {
        return <span>O ano {props.ano} é bissexto</span>
    } else {
        return <span>O ano {props.ano} não é bissexto</span>
    }
}