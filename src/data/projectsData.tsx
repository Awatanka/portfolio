import GymImage from "../assets/gym-photo2.png";
import EaSportImage from "../assets/ea-sport.png";
import VanCity from "../assets/vancity.png";
import Rentsy from "../assets/rentsy.png";
import InStock from "../assets/inStock.png";
import Rhizone from "../assets/rhizone.png";
import Portfolio from "../assets/portfolio.png";
import Chrome from "../assets/chrome.png";
import Candy from "../assets/candy.png";
import Jack from "../assets/jack.png";
import Blog from "../assets/blog.png";
import Listify from "../assets/Listyfy.png";

export const projects = [
  {
    title: "The Gym",
    description: "Tech Stack: HTML, Sass, JavaScript, Public API",
    picBg: GymImage,
    summary: [
      "Implemented features to retrieve comment data from an API and display it on the webpage.",
      "Enabled users to add new comments, which are stored on the backend using the API.",
      "Utilized JavaScript DOM manipulation and the flexbox layout to dynamically generate and render concert data from a JavaScript array into the HTML content.",
      "Implemented comment like and delete functionality, allowing users to like comments through a ❤️ and delete buttons that trigger an API request and update the DOM accordingly.",
    ],
    details: "3 sprints, personal project, 3 weeks",
    git: "https://github.com/Awatanka/sport_club",
    web: "https://awatanka.github.io/sport_club/index.html",
  },
  {
    title: "Rentsy",
    description:
      "Tech Stack: React, JavaScript, Sass, Node.js, Express.js, Knex.js, MySQL, MUI, Bootstrap, Google Map API",
    picBg: Rentsy,
    summary: [
      "Rentsy is a website for rental house hunting that provides additional information to save you time and effort during your search. It offers details such as nearby dog parks and crime rates.",
      "This full-stack application was built using public APIs and Google APIs to enhance the user experience and provide comprehensive data for making informed rental decisions.",
    ],
    details:
      "Personal project, full-stack web application within a limited timeframe of 10 days",
    git: "https://github.com/Awatanka/rentsy-client",
    web: "https://drive.google.com/file/d/10Vhh1EmyNL7akdKi-zjoKID7TZMB7hhy/view?usp=sharing",
  },
  {
    title: "rhi.zone",
    description:
      "Tech Stack: React, TypeScript, MUI, Node, Jest, Docker, MySQL, Express",
    picBg: Rhizone,
    summary: [
      "Created a prototype and launched a new feature that was developed, tested, and launched in 2 months for the education management system with a team of 8 developers using the Scrum methodology.",
      "Collaborated on APIs and managed software workflow using the Scrum methodology, increasing task success rate by 25%. Wrote unit tests to detect bugs, increasing the efficiency rate by over 35%.",
    ],
    details:
      "Team of 8 developers, 3 sprints, 2 months, from product specification to 1 working prototype of the feature",
    git: "https://github.com/OpenTree-Education/rhizone-lms/pull/589",
    web: "https://github.com/OpenTree-Education/rhizone-lms/pull/589",
  },
  {
    title: "EA SharePlay",
    description: "Tech Stack: HTML, Sass, React, JavaScript",
    picBg: EaSportImage,
    summary: [
      "Participated in a cross-functional hackathon in partnership with Electronic Arts, where I contributed to a winning project that was recognized as the top solution out of 25 teams.",
      "Demonstrated strong communication and teamwork skills, collaborating effectively with a team of 3 developers and 3 UX designers.",
      "Developed a working prototype of the EA SharePlay feature within a 24-hour timeframe.",
    ],
    details:
      "Team of 3 developers and 3 UX designers, 24 hours, 1 working prototype of EA SharePlay feature",
    git: "https://github.com/Awatanka/405-found",
    web: "https://drive.google.com/file/d/1nxqowGsdoiPV7StZ5KMct5AEV0JUzQil/view?usp=sharing",
  },
  {
    title: "Vancity for U",
    description: "Tech Stack: HTML, CSS, Bootstrap",
    picBg: VanCity,
    summary: [
      "I developed the Vancouver Tourism Website using a combination of HTML5, CSS3, and JavaScript.",
      "During the development process, I recognized the pivotal role this project played in my skill development journey. Its unique concept and thoughtfully designed interface made it an invaluable learning experience.",
      "Through careful design and development, I aimed to capture the essence of Vancouver and offer users a seamless and intuitive browsing experience.",
    ],
    details: "Team of 3 developers, my first project, 2 weeks",
    git: "https://github.com/Awatanka/TechWoman",
    web: "https://awatanka.github.io/TechWoman/",
  },
  {
    title: "InStock",
    description:
      "Tech Stack: React, Sass, JavaScript, Node.js, Express.js, Knex.js, API",
    picBg: InStock,
    summary: [
      "InStock is an Agile project aimed at developing a comprehensive Inventory Management System. The project utilizes a modern front-end built with React and SCSS, which provides a seamless user experience. The front-end communicates with a resilient Express and Node.js back-end. The MySQL database serves as the primary data source, and interaction with the database is facilitated through the use of knex.js.",
    ],
    details:
      "Team of 3 developers, 1 week, 1 sprint, 1 working full-stack application",
    git: "https://github.com/Awatanka/instock-duncan",
    web: "https://github.com/Awatanka/instock-duncan",
  },
  {
    title: "Portfolio",
    description: "Tech Stack: React, Sass, TypeScript, MUI, Framer Motion",
    picBg: Portfolio,
    summary: [
      "I've carefully crafted this portfolio to impress and inspire. Whether you're a fellow developer seeking collaboration or an employer looking for top talent, my website reflects my dedication to excellence and my commitment to delivering exceptional results.",
    ],
    details: "Personal design, 2 weeks",
    git: "https://github.com/Awatanka/portfolio",
    web: "https://sokolova.ca/",
  },
];

