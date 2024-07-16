import { checkSchema } from "express-validator";
const customValidation = (value:any, { req, location, path }:{req:any,location:any,path:any}) => {
    if (value === 'false') {
        return true; // Skip validation if 'false'
    }
    return value; // Continue with other validations if not 'false'
};

const userUpdateSchema = checkSchema({
    userName: {
        in: ['body'],
        custom: {
            options: customValidation
        },
        isLength: { options: { min: 4, max: 64 } },
        escape: true,
        optional: { options: { nullable: true, checkFalsy: true } },
        isString: true,
        notEmpty: true,
        trim: true,
        errorMessage: 'The userName must be at least 4 characters'
    },
    email: {
        in: ['body'],
        custom: {
            options: customValidation
        },
        isLength: { options: { min: 5, max: 128 } },
        escape: true,
        isEmail: { bail: true },
        matches: { options: /[@]/ },
        notEmpty: true,
        isString: true,
        optional: { options: { nullable: true, checkFalsy: true } },
        trim: true,
        errorMessage: 'The email must be at least 5 characters'
    },
    password: {
        in: ['body'],
        custom: {
            options: customValidation
        },
        isLength: { options: { min: 8, max: 32 } },
        escape: true,
        notEmpty: true,
        isString: true,
        optional: { options: { nullable: true, checkFalsy: true } },
        trim: true,
        errorMessage: 'The password must be at least 8 characters'
    },
    mobile_number: {
        in: ['body'],
        custom: {
            options: (value) => {
                if (value === 'false') {
                    return true; // Skip validation if 'false'
                } else if (/^\d{10}$/.test(value)) {
                    return true; // Valid 10-digit number
                }
                return false;
            },
            errorMessage: 'Mobile number must be either "false" or a valid 10-digit number'
        },
        optional: { options: { nullable: true, checkFalsy: true } },
        trim: true
    },
    dob: {
        in: ['body'],
        custom: {
            options: customValidation
        },
        isDate: true,
        optional: { options: { nullable: true, checkFalsy: true } },
        trim: true,
        errorMessage: 'The date of birth must be a valid date'
    },
    userID: {
        in: ['body'],
        custom: {
            options: customValidation
        },
        isInt: true,
        isLength: { options: { min: 1, max: 10 } },
        notEmpty: true,
        isNumeric: true,
        trim: true,
        errorMessage: 'The userID must be provided and valid'
    }
});
const AddressUpdateSchema = checkSchema({
    userID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    addressID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true,
        errorMessage:'Address ID must be provided'
    },
    addressType: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:4,max:4}},
        trim:true,
        errorMessage: 'Address type must be a non-empty string'
    },
    contactNumber: {
        in: ['body'],
        errorMessage: 'The number must be at least 10 digit and max 10 digit',
        isLength: { options: { min: 10,max:10 } },
        escape:true,
        notEmpty:true,
        isInt:true,
        isMobilePhone:true,
        trim:true
    },
    addressLine1: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:2,max:128}},
        trim:true,
        errorMessage: 'address must be a non-empty string'
    },
    addressLine2: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        optional:true,
        isLength:{options:{min:2,max:128}},
        trim:true,
        errorMessage: 'address must be a non-empty string'
    },
    city: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:2,max:60}},
        trim:true,
        errorMessage: 'City must be a non-empty string'
    },
    state: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:2,max:16}},
        trim:true,
        errorMessage: 'State must be a non-empty string'
    },
    country: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:2,max:56}},
        trim:true,
        errorMessage: 'Country must be a non-empty string'
    },
    postalCode: {
        in: ['body'],
        isPostalCode: {
            options: 'IN', // Change this to the appropriate locale
            errorMessage: 'Invalid postal code format'
        },
        isInt:true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:6,max:8}},
        trim:true,
        errorMessage: 'Postal code must be a non-empty string'
    },
    userName: {
        in: ['body'],
        errorMessage: 'The userName must be at least 4 characters',
        isLength: { options: { min: 4,max:64 } },
        escape:true,
        notEmpty:true,
        isString:true,
        trim:true
    },
});
const insertAddressSchema = checkSchema({
    addressType: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 4, max: 4 } },
        trim: true,
        errorMessage: 'Address type must be a non-empty string'
    },
    contactNumber: {
        in: ['body'],
        isLength: { options: { min: 10, max: 10 } },
        escape: true,
        notEmpty: true,
        isInt: true,
        isMobilePhone: {
            options: 'any',
            errorMessage: 'The number must be a valid 10-digit mobile number'
        },
        trim: true
    },
    addressLine1: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 2, max: 128 } },
        trim: true,
        errorMessage: 'Address Line 1 must be a non-empty string'
    },
    addressLine2: {
        in: ['body'],
        isString: true,
        optional: true,
        escape: true,
        isLength: { options: { min: 2, max: 128 } },
        trim: true,
        errorMessage: 'Address Line 2 must be a non-empty string'
    },
    city: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 2, max: 60 } },
        trim: true,
        errorMessage: 'City must be a non-empty string'
    },
    state: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 2, max: 16 } },
        trim: true,
        errorMessage: 'State must be a non-empty string'
    },
    country: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 2, max: 56 } },
        trim: true,
        errorMessage: 'Country must be a non-empty string'
    },
    postalCode: {
        in: ['body'],
        isPostalCode: {
            options: 'IN',
            errorMessage: 'Invalid postal code format'
        },
        notEmpty: true,
        escape: true,
        isLength: { options: { min: 6, max: 8 } },
        trim: true,
        errorMessage: 'Postal code must be a non-empty string'
    },
    userName: {
        in: ['body'],
        isLength: { options: { min: 4, max: 64 } },
        escape: true,
        notEmpty: true,
        isString: true,
        trim: true,
        errorMessage: 'The userName must be at least 4 characters'
    },
    userID: {
        in: ['body'],
        isInt: true,
        isLength: { options: { min: 1, max: 10 } },
        notEmpty: true,
        isNumeric: true,
        trim: true,
        escape: true
    },
});
const defaultUpdateSchema = checkSchema({
    addressID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true,
        errorMessage: 'Address ID must be an integer'
    },
    userID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true,
        errorMessage: 'User ID must be an integer'
    }
});
const cartQtyUpdate = checkSchema({
    cartItemID:{
        in:['body'],
        errorMessage: 'The cartitemid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    productID:{
        in:['body'],
        errorMessage: 'The productid must be provided correctly',
        isInt:true,
        toInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        trim:true,
        escape:true
    },
    userID:{
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true,
        errorMessage: 'User ID must be an integer'
    },
    action:{
        in: ['body'],
        isString:true,
        isLength:{options:{min:9,max:9}},
        notEmpty:true,
        trim:true,
        escape:true,
        custom: {
            options: (value) => value ==='increment' || value ==='decrement',
            errorMessage: 'value must be increment or decrement'
        },
        errorMessage: 'User ID must be an integer'
    }
})
export {defaultUpdateSchema,AddressUpdateSchema,insertAddressSchema,userUpdateSchema,cartQtyUpdate}