import { isElement } from "../utils"
import downloadAllButton from "../components/DownloadAllBtn"

export default () => {
    let oldThumbs = []
    const thumbnails = document.querySelectorAll("a#meta.ytd-grid-playlist-renderer")
    oldThumbs = thumbnails
    for ( let thumbnail in thumbnails ) {
        const current = thumbnails[thumbnail]
        if (isElement(current)) {
            downloadAllButton.setAttribute("href", current.href+"Ahmed")
            current.parentNode.appendChild(downloadAllButton.cloneNode(true))
        }
    }
    window.onscroll = () => {
        let thumbnails = document.querySelectorAll("a#meta.ytd-grid-playlist-renderer")
        thumbnails = Array.from(thumbnails).filter(el => Array.from(oldThumbs).indexOf(el) === -1)
        if(thumbnails.length) {
            oldThumbs = [ ...oldThumbs, ...thumbnails]
            for ( let thumbnail in thumbnails ) {
                const current = thumbnails[thumbnail]
                if (isElement(current)) {
                    try {
                        if(!current.querySelector(".download-all-button")) {
                            downloadAllButton.setAttribute("href", current.href+"Ahmed")
                            current.parentNode.appendChild(downloadAllButton.cloneNode(true))
                        }
                    }catch (e){
                        console.log(e)
                    }
                }
            }
        }


    }
}
