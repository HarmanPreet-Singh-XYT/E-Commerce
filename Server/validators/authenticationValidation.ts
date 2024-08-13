import { checkSchema } from 'express-validator'
const signUpSchema = checkSchema({
    userName: {
        errorMessage: 'The userName must be at least 4 characters',
        isLength: { options: { min: 4,max:64 } },
        escape:true,
        notEmpty:true,
        isString:true,
        trim:true
    },
    email: {
        errorMessage: 'The email must be at least 5 characters',
        isLength: { options: { min: 5,max:128 } },
        escape:true,
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
    mobile_number: {
        errorMessage: 'The number must be at least 10 digit and max 10 digit',
        isLength: { options: { min: 10,max:10 } },
        escape:true,
        notEmpty:true,
        isInt:true,
        isMobilePhone:true,
        trim:true
    },
    dob: {
        errorMessage: 'The number must be at least 10 digit and max 10 digit',
        isLength: { options: { min: 10,max:10 } },
        matches: { options: /[-]/ },
        escape:true,
        notEmpty:true,
        isString:true,
        isDate:true,
        trim:true
    },
    promotional:{
        errorMessage: 'The parameter must be either true or false',
        notEmpty:{bail:true},
        escape:true,
        isString:true,
        isLength:{options:{min:4,max:5}},
        trim:true
    }
},['body','params']);
const signInSchema = checkSchema({
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
    remember:{
        errorMessage: 'The parameter must be either true or false',
        notEmpty:{bail:true},
        escape:true,
        isString:true,
        isLength:{options:{min:4,max:5}},
        trim:true
    }
},['body','params']);
const tokenSchema = checkSchema({
    token:{
        errorMessage: 'The token must be provided',
        notEmpty:{bail:true},
        isJWT:{bail:true},
        escape:true,
    }
},['body']);
const googleAuthSchema = checkSchema({
    code:{
        errorMessage: 'The code must be provided',
        isString:true,
        exists:true,
        trim:true,
    }
},['body']);
const googleAuthSchemaNative = checkSchema({
    email:{
        errorMessage: 'The email must be provided',
        isString:true,
        exists:true,
        trim:true,
        isEmail:true,
        matches: { options: /[@]/ },
    }
},['body']);
export {signInSchema, signUpSchema, tokenSchema, googleAuthSchema, googleAuthSchemaNative}