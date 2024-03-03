console.log("heloo world");
function change() {
    document.body.classList.toggle('dark');
   let p =  document.body.getElementsByClassName("inner");
   let q = Array.from(p);
   q.forEach(e => {
        e.classList.toggle('invert');
    });
}
