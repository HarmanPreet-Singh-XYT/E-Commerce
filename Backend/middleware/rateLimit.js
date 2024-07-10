"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rate_limiter_flexible_1 = require("rate-limiter-flexible");
const rateLimiter = new rate_limiter_flexible_1.RateLimiterMemory({
    points: 20, // maximum number of requests allowed
    duration: 1, // time frame in seconds
});
const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => {
        // request allowed, 
        // proceed with handling the request
        next();
    })
        .catch(() => {
        // request limit exceeded, 
        // respond with an appropriate error message
        res.status(429).send('Too Many Requests');
    });
};
exports.default = rateLimiterMiddleware;
