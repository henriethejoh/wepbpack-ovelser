export default (function() {
    let options = {
        rootMargin: "0px",
        threshold: 0.75,
    }
 
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return // guarde-clause :   hvis betingelsen vi GERNE vil have, IKKE er opfyldt, så stopper vi funktionen
 
            if (entry.intersectionRatio >= 0.75) {
                console.log(entry)
                entry.target.
                entry.target.classList.toggle("dims-on")
            }
        })
    }
 
    let observer = new IntersectionObserver(callback, options)
 
    observer.observe(document.querySelector(".dims"))
})()