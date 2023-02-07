import { v4 as uuidv4 } from 'uuid'

const projectsData = [
    {
      id: uuidv4(),
      img: '',
      title: 'SafeStack',
      info: 'SafeStack is an online training platform that provides cybersecurity training for organisations and individuals.',
      info2: 'I am responsible for developing the web platform\'s front-end, built on Nuxt JS and Tailwind CSS, the GraphQL API, and the GoLang backend and Postgres database.',
      infoButton: {
        label: 'More Info',
        url: 'safestack.io',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'learn.safestack.io',
        disabled: false
      },
    },
    {
      id: uuidv4(),
      img: 'roomieLandingPage.png',
      title: 'rOOmie',
      info: 'This app was built to make finding a flat or advertising for a spare room in a flat a seamless, easy process. The app provides an instagram-like experience for users to see listed adverts, and have a profile page where they can list their contact info.',
      info2: 'The app is built on an Express API (connecting to a PostgreSQL database) with React on the Frontend. Heroku was used for deployment, along with their Postgres database add-on. Auth is handled using JWT cookies, using the \'jsonwebtoken\' package from NPM',
      
      url: 'http://r00mie.herokuapp.com',
      repo: 'https://github.com/hamish-stobo/roomie', // if no repo, the button will not show up
      disabled: true,
    },
    {
      id: uuidv4(),
      img: 'helpingHands.png',
      title: 'Helping Hands',
      info: 'This app was built as part of Hack the Crisis: New Zealand (hackathon). It is a platform that connects volunteers with at-risk community members, so that they can have groceries or vital medicine delivered.',
      info2: 'This app was built with a TypeScript Express API (connecting to a PostgreSQL database) and React Frontend in a monorepo. The entire project is contained in one repository and deployed to Heroku.',
      url: 'https://helping-hands-nz.herokuapp.com/',
      repo: 'https://github.com/hamish-stobo/helping-hands', // if no repo, the button will not show up
      disabled: true,
    },
    {
      id: uuidv4(),
      img: 'WalkLand.png',
      title: 'WalkLand',
      info: 'This app offers Aucklander’s the opportunity to explore their own backyard. the opportunity the beauty that Auckland has to provide. Users can sign up, view hikes around Auckland on a map, and leave ratings & reviews on hikes they have completed.',
      info2: 'This app was built with a React frontend, connecting to an Express API with a PostgreSQL database. Unit testing was done with Jest, and end-to-end testing was done with Nightwatch.',
      url: 'http://walkland-app.herokuapp.com/',
      disabled: true,
      repo: 'https://github.com/hamish-stobo/WalkLand', // if no repo, the button will not show up
    },
    {
      id: uuidv4(),
      img: 'craigPortfolio.png',
      title: 'Client Portolio Site',
      info: 'This is a static portfolio website, built as to showcase this person\'s Curriculum Vitae.',
      info2: 'This website is built on the front-end framework VueJS.',
      disabled: true,
      url: 'https://www.craigstobo.com/',
      repo: 'https://github.com/hamish-stobo/craig-portfolio-website', // if no repo, the button will not show up
    },
    {
      id: uuidv4(),
      img: 'TypeScriptTodo.png',
      title: 'Todo List App',
      info: 'This is the classic \'Hello World\' of web apps, built to learn TypeScript. Add, edit and remove todo items.',
      info2: 'By using local storage, the list of todos persists when the browser is refreshed.',
      disabled: true,
      url: 'https://unruffled-allen-dedad1.netlify.app',
      repo: 'https://github.com/hamish-stobo/typescript-todo-app', // if no repo, the button will not show up
    },
    {
      id: uuidv4(),
      img: 'snakeGame.png',
      title: 'Classic Snake Game',
      info: 'This is the classic snake game, built to explore game development.',
      info2: 'It\'s built with vanilla javascript and is a static website.',
      disabled: true,
      url: 'https://trusting-visvesvaraya-36671d.netlify.app/',
      repo: 'https://github.com/hamish-stobo/snake', // if no repo, the button will not show up
    }
  ]
export default projectsData