function lennis() {
  const lenis = new Lenis({
    duration: 1.7,
    smooth: true,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  // Request Animation Frame Loop
  function raf(time) {
    lenis.raf(time);
    gsap.ticker.add(() => lenis.raf(time)); // GSAP Integration (if needed)
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

lennis();



function moveCircle() {
  let circle = document.querySelector("#mini-circle");
  window.addEventListener("mousemove", function(dets) {
    gsap.to(circle, {
      x: dets.clientX - 70,
      y: dets.clientY - 8,
      duration: 0.4
    });
  });
}
moveCircle();

function effect() {
  let page = document.querySelector("#page4");
  let top = document.querySelector("#top");
  let bottom = document.querySelector("#bottom");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: page,
      start: "top",
      end: "+=500",
      // markers: true,
      scrub: 0.7,
      pin: true
    }
  });
  tl.to(
    center,
    {
      opacity: 1,
      duration: 0.01
    },
    "a"
  );
  tl.to(
    top,
    {
      y: "-100%"
    },
    "a"
  );
  tl.to(
    bottom,
    {
      y: "100%"
    },
    "a"
  );
}
effect();

function fade() {
  let pg = document.querySelector("#page2");
  let main = document.querySelector("#main");
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: pg,
      start: "500 top",
      end: "500 top",
      // markers: true,
      onEnter: () => {
        gsap.to("#main", {
          backgroundColor: "#0D0D0D",
          color: "#F8F6F1",
          duration: 0.3
        });
      },
      onLeaveBack: () => {
        gsap.to("#main", {
          backgroundColor: "#F8F6F1",
          color: "#0D0D0D",
          duration: 0.3
        });
      }
    }
  });
}
fade();

function listFunc() {
  let topHead = document.querySelector("#topHead");
  let listFoot = document.querySelector("#list-foot");
  let tl = gsap.timeline();
  tl.from(
    topHead,
    {
      opacity: 0,
      delay: 0.6,
      ease: "Expo.easeInOut"
    },
    "a"
  );
  tl.from(
    listFoot,
    {
      opacity: 0,
      delay: 0.6,
      ease: "Expo.easeInOut"
    },
    "a"
  );
  let mid = document.querySelectorAll("#list-mid div");
  let elem = mid.forEach(function(e) {
    let h3 = e.querySelector("h3");
    let h1 = e.querySelector("h1");
    tl.from(
      h3,
      {
        x: -40,
        delay: 1.1
      },
      "a"
    );
    tl.from(
      h1,
      {
        y: 100,
        delay: 1.1
      },
      "a"
    );
  });
}
function menu() {
  let list = document.querySelector("#menu-list");
  let menuBtn = document.querySelector("#menu");
  let closeBtn = document.querySelector("#close h3");
  let eff = document.querySelector("#effect");

  gsap.set(list, {
    bottom: "-102%"
  });

  menuBtn.addEventListener("click", function() {
    listFunc(); //nichy wala function yaha call kraya hy listFunc wala
    gsap.set(list, { bottom: "-102%" });
    let tl = gsap.timeline();
    tl.to(
      list,
      {
        bottom: "0%",
        duration: 0.8,
        ease: "Expo.easeInOut"
      },
      "a"
    );
    tl.to(
      eff,
      {
        opacity: 0.5,
        duration: 0.8,
        ease: "Expo.easeInOut"
      },
      "a"
    );
  });

  closeBtn.addEventListener("click", function() {
    let tl2 = gsap.timeline();
    tl2.to(list, {
      bottom: "100%",
      duration: 0.8,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.set(list, { bottom: "-102%" });
      }
    });
    tl2.to(
      eff,
      {
        opacity: 0,
        duration: 0.8,
        ease: "Expo.easeInOut"
      },
      "a"
    );
  });
}
menu();



function heroAnim() {
  let nav = document.querySelector("nav");
  let h6 = document.querySelector("#head1 h6");

  let tl = gsap.timeline();
  tl.from(nav, {
    opacity: 0,
    delay: 3,
  });
  tl.from(
    h6,
    {
      opacity: 0
    },
    "a"
  );

  document.querySelectorAll(".head h1").forEach(function(e) {
    tl.from(
      e,
      {
        y: 400
      },
      "a"
    );
  });
  
}
heroAnim();

function page2() {
  let p1 = document.querySelector("#page1");
  let midHead = document.querySelector("#mini-head");
  let midPara = document.querySelector("#main-para");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: p1,
      start: "500 top"
      // markers: true,
    }
  });
  tl.from(
    midHead,
    {
      opacity: 0,
      y: 60
    },
    "a"
  );
  tl.from(
    midPara,
    {
      opacity: 0,
      y: 60
    },
    "a"
  );
}
page2();

function loadAni() {
  let imgsrc = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg",
    "./images/img6.jpg",
    "./images/img7.jpg",
    "./images/img8.jpg"
  ];

  let img = document.querySelector("#img"); 
  let i = 0; 

  setInterval(() => {
    img.src = imgsrc[i]; 
    i++; 

    if (i >= imgsrc.length) { 
      i = 0;
    }
  }, 200); 


  let box1 = document.querySelector("#box1");
  let box2 = document.querySelector("#box2");
  let load = document.querySelector("#load");
  let tl = gsap.timeline();
  tl.to(box1,{
    top: "-100%",
    duration: 2,
  })
  tl.to(box2,{
    top: "0%",
    duration: 1,
  })
  tl.to(load,{
    duration: 0.07,
    display: "none",
  })
  
}
loadAni(); 


