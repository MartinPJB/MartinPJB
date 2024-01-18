export default {
  name: 'projects',
  description: 'Returns a list of GitHub repositories I have contributed to.',
  execute: async (terminal, args) => {
    const githubUsername = 'MartinPJB';
    const githubUrl = `https://api.github.com/users/${githubUsername}/repos`;

    terminal.printLn('Fetching projects...');
    const response = await fetch(githubUrl);
    const data = await response.json();

    console.log(data);

    terminal.printLn('Here are my projects:');
    for (const repo of data) {
      const url = repo.html_url;
      const name = repo.full_name;
      const description = repo.description ?? 'No description';
      const topics = repo.topics.length > 0 ? `[${repo.topics.join(', ')}] ` : '';
      const language = repo.language ?? 'Unknown language';

      terminal.printLn(`- <a href="${url}" target="_blank">${name}</a> - ${description} ${topics}(${language})`);
    }
  }
}