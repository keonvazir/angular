// const authors = require("../controllers/authors.js");
// const path = require("path");

// module.exports = function(app){

//     app.get("/authors", authors.index)

//     app.get("/authors/:id", authors.details)

//     app.post("/author", authors.addAuthor)

//     app.put("/authors/:id", authors.editAuthor)

//     app.delete("/authors/:id", authors.deleteAuthor)

//     app.all("*", (req,res,next) => {
//         res.sendFile(path.resolve("./public/dist/public/index.html"))
//     });

// }