const express = require(`express`)
const path = require(`path`)
const app = express()
const handleBars = require('handlebars')
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))
const port = 1030
// http://data.nba.net/10s/prod/v1/2018/players.json
