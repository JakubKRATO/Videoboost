function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var counterDisplay = document.getElementById("counter")
var main = async () => {
    for (let i = 0; i < 261; i++) {
        await sleep(2)
        counterDisplay.innerHTML = i + "%"
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
            if (entry.isIntersecting) {
                main()
                observer.unobserve(entry.target)
            }
        });
    }, {threshold: 0.1});

    observer.observe(counterDisplay)
});