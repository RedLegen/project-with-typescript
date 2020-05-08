import React from 'react';

interface INames {
    name: string;
    email?: string;
}

interface Props {
    names: INames
}

const names: React.FC<Props> = ({ names }) => {
    return (
        <div>
            <strong>Nome:</strong> {names.name} <br/>
            <strong>E-mail:</strong> {names.email || `O ${names.name} não possui email`} <br/> <br/>
        </div>
    );
};

export default names;