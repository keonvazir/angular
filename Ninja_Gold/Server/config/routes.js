const tasks = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/ninjas", ninjas.ninjas)
}