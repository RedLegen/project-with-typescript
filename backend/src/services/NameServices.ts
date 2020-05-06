interface IName {
    name: string;
    email: string
}

interface IMassge {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMassgeDTO {
    to: IName;
    massge: IMassge
}

interface INameServices {
    sendMassge(request: IMassgeDTO): void
}

class NameServices implements INameServices {
    sendMassge({to, massge}: IMassgeDTO) {
        alert(`Enviado para ${to.name}: ${massge.subject}`)
    }
}

export default NameServices;