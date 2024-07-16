import { checkSchema } from "express-validator";
const userIDSchema = checkSchema({
    userID:{
        errorMessage: 'The userID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
},['body','params']);
const userTokenSchema = checkSchema({
    userIDToken:{
        errorMessage: 'The token must be provided',
        notEmpty:{bail:true},
        isJWT:{bail:true},
        escape:true,
    }
},['body']);

const AddressInsertSchema = checkSchema({
    userID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
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
    userName: {
        in: ['body'],
        errorMessage: 'The userName must be at least 4 characters',
        isLength: { options: { min: 4,max:64 } },
        escape:true,
        notEmpty:true,
        isString:true,
        trim:true
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
        isPostalCode: true,
        isString: true,
        notEmpty: true,
        escape:true,
        isLength:{options:{min:6,max:8}},
        trim:true,
        errorMessage: 'Postal code must be a non-empty string'
    },
});
const cartItemSchema = checkSchema({
    userID: {
        in: ['body'],
        isInt:true,
        errorMessage: 'The userID must be provided',
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:15}},
        errorMessage: 'The productID must be provided',
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    quantity: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:2}},
        errorMessage: 'The quantity must be provided',
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    sizeID: {
        in: ['body'],
        isInt:true,
        isLength:{options:{min:1,max:10}},
        errorMessage: 'The sizeID must be provided',
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    colorID: {
        in: ['body'],
        isInt:true,
        errorMessage: 'The colorID must be provided',
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
});
const cartActionSchema = checkSchema({
    userID: {
        in: ['body'],
        isInt:true,
        errorMessage: 'The user ID must be provided',
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    cartItemID: {
        in: ['body'],
        errorMessage: 'The cart item id must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
});
const wishlistActionSchema = checkSchema({
    userID: {
        in: ['body'],
        isInt:true,
        errorMessage: 'The wishlist item id must be provided',
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    wishlistItemID: {
        in: ['body'],
        isInt:true,
        errorMessage: 'The wishlist item id must be provided',
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    productID: {
        in: ['body'],
        errorMessage: 'The product id must be provided',
        isInt:true,
        isLength:{options:{min:1,max:15}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
});
const wishlistRemoveSchema = checkSchema({
    userID: {
        in: ['body'],
        errorMessage: 'The Wishlist ID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    },
    wishlistItemID: {
        in: ['body'],
        errorMessage: 'The Wishlist ID must be provided',
        isInt:true,
        isLength:{options:{min:1,max:10}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
});
const orderSchema = checkSchema({
    userIDToken: {
        in: ['params'],
        errorMessage: 'The token must be provided',
        notEmpty:{bail:true},
        isJWT:{bail:true},
        escape:true,
    },
    orderID: {
        in: ['params'],
        isInt:true,
        errorMessage: 'The OrderID must be provided',
        isLength:{options:{min:1,max:15}},
        notEmpty:true,
        isNumeric:true,
        trim:true,
        escape:true
    }
});

export {userIDSchema,userTokenSchema,AddressInsertSchema,cartActionSchema,cartItemSchema,wishlistActionSchema,wishlistRemoveSchema,orderSchema};