export default {
  name: 'about_me',
  description: 'Explains who I am and what I do in life',
  execute: async (terminal, args) => {
    terminal.printLn('Even though I used to study web development and even wanted to earn my bread from it, I decided to just quit it and become a security guard instead as programming didn\'t entertain me as much as it did before. Even though I don\'t earn as much as a programmer, I\'m pretty happy with what I\'m currently doing. I still like programming but let\'s say it\'s just a hobby now! Beep boop computers.', true);
  }
}