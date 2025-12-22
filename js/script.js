const projects = [
  {
    title: "Studio Westonia",
    description: "Studio Westonia is the first website I created that is being used by a company. Westonia was built by a fellow student and me for a video company. It was a tremendous learning opportunity and taught me how to interact with clients and collaborate in a professional context.",
    tags: "React, Supabase",
    image: "../images/westonia.JPG",
    link: "https://www.studiowestonia.be/"
  },
  { 
    title: "Gladiator (video)",
    description: "Gladiator was my vision of what a boxing webshop should look like. I wanted it to have a rugged and cold look. It was also my chance to develop my React.js skills. The exercise was simple: I had to immerse myself in the world of boxing webshops and find inspiration. I was then expected to develop a complete design and finally convert it into React code. The result was Gladiator, where lions are tamed!",
    tags: "React, MongoDB, Responsive",
    image: "../images/gladiator.png",
    link: "https://drive.google.com/file/d/1BKb1Szz2_mvIKv6OkkaZXGPOyfvuJfzO/view?usp=sharing"
  },
  {
    title: 'Portfolio',
    description: 'During my studies, I had the opportunity to immerse myself in the world of 3D. The aim was to create a 3D portfolio in a creative way. My final version is a horror-themed journey through all my projects, preceded by a point-and-click game. Play with the sound on (if you dare)!',
    tags: 'Three.js, React, Blender',
    image: "../images/horrormansion.png",
    link: "https://3-d-portfolio-five-omega.vercel.app/"
  },
  {
    title: "Small Paws (video)",
    description: "Small Paws was my big graduation project. I wanted to do something to support animal shelters. After talking to a few shelters, I developed a planning system that gives volunteers an overview of all the dogs, when they are available for walks, etc.",
    tags: "React Native Expo, Supabase",
    image: "../images/small-paws.png",
    link: "https://drive.google.com/file/d/1whytitpmVoEisV1Ecni7o4UX1Ox8ElGE/view?usp=sharing"
  },
  {
    title: "HNO Assenede",
    description: "My first real Craft CMS project. The goal was to create a scheduling system for a pingpong club. The website had to be able to handle drinks bought by members and guests. PLayers needed to be able to claim match spots, but the admin still needed to be able to verify if a player was allowed to play.",
    tags: "Craft CMS",
    image: "../images/pingpong.png",
    link: "https://drive.google.com/file/d/19y6xBonN6vWsxPEgElgjWa1aFBqMhmGS/view?usp=sharing"
  },
  {
    title: 'Tower VS Cube',
    description: 'Tower versus cube is a 3D game that I developed using Three.js. The aim was to demonstrate that we were capable of creating a small video game. Enjoy playing!',
    tags: 'Three.js, React',
    image: "../images/tower-vs-cube.png",
    link: "https://tower-vs-cube.vercel.app/"
  },
  {
    title: "Tetris",
    description: "Tetris was my first time working with gsap. It was a fun little project to dip my toes in the water. It's nothing special, but still fun.",
    tags: "JavaScript, HTML, CSS, GSAP",
    image: "../images/tetris.JPG",
    link: "../projects/eindopdracht/index.html"
  },
  {
    title: "Crime Scene",
    description: "The crime scene was a project to see if I was able to model 10 objects in Blender, then position them in an isometric room, and finally bake them to achieve this end result.",
    tags: "Three.js, Blender, React",
    image: "../images/crimescene.png",
    link: "https://eindopdracht-baptist-deboodt-baptists-projects.vercel.app/"
  },
  {
    title: 'Dog House',
    description: 'In our second year, I went to Barcelona with my class to attend the OFFF festival. The aim was to create an original image of a speaker who appealed to us personally. I opted for Dogstudio.',
    tags: 'Blender, Three.js, React',
    image: "../images/doghouse.JPG",
    link: "https://offf-festival-red.vercel.app/"
  },
  {
    title: 'Guitarz (video)',
    description: 'This was my first assignment involving React. The aim was to incorporate the initial course material into a mini website. Since I play the guitar myself, I chose this topic.',
    tags: 'React',
    image: "../images/guitarz.JPG",
    link: "https://drive.google.com/file/d/1xONE9FmxgXD3O2y8iFxWfM43MvY_O2g1/view?usp=drive_link"
  },
  {
    title: 'Waves',
    description: 'This is my first (major) coding assignment ever. It is built solely with HTML and CSS. What was then considered an assignment that would take days or weeks to complete, I could now do in a matter of hours. But at the time, I experienced it as the most difficult assignment ever, not knowing what lay ahead of me. However simple and non-responsive it may be, I am still very proud of it.',
    tags: 'HTML, CSS, Non-responsive',
    image: "../images/waves.JPG",
    link: "../projects/Waves/index.html"
  },
    {
    title: 'Love Jet (video)',
    description: 'Love Jet was my first “big” PHP project. The idea was to develop a niche community page. People who want to date on airplanes might be a super silly niche idea, but it seemed funny to me at the time. I had to learn how to work with Laravel, which was also a challenge.',
    tags: 'PHP, Laravel',
    image: "../images/lovejet.JPG",
    link: "https://drive.google.com/file/d/1TDbkPgSG3-oma17Jfg396JSSREaUyttr/view?usp=sharing"
  },
  {
    title: 'Pythagoras',
    description: 'Pita Pythagoras was an assignment aimed at teaching students how a design system works. It forms the basis before starting to code a website. Once again, it consists solely of HTML and CSS, with the idea originating from coding components and using only those without coding extra CSS.',
    tags: 'HTML, CSS, Figma',
    image: "../images/pythagoras.JPG",
    link: "../projects/Design System/index.html"
  },
  {
    title: 'Travelplanner (video)',
    description: 'Travelplanner was the first time (and probably the last time) I worked with the Lit framework. It was the first time I had to work with a backend and front end where I had to use a Mongo database. The end result is a small travel planner.',
    tags: 'Lit, MongoDB',
    image: "../images/travelplanner.JPG",
    link: "https://drive.google.com/file/d/1dtgebeypk3eGtNkgJq5MwNN8m7kbWofK/view?usp=sharing"
  },
  {
    title: 'Versace',
    description: `Versaci is the first mini website I had to build with CSS animations. It's small and simple, but I had a lot of fun making it.`,
    tags: 'HTML, CSS',
    image: "../images/versace.JPG",
    link: "../projects/opdracht 1/index.html"
  },
];

// 2. Select the slides container
const slidesContainer = document.querySelector('[data-slides]');

// 3. Generate slides dynamically
projects.forEach((project, index) => {
  const slide = document.createElement('section');
  slide.classList.add('slide');
  if (index === 0) slide.dataset.active = true; // make the first slide active

  slide.style.backgroundImage = `url(${project.image})`;

  // Add the title and description
  slide.innerHTML = `
  <a href="${project.link}" class="slide-link" target="_blank">
    <div class="slide-info">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <p class="tags">Tags: ${project.tags}</p>
    </div>
  </a>
  `;

  slidesContainer.appendChild(slide);
});

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    const newSlide = slides.children[newIndex];

    // Determine direction
    const direction = offset === 1 ? 'right' : 'left';

    // Animate out old slide
    activeSlide.classList.add(direction === 'right' ? 'slide-out-left' : 'slide-out-right');
    // Animate in new slide
    newSlide.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');

    // After animation, cleanup classes & switch active
    setTimeout(() => {
      delete activeSlide.dataset.active;
      activeSlide.classList.remove('slide-out-left', 'slide-out-right');

      newSlide.dataset.active = true;
      newSlide.classList.remove('slide-in-right', 'slide-in-left');
    }, 300); // match transition duration
  });
});
