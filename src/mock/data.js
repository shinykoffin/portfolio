import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shinykoffin | Frontend developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, mi name is',
  name: 'Luis Luna',
  subtitle: "I'm a frontend developer focused on react.js",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hello, my name is Luis, I'm a front end web developer, I've always loved the Internet, I use to have little forums and blogs, I spendes my time tweking and changing the appearence using CSS and JS",
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'superchat.jpg',
    title: 'Super chat',
    info: 'A real time chat using React and Firebase!',
    info2:
      'This has simple funtions like, log-in with Google, an emoji picker, deleting messages and online users',
    url: '',
    repo: 'https://github.com/shinykoffin/superchat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SecretPokemon',
    info:
      'This one I did it to be part of a challenge in a dev community, it was plain HTML/CSS/Js but then I adpted it to React',
    info2:
      'Is simple, you enter your first name, your birth date and it will asing you a Pokemon, just simple and fun.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'StreamsLGBT',
    info:
      'So I build this app because I needed to showcase LGBT+ Twitch streamers in Spanish because a lot of people were asking about other LGBT people in Spanish Twitch.',
    info2: 'You can login with Twitch and ',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'luisluna.am@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/shinykoffin',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/shinykoffin',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luis-alfredo-moreno-luna-36643a192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shinykoffin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
