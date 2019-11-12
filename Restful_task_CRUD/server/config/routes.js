const tasks = require("../controllers/tasks.js");

module.exports = function(app){
    app.get("/tasks", tasks.index)

    app.get("/tasks/:_id", tasks.showTask)

    app.post("/tasks", tasks.addTask)

    app.put("/tasks/:_id", tasks.editTask)

    app.delete("/tasks/:_id", tasks.deleteTask)
}