import React from "react"
import memesData from "../memesData.js"


function Meme() {

  const [memeImage, setMemeImage] = React.useState("");

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
    const randomMemeUrl = memesData.data.memes[randomIndex].url;

    setMemeImage(randomMemeUrl)
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

            <img src={memeImage} alt="meme" className="meme-image" />
        </div>
    </main>
  )
}

export default Meme
