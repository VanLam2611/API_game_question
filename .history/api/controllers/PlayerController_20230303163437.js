'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
const { stringify } = require('querystring')

const table = 'player'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM player'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO `player`( `name`, `point`, `correct`, `wrong`) VALUES ( ?, 0, 0, 0 )"
        db.query(sql, [data.name], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    updatePoint: (req, res) => {
        let data = req.body;
        let playerId = req.params.playerId;
        let sql = 'UPDATE player SET `point`= ? ,`correct`= ? ,`wrong`= ? WHERE id = ?'
        db.query(sql, [data, playerId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
}