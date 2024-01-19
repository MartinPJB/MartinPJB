export default {
  name: 'help',
  description: 'Displays the list of available commands. Type \'help command_name\' to get informations about a specific command.',
  arguments: [
    {
      name: 'command',
      description: 'To get more information about a specific command.',
      optional: true,
      type: 'string'
    }
  ],
  execute: async (terminal, args) => {
    const commands = ["projects", "about_me", "languages", "socials", "skills", "ping", "help"];

    if (!args.length) {
      terminal.printLn('Here are the available commands:', true);
      for (const commandName of commands) {
        const command = import(`./${commandName}.js`);
        const commandDescription = (await command).default.description;
        const commandArguments = (await command).default.arguments ?? [];

        const parsedArguments = commandArguments.map(argument => {
          const optional = argument.optional ? '' : '<span class="required">*</span>';
          return ` <span class="terminal-argument">&lt;${argument.name}&gt;${optional}</span>`;
        });

        terminal.printLn(`- ${commandName}${parsedArguments.join(" ")} - ${commandDescription}`, true);
      }
    }

    else {
      try {
        const command = import(`./${args[0]}.js`);
        const commandDescription = (await command).default.description;
        const commandArguments = (await command).default.arguments ?? [];

        terminal.printLn(`Informations about the command '${args[0]}':`, true);
        terminal.printLn(`- Description: ${commandDescription}`, true);

        if (commandArguments.length === 0) return terminal.printLn(`- Arguments: None`, true);

        terminal.printLn(`- Arguments:`, true);
        for (const argument of commandArguments) {
          const optional = argument.optional ? '' : '<span class="required">*</span>';
          terminal.printLn(`  - <span class="terminal-argument">${argument.name}${optional}</span> - ${argument.description} (type: ${argument.type})`, true);
        }
      } catch (e) {
        return terminal.printLn(`Command '${args[0]}' not found... Try 'help' to see the available commands.`, true);
      }
    }
  }
}