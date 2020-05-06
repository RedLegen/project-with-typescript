import { Request, Response } from 'express';
import NameServices from '../services/NameServices';

const names = [
    {
        name: 'Felipe',
        email: 'felipe0102@gmail.com'
    }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(names)
    },

    async create(req: Request, res: Response) {
        const nameservices = new NameServices

        nameservices.sendMassge({
            to: {
                name: 'Lucas',
                email: 'lucasteste@gmail.com',
            },
            massge: {
                subject: 'Olá',
                body: 'Olá seja bem-vindo a nossa empressa'
            }
        });

        return res.send()
    }
};