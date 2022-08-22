const ccIcons = ["devicon-android-plain", "devicon-java-plain", "devicon-git-plain", "devicon-docker-plain"]

export default [
    {
        title1: "Care",
        title2: "Corner",
        type: "Android Application",
        description: "Care Corner is an Android application that served as the senior team project for my CS degree. This prototype served as my team's proof of concept for our application designed to increase the user's safety",
        imgName: 'img-cc.jpg',
        gitURL: 'https://github.com/thorrellt/care-corner',
        takeaways: [
            {
                title: "Android Development",
                content: "Taught myself Android development independent of class curriculum."
            },
            {
                title: "API Integration",
                content: "Integrated the HERE API to build our mapping features."
            },
            {
                title: "Leadership",
                content: "Served as the organizational head &amp; team lead of the project."
            }],
        stackIcons: [
            {
                title: "Android",
                className: "devicon-android-plain",
            },
            {
                title: "Java",
                className: "devicon-java-plain",
            },
            {
                title: "Version Contro",
                className: "devicon-git-plain",
            },
            {
                title: "Docker",
                className: "devicon-docker-plain",
            }
        ]
    },
    {
        title1: "MC-311",
        title2: "Notes Tool",
        type: "Web Application",
        description: "This web tool was developed to aid Montgomery County, Maryland's 311 phone number (MC 311) which serves as the main entry point for residents to access public information and government services. This application increases the speed and efficiency that the MC 311 representatives can access info and handle calls by generating fleshed out notes, based on user inputs, and aggregating commonly accessed data.",
        imgName: 'img-mc311.jpg',
        liveURL: 'https://thorrellt.github.io/mc311-tool/',
        gitURL: 'https://github.com/thorrellt/mc311-tool',
        takeaways: [
            {
                title: "Bootstrap 5",
                content: "This was my first solo project using Bootstrap 5 framework."
            },
            {
                title: "JavaScript Data Structure Manipulation",
                content: "This project provided plenty of practice manipulating JS data structures using their inherent methods."
            },
            {
                title: "Leveraging User Feedback",
                content: "I utilized peer/user to correct overlooked bugs, and better design the tool to cover a broader range of needs."
            }],
        stackIcons: [
            {
                title: "Bootstrap-5",
                className: "devicon-bootstrap-plain",
            },
            {
                title: "HTML 5",
                className: "devicon-html5-plain",
            },
            {
                title: "CSS 3",
                className: "devicon-css3-plain",
            },
            {
                title: "JavaScript",
                className: "devicon-javascript-plain",
            }
        ]
    },
    {
        title1: "Order",
        title2: "Management API",
        type: "REST API",
        description: "This is a basic Node.js RESTful API modeled after an order management system. This API handles GET, PATCH, PULL, & DELETE requests for Orders, Products, & Users. Data is stored in a MongoDB Atlas database.",
        imgName: 'img-api.jpg',
        gitURL: 'https://github.com/thorrellt/care-corner',
        takeaways: [
            {
                title: "Node.js",
                content: "Served as my intro to Node.js &sol; Express&apos; basic capabilities &amp; some of its related packages."
            },
            {
                title: "MongoDB",
                content: "Refined knowledge of NoSQL fundamentals & served as an intro to related tools such as MongoD's cloud platform Atlas, as well as both the Mongoose & Multer packages."
            },
            {
                title: "REST",
                content: "Learned the RESTful style of design / architecture as well as the constraints all REST services should adhere to."
            }],
        stackIcons: [
            {
                title: "Node.js",
                className: "devicon-nodejs-plain",
            },
            {
                title: "JavaScript",
                className: "devicon-javascript-plain",
            },
            {
                title: "MongoDB",
                className: "devicon-mongodb-plain",
            }
        ]
    }
]
