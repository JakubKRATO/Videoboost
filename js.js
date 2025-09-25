function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var counterDisplay = document.getElementById("counter")
var counter2 = document.getElementById("counter2")
var main = async () => {
    for (let i = 0; i < 261; i++) {
        await sleep(6)
        counterDisplay.innerHTML = i + "%"
    }
};
var main2 = async () => {
    for (let i = 0; i < 49; i++) {
        await sleep(40)
        counter2.innerHTML = i + "+"
    }
};
$(document).ready(function () {
    $(".faq p").hide();

    $(".faq li").click(function () {
        $(this).next("p").slideToggle(300);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains("points")) {
                main()
                observer.unobserve(entry.target)
            } else if (entry.isIntersecting) {
                main2()
                observer.unobserve(entry.target)
            }
        });
    }, {threshold: 0.1});

    observer.observe(counterDisplay)
    observer.observe(counter2)
});