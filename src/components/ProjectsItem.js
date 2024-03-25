import { memes, minesweeper, spaceCAT} from '../assets'
import { FaHtml5, IoLogoJavascript, SiMongodb, FaPython, DiPostgresql, DiDjango } from "./SkillsIcons"

const projectsItems = [
    {
        id: 1,
        title: 'Minesweeper',
        image: minesweeper,
        description: 'Utilizing HTML, JavaScript, and CSS, I recreated a captivating Minesweeper game that challenges players to clear the board of hidden mines to achieve victory',
        icons: [FaHtml5, IoLogoJavascript],
        link: "https://project1-minesweeper.netlify.app/",
        githubLink: "https://github.com/Puzzles65/minesweeper/blob/main/README.md"
    },
    {
        id: 2,
        title: 'Memes',
        image: memes,
        description: 'This website allows users to share, create, and curate memes by submitting a URL and title for the meme. The platform is built using Node.js for the server-side and MongoDB to store the meme data. Instead of uploading files, users post memes through URLs, and the website displays them on the main page.',
        icons: [FaHtml5, IoLogoJavascript, SiMongodb],
        link: "https://project2-memes-20789d159558.herokuapp.com/",
        githubLink: "https://github.com/Puzzles65/project2-memes/blob/main/README.md"
    },
    {
        id: 3,
        title: 'SpaceCAT',
        image: spaceCAT,
        description: "This website allows users to explore, create, and modify albums featuring NASA's Astronomy Picture of the Day (APOD). Leveraging Python, SQL databases, and Django frameworks, we implemented the app's functionalities, making it easy for users to save and access their favorite space images without repeatedly calling the NASA API. I worked on CSS to enhance the website's visual appeal, and also implemented a location API for users to show their current location.",
        icons: [FaHtml5, FaPython, DiPostgresql, DiDjango],
        link: "https://space-cat.fly.dev/",
        githubLink: "https://github.com/Puzzles65/SpaceCAT/blob/main/README.md"
    }
]

export default projectsItems;