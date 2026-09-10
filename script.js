const startButton =
    document.getElementById("startButton");

const nextButton =
    document.getElementById("nextButton");

const yesButton =
    document.getElementById("yesButton");

const thinkButton =
    document.getElementById("thinkButton");


const welcomeScreen =
    document.getElementById("welcomeScreen");

const letterScreen =
    document.getElementById("letterScreen");

const questionScreen =
    document.getElementById("questionScreen");

const resultScreen =
    document.getElementById("resultScreen");


const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");



/* =========================
   URL ของ Google Apps Script
   ========================= */

const scriptURL =
    "https://script.google.com/macros/s/AKfycby-C1zw5BsqxBGv2Sk4hcq5znvHybM9KcdB2Xz8aeHUAuO8HGsXHCump841Zi5sbAk/exec";


/* =========================
   ส่งคำตอบไป Google Sheets
   ========================= */

function sendAnswer(answer) {

    const form =
        document.createElement("form");

    form.method = "POST";

    form.action = scriptURL;

    form.target = "hiddenFrame";


    const input =
        document.createElement("input");

    input.type = "hidden";

    input.name = "answer";

    input.value = answer;


    form.appendChild(input);

    document.body.appendChild(form);

    form.submit();

    form.remove();

}



/* =========================
   สร้างหน้าต่างซ่อน
   ========================= */

const hiddenFrame =
    document.createElement("iframe");

hiddenFrame.name = "hiddenFrame";

hiddenFrame.style.display = "none";

document.body.appendChild(hiddenFrame);



/* =========================
   เปิดจดหมาย
   ========================= */

startButton.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    letterScreen.style.display = "block";

});



/* =========================
   อ่านต่อ
   ========================= */

nextButton.addEventListener("click", function () {

    letterScreen.style.display = "none";

    questionScreen.style.display = "block";

});



/* =========================
   ตอบ "ได้"
   ========================= */

yesButton.addEventListener("click", function () {

    sendAnswer("ได้ 💗");

    questionScreen.style.display = "none";

    resultScreen.style.display = "block";

    resultTitle.textContent =
        "ขอบคุณที่เลือกผมนะ 💗";

    resultMessage.textContent =
        "จากวันนี้ไป ขอให้ผมได้ดูแลคุณนะ :)";


    // สร้างหัวใจลอย 💗
    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = "💗";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            20 + Math.random() * 25 + "px";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 5000);

    }

});





/* =========================
   ตอบ "ขอคิดดูก่อน"
   ========================= */

thinkButton.addEventListener("click", function () {

    sendAnswer("ขอคิดดูก่อน 🥺");

    questionScreen.style.display = "none";

    resultScreen.style.display = "block";

    resultTitle.textContent =
        "ไม่เป็นไรนะ 🥺";

    resultMessage.textContent =
        "ผมรอคำตอบของคุณได้เสมอ 💗";

});