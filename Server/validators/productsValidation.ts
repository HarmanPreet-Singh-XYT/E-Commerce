import { checkSchema } from 'express-validator';
const productIDSchema = checkSchema({
    productID: {
        in: ['params'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const createReviewSchema = checkSchema({
    userID: {
        in: ['body'],
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productID: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    rating: {
        in: ['body'],
        isFloat:true,
        toFloat:true,
        errorMessage: 'Rating must be an integer',
        custom: {
            options: (value) => value >= 1 && value <= 5,
            errorMessage: 'Rating must be between 1 and 5'
        }
    },
    title: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:2,max:50}},
        escape:true,
        errorMessage: 'Title must be a non-empty string'
    },
    comment: {
        in: ['body'],
        isString: true,
        isLength:{options:{min:2,max:500}},
        optional: true, // Allow comment to be optional
        errorMessage: 'Comment must be a string',
        escape:true,
    }
});

const editReviewSchema = checkSchema({
    reviewID: {
        in: ['body'],
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    userID: {
        in: ['body'],
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productID: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    rating: {
        in: ['body'],
        isFloat:true,
        toFloat:true,
        errorMessage: 'Rating must be an integer',
        custom: {
            options: (value) => value >= 1 && value <= 5,
            errorMessage: 'Rating must be between 1 and 5'
        }
    },
    title: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:2,max:50}},
        errorMessage: 'Title must be a non-empty string',
        escape:true,
    },
    comment: {
        in: ['body'],
        isString: true,
        isLength:{options:{min:2,max:500}},
        optional: true, // Allow comment to be optional
        errorMessage: 'Comment must be a string',
        escape:true,
    }
});
const deleteReviewSchema = checkSchema({
    reviewID: {
        in: ['body'],
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    userID: {
        in: ['body'],
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productID: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const getReviewSchema = checkSchema({
    productID: {
        in: ['params'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
export {getReviewSchema,deleteReviewSchema,editReviewSchema,createReviewSchema,productIDSchema};