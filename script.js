const hiddenElements = document.querySelectorAll('.hidden');
const header = document.getElementById('header');

const observer = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{
    console.log(entry);

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
});

hiddenElements.forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 115){
  header.style="width:100%;margin-top:0;transition:all 0.5s;padding-left:10px; border-radius:0;border-radius:4px; background: rgb(16, 120, 86);";
  }
  console.log(window.scrollY);
})