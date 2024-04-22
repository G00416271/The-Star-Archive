

/*window.onload = playVid;

function playVid() { 
  var video = document.getElementById("hyperspace");
  video.play();
};
*/
/*
window.onload = function() {
    var video = document.getElementById("hyperspace");

    // Check if the video can be autoplayed
    var promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started successfully
            console.log("Autoplay started successfully");
        }).catch(error => {
            // Autoplay was prevented
            console.error("Autoplay was prevented:", error);

            // Simulate a user interaction to allow autoplay
            document.documentElement.addEventListener("click", function enableAutoplay() {
                video.play();
                document.documentElement.removeEventListener("click", enableAutoplay);
            });
        });
    }
};
*/




