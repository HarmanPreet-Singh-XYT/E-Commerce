import { checkSchema } from 'express-validator';
const userIDSchema = checkSchema({
    userID:{
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true
    }
},['body','params']);
const paymentCreationSchema = checkSchema({
    userID:{
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true
    },
    paymentid:{
        errorMessage: 'The paymentID must be provided',
        isString:true,
        isLength:{options:{min:1,max:255}},
        notEmpty:true,
        trim:true
    },
    paymentstatus:{
        errorMessage: 'The paymentStatus must be provided correctly',
        isString:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true
    }
},['body']);
export {userIDSchema,paymentCreationSchema}