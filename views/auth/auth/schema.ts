export const loginUserSchema = {
    email: {
        placeholder: "Enter user email",
        validation: {
            required: "Email is required!",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: "Email must be a valid @gmail.com address!",
            },
        },
    
    },
    password: {
        placeholder: "Enter user password",
        validation: {
            required: "Password is required!",
        },
    }

}
export const registerUserSchema = {
   name: {
        placeholder: "Enter user name",
        validation: {
            required: "Name is required!",
        },
    },
    email: {
        placeholder: "Enter user email",
        validation: {
            required: "Email is required!",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                message: "Email must be a valid @gmail.com address!",
            },
        },
    
    },
    password: {
        placeholder: "Enter user password",
        validation: {
            required: "Password is required!",
        },
    }

}