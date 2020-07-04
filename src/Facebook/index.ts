import extractor from  "./extractor"
import { handleNewDownload } from "../actions"

const videoURL = window.location.href;
let videoID = "Download"
try {
  videoID = window.location.pathname.split("/").filter(el => el)[2]
}
catch (e) {
  console.log(e.message)
}
const handleLow = () => {
  extractor.low(videoURL).then(({ url }) => {
    const download =  {
      filename: videoID + ".mp4",
      url
    }
    handleNewDownload(download)
  });
}

const handleHigh = () => {
  extractor.high(videoURL).then(({ url }) => {
    const download =  {
      filename: videoID + ".mp4",
      url
    }
    handleNewDownload(download)

  });
}

let downloadBtn = document.createElement("div")
downloadBtn.classList.add("fb-download-button")
downloadBtn.innerHTML = `
  <button>
    <i class="fa fa-arrow-down fa-lg"></i>
  </button>
  <ul>
    <li>HD</li>
    <li>Normal Quality</li>
  </ul>
`

downloadBtn.querySelector("button").onclick = () => {
  downloadBtn.querySelector("ul").classList.toggle("active")
}
downloadBtn.querySelector("ul li:nth-child(1)").onclick = handleHigh
downloadBtn.querySelector("ul li:nth-child(2)").onclick = handleLow

window.onload = () => {
  document.querySelector("div").appendChild(downloadBtn)
  // const locationInterval = setInterval(() => {
  //   if ((/http[s]?:\/\/www.facebook.\s+\/\d+\/videos\/\d+/gi).test(window.location.href)) {
  //     console.log("Changed")
  //   }
  // }, 250)
}
