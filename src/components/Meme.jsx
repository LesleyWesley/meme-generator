import React from "react"
import memesData from "../memesData.js"


function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "one does not simply",
    bottomText: "walk into mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect( () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length)
    const randomMemeUrl = allMemeImages[randomIndex].url;

    setMeme(meme => ({
      ...meme,
      randomImage: randomMemeUrl
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  return (
    <main>
        <div className="form">
            <input
              type="text"
              placeholder="Top text"
              className="form--input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button
              className="form--button"
              onClick={getRandomMeme}
            >
            Get a new meme image 🖼
            </button>

            <div className="meme">
              <img src={meme.randomImage} className="meme--image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        </div>
    </main>
  )
}

export default Meme
