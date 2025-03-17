const { z } = require("zod");

// Define the schema for the user registration
const signUpSchema = z.object({
    username: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(3, { message: "Username at leat of 3 char" })
        .max(255, { message: "Username at most of 255 char" }),
    email: z.string({ require_error: "Email is required" }).email(),
    phone: z.string({ require_error: "Phone is required" }).min(10, {
        message: "Phone at leat of 10 char",
    }),
    password: z.string({ require_error: "Password is required" }).min(8, {
        message: "Password at leat of 8 char",
    }),
});

module.exports = signUpSchema;
