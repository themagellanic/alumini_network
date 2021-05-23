const jwtService = require('../services/jwt.service');

function verify(req, res, next) {
    let token = req.body.token || req.body.query || req.headers['x-access-token'];
    if(token) {
        // verify token
        try {
            console.log('jwt');

            req.decoded = jwtService.decode(token);
            next();
        }
        catch(err) {
            console.log(token);
            
            console.log(err);
            res.status(200).json({ success : false, message  : 'Token invalids.' })
        }
    } else {
        res.status(200).json({ success : false, message : 'No token provided.' });
    }
}

module.exports = {
    verify
}

