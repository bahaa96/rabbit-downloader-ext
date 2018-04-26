import ytdl from "ytdl-core"

import { handleNewDownload } from "../actions"
import { titleFactory } from "../utils"

export default (videoID) => {
  const formats = {}
  const elm = document.createElement("div")
  elm.innerHTML = `
      <a class='download-button'>
          <i class='fa fa-arrow-down'></i>
      </a>
      <div class="quality-list">
          <i class='fa fa-circle-o-notch fa-pulse fa-2x fa-fw'></i>
          </div>
      </div>
      
  `
  elm.querySelector("a").onclick  = function(e) {
      e.preventDefault()
      const sibling = document.querySelector(".download-button-wrapper .quality-list.active")
      elm.querySelector(".quality-list").classList.toggle("active")
      if(sibling) sibling.classList.remove("active")
      ytdl.getInfo(videoID, (err, info) => {
          if (err) throw err;          
          const formats = {}
          info.formats
              .forEach(el => {
                //   console.log(el);
                  
                  if(el['quality'] && el["container"] === "mp4" )
                      formats[`${el['resolution']}`] = el['url']
                  else if (el["container"] === "m4a")
                      formats['mp3'] = el['url']
              })
          elm.querySelector(".quality-list").innerHTML = "<ul></ul>"
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
              elm.querySelector(".quality-list ul").appendChild(node)
          })
      })
      elm.querySelector("a").onclick = () => {
          e.preventDefault()
          const sibling = document.querySelector(".download-button-wrapper .quality-list.active")
          elm.querySelector(".quality-list").classList.toggle("active")
          if(sibling) sibling.classList.remove("active")
      }
      document.body.onclick = (event) => {
        if(!event.target.isSameNode(e.target))
        elm.querySelector(".quality-list").classList.remove("active")

      }
  }
  elm.classList.add("download-button-wrapper")
  return elm
}