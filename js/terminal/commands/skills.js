export default {
  name: 'skills',
  description: 'Shows my skillset.',
  arguments: [
    {
      name: 'type',
      description: 'soft|hard - Displays either my soft skills or my hard skills.',
      optional: false,
      type: 'string'
    }
  ],
  execute: async (terminal, args) => {
    const hardSkills = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'MySQL', 'Lua', 'NodeJS', 'Deno', 'Rust', 'Git', 'Figma', 'ElectronJS'];
    const softSkills = ['Adaptative', 'Autonomous', 'Curious', 'Open-minded', 'Dedicated'];

    if (args.length === 0) return terminal.printLn('Please specify a skill type to display (<b>soft</b> or <b>hard</b>).', true);

    const type = args[0];
    terminal.printLn(`Here are my ${type} skills:`, true);

    switch (type) {
      case 'soft':
        for (const skill of softSkills) {
          terminal.printLn(`- ${skill}`, true);
        }
        break;

      case 'hard':
        for (const skill of hardSkills) {
          terminal.printLn(`- ${skill}`, true);
        }
        break;

      default:
        terminal.printLn(`Invalid skill type '${type}'. Please specify either <b>soft</b> or <b>hard</b>.`, true);
        break;
    }
  }
}