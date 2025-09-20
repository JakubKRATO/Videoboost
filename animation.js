document.addEventListener("DOMContentLoaded",() => {
    var elementy = document.getElementsByClassName("preparing")
    elementy = Array.from(elementy) 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains("preparing")) {

                entry.target.classList.replace("preparing","animate")
                observer.unobserve(entry.target)
                
            }
        });
    }, {threshold: 0.4}); 

    elementy.forEach(element => {
        if (element) observer.observe(element)
    });
});