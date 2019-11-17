const Task = require('mongoose').model('Task');

module.exports = {
    index(request, response){
        Task.find()
        .then(tasks => response.json(tasks))
        .catch(err=> response.json(err));
    },
    show(request, response){
        Task.findById(request.params.id)
        .then(task=> response.json(task))
        .catch(err=>response.json(err));
    },
    create(request, response){
        Task.create(request.body)
        .then(task=> response.json(task))
        .catch(err=>response.json(err));
    },
    update(request, response){
        Task.findByIdAndUpdate(request.params.id, request.body, {new: true, runValidators: true, context: 'query'})
        .then(task=> response.json(task))
        .catch(err=>response.json(err));
    },
    destroy(request, response){
        Task.findByIdAndDelete(request.params.id)
        .then(result=> response.json(result))
        .catch(err=>response.json(err));
    }
}