import React from 'react'
import './portfolio.css'
import IMAGE1 from '../../assets/portfolio1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import IMAGE3 from '../../assets/portfolio3.jpg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMAGE1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/1667315-Crypto-currency-dashboards-and-financial-data-visualization'
  },  
  {
    id: 2,
    image: IMAGE2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16580766-Origon-UI-kit-Charts-templates-&-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMAGE3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMAGE4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMAGE5,
    title: 'Charts templates and infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16541289-Orion-UI-kit-Charts-templates-and-infographics-in-figma'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-buttons'>
                {/* eslint-disable-next-line */}
                  <a href={github} className='btn' target='_blank'>Github</a>
                {/* eslint-disable-next-line */}
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>

  )
}

export default Portfolio