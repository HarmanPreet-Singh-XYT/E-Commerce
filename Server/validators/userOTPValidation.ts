import { checkSchema } from "express-validator";

const EmailSchema = checkSchema({
    email: {
        errorMessage: 'The email must be at least 5 characters',
        escape:true,
        isLength: { options: { min: 5,max:128 } },
        isEmail:{bail:true},
        matches: { options: /[@]/ },
        notEmpty:true,
        isString:true,
        trim:true
    },
});
const EmailPasswordOtpSchema = checkSchema({
    email: {
        errorMessage: 'The email must be at least 5 characters',
        escape:true,
        isLength: { options: { min: 5,max:128 } },
        isEmail:{bail:true},
        matches: { options: /[@]/ },
        notEmpty:true,
        isString:true,
        trim:true
    },
    password: {
        errorMessage: 'The password must be at least 8 characters',
        isLength: { options: { min: 8,max:32 } },
        escape:true,
        notEmpty:true,
        isString:true,
        trim:true
    },
    otp: {
        in: ['body'],
        isString:true,
        isLength: {
            options: { min: 4, max: 4 },
            errorMessage: 'OTP must be exactly 4 digits'
        },
        errorMessage: 'OTP must be a 4-digit integer'
    }
});

export {EmailSchema,EmailPasswordOtpSchema};