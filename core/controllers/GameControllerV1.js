const Game = require('../models/Game');

module.exports = {
    create: async (req, res) => {
        let { nome, ano, plataforma } = req.body;

        let resposta = await Game.create(
            {
                nome,
                ano,
                plataforma
            }
        );

        return res.json(201, resposta);
    },
    update: async (req, res) => {
        let { id } = req.params;

        let resposta = await Game.findByIdAndUpdate(id, req.body);

        return res.json(200, resposta);
    },
    search: async (req, res) => {
        let { id } = req.query;

        let resposta;
        if (id) {
            // Buscar por id
            resposta = await Game.findById(id);
        } else {
            // Buscar todos
            resposta = await Game.find();
        }

        return res.json(200, resposta);
    },
    remove: async (req, res) => {
        let { id } = req.params;

        let resposta = {
            id,
            nExcluidos: await Game.findByIdAndDelete(id)
        }

        return res.json(200, resposta);
    }
}