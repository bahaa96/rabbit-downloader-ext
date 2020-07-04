// import ytdl from 'ytdl-core';
import { titleFactory } from '../../utils';
import React, { useState } from 'react';

import { handleNewDownload } from '../../actions';
import { Container } from './styles';


interface IProps {

}

const FullSizeButton: React.FC<IProps> = (props) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState(null);
  const [formats, setFormats] = useState(null);

  const handleClick = () => {
    setActive(true);
    setLoading(true);
    const videoId = new URLSearchParams(window.location.search).get('v');
    if (videoId) {
      ytdl.getInfo(videoId, (err, info) => {
        setLoading(false);
        // TODO: Handle Errors;
        if (err) throw err;

        if (info && info.formats) {
          const formats = {};
          console.log('formats: ', info.formats)
          info.formats.forEach((el) => {
            if (el['quality'] && el['container'] === 'mp4')
              formats[`${el['resolution']}`] = el['url'];
            else if (el['container'] === 'm4a') formats['mp3'] = el['url'];
          });
          setFormats(formats);
        }
      });
    }
    else {
      setLoading(false);
    }
  }

  return (
    <Container className={'download-button --lg'}>
      <div className="wrapper">
        <button onClick={handleClick}>
          Download
          <i className="fa fa-arrow-down" />
        </button>
        <ul>
          <i className="fa fa-circle-o-notch fa-pulse fa-2x fa-fw" />
          {
            formats.map((format, index) => {
              const download = {
                filename:
                  titleFactory(meta.title) + (format.name === 'mp3' ? '.mp3' : '.mp4'),
                url: formats[format.name] + `&title=${encodeURIComponent(meta.title)}`,
              };
              return (
                <li>
                  <a onClick={handleNewDownload(download)}>
                    {
                      format.name
                    }
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Container>
  );

};


export default FullSizeButton;
