import { v4 as uuidv4 } from 'uuid'

const projectsData = [
    {
      id: uuidv4(),
      img: 'SafeStack.png',
      title: 'SafeStack',
      info: 'SafeStack is an online platform that provides cybersecurity training for organisations and individuals.',
      info2: 'I am responsible for developing the front-end built on Nuxt JS and Tailwind CSS, the GraphQL API, the GoLang backend, and the PostgreSQL database.',
      infoButton: {
        label: 'More Info',
        url: 'https://safestack.io/',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'https://learn.safestack.io/',
        disabled: false
      },
    },
    {
      id: uuidv4(),
      img: 'roomieLandingPage.png',
      title: 'rOOmie',
      info: 'This app was built to make finding a flat or advertising for a spare room in a flat a seamless, easy process. The app provides an instagram-like experience for users to see listed adverts, and have a profile page where they can list their contact info.',
      info2: 'The app is built on an Express API (connecting to a PostgreSQL database) with React on the Frontend. Heroku was used for deployment, along with their Postgres database add-on. Auth is handled using JWT cookies, using the \'jsonwebtoken\' package from NPM',
      infoButton: {
        label: 'See Code',
        url: 'https://github.com/hamish-stobo/roomie',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'http://r00mie.herokuapp.com',
        disabled: true
      },
    },
    {
      id: uuidv4(),
      img: 'helpingHands.png',
      title: 'Helping Hands',
      info: 'This app was built as part of Hack the Crisis: New Zealand (hackathon). It is a platform that connects volunteers with at-risk community members, so that they can have groceries or vital medicine delivered.',
      info2: 'This app was built with a TypeScript Express API (connecting to a PostgreSQL database) and React Frontend in a monorepo. The entire project is contained in one repository and deployed to Heroku.',
      infoButton: {
        label: 'See Code',
        url: 'https://github.com/hamish-stobo/helping-hands',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'https://helping-hands-nz.herokuapp.com/',
        disabled: true
      },
    },
    {
      id: uuidv4(),
      img: 'TypeScriptTodo.png',
      title: 'Todo List App',
      info: 'This is the classic \'Hello World\' of web apps, built to learn TypeScript. Add, edit and remove todo items.',
      info2: 'By using local storage, the list of todos persists when the browser is refreshed.',
      infoButton: {
        label: 'See Code',
        url: 'https://github.com/hamish-stobo/typescript-todo-app',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'https://unruffled-allen-dedad1.netlify.app',
        disabled: false
      },
    },
    {
      id: uuidv4(),
      img: 'snakeGame.png',
      title: 'Classic Snake Game',
      info: 'This is the classic snake game, built to explore game development.',
      info2: 'It\'s built with vanilla javascript and is a static website.',
      infoButton: {
        label: 'See Code',
        url: 'https://github.com/hamish-stobo/snake',
        disabled: false
      },
      liveButton: {
        label: 'See Live',
        url: 'https://trusting-visvesvaraya-36671d.netlify.app/',
        disabled: false
      },
    },
  ]
export default projectsData