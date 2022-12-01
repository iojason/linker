let animation =  lottie.loadAnimation({
    container: document.getElementById("youtube-logo"), // required
    path: './img/youtube-logo.json', // required. animated icon from icons8.com
    renderer: 'svg', // required
    loop: false, // optional - false to animate only once.
    autoplay: true, // optional - start animation on initial load
    name: "YouTube Logo Animation", // optional
});