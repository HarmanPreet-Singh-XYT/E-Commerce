import { checkSchema } from 'express-validator';
const orderCreationSchema = checkSchema({
    userid: {
        in: ['body'],
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productid: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    colorid: {
        in: ['body'],
        errorMessage: 'The colorid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    sizeid: {
        in: ['body'],
        errorMessage: 'The sizeid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const orderCreationSchema2 = checkSchema({
    userid: {
        in: ['body'],
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productid: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    colorid: {
        in: ['body'],
        errorMessage: 'The colorid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    sizeid: {
        in: ['body'],
        errorMessage: 'The sizeid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    paymentid: {
        in: ['body'],
        errorMessage: 'The paymentID must be provided',
        isLength:{options:{min:1,max:255}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    paymentStatus: {
        in: ['body'],
        errorMessage: 'The paymentStatus must be provided correctly',
        isString:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const OrderIDSchema = checkSchema({
    orderID: {
        in: ['params'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:15}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const checkoutSchema = checkSchema({
    productid: {
        in: ['params'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    sizeid: {
        in: ['params'],
        errorMessage: 'The sizeid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    colorid: {
        in: ['params'],
        errorMessage: 'The colorid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    }
});
const createPaymentIntent = checkSchema({
    item: {
        in: ['body'],
        errorMessage: 'The productid must be provided correctly',
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
    }
});
export {orderCreationSchema,orderCreationSchema2,checkoutSchema,OrderIDSchema,createPaymentIntent}