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
main()

setInterval(() => {
    console.log(window.innerWidth);
    
}, 500)
$(document).ready(function () {
    $(".faq p").hide();

    $(".faq li").click(function () {
        $(this).next("p").slideToggle(300);
    });
});
