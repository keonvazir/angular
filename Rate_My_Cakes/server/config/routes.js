const cakes = require("../controllers/cakes.js");

module.exports = function(app){
    app.get("/cakes", cakes.index)

    app.get("/cakes/:_id", cakes.getCake)

    app.post("/cakes", cakes.addCake)
}