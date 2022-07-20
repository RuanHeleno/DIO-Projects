import { Request, Response } from 'express';
import shortid from 'shortid';
import { URLModel } from '../model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        try {
            // Pegar a URL
            const originURL = req.body.url;
            const url = await URLModel.findOne({ originURL });
    
            // Ver se a URL já não existe
            if(url) {
                res.json(url);
                return;
            }
    
            // Criar a hash para a URL caso não exista
            const hash = shortid.generate();
            const shortURL = `${process.env.API_URL}/${hash}`;
    
            // Salvar a URL no banco
            const newURL = await URLModel.create({ hash, shortURL , originURL});
            
            // Retornar a URL salva
            res.json(shortURL);
        } catch(err) {
            console.log(err.message);
        }
    };

    public async redirect(req: Request, res: Response): Promise<void> {
        try {
            // Pegar hash da URL
            const { hash } = req.params;
            const url = await URLModel.findOne({ hash });
    
            // Encontrar a URL original pelo hash
            if(url) {
                // Redirecionar para a URL original
                res.redirect(url.originURL);
                return;
            }
    
            res.status(400).json({ error: 'URL not found' });
        } catch(err) {
            console.log(err.message);
        }
    }
}