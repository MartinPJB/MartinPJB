class Terminal {
  /**
   * Initialize a new terminal
   *
   * @param {string} id Id of the terminal element in the DOM
   */
  constructor(id) {
    this.terminal = document.getElementById(id);
    this.input = null;

    this.setElements();
    this.start();
    this.handleInput();
  }

  /**
   * Sets the terminal basic elements
   */
  setElements() {
    // Creates the ul
    const ul = document.createElement('ul');
    ul.classList.add('terminal-ul');
    this.terminal.appendChild(ul);

    // Creates the input
    const li = document.createElement('li');
    ul.appendChild(li);

    const input = document.createElement('input');
    input.classList.add('terminal-input');
    input.setAttribute('type', 'text');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');

    // Sets the input
    this.input = input;

    li.appendChild(input);
  }

  /**
   * Start the terminal
   */
  start() {
    const date = new Date();
    const ymd = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
    };

    this.printLn(`███╗   ███╗ █████╗ ██████╗ ████████╗██╗███╗   ██╗██████╗     ██╗██████╗
████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██║████╗  ██║██╔══██╗    ██║██╔══██╗
██╔████╔██║███████║██████╔╝   ██║   ██║██╔██╗ ██║██████╔╝    ██║██████╔╝
██║╚██╔╝██║██╔══██║██╔══██╗   ██║   ██║██║╚██╗██║██╔═══╝██   ██║██╔══██╗
██║ ╚═╝ ██║██║  ██║██║  ██║   ██║   ██║██║ ╚████║██║    ╚█████╔╝██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚═╝     ╚════╝ ╚═════╝
Version 1.0.0 (1/18/2024 - ${ymd.m}/${ymd.d}/${ymd.y})

Welcome to my terminal! Type 'help' to see the available commands.`, true);
  }

  /**
   * Handles the input of the terminal
   */
  handleInput() {
    this.input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        // Enter key pressed
        const value = this.input.value;
        this.input.value = '';

        this.printLn(value);
        this.processInput(value);
      }
    });
  }

  /**
   * Process the input of the terminal and execute the command
   *
   * @param {string} value Input value
   */
  async processInput(value) {
    try {
      const commandName = value.split(' ')[0];
      const args = value.split(' ').slice(1);

      const command = await import(`./commands/${commandName}.js`);
      command.default.execute(this, args);
    } catch (e) {
      this.printLn(`Command '${value}' not found... Try 'help' to see the available commands.`, true);
    }
  }

  /**
   * Print a message to the terminal
   *
   * @param {string} message Message to print
   */
  printLn(message, nomb = false) {
    const ul = this.terminal.querySelector('.terminal-ul');
    const li = document.createElement('li');
    li.innerHTML = message;

    if (nomb) li.classList.add('no-mb');

    // Append the message to the terminal before the input
    ul.insertBefore(li, ul.querySelector('.terminal-input').parentNode);



    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
  }
}

export default Terminal;