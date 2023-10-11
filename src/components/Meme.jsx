import React from "react"
import memesData from "../memesData.js"


function Meme() {

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
    const randomMemeUrl = memesData.data.memes[randomIndex].url;
    console.log(randomMemeUrl)
  }

  return (
    <main>
        <div className="form">
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
            />
            <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
            />
            <button
              className="form--button"
              onClick={getRandomMeme}
            >
            Get a new meme image 🖼
            </button>
        </div>
    </main>
  )
}

export default Meme
