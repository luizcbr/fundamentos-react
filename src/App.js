import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Bissexto from './components/basicos/Bissexto';
import DataHora from './components/basicos/DataHora';

export default function App() {
    return (
        <div className="App">
            <Card titulo="#08 - Data e Hora" color="#7159c1">
                <DataHora />
            </Card>
            <Card titulo="#07 - Ano bissexto" color="#35a79c">
                <Bissexto ano={2020}/>
            </Card>
            <Card titulo="#06 - Condicional com If" color="#fed766">
                <CondicionalComIf numero={10}/>
            </Card>
            <Card titulo="#05 - Condicional v1" color="#6497b1">
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#04 - Repetição" color="#851e3e">
                <Repeticao/>
            </Card>
            <Card titulo="#03 - Com Filhos" color="#eec9d2">
                <ComFilhos>
                    <ul>
                        <li>Braian</li>
                        <li>André</li>
                        <li>Arthur</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Com Parâmetros" color="#fe9c8f">
                <ComParametros
                    titulo="Segundo componente"
                    subtitulo="Passando parâmetros"
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#2ab7ca">
                <Primeiro />
            </Card>
        </div>
    )
}