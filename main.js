const button = document.getElementById("beginButton");

button.addEventListener("click", () => {

    document.getElementById("chapter-one")
        .scrollIntoView({
            behavior: "smooth"
        });

});
const openButton = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");

openButton.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.classList.remove("hidden");

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));

// ❤️ Our Journey Counter

const startDate = new Date("2026-06-27T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveCounter();

setInterval(updateLoveCounter,1000);
// ❤️ 100 Reasons

const reasons = [

{
number:1,
text:"Because you walked into my life when I least expected it."
},

{
number:2,
text:"Because your smile somehow makes every bad day better."
},

{
number:3,
text:"Because one Call of Duty: Mobile match became the beginning of forever."
},

{
number:4,
text:"Because hearing your voice instantly makes me feel at peace."
},

{
number:5,
text:"Because you make ordinary moments unforgettable."
},

{
number:6,
text:"Because we met in a Call of Duty: Mobile lobby, but it never felt like random matchmaking—it felt like fate."
},

{
number:7,
text:"Because you became my favorite duo before we ever shared the same room, and no one could ever replace you."
},

{
number:8,
text:"Because you make me excited to log in, knowing there's a chance I'll get to spend time with you."
},

{
number:9,
text:"Because your voice through my headset already feels like home, even though we've never been in the same place."
},

{
number:10,
text:"Because you carry me in ranked, and somehow you carry my mood in real life too."
},

{
number:11,
text:"Because you laugh at my missed snipes and still tell me, 'Nice try,' never making me feel like a noob."
},

{
number:12,
text:"Because you remember my favorite guns and loadouts, even though you've never seen my setup in person."
},

{
number:13,
text:"Because you'll always stay for 'just one more match' when you're tired, just to spend a little more time with me."
},

{
number:14,
text:"Because you send me your clutch clips, and I watch them over and over like my favorite movie."
},

{
number:15,
text:"Because you let me take the airdrop even when you deserve it more—that's just the kind of person you are."
},

{
number:16,
text:"Because you understand all my CODM slang without me ever having to explain it—you just get me."
},

{
number:17,
text:"Because you proved that losing doesn't matter when we're laughing together the entire time."
},

{
number:18,
text:"Because you hype me up in the lobby like I'm a professional player—my own personal commentator."
},

{
number:19,
text:"Because you stayed beside me when my ping was terrible and my gameplay was even worse—you never left."
},

{
number:20,
text:"Because celebrating victories with silly emotes is somehow one of my favorite memories with you."
},

{
number:21,
text:"Because you turned curry into more than just food—it became one of our favorite little love languages."
},

{
number:22,
text:"Because every photo you send of your curry somehow makes me hungry for both the food... and for you."
},

{
number:23,
text:"Because you already know my favorite curry order, even though we've never shared a table together."
},

{
number:24,
text:"Because you promised I'd get extra gravy on our first curry date, and somehow that became one of my favorite dreams."
},

{
number:25,
text:"Because you laugh when I say I'd travel anywhere just to eat curry with you... and you know I mean every word."
},

{
number:26,
text:"Because curry feels like comfort, and somehow you give me that exact same feeling."
},

{
number:27,
text:"Because we can debate roti versus rice like it's the most important conversation in the world."
},

{
number:28,
text:"Because you said you'd feed me the very first bite when we finally meet, and I've been looking forward to that moment ever since."
},

{
number:29,
text:"Because you don't judge the fact that I'll probably make a complete mess eating curry—you'll probably just laugh and call me cute."
},

{
number:30,
text:"Because you've already made me dream about a future where curry night becomes our favorite weekly tradition."
},

{
number:31,
text:"Because hearing you talk about cooking already feels like listening to someone who'll someday make a house feel like home."
},

{
number:32,
text:"Because somehow you can make my stomach hungry and my heart full at exactly the same time."
},

{
number:33,
text:"Because you've made family dinners feel familiar before we've even shared our first meal together."
},

{
number:34,
text:"Because I know our very first curry date will be worth every single day we've spent waiting for it."
},

{
number:35,
text:"Because you call me your 'monkey,' and somehow that's become one of my favorite names in the world."
},

{
number:36,
text:"Because seeing your face on my screen is still enough to brighten my entire day."
},

{
number:37,
text:"Because I fell in love with you through a screen, and somehow it has always felt completely real."
},

{
number:38,
text:"Because the way your face lights up when I join the call makes me feel chosen every single time."
},

{
number:39,
text:"Because we can stay on call doing absolutely nothing, and somehow those become my favorite moments."
},

{
number:40,
text:"Because you've let me see the real you—sleepy, messy, and completely yourself—and that's the version I love most."
},

{
number:41,
text:"Because when you fall asleep on call, I never want to be the first one to hang up."
},

{
number:42,
text:"Because you make me laugh so hard on video calls that my cheeks actually start to hurt."
},

{
number:43,
text:"Because every time you point your camera at your world, it feels like you're inviting me into your life."
},

{
number:44,
text:"Because you've turned awkward silences into peaceful moments where simply being together is enough."
},

{
number:45,
text:"Because you'll try the funniest filters and make the silliest faces just to make me smile—and it works every time."
},

{
number:46,
text:"Because you remember the tiniest details from our conversations, even the ones I thought you'd forgotten."
},

{
number:47,
text:"Because you listen to me like every word I say matters, and that makes me feel truly understood."
},

{
number:48,
text:"Because saying goodnight on a video call somehow feels like receiving a hug through my screen."
},

{
number:49,
text:"Because every little wave goodbye at the end of our calls stays in my mind long after we've hung up."
},

{
number:50,
text:"Because you've shown me that a video call with the right person can feel more intimate than a crowded room full of people."
},

{
number:51,
text:"Because when you look into the camera, it feels like you're looking straight into my heart."
},

{
number:52,
text:"Because we screenshot our calls, quietly building an album of memories before we've even taken our first photo together."
},

{
number:53,
text:"Because you make me count down the hours until our next call like I'm waiting for my favorite holiday."
},

{
number:54,
text:"Because you've taught me that presence isn't about distance—it's about showing up for each other every single day."
},

{
number:55,
text:"Because I know that the first time I finally see you in person, my heart will already recognize you."
},

{
number:56,
text:"Because I fell in love with your soul long before I'll ever get to hold your hand."
},

{
number:57,
text:"Because you've made waiting feel exciting instead of painful."
},

{
number:58,
text:"Because every single day gives me something to look forward to—you."
},

{
number:59,
text:"Because you've shown me that love doesn't need distance to disappear, and it doesn't need touch to become real."
},

{
number:60,
text:"Because your voice has become my favorite place to come home to at the end of every day."
},

{
number:61,
text:"Because your kindness reaches me even across the miles between us."
},

{
number:62,
text:"Because you choose me every single day, even when we're far apart."
},

{
number:63,
text:"Because you've believed in us, even when other people couldn't understand our story."
},

{
number:64,
text:"Because you've made me more patient, more hopeful, and a better man than I was before I met you."
},

{
number:65,
text:"Because you inspire me to become the man you'll always be proud to call yours."
},

{
number:66,
text:"Because you celebrate my smallest victories like they're your own."
},

{
number:67,
text:"Because somehow you know exactly how to comfort me, even from hundreds of miles away."
},

{
number:68,
text:"Because you respect my dreams as if they're already part of our future together."
},

{
number:69,
text:"Because you always know how to make me laugh when I feel like giving up."
},

{
number:70,
text:"Because you've made me feel completely safe being myself, even before we've shared our first hug."
},

{
number:71,
text:"Because you've given me a place where I can be vulnerable without ever feeling judged."
},

{
number:72,
text:"Because you remember stories about my family and friends as though you've known them your whole life."
},

{
number:73,
text:"Because every time we talk about our first meeting, it feels like we're writing our favorite movie together."
},

{
number:74,
text:"Because every plan we make for the future gives me another reason to smile today."
},

{
number:75,
text:"Because you've never made long distance feel like an obstacle—only another chapter of our story."
},

{
number:76,
text:"Because you've turned distance into anticipation instead of loneliness."
},

{
number:77,
text:"Because I already know our first hug is going to feel like coming home."
},

{
number:78,
text:"Because I have a feeling the first time our eyes meet in person, happy tears won't be far behind."
},

{
number:79,
text:"Because you make me want to become the very best version of myself before the day we finally meet."
},

{
number:80,
text:"Because every promise I make to you is one I already can't wait to keep."
},

{
number:81,
text:"Because you've taught me that love isn't built on proximity—it's built on choosing each other every single day."
},

{
number:82,
text:"Because every message you send feels like a little love letter waiting for me."
},

{
number:83,
text:"Because every good morning from you makes my day feel brighter before it even begins."
},

{
number:84,
text:"Because even when my room is empty, you've never let my heart feel alone."
},

{
number:85,
text:"Because you've given us a love story I'll be proud to tell for the rest of my life."
},

{
number:86,
text:"Because saying 'I have a girlfriend' makes me smile, because that girlfriend is you."
},

{
number:87,
text:"Because you've taught me to trust timing, knowing that our day will come."
},

{
number:88,
text:"Because for the first time, I'm grateful for technology... because it brought me to you."
},

{
number:89,
text:"Because I can already picture our very first photo together, and it makes me smile every time."
},

{
number:90,
text:"Because you've taught me to fall in love with the journey, not just the destination."
},

{
number:91,
text:"Because I feel like I've memorized your heart long before I've held your hand."
},

{
number:92,
text:"Because you've made me believe that love can begin with one simple call."
},

{
number:93,
text:"Because we've built something strong enough to last forever before we've even met in person."
},

{
number:94,
text:"Because every day I want to meet you... and every day I find another reason to love you even more."
},

{
number:95,
text:"Because my heart met yours long before we ever will, and it already decided where it belongs."
},

{
number:96,
text:"Because I can't wait for the day distance becomes just another chapter we smile about together."
},

{
number:97,
text:"Because I don't just dream about meeting you—I dream about growing old with you."
},

{
number:98,
text:"Because every future I imagine has one thing in common... you're in it."
},

{
number:99,
text:"Because no matter where life takes us, I will always choose you."
},

{
number:100,
text:"Because after everything we've shared, everything we've overcome, and everything we're still dreaming about... I'd choose you all over again, in every lifetime."
},

];

let currentReason = 0;

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

const reasonCard = document.querySelector(".reason-card");

nextReason.addEventListener("click",()=>{

    reasonCard.classList.add("fade");

    setTimeout(()=>{

        currentReason++;

        if(currentReason>=reasons.length){

    currentReason=reasons.length-1;

    reasonCard.classList.add("goodbye");

    nextReason.style.display="none";

    document
        .getElementById("finalMessage")
        .classList.add("show");

    setTimeout(()=>{

        document
            .getElementById("finalMessage")
            .scrollIntoView({
                behavior:"smooth"
            });

    },1200);

}

        reasonNumber.textContent=`Reason #${reasons[currentReason].number}`;
        reasonText.textContent=reasons[currentReason].text;

        if(reasons[currentReason].number>=100){

            nextReason.textContent="❤️ One Last Thing...";

        }else{

            nextReason.textContent="💌 Show Me Another Reason";

        }

        if(
    reasons[currentReason].number===100 &&
    nextReason.dataset.final!=="true"
){

    nextReason.dataset.final="true";

    return;

}

if(nextReason.dataset.final==="true"){

    reasonCard.classList.add("goodbye");

    nextReason.style.display="none";

    setTimeout(()=>{

        const finalMessage=document.getElementById("finalMessage");

        finalMessage.classList.add("show");

        finalMessage.scrollIntoView({
            behavior:"smooth"
        });

    },1200);

    return;

}

        reasonCard.classList.remove("fade");
        reasonCard.classList.add("glow");

        setTimeout(()=>{

            reasonCard.classList.remove("glow");

        },500);

    },450);

});
