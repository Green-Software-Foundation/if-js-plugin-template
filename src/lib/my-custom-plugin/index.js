const { PluginFactory } = require('@grnsft/if-core/interfaces');

const MyCustomPlugin = PluginFactory({
  configValidation: (config) => {
    // Perform config validation here or use a zod schema

    return config;
  },
  inputValidation: (input) => {
    // Perform input validation here or use a zod schema

    return input;
  },
  implementation: async (inputs, config) => {
    const { yourValue } = config;

    return inputs.map((input) => {
      // Your logic here
      yourValue;

      return input;
    });
  },
});

module.exports = { MyCustomPlugin };
