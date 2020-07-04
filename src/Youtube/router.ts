import channelPlaylists from './channelPlaylists';
import playlist from './playlist';
import youtube from './index';
import watch from './watch';

let { href } = window.location;
setInterval(() => {
  if (window.location.href !== href) {
    href = window.location.href;
    execute();
  }
}, 500);

const execute = () => {
  let { pathname } = window.location;
  const page = !(pathname === '/') ? pathname.match(/\/\w+\/?/g).join('') : '/';
  switch (page) {
    case '/playlist':
      playlist();
      break;
    case '/channel//playlists':
    case '/user//playlists':
      channelPlaylists();
      break;
    case '/channel':
    case '/user':
      break;
    case '/watch':
      watch();
      break;
    default:
      youtube();
  }
};

execute();
