import { checkSchema } from 'express-validator';
const categorySchema = checkSchema({
    category: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        toUpperCase:true,
        isLength:{options:{min:3,max:50}},
        errorMessage: 'Category must be a non-empty string'
    }
});
const filterSchema = checkSchema({
    minPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Min Price must be a float'
    },
    maxPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Max Price must be a float'
    },
    categoryID: {
        in: ['params'],
        isInt: true,
        toInt: true,
        isLength:{options:{min:1,max:50}},
        errorMessage: 'Category ID must be an integer'
    },
    minRating: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        custom: {
            options: (value) => value >= 0 && value <= 5,
            errorMessage: 'Min Rating must be between 0 and 5'
        },
        errorMessage: 'Min Rating must be a float'
    },
    categoryName: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        toUpperCase:true,
        isLength:{options:{min:3,max:50}},
        errorMessage: 'Category Name must be a non-empty string'
    }
});
const getCategorySchema = checkSchema({
    categoryID: {
        in: ['params'],
        isInt: true,
        toInt: true,
        isLength:{options:{min:1,max:10}},
        errorMessage: 'Category ID must be an integer',
        escape:true
    },
    categoryName: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        toUpperCase:true,
        isLength:{options:{min:3,max:50}},
        errorMessage: 'Category Name must be a non-empty string',
        escape:true
    }
});
const getProductNameSchema = checkSchema({
    productName: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:1,max:200}},
        errorMessage: 'Product Name must be a non-empty string',
        escape:true
    }
});
const ProductFilterSchema = checkSchema({
    productName: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:3,max:200}},
        errorMessage: 'Product Name must be a non-empty string',
        escape:true
    },
    minPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Min Price must be a float',
        escape:true
    },
    maxPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Max Price must be a float',
        escape:true
    },
    rating: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        custom: {
            options: (value) => value >= 0 && value <= 5,
            errorMessage: 'Rating must be between 0 and 5'
        },
        errorMessage: 'Rating must be a float',
        escape:true
    }
});
const MainSubCategorySchema = checkSchema({
    mainCategory: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:3,max:50}},
        toUpperCase:true,
        errorMessage: 'Main Category must be a non-empty string',
        escape:true
    },
    subCategory: {
        in: ['params'],
        isString: true,
        notEmpty: true,
        isLength:{options:{min:3,max:50}},
        errorMessage: 'Sub Category must be a non-empty string',
        escape:true
    }
});
const categoryFilterSchema = checkSchema({
    categoryID: {
        in: ['params'],
        isInt: true,
        toInt: true,
        isLength:{options:{min:1,max:50}},
        errorMessage: 'Category ID must be an integer',
        escape:true
    },
    minPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Min Price must be a float',
        escape:true
    },
    maxPrice: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        errorMessage: 'Max Price must be a float',
        escape:true
    },
    rating: {
        in: ['params'],
        isFloat: true,
        toFloat: true,
        custom: {
            options: (value) => value >= 0 && value <= 5,
            errorMessage: 'Rating must be between 0 and 5'
        },
        errorMessage: 'Rating must be a float',
        escape:true
    }
});
export {categoryFilterSchema,categorySchema,getCategorySchema,MainSubCategorySchema,ProductFilterSchema,getProductNameSchema,filterSchema}