export const miniProjects = [
  {
    stack: "HTML, CSS, JavaScript",
    description:
      "It offers a sleek user interface with a modern and intuitive design, improving the overall user experience. One of the key features of the extension is the ability to save leads. Users can manually enter leads or save the URL of the active tab with just a click. These leads are then stored in the extension's local storage, ensuring they are accessible even after closing the browser. User can export leads in two different formats: text and HTML. The text format provides a simple list of leads, while the HTML format offers a visually appealing table view with clickable links for easy navigation.",
    image: Chrome,
    imageLabel: "",
    title: "Chrome extention Snap Leads 2.0",
    href: "https://www.linkedin.com/posts/natalia-sokolova-_chromeextension-productivitytools-leadmanagement-activity-7079989051503640576-IC3i?utm_source=share&utm_medium=member_desktop",
    git: "https://github.com/Awatanka/chrome-extention-JS",
  },
  {
    stack: "HTML, CSS, JavaScript",
    description:
      "Candy Tracker - an app that combines my passion for web development with my love for my daughter. Created as a fun and interactive tool, Candy Tracker allows parents to monitor their child's candy consumption. To add a touch of whimsy, Candy Tracker features a charming candy-themed background image, creating a delightful experience.",
    image: Candy,
    imageLabel: "",
    title: "Candy Tracker",
    href: "https://candy-count.netlify.app/",
    git: "https://github.com/Awatanka/counter-JS",
  },
  {
    stack: "HTML, CSS, JavaScript",
    description:
      "Blackjack Game - a thrilling project that brings the excitement of the popular card game right to your screen. Step into the shoes of the player and test your luck. The game begins with two random cards dealt from the deck, and the sum of these cards is calculated. To keep things fair, the deck is generated using random numbers, ensuring an unpredictable gameplay experience. The game also includes logic to handle special cases, such as when an ace needs to be treated as 1 to avoid exceeding 21.",
    image: Jack,
    imageLabel: "BlackJack",
    title: "BlackJack",
    href: "https://blackjack-js-awatan.netlify.app/",
    git: "https://github.com/Awatanka/blackjack-JS",
  },
  {
    stack: "HTML, CSS, JavaScript, Firebase",
    description:
      "Using Firebase, I built a simple shopping list application. Working with Firebase was a breeze, thanks to its comprehensive JavaScript SDK and intuitive documentation.",
    image: Listify,
    imageLabel: "App",
    title: "Listify",
    href: "https://listify-me.netlify.app/",
    git: "https://github.com/Awatanka/shopping-list",
  },
  {
    stack: "React, Redux, TypeScript",
    description:
      "Switches are commonly used UI elements for toggling between two states, such as turning a feature on or off. However, it is important to ensure that these elements are accessible to all users, including those with disabilities. The use of TypeScript in the project also helped to enforce type checking and improve the overall robustness of the codebase. This blog post will provide a practical guide to developing an accessible switch component in React with TypeScript.",
    image: Blog,
    imageLabel: "Blog",
    title:
      "A Practical Guide to Developing an Accessible Toggle Button Component in React on medium.com",
    href: "https://medium.com/@natalia.sokolova.ca/a-practical-guide-to-developing-an-accessible-toggle-button-component-in-react-3d3638c2f135",
  },
];
