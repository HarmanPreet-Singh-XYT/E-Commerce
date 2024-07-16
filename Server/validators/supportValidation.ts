import { checkSchema } from "express-validator";


const contactSchema = checkSchema({
    name: {
        in: ['body'],
        errorMessage: 'The userName must be at least 4 characters',
        isLength: { options: { min: 4,max:64 } },
        escape:true,
        notEmpty:true,
        isString:true,
        trim:true
    },
    email: {
        in: ['body'],
        isLength: { options: { min: 5,max:128 } },
        escape:true,
        isEmail:{bail:true},
        matches: { options: /[@]/ },
        notEmpty:true,
        isString:true,
        trim:true
    },
    phone: {
        in: ['body'],
        errorMessage: 'The number must be at least 10 digit and max 10 digit',
        isLength: { options: { min: 10,max:10 } },
        escape:true,
        notEmpty:true,
        isInt:true,
        isMobilePhone:true,
        trim:true
    },
    method: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        isIn: {
            options: [['email', 'phone']],
            errorMessage: 'Method must be one of: email, phone'
        },
        escape:true,
        errorMessage: 'Method must be a non-empty string'
    },
    message: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:0,max:1500}},
        escape:true,
        errorMessage: 'Message must be a non-empty string'
    }
});
export {contactSchema}