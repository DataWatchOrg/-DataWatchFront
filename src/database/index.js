const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://datawatchorg:dwosakaue@datawatchorg.4a9pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log("Mongo pimbado com sucesso")
}, {useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
    console.log("Erro ao se conectar" + err)
})
