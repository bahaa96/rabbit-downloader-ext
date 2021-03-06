import { isElement } from "../utils";
import ytdl from 'ytdl-core';

// import watchDownBtn from "../components/Button";
// import downloadButton from "../components/HomeDownBtn";
import { $fixme } from "../typings/fixMe";


const WatchPage = () => {
  ytdl.getInfo('73tGe3JE5IU', (err, info) => {
    if (err) throw err;
    console.log('formats: ', info)
  })

  let oldThumbs: $fixme = [];
  window.onload = () => {
    document.querySelectorAll(".download-button-wrapper")
    .forEach((el) => {
      el.remove();
    });
    const thumbnails = document.querySelectorAll(
      "#dismissable.ytd-compact-video-renderer"
    );
    oldThumbs = thumbnails;
    for (let thumbnail in thumbnails) {
      const current = thumbnails[thumbnail];
      if (isElement(current)) {
        current.style.position = "relative";
        const videoID = new URLSearchParams(
          current.querySelector("a.ytd-compact-video-renderer").search
        ).get("v");
        current.appendChild(downloadButton(videoID));
      }
    }
  };

  const wrapperInterval = setInterval(() => {
    if (
      document.querySelector("#container.ytd-video-secondary-info-renderer")
    ) {
      clearInterval(wrapperInterval);
      const parent = document.querySelector(
        "#container.ytd-video-secondary-info-renderer"
      );
      if (parent.querySelectorAll(".watch-download-wrapper").length >= 1)
        Array.from(parent.querySelectorAll(".watch-download-wrapper"))
          .shift()
          .remove();
      parent.insertBefore(
        watchDownBtn(),
        document.querySelector("#top-row.ytd-video-secondary-info-renderer")
      );
    }
  }, 100);

  window.onscroll = () => {
    let thumbnails = document.querySelectorAll(
      "#dismissable.ytd-compact-video-renderer"
    );
    thumbnails = Array.from(thumbnails).filter(
      (el) => Array.from(oldThumbs).indexOf(el) === -1
    );
    if (thumbnails.length) {
      oldThumbs = [...oldThumbs, ...thumbnails];
      for (let thumbnail in thumbnails) {
        const current = thumbnails[thumbnail];
        if (isElement(current)) {
          try {
            current.style.position = "relative";
            const videoID = new URLSearchParams(
              current.querySelector("a.ytd-compact-video-renderer").search
            ).get("v");
            current.appendChild(downloadButton(videoID));
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  };
};

export default WatchPage;
