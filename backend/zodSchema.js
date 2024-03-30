const { z } = require('zod');

// Define schema for user data
const userSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    phoneNo: z.string().min(10).max(10),
    password: z.string().min(8),
    confirmed: z.boolean().default(false),
});

// Validate user data
const userData = {
    email: 'example@example.com',
    name: 'John Doe',
    phoneNo: '1234567890',
    password: 'password123',
};

try {
    // Attempt to parse the user data using the schema
    const validatedUser = userSchema.parse(userData);
    console.log('Validated user:', validatedUser);
} catch (error) {
    // Handle validation errors
    console.error('Validation error:', error.errors);
}
