import ytdl from "ytdl-core"


export default () => {
  const downloadAllButton = document.createElement("a")
  downloadAllButton.innerHTML = "Download All <i class='fa fa-arrow-down'></i>"
  downloadAllButton.classList.add("download-all-button")


  return downloadAllButton
}