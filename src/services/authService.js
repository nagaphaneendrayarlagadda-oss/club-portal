const authService = {
  login: async (data) => {
    console.log("Login", data);
    return { success: true };
  },

  signup: async (data) => {
    console.log("Signup", data);
    return { success: true };
  },

  forgotPassword: async (email) => {
    console.log("Forgot Password", email);
    return { success: true };
  },

  resetPassword: async (password) => {
    console.log("Reset Password", password);
    return { success: true };
  },
};

export default authService;