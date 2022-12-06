const ccIcons = [
  'devicon-android-plain',
  'devicon-java-plain',
  'devicon-git-plain',
  'devicon-docker-plain',
]

export default [
  {
    title1: 'devjobs',
    title2: '',
    type: 'Full-stack web app',
    description: () => {
      return (
        <>
          The devjobs website is a fictional job board based on a design from{' '}
          <a
            href="https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l"
            target="_blank"
            rel="noopener noreferrer"
            title="www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l"
          >
            {' '}
            frontendmentor.com.
          </a>
          his multipage site is single React.js application that utilized React
          Router dynamically generate the individual job pages. The back end API
          is built using node.js, expess, and MongoDB to serve the CRUD
          functions.
        </>
      )
    },
    imgName: 'img-devjobs.jpg',
    liveURL: 'https://thorrellt.github.io/devjobs/',
    gitURL: 'https://github.com/thorrellt/devjobs',
    takeaways: [
      {
        title: 'Dynamic Routing',
        content:
          'I learned how to implement dynamic URL segments. This allowed me to access data as a parameter in order to generate the contents of a page.',
      },
      {
        title: 'Server Deployment',
        content:
          'I learned how to deploy a server on Heroku by using their CLI in combination with Git',
      },
      {
        title: 'Client Server Interactions via HTTP',
        content:
          'Strengthened knowledge of client-server interactions as a result of building an end-to-end product.',
      },
    ],
    stackIcons: [
      {
        title: 'ReactJS',
        className: 'devicon-react-original',
      },
      {
        title: 'Node.js',
        className: 'devicon-nodejs-plain',
      },
      {
        title: 'Express',
        className: 'devicon-express-original',
      },
      {
        title: 'MongoDB',
        className: 'devicon-mongodb-plain',
      },
    ],
  },
  {
    title1: 'Pay',
    title2: 'API',
    type: 'Website',
    description: () => {
      return (
        <>
          The PayAPI website is the home for a fictional web API based on a
          design from{' '}
          <a
            href="https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e"
            target="_blank"
            rel="noopener noreferrer"
            title="www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e"
          >
            {' '}
            frontendmentor.com.
          </a>
          This multipage site is single React.js application that utilized React
          Router to change pages.
        </>
      )
    },
    imgName: 'img-payapi.jpg',
    liveURL: 'https://thorrellt.github.io/PayAPI/',
    gitURL: 'https://github.com/thorrellt/PayAPI',
    takeaways: [
      {
        title: 'React Router',
        content:
          'I learned React Router v6 and implemented it to manage the navigation of the multiple pages on this site.',
      },
      {
        title: 'Form with Controlled Components',
        content:
          'The form on the Contacts page was built with controlled components that use one state object as the single source of truth.',
      },
      {
        title: 'Shared & Conditionally Rendered Components',
        content:
          'To increase re-usability, there are some shared components, assets, and layout choices that are conditionally rendered where needed.',
      },
    ],
    stackIcons: [
      {
        title: 'ReactJS',
        className: 'devicon-react-original',
      },
      {
        title: 'HTML 5',
        className: 'devicon-html5-plain',
      },
      {
        title: 'CSS 3',
        className: 'devicon-css3-plain',
      },
      {
        title: 'JavaScript',
        className: 'devicon-javascript-plain',
      },
    ],
  },
  {
    title1: 'Care',
    title2: 'Corner',
    type: 'Android Application',
    description: () => {
      return (
        <>
          Care Corner is an Android application that served as the senior team
          project for my CS degree. This prototype served as my team's proof of
          concept for our application designed to increase the user's safety
        </>
      )
    },
    imgName: 'img-cc.jpg',
    gitURL: 'https://github.com/thorrellt/care-corner',
    takeaways: [
      {
        title: 'Android Development',
        content:
          'Taught myself Android development independent of class curriculum.',
      },
      {
        title: 'API Integration',
        content: 'Integrated the HERE API to build our mapping features.',
      },
      {
        title: 'Leadership',
        content:
          'Served as the organizational head &amp; team lead of the project.',
      },
    ],
    stackIcons: [
      {
        title: 'Android',
        className: 'devicon-android-plain',
      },
      {
        title: 'Java',
        className: 'devicon-java-plain',
      },
      {
        title: 'Version Control',
        className: 'devicon-git-plain',
      },
      {
        title: 'Docker',
        className: 'devicon-docker-plain',
      },
    ],
  },
  {
    title1: 'MC-311',
    title2: 'Notes Tool',
    type: 'Web Application',
    description: () => {
      return (
        <>
          This web tool was developed to aid Montgomery County, Maryland's 311
          phone number (MC 311) which serves as the main entry point for
          residents to access public information and government services. This
          application increases the speed and efficiency that the MC 311
          representatives can access info and handle calls by generating fleshed
          out notes, based on user inputs, and aggregating commonly accessed
          data.
        </>
      )
    },
    imgName: 'img-mc311.jpg',
    liveURL: 'https://thorrellt.github.io/mc311-tool/',
    gitURL: 'https://github.com/thorrellt/mc311-tool',
    takeaways: [
      {
        title: 'Bootstrap 5',
        content: 'This was my first solo project using Bootstrap 5 framework.',
      },
      {
        title: 'JavaScript Data Structure Manipulation',
        content:
          'This project provided plenty of practice manipulating JS data structures using their inherent methods.',
      },
      {
        title: 'Leveraging User Feedback',
        content:
          'I utilized peer/user to correct overlooked bugs, and better design the tool to cover a broader range of needs.',
      },
    ],
    stackIcons: [
      {
        title: 'Bootstrap-5',
        className: 'devicon-bootstrap-plain',
      },
      {
        title: 'HTML 5',
        className: 'devicon-html5-plain',
      },
      {
        title: 'CSS 3',
        className: 'devicon-css3-plain',
      },
      {
        title: 'JavaScript',
        className: 'devicon-javascript-plain',
      },
    ],
  },
  {
    title1: 'room',
    title2: 'Furniture Store',
    type: 'Website',
    description: () => {
      return (
        <>
          The room webpage is the landing page for a fictional furniture store.
          The design is from
          <a
            href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
            target="_blank"
            rel="noopener noreferrer"
            title="www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
          >
            {' '}
            frontendmentor.com.
          </a>{' '}
          The page is responsive and designed for screens as small as 375px. The
          arrows trigger a sliding animation that dynamically loads the next
          slide. The mouse wheel can also trigger this transition.
        </>
      )
    },
    imgName: 'img-room.jpg',
    liveURL: 'https://thorrellt.github.io/room/',
    gitURL: 'https://github.com/thorrellt/room',
    takeaways: [
      {
        title: 'React Transition Groups',
        content:
          'To animate the sliding animation from one component to the next, I had to learn and implement CSSTransitions and learn how to manage them with my existing states.',
      },
      {
        title: 'CSS Animations',
        content:
          'In addition to the React Transition Groups, I used CSS animations to achieve the sliding effect. To achieve the desired outcome, I learned how the two interacted, which included slowing the animation down and observing how the DOM reacted to the exchange of components and animations.',
      },
      {
        title: 'Responsive CSS Layouts',
        content:
          'The responsive layout required using both media queries, and state management based on the window width. Combining the flex layouts and absolute positions allowed me to complete the design and sliding animation effect.',
      },
    ],
    stackIcons: [
      {
        title: 'ReactJS',
        className: 'devicon-react-original',
      },
      {
        title: 'HTML 5',
        className: 'devicon-html5-plain',
      },
      {
        title: 'CSS 3',
        className: 'devicon-css3-plain',
      },
      {
        title: 'JavaScript',
        className: 'devicon-javascript-plain',
      },
    ],
  },
  {
    title1: 'Order',
    title2: 'Management API',
    type: 'REST API',
    description: () => {
      return (
        <>
          This is a basic Node.js RESTful API modeled after an order management
          system. This API handles GET, PATCH, PULL, & DELETE requests for
          Orders, Products, & Users. Data is stored in a MongoDB Atlas database.
        </>
      )
    },
    imgName: 'img-api.jpg',
    gitURL: 'https://github.com/thorrellt/care-corner',
    takeaways: [
      {
        title: 'Node.js',
        content:
          'Served as my intro to Node.js &sol; Express&apos; basic capabilities &amp; some of its related packages.',
      },
      {
        title: 'MongoDB',
        content:
          "Refined knowledge of NoSQL fundamentals & served as an intro to related tools such as MongoD's cloud platform Atlas, as well as both the Mongoose & Multer packages.",
      },
      {
        title: 'REST',
        content:
          'Learned the RESTful style of design / architecture as well as the constraints all REST services should adhere to.',
      },
    ],
    stackIcons: [
      {
        title: 'Node.js',
        className: 'devicon-nodejs-plain',
      },
      {
        title: 'JavaScript',
        className: 'devicon-javascript-plain',
      },
      {
        title: 'MongoDB',
        className: 'devicon-mongodb-plain',
      },
    ],
  },
]
