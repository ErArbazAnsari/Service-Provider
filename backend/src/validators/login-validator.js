const { z } = require("zod");

// Define the schema for the user login
const loginSchema = z.object({
    email: z
        .string({ require_error: "Email is required" })
        .email({ message: "Invalid Email" }),
    password: z.string({ require_error: "Password is required" }).min(8, {
        message: "Password at least of 8 char",
    }),
});

module.exports = loginSchema;
