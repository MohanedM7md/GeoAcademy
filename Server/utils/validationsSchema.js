// Desc: This file contains all the validation schema for the application

// Validation schema for authentication-related fields
const authValidationSchema = {
    userName: {
        notEmpty: {
            errorMessage: 'userName should not be empty'
        },
        isLength: {
            errorMessage: 'userName should be at least 3 chars long',
            options: { min: 3 }
        },
        isString: {
            errorMessage: 'userName should be all string'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'password should not be empty'
        },
        isLength: {
            errorMessage: 'password should be at least 6 chars long',
            options: { min: 6 }
        }
    },
    email: {
        notEmpty: {
            errorMessage: 'email should not be empty'
        },
        isEmail: {
            errorMessage: 'email should be valid'
        }
    },
    phone: {
        notEmpty: {
            errorMessage: 'phone should not be empty'
        },
        isLength: {
            errorMessage: 'phone should be at least 11 chars long',
            options: { min: 11, max: 11 } // Fixed the options object
        },
        isNumeric: {
            errorMessage: 'phone should be all numeric'
        }
    },
    year:{
        notEmpty:{
            errorMessage:"Year can't be empty",
        },
        isLength:{
            errorMessage: 'year should be at least 4 chars long',
            options: { min: 4, max: 4 } // Fixed the options object
        },
        isNumeric: {
            errorMessage: 'phone should be all numeric'
        }
    }

}

// Validation schema for sign-Up
export const signUpSchema = {
    firstName: authValidationSchema.userName,
    middleName: authValidationSchema.userName,
    lastName: authValidationSchema.userName,
    email: authValidationSchema.email,
    userPhone: authValidationSchema.phone,
    parentPhone: authValidationSchema.phone,
    password: authValidationSchema.password,
    year: authValidationSchema.year
}

// Validation schema for login
export const loginSchema = {
    email: authValidationSchema.email,
    password: authValidationSchema.password
}