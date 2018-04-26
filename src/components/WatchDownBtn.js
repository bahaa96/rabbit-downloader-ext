import ytdl from "ytdl-core"

import { handleNewDownload } from "../actions"
import { titleFactory } from "../utils"

export default () => {
    const watchDownBtn = document.createElement("div")
    watchDownBtn.classList.add("watch-download-wrapper")
    watchDownBtn.innerHTML = `
            <div class="wrapper">
                <button>Download <i class='fa fa-arrow-down'></i></button>
                <ul><i class='fa fa-circle-o-notch fa-pulse fa-2x fa-fw'></i></ul>
            </div> 
        `
    const button = watchDownBtn.querySelector(".wrapper button")
    const list = watchDownBtn.querySelector(".wrapper ul")

    button.onclick = (e) => {
        list.classList.toggle("active")
        const videoID = new URLSearchParams(window.location.search).get("v")

        ytdl.getInfo(videoID, (err, info) => {
            if (err) throw err;
            
            const formats = {}
            info.formats
                .forEach(el => {
                    if(el['quality'] && el["container"] === "mp4" )
                        formats[`${el['resolution']}`] = el['url']
                    else if (el["container"] === "m4a")
                        formats['mp3'] = el['url']
                })
            list.innerHTML = ""        
            Object.keys(formats).forEach(key => {
                const node = document.createElement("li")
                const download =  {
                    filename: titleFactory(info.title) + (key === "mp3" ? ".mp3" : ".mp4"),
                    url: formats[key] + `&title=${encodeURIComponent(info.title)}`
                }

                const downloadAnchor = document.createElement("a")
                downloadAnchor.innerText = key
                downloadAnchor.onclick = () => handleNewDownload(download)
                node.appendChild(downloadAnchor)
                list.appendChild(node)
            })

        })
        document.body.onclick = (event) => {
          if(!event.target.isSameNode(e.target))            
            list.classList.remove("active")
            
        }
    }
    return watchDownBtn
}
