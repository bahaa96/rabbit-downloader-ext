import { isElement } from "../utils"
import downloadAllButton from "../components/DownloadAllBtn"
import downloadButton from "../components/HomeDownBtn"

export default () => {
    let oldThumbs = []
    const thumbnails = document.querySelectorAll("#content.ytd-playlist-video-renderer")
    oldThumbs = thumbnails
    const downloadAllBtn = downloadAllButton()
    const playlistID = new URLSearchParams(window.location.search).get("list")
  console.log(playlistID)
    downloadAllBtn.style.backgroundColor = "#FFA500"
    downloadAllBtn.style.color = "#fff"
    document.querySelector("#top-level-buttons.ytd-menu-renderer").parentNode.parentNode.style.position = "relative"
    document.querySelector("#top-level-buttons.ytd-menu-renderer").parentNode.appendChild(downloadAllBtn)
    for ( let thumbnail in thumbnails ) {
        const current = thumbnails[thumbnail]
        if (isElement(current)) {
          current.style.position = "relative"
          const hrefRegex = /ytd-grid-video-renderer|ytd-video-renderer|ytd-compact-video-renderer|ytd-grid-playlist-renderer|ytd-playlist-video-renderer/gi
          const anchorClass = current.classList.value.match(hrefRegex)[0]
          const videoID = new URLSearchParams(current.querySelector("a." + anchorClass).search).get("v")
          const downloadBtn = downloadButton(videoID)
          downloadBtn.style.marginBottom = "10px"
          current.appendChild(downloadBtn)
        }
    }
    // window.onscroll = () => {
    //     let thumbnails = document.querySelectorAll("#content.ytd-playlist-video-renderer")
    //     thumbnails = Array.from(thumbnails).filter(el => Array.from(oldThumbs).indexOf(el) === -1)
    //     if(thumbnails.length) {
    //         oldThumbs = [ ...oldThumbs, ...thumbnails]
    //         for ( let thumbnail in thumbnails ) {
    //             const current = thumbnails[thumbnail]
    //             if (isElement(current)) {
    //                 try {
    //                     if(!current.querySelector(".download-button")) {
    //                         current.style.position = "relative"
    //                         downloadBtn.setAttribute("href", current.parentNode.href+"Ahmed")
    //                         current.appendChild(downloadBtn.cloneNode(true))
    //                     }
    //                 }catch (e){
    //                     console.log(e)
    //                 }
    //             }
    //         }
    //     }
    //
    //
    // }
}