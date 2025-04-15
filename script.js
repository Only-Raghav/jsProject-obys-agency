var tl = gsap.timeline();

tl.from(".line h1, .line h2",{
    y:150,
    stagger:.25,
    duration:.6,
    delay:.5
});

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        let h5 = document.querySelector("#loader .line #line1-part1 h5")
let grow = 0;
setInterval(function(){
    if(grow<100){
        h5.textContent = grow++
    }
    else{
        h5.textContent = grow
       
    }
    

},35);
    }
});

tl.to(".line h2",{
    animationName:"anime"
});


tl.to("#loader",{
    opacity:0,
    duration:.4,
    delay:4,
});

tl.from(".page1",{
    y:1500,
    opacity:0,
    delay:.2,
    duration:.5,
    ease:Power4 
});

tl.to("#loader",{
    display:"none"
});