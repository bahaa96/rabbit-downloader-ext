const msg = 'Either the video is deleted or it\'s not shared publicly!';

const lowResolution = (link: string) =>
  fetch(link)
    .then((res) => res.text())
    .then((res) => {
            const link = res
        .split('sd_src_no_ratelimit:"')[1]
        .split('",hd_src_no_ratelimit:')[0];
      return {
                url: link,
            };
    })
    .catch((err) => {
            if (err) {
                err.message = msg;
            }
      return err.message;
    });

const highResolution = (link: string) =>
  fetch(link)
    .then((res) => res.text())
    .then((res) => {
            const link = res
        .split('hd_src_no_ratelimit:"')[1]
        .split('",aspect_ratio:')[0];
      return {
                url: link,
      };
    })
    .catch((err) => {
      if (err) {
                err.message = msg;
      }
            return err.message;
    });

export default {
  low: lowResolution,
  high: highResolution,
};
