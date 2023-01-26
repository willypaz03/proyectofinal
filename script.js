window.sr = ScrollReveal ();

sr.reveal("header",{
    duration: 2000,
    origin: "bottom" ,
    distance: "-100px",
});

sr.reveal(".tcontainer",{
  duration: 2000,
  origin: "right" ,
  distance: "-100px",
});

/**sr.reveal("#hero",{
    duration: 1000,
    origin: "bottom" ,
    distance: "200px",
});
*/
sr.reveal("#hero >h1",{
    duration: 3000,
    origin: "top",
    distance: "-200px",
} )

