document.addEventListener("DOMContentLoaded",() => {
    var elementy = document.getElementsByClassName("preparing")
    elementy = Array.from(elementy) 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains("preparing")) {

                if (entry.target.classList.contains("stay50")) {
                    entry.target.classList.replace("preparing","animate50")
                    observer.unobserve(entry.target)
                }
                entry.target.classList.replace("preparing","animate")
                observer.unobserve(entry.target)
                
            }
        });
    }, {threshold: 0.4}); 

    elementy.forEach(element => {
        if (element) observer.observe(element)
    });
});