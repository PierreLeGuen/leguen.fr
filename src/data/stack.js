const type = [
  'Database',
  'Language',
  'Web Server',
  'Javascript UI Librarie',
  'Cloud Hosting',
  'CSS Pre-processor',
  'Operating System',
  'Platform as a Service',
  'Framework (Full Stack)',
  'Realtime Backend/API',
  'Microframework (Backend)',
  'Static Site Generator',
  'Code Collaboration & VCS',
  'Version Control System',
  'Virtual Machine Platforms and containers',
  'Text Editor',
  'Infrastructure as a service',
  'Continuous Integration',
  'JS Build Tool/JS Task Runner',
  'Javascript Compiler',
  'JS Testing Framework',
  'Project Management',
  'Group Chat & Notifications',
  'Self-Hosted Blogging / CMS', // 23
  'Query Languages',
  'JS MVC Framework',
  'Cloud Content Management System',
  'Command Language',
  'Templating Languages & Extensions',
  'Concurrency Framework',
  'Static Web Hosting', //30
  'JavaScript Framework Components' // 31
]

const groups = [
  {
    title: 'Languages',
    items: [
      {
        url: 'https://google.com',
        name: 'JavaScript',
        icon: 'javascript-original.svg',
        background: '#f0db4f',
        type: type[1],
        about: 'Lightweight, interpreted, object-oriented language with first-class functions'
      },
      {
        url: 'https://google.com',
        name: 'TypeScript',
        icon: 'typescript.svg',
        type: type[28],
        about: 'A superset of JavaScript that compiles to clean JavaScript output'
      },
      {
        url: 'https://google.com',
        name: 'C++',
        icon: 'cplusplus-original.svg',
        type: type[1],
        about:
          'Has imperative, object-oriented and generic programming features, while also providing the facilities for low level memory manipulation'
      },
      {
        url: 'https://google.com',
        name: 'Python',
        icon: 'python-original.svg',
        type: type[1],
        about:
          'Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.'
      },
      {
        url: 'https://google.com',
        name: 'Go',
        icon: 'go.svg',
        type: type[1],
        about:
          'An open source programming language that makes it easy to build simple, reliable, and efficient software'
      }
    ]
  },
  {
    title: 'Frameworks & Utilities',
    items: [
      {
        url: 'https://rxjs.dev/',
        name: 'RxJS',
        icon: 'rxjs.svg',
        type: type[29],
        about:
          'The Reactive Extensions for JavaScript is a library for reactive programming using Observables.'
      },
      {
        url: 'https://google.com',
        name: 'Mocha',
        icon: 'mocha-plain.svg',
        background: 'white',
        type: type[20],
        about: 'Simple, flexible, fun javascript test framework for node.js & the browser'
      },
      {
        url: 'https://google.com',
        name: 'Jest',
        icon: 'jest.svg',
        background: '#3b3738',
        type: type[20],
        about: 'Painless JavaScript Unit Testing'
      },
      {
        // tmp please
        url: 'https://google.com',
        name: 'Cypress',
        icon: 'cypress.svg',
        background: 'white',
        type: type[20],
        about: 'Better, faster, and more reliable testing for anything that runs in a browser.'
      },
      {
        url: 'https://google.com',
        name: 'Git',
        icon: 'git.svg',
        type: type[13],
        about: 'Fast, scalable, distributed revision control system'
      },
      {
        url: 'https://google.com',
        name: 'Webpack',
        icon: 'webpack-original.svg',
        type: type[18],
        about: 'A bundler for javascript and friends.'
      },
      {
        url: 'https://google.com',
        name: 'Contentful',
        icon: 'contentful.svg',
        type: type[26],
        about: 'Manage content once, publish it anywhere'
      },
      {
        url: 'https://google.com',
        name: 'Netlify',
        icon: 'netlify.svg',
        type: type[30],
        about:
          'Build, deploy and host your static site or app with a drag and drop interface and automatic delpoys from GitHub or Bitbucket'
      },
      {
        url: 'https://google.com',
        name: 'Github',
        icon: 'github.svg',
        background: 'white',
        type: type[12],
        about:
          'Powerful collaboration, review, and code management for open source and private development projects.'
      },
      {
        url: 'https://google.com',
        name: 'I ??? Linux',
        icon: 'linux-original.svg',
        type: type[6],
        about: 'My favorite OS'
      },
      {
        url: 'https://google.com',
        name: 'VSCode',
        icon: 'vscode-insiders.svg',
        type: type[15],
        about: 'Build and debug modern web and cloud applications.'
      },
      {
        url: 'https://google.com',
        name: 'VIM',
        icon: 'vim-original.svg',
        type: type[15],
        about: 'Highly configurable text editor built to enable efficient text editing'
      }
    ]
  },
  {
    title: 'Frontend',
    items: [
      {
        url: 'https://google.com',
        name: 'React',
        icon: 'react-original.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'A JavaScript library for building user interfaces'
      },
      {
        url: 'https://google.com',
        name: 'Redux',
        icon: 'redux.svg',
        background: '#1c1c1c',
        type: type[3],
        about: 'Predictable state container for JavaScript apps'
      },
      {
        url: 'https://google.com',
        name: 'Gatsby',
        icon: 'gatsby.svg',
        background: 'white',
        type: type[11],
        about: 'A Static Site Generator for React'
      },
      {
        url: 'https://google.com',
        name: 'Next.js',
        icon: 'next.jslogo.svg',
        background: 'white',
        type: type[8],
        about: 'A small framework for server-rendered universal JavaScript apps'
      },
      {
        url: 'https://google.com',
        name: 'Vue ?? Vuex ?? Nuxt.js',
        icon: 'vuejs.svg',
        type: type[3],
        about: 'Reactive Components for Modern Web Interfaces'
      },
      {
        url: 'https://google.com',
        name: 'Storybook',
        icon: 'storybook.svg',
        type: type[31],
        about: 'Build bulletproof UI components faster'
      },
      {
        url: 'https://google.com',
        name: 'Emotion',
        icon: 'emotioncss.png',
        type: type[31],
        about: 'The Next Generation of CSS in JS'
      },
      {
        url: 'https://google.com',
        name: 'Styled Components',
        icon: 'styled-components.png',
        background: 'white',
        type: type[31],
        about:
          'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.'
      }
    ]
  },
  {
    title: 'Backend',
    items: [
      {
        url: 'https://google.com',
        name: 'Node',
        icon: 'nodejs-original.svg',
        type: type[8],
        about:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
      },
      {
        url: 'https://google.com',
        name: 'Express',
        icon: 'express-original.svg',
        background: 'white',
        type: type[10],
        about: 'Infraestructura web r??pida, minimalista y flexible para Node.js'
      },
      {
        url: 'https://google.com',
        name: 'NestJS',
        icon: 'nestjs.svg',
        type: type[8],
        about:
          'A progressive Node.js framework for building efficient and scalable server-side applications'
      },
      //{ url: 'https://google.com', name: 'Django', icon: 'django-original.svg', background: '#003a2b', type: type[8], about: "The Web framework for perfectionists with deadlines" },
      {
        url: 'https://google.com',
        name: 'MySQL',
        icon: 'mysql-original-wordmark.svg',
        background: 'white',
        type: type[0],
        about: "The world's most popular open source database"
      },
      {
        url: 'https://google.com',
        name: 'MongoDB',
        icon: 'mongodb-original.svg',
        background: '#40474f',
        type: type[0],
        about: 'The database for giant ideas'
      },
      {
        url: 'https://google.com',
        name: 'PostgreSQL',
        icon: 'postgresql-original.svg',
        type: type[0],
        about: 'A powerful, open source object-relational database system'
      },
      //{ url: 'https://google.com', name: 'Flask', icon: 'flask.jpg', background: 'white', type: type[10], about: "A microframework for Python based on Werkzeug, Jinja 2 and good intentions." },
      {
        url: 'https://google.com',
        name: 'GraphQL',
        icon: 'graphql.svg',
        type: type[24],
        about: 'A data query language and runtime'
      },
      {
        url: 'https://google.com',
        name: 'Apollo',
        icon: 'apollo.svg',
        type: type[7],
        background: 'white',
        about: 'GraphQL server for Express, Connect, Hapi, Koa and more'
      },
      {
        url: 'https://google.com',
        name: 'Firebase',
        icon: 'firebase.png',
        background: '#039be6',
        type: type[9],
        about: 'The Realtime App Platform'
      },
      {
        url: 'https://serverless.com/',
        name: 'Serverless',
        icon: 'serverless.svg',
        background: '#1e1e1e',
        type: type[9],
        about: 'The most widely-adopted toolkit for building serverless applications'
      }
    ]
  },
  {
    title: 'DevOps',
    items: [
      {
        url: 'https://google.com',
        name: 'Docker',
        icon: 'docker.svg',
        background: 'white',
        type: type[14],
        about:
          'An open source project to pack, ship and run any application as a lightweight container'
      },
      {
        url: 'https://google.com',
        name: 'AWS',
        icon: 'amazonwebservices-original-wordmark.svg',
        background: 'white',
        type: type[16]
      },
      {
        url: 'https://google.com',
        name: 'Heroku',
        icon: 'heroku.svg',
        type: type[7],
        about:
          'Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience.'
      },
      {
        url: 'https://google.com',
        name: 'Apache',
        icon: 'apache-original-wordmark.svg',
        background: 'white',
        type: type[2]
      },
      {
        url: 'https://google.com',
        name: 'Travis CI',
        icon: 'travis.svg',
        type: type[17],
        about: 'A hosted continuous integration service for open source and private projects'
      },
      {
        url: 'https://google.com',
        name: 'Circle CI',
        icon: 'circleci.svg',
        background: 'white',
        type: type[17],
        about:
          'CircleCI???s continuous integration and delivery platform helps software teams rapidly release code with confidence.'
      },
      {
        url: 'https://google.com',
        name: 'Bash',
        icon: 'bash.svg',
        type: type[27],
        about: 'Bourne Again SHell.'
      }
    ]
  }
]

export default groups
