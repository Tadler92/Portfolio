const projects = {
  awardsDraft: {
    name: 'Movie Awards Draft',
    description: 'Capstone 1 Project for Springboard bootcamp.',
    url: 'https://awards-draft.onrender.com',
    gitURL: 'https://github.com/Tadler92/Capstone1-Awards-Draft',
    skills: [
      'Python - main programming language of site', 
      'Flask', 
      'Jinja - used to pass data from Python/server side to HTML templates/client side', 
      'PostgreSQL - database',
      'Bcrypt - used for security of the site',
      'WTForms - used with Flask to make forms more easily written and secure', 
      'SQLAlchemy - used with Flask to connect to database', 
      'JavaScript - used to create graphs on group pages',
      'HTML', 
      'CSS', 
      'Bootstrap', 
      'Font Awesome'
    ],
    paragraph1: `
      This project was my first capstone in the bootcamp I attended online.  The goal of the project was to make a site where users could come and compete with each other using movies released in a given year and the awards/awards shows those films were nominated for. To make this project, I had to use everything I learned in the course previously, and specifically had to use Python/Flask to build the site, and make calls to an external API for data that would be used on the site.
    `,
    paragraph3: `
      For this specific project, I did everything; I built it from the ground up.  I designed and re-designed the database layout/relationships.  I created specific data necessary to give point to films based on the awards they are nominated for and win, as well as relate those film-points to users who draft those films.  I made all the different routes and pages that a user will visit on the site (including the 404 page).  I set up all the forms, made all the page layouts, added all the page styles, created the navbar and footer and added the content to all the pages a user would visit.
    `,
    paragraph32: `
      Coding specific tasks I completed with this project are setting up the security of the site using Bcrypt for password hashing, and using Sessions to hold "currentUser" information that would then be checked against data that is in the database itself, or that has come from the database and is on the site.  I also created all the models using SQLAlchemy to connect to my database and get the data I needed in the various routes I created.  In my group pages, I use JavaScript to create a graph that shows a visual of who is winning in the group itself; I also used Javascript to limit both the amount of people who could join a group and the number of films a member could draft to 8.  As for data from an external API, a user can click on the title of a film (or type a film's title at the end of the url), and they'll be taken to the film's page where they'll see the film's title, rating, and poster which was requested and gotten from the Open Movie Database; it will also have a table showing any awards shows it was nominated at, the category it was nominated in, as well as if it won with the points it gets for each nomination/win, and that was data I had to create on my own.
    `
  },
  joblyFrontend: {
    name: 'React Jobly Frontend',
    description: 'Springboard Project creating a React frontend for a pre-made backend.',
    url: 'https://jobly-react-jfbk.onrender.com/',
    gitURL: 'https://github.com/Tadler92/Jobly-Frontend',
    skills: [
      'JavaScript - main programming language of site', 
      'React - Library used to build frontend design',
      'Axios -used to get data from backend to put on the site',
      'HTML', 
      'CSS', 
      'Bootstrap',
      'jwt-decode - used for security for the site'
    ],
    paragraph1: `
      This project was a bit of "further exercise" for students in the Springboard bootcamp learning React.  The goal of the project was to make a frontend for a site using React for a pre-made Node.js/Express.js backend; when completed, users could come to the site to search companies, sign in/login to search jobs, and "apply" to jobs. To make this project, I used all of the info I learned  from the React lessons we were taught, using things like useState, useEffect,and useContext.
    `,
    paragraph3: `
      For this this project, the focus was on making the frontend for a site users could visit to search and "apply" for jobs.  Using the backend routes that were already made and the (started) class model for making calls to the backend, I designed the layout and style of the site.  I made the different frontend routes and pages that a user will visit on the site (including the 404 page).  I set up all the forms and created the navbar.  I also added the content that I received from the requested data from the backend to all the pages a user would visit.
    `,
    paragraph32: `
      Coding specific tasks I completed with this project are adding static methods to a pre-setup class that made calls to the backend; in the new methods I created, they were all asynchronous and used axios to make the requests; these allowed for the rest of the site to have a bit cleaner code throughout.  I created a "PrivateRoutes" React component so that if the user on the site wasn't logged in or signed up and were trying to access certain client-side routes, they would be redirected to the Homepage.  Also, all of the other components to create the site were made by me (under the direction of instructions to set up those components); everything from Company and Job Cards (that had information about that respective data) to Form components (whether it was the SignUp, Search, or EditProfile forms) were created by me.  I even decided on the 3-color gradient for the background color for the site.
    `
  },
};


export default projects;