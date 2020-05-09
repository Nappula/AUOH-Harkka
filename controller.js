const parameter_model = require('./model');


// HELPERS

const parameter_data = (req) => {
    let data = {
        ToolName: req.body.ToolName,
        Material: req.body.Material,
        CuttingSpeed: req.body.CuttingSpeed,
        FeedRate: req.body.FeedRate

    };
    return data;
};

// CREATE
const api_post_machining_parameter_set = (req, res, next) => {
    console.log('api_post_machining_parameter_set');
    let data = parameter_data(req);

    let new_parameter = parameter_model(data);

    new_parameter.save().then(() => {
        console.log(new_parameter);
        res.send(JSON.stringify(new_parameter));
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });

};

// READ
const api_get_machining_parameter_sets = (req, res, next) => {
    console.log('api_get_machining_parameter_sets');

    parameter_model.find({})
        .lean()
        .then(parameters => {
            res.send(JSON.stringify(parameters));
        }).catch(err => {
            res.status(500);
            res.send(err.errmsg);
            console.log(err);
        });
};

// READ :id

// GET :id


const api_get_machining_parameter_set = (req, res, next) => {
    console.log('api_get_machining_parameter_set :id');
    let id = req.params.id;


    parameter_model.findById(id)
        .lean()
        .then(parameters => {
            res.send(JSON.stringify(parameters));
        }).catch(err => {
            res.status(500);
            res.send(err.errmsg);
            console.log(err);
        });
};




/*
const api_get_machining_parameter_set = (req, res, next) => {
    console.log('api_get_machining');
    let id = req.params.id;
    let data = machining_data(req);
    parameter_model.findOne(id, data, {
        new:true
    }).then((machining) => {
        res.send(JSON.stringify(machining));
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });
};

*/



//app.get("/api/machining-parameter-set/:id", controller.api_get_machining_parameter_set)
// parameter_model.findByIdAndRemove(id).then(() => {









// UPDATE
//PUT /api/material/5e877016c4bd517bd8ef178a
const api_put_machining_parameter_set = (req, res, next) => {
    console.log('api_put_machining_parameter_set');
    let id = req.params.id;
    let data = parameter_data(req);

    parameter_model.findByIdAndUpdate(id, data, {
        new: true
    }).then((parameter) => {
        res.send(parameter);
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });

};

// DELETE
// DELETE /api/material/5e877016c4bd517bd8ef178a
const api_delete_machining_parameter_set = (req, res, next) => {
    let id = req.params.id;


    parameter_model.findByIdAndRemove(id).then(() => {
        res.send();
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });
};


// EXPORTS
module.exports.api_post_machining_parameter_set = api_post_machining_parameter_set;
module.exports.api_get_machining_parameter_sets = api_get_machining_parameter_sets;
module.exports.api_put_machining_parameter_set = api_put_machining_parameter_set;
module.exports.api_delete_machining_parameter_set = api_delete_machining_parameter_set;
module.exports.api_get_machining_parameter_set = api_get_machining_parameter_set;