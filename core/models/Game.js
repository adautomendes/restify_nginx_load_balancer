const { Schema, model } = require('mongoose');

const GameSchema = new Schema(
    {
        nome: String,
        ano: Number,
        plataforma: String
    },
    {
        timestamps: true // Cria os campos createdAt e updatedAt
    }
);

module.exports = model('Game', GameSchema);