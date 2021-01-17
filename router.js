const parser = require('body-parser');

function start(req, res) {

    let userdata = {};
    if(req.session.userdata){
        userdata = req.session.userdata;
    }
    res.render('contact', userdata)
}

let getContactdata = function (req, res) {
    console.log(req.body);

    if (!req.session.userdata){
        req.session.userdata = {};
    }

    req.session.userdata.name = req.body.Name;
    req.session.userdata.email = req.body.Email;
    req.session.userdata.message = req.body.Message;

    start(req, res);
};


exports.start = start;
exports.getContactdata = getContactdata;


