import React from "react"
import memesData from "../memesData.js"


function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);


  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length)
    const randomMemeUrl = allMemeImages.data.memes[randomIndex].url;

    setMeme(meme => ({
      ...meme,
      randomImage: randomMemeUrl
    }))
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

            <img src={meme.randomImage} alt="meme" className="meme-image" />
        </div>
    </main>
  )
}

export default Meme
