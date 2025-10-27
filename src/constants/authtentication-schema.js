import * as z from "zod";

export const SignUp = z
  .object({
    name: z
      .string()
      .min(5, { error: "Name should have at least 5 characters" })
      .max(50, { error: "Name should not exceed 50 characters" }),
    email: z.email({ error: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { error: "Password should contain at least 8 characters" })
      .regex(/[A-Z]/, {
        error: "Password should include at least one upper case letter",
      })
      .regex(/[a-z]/, {
        error: "Password should include at lease one lower case letter",
      })
      .regex(/[0-9]/, {
        error: "Password should include at least one numeric character",
      })
      .regex(/[@!$%*?&]/, {
        error:
          "Passowrd should include at least one special characters(@!$%*?&)",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Password and confirmed password don't match",
  });

export const SignIn = z.object({
  email: z.email({ error: "Enter a valid email" }),
  password: z
    .string()
    .min(8, { error: "Password should be of at least 8 characters long" }),
});
