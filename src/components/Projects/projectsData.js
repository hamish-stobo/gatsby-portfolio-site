const projectsData = [
    {
      id: Math.round(Math.random() * 100),
      img: 'roomieLandingPage.png',
      title: 'rOOmie',
      info: 'This app was built to make finding a flat or advertising for a spare room in a flat a seamless, easy process. The app provides an instagram-like experience for users to see listed adverts, and have a profile page where they can list their contact info.',
      info2: 'The app is built on an Express API (connecting to a PostgreSQL database) with React on the Frontend. Heroku was used for deployment, along with their Postgres database add-on. Auth is handled using JWT cookies, using the \'jsonwebtoken\' package from NPM',
      url: 'http://r00mie.herokuapp.com',
      repo: 'https://github.com/hamish-stobo/roomie', // if no repo, the button will not show up
    },
    {
      id: Math.round(Math.random() * 100),
      img: 'helpingHands.png',
      title: 'Helping Hands',
      info: 'This app was built as part of Hack the Crisis: New Zealand (hackathon). It is a platform that connects volunteers with at-risk community members, so that they can have groceries or vital medicine delivered.',
      info2: 'This app was built with a TypeScript Express API (connecting to a PostgreSQL database) and React Frontend in a monorepo. The entire project is contained in one repository and deployed to Heroku.',
      url: 'https://helping-hands-nz.herokuapp.com/',
      repo: 'https://github.com/hamish-stobo/helping-hands', // if no repo, the button will not show up
    },
    {
      id: Math.round(Math.random() * 100),
      img: 'WalkLand.png',
      title: 'WalkLand',
      info: 'This app offers Aucklander’s the opportunity to explore their own backyard. the opportunity the beauty that Auckland has to provide. Users can sign up, view hikes around Auckland on a map, and leave ratings & reviews on hikes they have completed.',
      info2: 'This app was built with a React frontend, connecting to an Express API with a PostgreSQL database. Unit testing was done with Jest, and end-to-end testing was done with Nightwatch.',
      url: 'http://walkland-app.herokuapp.com/',
      repo: 'https://github.com/hamish-stobo/WalkLand', // if no repo, the button will not show up
    },
    {
      id: Math.round(Math.random() * 100),
      img: 'craigPortfolio.png',
      title: 'Client Portolio Site',
      info: 'This is a static portfolio website, built as to showcase this person\'s Curriculum Vitae.',
      info2: 'This website is built on the front-end framework VueJS.',
      url: 'https://www.craigstobo.com/',
      repo: 'https://github.com/hamish-stobo/craig-portfolio-website', // if no repo, the button will not show up
    },
    {
      id: Math.round(Math.random() * 100),
      img: 'snakeGame.png',
      title: 'Classic Snake Game',
      info: 'This is the classic snake game, built to explore game development.',
      info2: 'This is a static website built using vanilla JavaScript.',
      url: 'https://trusting-visvesvaraya-36671d.netlify.app/',
      repo: 'https://github.com/hamish-stobo/snake', // if no repo, the button will not show up
    }
  ]
export default projectsData