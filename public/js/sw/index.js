//this method will called when new data fetched//

self.addEventListener('fetch', (event) => {
  /*
    if the console.log changed and we hit refresh, then it will wait 
    until we navigate the page to other page or close the page to make changes.
    That's the service worker's life cycle. Because when we still at that page, the
    new service worker isn't control the page otherwise they will wait until we navigate
    or close the page  
  */
  console.log(event.request);
});