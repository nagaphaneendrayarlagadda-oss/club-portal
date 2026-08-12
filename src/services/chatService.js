const chatService = {
  sendMessage: async (message) => {
    return {
      response: "AI Response: " + message,
    };
  },
};

export default chatService;