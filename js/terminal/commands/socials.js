export default {
  name: 'socials',
  description: 'Returns a list of my socials.',
  execute: async (terminal, args) => {
    const socials = {
      'GitHub': 'https://github.com/MartinPJB',
      'Drupal': 'https://www.drupal.org/u/martinpjb',
      'LinkedIn': 'https://www.linkedin.com/in/martin-brönnimann/',
      'martin.bronnimann.pj@gmail.com': 'mailto:martin.bronnimann.pj@gmail.com'
    };

    terminal.printLn('Here are my socials:', true);
    for (const [name, url] of Object.entries(socials)) {
      terminal.printLn(`- <a href="${url}" target="_blank">${name}</a>`, true);
    }
  }
}