import React from 'react';

export default (props) => {
    let dia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    let mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let now = new Date();

    function HoraCerta() {
        return (
            `${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}
            : ${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}
            : ${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`
        )
    }

    return (
        <div>
            Hoje é {dia[now.getDay()]},
            dia {now.getDate()} de {mes[now.getMonth()]} de {now.getFullYear()}<br/>
            {HoraCerta()}
        </div>
    );
}
