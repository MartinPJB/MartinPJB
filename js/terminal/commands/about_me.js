export default {
  name: 'about_me',
  description: 'Explains who I am and what I do in life',
  execute: async (terminal, args) => {
    terminal.printLn('My name is Martin, and I am currently studying web development and lots of others things in Alsace in order to eventually become a Back End Web Developer. I am planning to acquire skills and experience in the field of web development via work-study or internships in order to make it my job.', true);
  }
}