export default {
  name: 'languages',
  description: 'Displays the languages I speak',
  execute: async (terminal, args) => {
    const languages = {
      'French': {
        level: 'Native',
        comment: 'I was born in France, so I speak French natively.'
      },
      'English': {
        level: 'Fluent',
        comment: 'I can speak English fluently, even though I can still have pronunciation issues.'
      },
      'German': {
        level: 'Notions',
        comment: 'I have notions of German, I like this language, but it\'s not the one I\'m focusing on the most right now.'
      },
      'Danish': {
        level: 'Notions',
        comment: 'I am currently learning Danish, I like this language, and I hope to be able to speak it fluently one day.'
      },
    };

    terminal.printLn('Here are the languages I speak:');
    for (const language in languages) {
      terminal.printLn(`- ${language} (${languages[language].level})`);
      terminal.printLn(`  ${languages[language].comment}`);
    }
  }
}