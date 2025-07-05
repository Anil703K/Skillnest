import React from 'react'
function Languages() {
  return (
    <div>
        <div className='Languages'>
        <h1>Available Programming Languages Notes PDFs</h1>
            <div className='boxs'>
                <div className='box'>
                    <h3>Python</h3>
                    <p>Beginner-friendly and powerful. Great for data science, web, automation, and more.</p>
                    <a href="/notes/python.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button> </a>
                </div>
                <div className='box'>
                <h3>JavaScript</h3>
                    <p>The language of the web. Learn DOM manipulation,APIs,frameworks.</p>
                    <a href="/notes/javascript.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button> </a>
                </div>
                <div className='box'>
               <div className='box'>
                    <h3>C Programming</h3>
                    <p>C is a powerful general-purpose programming language.  </p>
                    <a href="/notes/c.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button></a>
                </div>
                </div>
                <div className='box'>
                <h3>Java</h3>
                    <p>Widely used in enterprise, Android development, and backend systems.</p>
                   <a href="/notes/java.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button> </a>

                </div>
                <div className='box'>
                    <h3>CSS</h3>
                    <p>CSS styles web pages by controlling layout, colors, fonts, and spacing.</p>
                    <a href="/notes/css.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button></a>

                </div>
                <div className='box'>
                    <h3>HTML</h3>
                    <p>Build the structure and style of websites with semantic markup and elegant design.</p>
                    <a href="/notes/html.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">Notes</button> </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Languages;
