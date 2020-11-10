import React from 'react'
import PortfolioCard from './PortfolioCard'
import fork from '../images/fork.png'

// images
import mibrews from '../images/portfolio/mi-brews.png'
import yelpcamp from '../images/portfolio/yelp-camp.png'
import myreads from '../images/portfolio/my-reads.png'


export default function Portfolio() {

  let projects = [
    {name: "my-brews",
    summary: "Displays data from Foursquare api and google maps api.",
    description: "MyBrews! It's intended as a challenge to put together a website in react, using multiple APIs. This includes making function calls to Google Maps and other location-based services like Foursquare. The app allows you to filter the list down as you type. In return, it displays the locations on the map. Heck, the icons even bounce like you expect them to. There's also extra info pulled from the Foursquare API where available. This includes website images, ratings, and phone numbers. The app is responsive, too! It resizes using CSS Flexbox and media queries.",
    github: "https://github.com/robertjallen/mi-brews",
    image: mibrews,
    skills: ["React", "Axios", "Google-Maps"],
    role: "WEB DESIGNER / DEVELOPER",
    date: "APRIL 2016",
    features: "A single page application featuring a map of a neighborhood. Including highlighted locations, third-party data about those locations and various ways to browse the content. I spent some time on the design on this project since it seemed scaleable and easily replicatable with other subjects. React Router was used to allow the use to vistit each location while remaining a single page app.",
    overlay: "1",
    },

    {name: "yelp-camp",
    summary: "A FULL-STACK NODE.JS PROJECT TO DISPLAY CAMPGROUNDS.",
    description: "A review site for campgrounds where users can log in to give descriptions of the places they have gone to camp and share their experiences with other users. It has a lot of other features",
    github: "https://github.com/robertjallen/yelp-camp-demo",
    image: yelpcamp,
    skills: ["React", "Node", "Mongo"],
    role: "WEB DESIGNER / DEVELOPER",
    date: "Septempber 2016",
    features: "Users can login with passport.js for proper authentication. New users are able securely sign up, login , create campgrounds etc. Lastly was adding flash messages for better error handling especially during authentication.",
    overlay: "2",
    },
    {name: "my-reads",
    summary: "SELECT AND CATEGORIZE BOOKS AS YOU HAVE READ, ARE CURRENTLY READING, OR WANT TO READ.",
    description: "My Reads: The foremost objective of this project was to design and develop a web app where users can search and categorize books into categories.",
    github: "https://github.com/robertjallen/reactnd-project-myreads-starter",
    image: myreads,
    skills: ["React", "React-router", "JS"],
    role: "WEB DESIGNER / DEVELOPER",
    date: "April 2017",
    features: "Each Book in a shelf has a drop-down that can be used to move the books to different shelves. New books can be searched by clicking on a button on the main page of the application. The user is redirected to a new page and the corresponspnding URL is changed. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets the user add the book to the library. The search page also has a back arrow button to take the user back to the main page. The Route and Link components from react-router-dom have been used to handle the routing between the main page and the search page. Necessary checks have been implemented to handle cases where the book's thumbnail or author is empty, so that the app doesn't crash or throw errors. Functionality to move a book between various shelves has been implemented on both the main and the search page. It is also ensured that a book on a bookshelf, has the same state on both the main application page and the search",
    overlay: "3",
    }
  ]


  return (
      <div className="portfolio" id="portfolio">
		    <h1 className="sections">Portfolio</h1>
        {projects.map(project => {
          return <PortfolioCard project={project}/>
        })}
      </div>
  )
}
