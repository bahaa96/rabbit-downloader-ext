import { isElement } from "../utils"

import downloadButton from "../components/HomeDownBtn"


export default () => {
    let oldThumbs = []
    window.onload = () => {
        document.querySelectorAll(".download-button-wrapper").forEach(el => {
            el.remove()
        })
        const thumbnails = document.querySelectorAll("#dismissable.ytd-grid-video-renderer, #dismissable.ytd-video-renderer, #dismissable.ytd-compact-video-renderer, #content.ytd-playlist-renderer, #content.ytd-grid-playlist-renderer")
        oldThumbs = thumbnails
        for (let thumbnail in thumbnails) {
            const current = thumbnails[thumbnail]
            if (isElement(current)) {
                current.style.position = "relative"
                const hrefRegex = /ytd-grid-video-renderer|ytd-video-renderer|ytd-compact-video-renderer|ytd-grid-playlist-renderer|ytd-playlist-renderer/gi
                const anchorClass = current.classList.value.match(hrefRegex)[0]
                const videoID = new URLSearchParams(current.querySelector("a." + anchorClass).search).get("v")
                current.appendChild(downloadButton(videoID))
            }
        }
    }


    document.querySelectorAll("a.ytd-button-renderer").forEach(el => {
        el.onclick = () => {
            let thumbnails = document.querySelectorAll("#dismissable.ytd-grid-video-renderer, #content.ytd-grid-playlist-renderer")
            thumbnails = Array.from(thumbnails).filter(el => Array.from(oldThumbs).indexOf(el) === -1)
            if(thumbnails.length) {
                oldThumbs = [ ...oldThumbs, ...thumbnails]
                for ( let thumbnail in thumbnails ) {
                    const current = thumbnails[thumbnail]
                    if (isElement(current)) {
                        try {
                            if(!current.querySelector(".download-button-wrapper")) {
                                current.style.position = "relative"
                                const hrefRegex = /ytd-grid-video-renderer|ytd-video-renderer|ytd-grid-playlist-renderer|ytd-playlist-renderer/gi
                                const anchorClass = current.classList.value.match(hrefRegex)[0]
                                const videoID = new URLSearchParams(current.querySelector("a." + anchorClass).search).get("v")
                                current.appendChild(downloadButton(videoID))
                            }
                        }catch (e){
                            console.log(e)
                        }
                    }
                }
            }
        }
    })


    window.onscroll = () => {
        let thumbnails = document.querySelectorAll("#dismissable.ytd-grid-video-renderer, #dismissable.ytd-video-renderer, #dismissable.ytd-compact-video-renderer, #content.ytd-playlist-renderer, #content.ytd-grid-playlist-renderer")
        thumbnails = Array.from(thumbnails).filter(el => Array.from(oldThumbs).indexOf(el) === -1)
        if(thumbnails.length) {
            oldThumbs = [ ...oldThumbs, ...thumbnails]
            for ( let thumbnail in thumbnails ) {
                const current = thumbnails[thumbnail]
                if (isElement(current)) {
                    try {
                            current.style.position = "relative"
                            const hrefRegex = /ytd-grid-video-renderer|ytd-video-renderer|ytd-compact-video-renderer|ytd-grid-playlist-renderer|ytd-playlist-renderer/gi
                            const anchorClass = current.classList.value.match(hrefRegex)[0]
                        const videoID = new URLSearchParams(current.querySelector("a." + anchorClass).search).get("v")
                        current.appendChild(downloadButton(videoID))
                    }catch (e){
                        console.log(e)
                    }
                }
            }
        }


    }
}