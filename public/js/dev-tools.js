/*
 This file contains only scripts that are applicable on a development
 machine, and should not be loaded in a production build
*/

/*
  Handle live-reload of JavaScript files.

  By default, live reload handles CSS/View template updates, but
  changes to javascript causes the server to restart, the same 
  server that _should have_ notified that a reload is necessary.
  To handle reloading after a change to a javascript file, we
  react to the socket being disconnected, and reload after that.
  However, reloading _before_ the server has restarted would not
  help, so there is a very aggressive polling for the server to be
  available before reloading.

  Alternatively we could listen for a `LiveReloadConnect` event
  but that causes a longer feedback loop than a very aggressive
  polling to the server
*/

document.addEventListener("LiveReloadDisconnect", function () {
  console.log("LiveReload disconnected");
  const interval = setInterval(function () {
    fetch("/").then((response) => {
      if (response.ok) {
        window.document.location.reload();
      }
    });
  }, 10);
  setTimeout(function () {
    clearInterval(interval);
  }, 5000);
});
