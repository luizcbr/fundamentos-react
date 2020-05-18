import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default function App() {
    return (
        <div className="App">
            <Card titulo="#05 - Condicional com If">
                <CondicionalComIf numero={10}/>
            </Card>
            <Card titulo="#05 - Condicional v1">
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#04 - Repetição">
                <Repeticao/>
            </Card>
            <Card titulo="#03 - Com Filhos">
                <ComFilhos>
                    <ul>
                        <li>Braian</li>
                        <li>André</li>
                        <li>Arthur</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Com Parâmetros">
                <ComParametros
                    titulo="Segundo componente"
                    subtitulo="Passando parâmetros"
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    )
}