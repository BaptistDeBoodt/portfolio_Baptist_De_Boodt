let images = gsap.utils.toArray('.images');
images.forEach(image => {
    console.log(image);
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      scroller: ".wrapper",
      toggleActions: "play reverse play reset"
    },
    opacity: 0,
    x: 300,
    duration: 0.5
  });

  gsap.to(image, {
    rotation: 10,
    repeat: -1,
    yoyo: true,
    yoyoEase: Circ
  });
});

let image7 = gsap.utils.toArray('.image7');
image7.forEach(image => {
    console.log(image);
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      scroller: ".wrapper",
      toggleActions: "play reverse play reset"
    },
    opacity: 0,
    x: -300,
    duration: 0.5
  });

  gsap.to(image, {
    rotation: -10,
    repeat: -1,
    yoyo: true,
    yoyoEase: Circ
  });
});

let image8 = gsap.utils.toArray('.image8');
image8.forEach(image => {
    console.log(image);
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      scroller: ".wrapper",
      toggleActions: "play reverse play reset"
    },
    opacity: 0,
    x: -300,
    duration: 0.5
  });

  gsap.to(image, {
    rotation: 360,
    duration: 10,
    repeat: -1
  });
});
