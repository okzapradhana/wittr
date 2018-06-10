self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  /*see MDN about Request for more details*/
  if(event.request.url.endsWith('jpg')){
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  }
});