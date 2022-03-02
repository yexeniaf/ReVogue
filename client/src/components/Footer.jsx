import React from 'react'

export default function Footer() {
  return (
    <footer className=" fixed bottom-0 w-full mt-24 bg-lime-800">
      <div className='footer-content ml-2'>
        <div>
          &copy; Yexenia Flores 2022
        </div>
        <div className="social-media m-1">
          <div className="icons">
            <a href="https://github.com/yexeniaf" target="_blank">
              <img
                className="h-7 w-7 rounded"
                src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yexenia-flores/"
              target="_blank"
            >
              <img
                className="h-7 w-7 rounded"
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn icon"
              />
            </a>
          </div>
          </div>
      </div>
    </footer>
  )
}
