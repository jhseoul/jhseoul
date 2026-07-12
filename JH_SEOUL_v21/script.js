const header = document.getElementById("siteHeader");
const toggle = document.querySelector(".mobile-toggle");
const mobilePanel = document.querySelector(".mobile-panel");
const form = document.getElementById("contactForm");

function onScroll(){
  header.classList.toggle("scrolled", window.scrollY > 36);
}
onScroll();
window.addEventListener("scroll", onScroll, {passive:true});

if(toggle && mobilePanel){
  toggle.addEventListener("click", ()=>{
    const open = mobilePanel.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    mobilePanel.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  mobilePanel.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      mobilePanel.classList.remove("open");
      toggle.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.16});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));


