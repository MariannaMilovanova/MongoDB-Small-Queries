//first task
db.grades.find({
    "scores": {
        $elemMatch: {
            "score": {
                $gt: 87,
                $lt: 93
            }
        }
    }
}).pretty();

//second tast
db.grades.aggregate({
    $unwind: "$scores"
}, {
    $match: {
        "scores.type": "exam",
        "scores.score": {
            $gt: 90
        }
    }
}).pretty();

//third task
db.grades.find({
    "name": "Dusti Lemmond"
}).forEach(function(student) {
    db.grades.update({
        _id: student._id
    }, {
        $set: {
            "accepted": true
        }
    });
});
db.grades.find({
    "name": "Dusti Lemmond"
}).pretty();
