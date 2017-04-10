var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/21stFeb', ['tasks']);

// To fetch all tasks using mongojs
router.get('/tasks', function(req, res){
   // res.send("tasks page");
   db.tasks.find(function(error, tasks){
       if(error){
           re.send(error);
       } else {
           res.json(tasks);
       }
        
   });
});

// To fetch one tasks using mongojs
router.get("/oneTask/:id", function(req, res, next){
console.log("id is ::: " + req.params.id);
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, task){
        console.log(task);
        if(err){
            res.snd(err);
        } else {
            res.json(task);
        }
    })
});

//To save data
router.post('/saveData', function(req, res, next){
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error" : "bad data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
                res.send(task);

        })
    }
});

// To delete tasks using mongojs
router.delete("/task/:id", function(req, res, next){
    db.tasks.remove({_id : mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.snd(err);
        } else {
            res.json(task);
        }
    });
  
});

// To delete tasks using mongojs
router.put("/task/:id", function(req, res, next){
    var task = req.body;
    var updateTask = {};
    if(task.isDone){
        updateTask.isDone = task.isDone;
    }

    if(task.title){
        updateTask.title = task.title;
    }

    if(!updateTask){
        res.send(400);
        res.json({"error" : "Bad data"});
     } else {
     db.tasks.update({_id : mongojs.ObjectId(req.params.id)}, updateTask, {},function(err, task){
        if(err){
            res.snd(err);
        } else {
            res.json(task);
        }
    });
     }
   
  
});

module.exports= router; 