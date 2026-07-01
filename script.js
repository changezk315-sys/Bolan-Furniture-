document.addEventListener("DOMContentLoaded", function () {
    console.log("Bolan Furniture Website Loaded!");

    const contactBtn = document.querySelector(".hero a");

    contactBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Yahan apna WhatsApp number likhna
        window.open("https://wa.me/923001234567", "_blank");
    });
});