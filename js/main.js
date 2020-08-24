var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webm', // URL or relative path to webm video
    poster: 'img/worlderrorload.png', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  });

var rellax = new Rellax('.rellax');
if (document.body.clientWidth < 767) {
  rellax.destroy();
}