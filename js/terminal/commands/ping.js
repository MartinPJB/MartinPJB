// I know, it's not a real ping command, but at least I don't have to deal with CORS issues.
export default {
  name: 'ping',
  description: 'Pings a website.',
  arguments: [
    {
      name: 'website',
      description: 'Website to ping',
      optional: false,
      type: 'string'
    }
  ],
  execute: async (terminal, args) => {
    if (args.length === 0) return terminal.printLn('Please specify a website to ping.');

    let website = args[0];
    if (!website.includes('http') && !website.includes('https')) website = `http://${website}`;
    terminal.printLn(`Pinging ${website}... `);

    // Fake a ping
    const timeout = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
      terminal.printLn(`${website} responded in ${timeout}ms`);
    }, timeout);
  }
}