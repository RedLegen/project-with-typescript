import React, { useEffect, useState } from 'react';
import api from './services/api';

import Name from './components/Names'

interface INames {
    name: string;
    email?: string;
}

function App() {
    const [name, setName] = useState<INames[]>([]);

    useEffect(() => {
        api.get<INames[]>('/names').then(response => {
            setName(response.data)
        });
    }) 
  return (
    <div className="App">
        { name.map( name => <Name key={name.email} names={name} />) }
    </div>
  );
}

export default App;
