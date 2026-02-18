/* ================= USER LOGIN & PAGE CONTROL ================= */
let currentPage = 1;
const totalPages = 3;
const points = [];

// Correct credentials
const correctUsername = "Divine";
const correctPassword = "Angel";

// Show page and handle scroll & overflow
function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById("page" + i);
        if (page) page.style.display = 'none';
    }

    const targetPage = document.getElementById("page" + pageNumber);
    if (targetPage) {
        targetPage.style.display = 'flex';
        targetPage.style.flexDirection = 'column';
        targetPage.style.justifyContent = 'flex-start';
        targetPage.style.alignItems = 'center';
        targetPage.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        currentPage = pageNumber;
        document.body.style.overflow = (pageNumber === 1) ? 'hidden' : 'auto';
    }

    const finalMsg = document.getElementById('finalMessage');
    const seeWorldBtn = document.getElementById('seeWorldBtn');
    const worldBg = document.getElementById('worldBg');
    const longMsg = document.querySelector('.long-message');
    const nextBtn = document.querySelector(".next-btn");

    if(pageNumber === 2){
        if(longMsg) longMsg.style.display = 'block';
        if(nextBtn) {
            nextBtn.style.display = 'inline-block';
            nextBtn.style.marginTop = '1px';
            if(longMsg) longMsg.after(nextBtn);
        }
        if(finalMsg) finalMsg.style.display = 'none';
        if(seeWorldBtn) seeWorldBtn.style.display = 'none';
        if(worldBg) worldBg.style.display = 'none';
    } else if(pageNumber === 3){
        if(longMsg) longMsg.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        if(finalMsg) finalMsg.style.display = 'block';
        if(seeWorldBtn) seeWorldBtn.style.display = 'inline-block';
        if(finalMsg && seeWorldBtn) finalMsg.after(seeWorldBtn);
        if(worldBg) worldBg.style.display = 'none';
    } else {
        if(longMsg) longMsg.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        if(finalMsg) finalMsg.style.display = 'none';
        if(seeWorldBtn) seeWorldBtn.style.display = 'none';
        if(worldBg) worldBg.style.display = 'none';
    }
}

// Login validation
function goToPage2(event) {

    if(event) event.preventDefault();

    const usernameInput = document.querySelector("#page1 input[type='text']").value.trim();
    const passwordInput = document.querySelector("#page1 input[type='password']").value.trim();

    if(usernameInput === correctUsername && passwordInput === correctPassword){

        heartExplosion(window.innerWidth/2, window.innerHeight/2);
        showHandwriting("Entering My Sky ✨");

        cloudWelcomeSequence();   // ☁️ cinematic intro

    } else {
        alert("❌ Wrong Username or Password! Try Again.");
    }
}


// Go to Page 3
function goToPage3() { showPage(3); }

// Show final background
function showFinalWorld() {
    const bg = document.getElementById('worldBg');
    const finalMsg = document.getElementById('finalMessage');
    const btn = document.getElementById('seeWorldBtn');
    if(bg) bg.style.display = 'flex';
    if(finalMsg) finalMsg.style.display = 'none';
    if(btn) btn.style.display = 'none';
}

/* ================= STARS SYSTEM (PAGE 1 ONLY) ================= */
let starsContainer;
function createStars() {
    if(!starsContainer) return;
    starsContainer.innerHTML = '';
    const width = window.innerWidth;
    const height = window.innerHeight;
    const totalStars = 1500;
    for(let i=0;i<totalStars;i++){
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random()*2+1;
        star.style.width = star.style.height = size + "px";
        star.style.top = Math.random()*height + "px";
        star.style.left = Math.random()*width + "px";
        star.style.animationDuration = (3 + Math.random()*8) + "s, " + (0.5 + Math.random()*1) + "s";
        starsContainer.appendChild(star);
    }
}

/* ================= MAGIC EFFECTS FUNCTIONS ================= */
function createHeart(x, y){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.background = "linear-gradient(135deg, #ff7eb3, #ff4d6d)";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 2200);
}

function createConstellation(x1,y1,x2,y2){
    const line = document.createElement("div");
    line.className = "constellation-line";
    const length = Math.hypot(x2-x1, y2-y1);
    const angle = Math.atan2(y2-y1, x2-x1) * 180/Math.PI;
    line.style.width = length + "px";
    line.style.left = x1 + "px";
    line.style.top = y1 + "px";
    line.style.transform = `rotate(${angle}deg)`;
    document.body.appendChild(line);
    setTimeout(()=>line.remove(), 1200);
}

function heartExplosion(x,y){
    for(let i=0;i<25;i++){
        const heart = document.createElement("div");
        heart.className = "explosion-heart";
        const angle = Math.random()*2*Math.PI;
        const distance = 80 + Math.random()*120;
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.setProperty("--x", Math.cos(angle)*distance+"px");
        heart.style.setProperty("--y", Math.sin(angle)*distance+"px");
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(), 1800);
    }
}

function galaxyTransition(){
    const swirl = document.createElement("div");
    swirl.className = "galaxy-swirl";
    document.body.appendChild(swirl);
    setTimeout(()=>swirl.remove(),1800);
}

function showRing(x,y){
    const ring = document.createElement("div");
    ring.className = "ring";
    ring.style.left = (x-60) + "px";
    ring.style.top = (y-60) + "px";
    const initials = document.createElement("div");
    initials.className = "initials";
    initials.innerText = "R ❤ N"; // Change initials here
    ring.appendChild(initials);
    document.body.appendChild(ring);
    setTimeout(()=>ring.remove(), 3000);
}

function startRoseRain(count=500){
    for(let i=0;i<count;i++){
        const petal = document.createElement("div");
        petal.className = "rose-petal";
        petal.style.left = Math.random()*window.innerWidth + "px";
        petal.style.animationDuration = (6 + Math.random()*4) + "s";
        petal.style.animationDelay = Math.random()*1.5 + "s";
        document.body.appendChild(petal);
        setTimeout(()=>petal.remove(),10000);
    }
}

function showHandwriting(name="NAYAB"){
    const el = document.createElement("div");
    el.className = "handwriting";
    el.innerText = name;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),6500);
}

function starsFormName(text="NAYAB"){
    const wrap = document.createElement("div");
    wrap.className = "constellation";
    document.body.appendChild(wrap);
    const centerX = window.innerWidth/2;
    const centerY = window.innerHeight/2;
    const spacing = 28;

    [...text].forEach((ch,i)=>{
        const x = centerX - (text.length*spacing)/2 + i*spacing;
        const y = centerY - 120;
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = x + "px";
        dot.style.top = y + "px";
        wrap.appendChild(dot);
        if(i>0){
            const line = document.createElement("div");
            line.className = "line";
            const prevX = centerX - (text.length*spacing)/2 + (i-1)*spacing;
            line.style.left = Math.min(prevX,x) + "px";
            line.style.top = y + "px";
            line.style.width = Math.abs(x-prevX) + "px";
            wrap.appendChild(line);
        }
    });
    setTimeout(()=>wrap.remove(),7000);
}

function secretYes(){
    const btn = document.getElementById("secretYesBtn");
    if(!btn) return;
    btn.style.display = "inline-block";
    btn.onclick = e => {
        whiteGlowYES();
        confettiHearts(700);
        heartExplosion(e.clientX,e.clientY);
        startRoseRain(500);
        showHandwriting("I LOVE YOU MY PRINCESS❤️");
        shockwave(e.clientX,e.clientY);
        fireworkBurst(e.clientX,e.clientY);
        sparkleRain(450);
        const star = document.createElement("div");
        star.className = "shooting-star";
        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";
        document.body.appendChild(star);
        setTimeout(()=>star.remove(),1200);
        setTimeout(()=>starsToRing(),1500);
        setTimeout(()=>alert("💍 FOREVER BEGINS 💍"),1800);
    }
}

function whiteGlowYES(){
    const glow = document.createElement("div");
    glow.className = "yes-glow";
    document.body.appendChild(glow);
    setTimeout(()=>glow.remove(),1500);
}

function confettiHearts(){
    for(let i=0;i<400;i++){
        const h = document.createElement("div");
        h.className = "confetti-heart";
        h.style.left = Math.random()*100 + "vw";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),3000);
    }
}

function starsToRing(){
    const group = document.getElementById("star-name");
    if(!group) return;
    const stars = group.querySelectorAll(".star-letter");
    stars.forEach((star,i)=>{
        const angle = (i/stars.length)*Math.PI*2;
        const radius = 90;
        star.classList.add("star-ring");
        star.style.setProperty("--rx", Math.cos(angle)*radius + "px");
        star.style.setProperty("--ry", Math.sin(angle)*radius + "px");
    });
}

function deepGalaxyEnter(){
    document.body.classList.add("galaxy-speed","screen-shake");
    const flash = document.createElement("div");
    flash.className = "galaxy-flash";
    document.body.appendChild(flash);
    setTimeout(()=>{ flash.remove(); document.body.classList.remove("screen-shake"); },700);
    setTimeout(()=>document.body.classList.remove("galaxy-speed"),2000);
}

/* ================= DOMContentLoaded INIT ================= */
document.addEventListener("DOMContentLoaded", () => {

    // PAGE 1 INIT
    starsContainer = document.getElementById("stars-container");
    createStars(800);
    showPage(1);

    window.addEventListener("resize", ()=>{ if(currentPage===1) createStars(); });

    // HEARTS ON HOVER
    const hoverTargets = document.querySelectorAll(".welcome-title, .login-box, .next-btn, .poetry, .final-message, #seeWorldBtn");
    hoverTargets.forEach(el=>{
        el.addEventListener("mousemove",(e)=>{
            if(Math.random()>0.85) createHeart(e.pageX,e.pageY);
        });
    });

    // CONSTELLATION LINES
    const constellationTargets = document.querySelectorAll(".welcome-title, .login-box, .poetry, .final-message");
    constellationTargets.forEach(el=>{
        el.addEventListener("mousemove",(e)=>{
            if(Math.random()>0.9){
                points.push({x:e.pageX, y:e.pageY});
                if(points.length>1){
                    const p1 = points[points.length-2];
                    const p2 = points[points.length-1];
                    createConstellation(p1.x,p1.y,p2.x,p2.y);
                }
                if(points.length>6) points.shift();
            }
        });
    });

    // PAGE 2 NEXT BUTTON
    document.querySelector(".next-btn")?.addEventListener("click",(e)=>{
        if(currentPage!==2) return;
        heartExplosion(e.clientX,e.clientY);
        setTimeout(goToPage3,1200);
    });

    // FINAL PROPOSAL BUTTON
    const finalBtn = document.querySelector("#seeWorldBtn");
    if(finalBtn){
        finalBtn.addEventListener("click",(e)=>{
            deepGalaxyEnter();
            createCinematicBlackHole(e.clientX, e.clientY);
            showFinalWorld();
            galaxyTransition();
            heartExplosion(e.clientX,e.clientY);
            setTimeout(()=>{
                showRing(e.clientX,e.clientY);
                startRoseRain(500);
                showHandwriting("I LOVE YOU");
                starsFormName("R ❤ N");
            },1500);
            setTimeout(secretYes,2200);
            setTimeout(()=>{ whiteGlowYES(); confettiHearts(); },2000);
        });
    }

    // WELCOME BUTTON
    document.getElementById("welcomeAngelBtn")?.addEventListener("click",(e)=>{
        heartExplosion(e.clientX,e.clientY);
        doubleBlackHoleTransition();
        suckToPage3(e);

    });

});

// ======================================================
// 🔥 Cinematic Black Hole + Particle Pull + Warp + Light Streaks
// ======================================================
function createCinematicBlackHole(x, y) {
    const hole = document.createElement("div");
    hole.className = "black-hole";
    hole.style.left = (x - 150) + "px";
    hole.style.top  = (y - 150) + "px";
    document.body.appendChild(hole);

    hole.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 0.5 },
        { transform: 'scale(1.5) rotate(720deg)', opacity: 1 },
        { transform: 'scale(0) rotate(1440deg)', opacity: 0 }
    ], { duration: 2000, easing: 'ease-in-out' });

    // Particles
    for(let i=0;i<350;i++){
        const p = document.createElement("div");
        p.className = "bh-particle";
        p.style.left = Math.random()*window.innerWidth + "px";
        p.style.top = Math.random()*window.innerHeight + "px";
        document.body.appendChild(p);

        const angle = Math.atan2(y - parseFloat(p.style.top), x - parseFloat(p.style.left));
        const distance = Math.random()*350 + 150;

        p.animate([
            { transform: 'translate(0,0) scale(1)', opacity: 1 },
            { transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px) scale(0)`, opacity: 0 }
        ], { duration: 1800 + Math.random()*400, easing: 'ease-in' });

        setTimeout(()=>p.remove(),2200);
    }

    // Light streaks
    for(let i=0;i<35;i++){
        const streak = document.createElement("div");
        streak.className = "bh-streak";
        streak.style.left = x + "px";
        streak.style.top = y + "px";
        const angle = Math.random()*360;
        streak.style.transform = `rotate(${angle}deg)`;
        document.body.appendChild(streak);

        streak.animate([
            { transform: `rotate(${angle}deg) scale(0)`, opacity: 1 },
            { transform: `rotate(${angle}deg) scale(1.2)`, opacity: 0 }
        ], { duration: 1200 + Math.random()*600, easing: 'ease-out' });

        setTimeout(()=>streak.remove(),2000);
    }

    // Screen warp
    document.body.style.transition = "transform 0.5s ease-in-out";
    document.body.style.transform = "scale(1.08) rotateZ(0.5deg)";
    setTimeout(()=>{
        document.body.style.transform = "scale(1) rotateZ(0deg)";
    },500);

    setTimeout(()=>hole.remove(),2000);
}

// 🌌 Black Hole Suck → Go To Page 2
function suckToPage2(e){
    const x = e.clientX;
    const y = e.clientY;

    // black hole effect
    createCinematicBlackHole(x,y);
    deepGalaxyEnter();

    // zoom everything
    document.body.classList.add("suck-zoom");

    // overlay
    const ov = document.createElement("div");
    ov.className = "suck-overlay";
    document.body.appendChild(ov);

    // go page2 after effect
    setTimeout(()=>{
        document.body.classList.remove("suck-zoom");
        ov.remove();
        showPage(2);
    },1200);
}

function suckToPage3(e) {
    const btns = document.querySelectorAll("button, .next-btn, #seeWorldBtn, #welcomeAngelBtn");
    btns.forEach(b => b.disabled = true); // ❌ disable all buttons

    const x = e.clientX;
    const y = e.clientY;

    createCinematicBlackHole(x, y);

    document.body.style.transition = "all 1.6s ease-in";
    document.body.style.transform = "scale(0.05)";
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transform = "scale(1)";
        document.body.style.opacity = "1";

        goToPage3();   // ✅ Page 3 open

        btns.forEach(b => b.disabled = false); // ✅ enable buttons again

    }, 1700);
}

function doubleBlackHoleTransition() {
    const btns = document.querySelectorAll("button, .next-btn, #seeWorldBtn, #welcomeAngelBtn");
    btns.forEach(b => b.disabled = true);

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    createCinematicBlackHole(x, y);

    const textEls = document.querySelectorAll("h1, h2, p, .poetry, .welcome-title");
    textEls.forEach(el => {
        el.style.transition = "all 1s ease-in";
        el.style.transform = "scale(0)";
        el.style.opacity = "0";
    });

    setTimeout(() => {
        document.body.style.transition = "all 1.2s ease-in";
        document.body.style.transform = "scale(0.05)";
        document.body.style.opacity = "0";
    }, 900);

    setTimeout(() => {
        goToPage3();   // 👈 page change

        document.body.style.transform = "scale(1)";
        document.body.style.opacity = "1";

        textEls.forEach(el => {
            el.style.transform = "";
            el.style.opacity = "";
        });

        btns.forEach(b => b.disabled = false); // ✅ enable buttons again

    }, 1800);

    setTimeout(() => {
        createCinematicBlackHole(x, y);
        heartExplosion(x, y);
        showHandwriting("THANKS TO COME MY LIFE ✨");
    }, 2000);
}

function shockwave(x,y){
    const wave = document.createElement("div");
    wave.style.position = "fixed";
    wave.style.left = (x-10)+"px";
    wave.style.top = (y-10)+"px";
    wave.style.width = "20px";
    wave.style.height = "20px";
    wave.style.borderRadius = "50%";
    wave.style.border = "3px solid white";
    wave.style.pointerEvents = "none";
    wave.style.zIndex = 9999;
    document.body.appendChild(wave);

    wave.animate([
        {transform:"scale(0.5)", opacity:1},
        {transform:"scale(20)", opacity:0}
    ], {duration:900, easing:"ease-out"});

    setTimeout(()=>wave.remove(),900);
}

function fireworkBurst(x,y){
    for(let i=0;i<90;i++){
        const p = document.createElement("div");
        p.style.position="fixed";
        p.style.width="6px";
        p.style.height="6px";
        p.style.borderRadius="50%";
        p.style.background="hsl("+Math.random()*360+",100%,60%)";
        p.style.left=x+"px";
        p.style.top=y+"px";
        p.style.zIndex=9999;
        document.body.appendChild(p);

        const angle = Math.random()*2*Math.PI;
        const dist = 120 + Math.random()*120;

        p.animate([
            {transform:"translate(0,0)", opacity:1},
            {transform:`translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`, opacity:0}
        ], {duration:1200, easing:"ease-out"});

        setTimeout(()=>p.remove(),1200);
    }
}

function sparkleRain(count=450){
    for(let i=0;i<count;i++){
        const s = document.createElement("div");
        s.innerHTML="✨";
        s.style.position="fixed";
        s.style.left=Math.random()*100+"vw";
        s.style.top="-20px";
        s.style.fontSize=(12+Math.random()*20)+"px";
        s.style.zIndex=9999;
        document.body.appendChild(s);

        s.animate([
            {transform:"translateY(0)", opacity:1},
            {transform:"translateY(100vh)", opacity:0}
        ], {duration:2000+Math.random()*1200, easing:"linear"});

        setTimeout(()=>s.remove(),3200);
    }
}

function cloudWelcomeSequence(){

    const ov = document.createElement("div");
    ov.className="cloud-overlay";
    document.body.appendChild(ov);

    // ☁️ dense clouds cover
    for(let i=0;i<20;i++){
        const c=document.createElement("div");
        c.className="cloud";
        c.style.top=(Math.random()*95)+"%";
        c.style.left=(Math.random()*100)+"%";
        ov.appendChild(c);
    }

    // text container
    const txt=document.createElement("div");
    txt.className="cloud-text";
    ov.appendChild(txt);

    // ⚡ random lightning background
    const lightningInterval = setInterval(()=>{
        const l=document.createElement("div");
        l.className="lightning";
        ov.appendChild(l);
        setTimeout(()=>l.remove(),150);
    },900);

    // ⚡⚡ lightning draws letters
    setTimeout(()=>{
        lightningDrawText(txt,"Welcome My Heart Beat 💖");
    },1200);

    // 🌧️ rain AFTER text complete
    setTimeout(()=>{
        sparkleRain(120);
        startRoseRain(100);
        confettiHearts();
    },5200);

    // 🌫 fade → page2
    setTimeout(()=>{
        clearInterval(lightningInterval);
        ov.style.transition="opacity 1.2s";
        ov.style.opacity=0;

        setTimeout(()=>{
            ov.remove();
            showPage(2);
        },1200);

    },6800);
}



function typeCloudText(el, text, speed=70){
    let i=0;
    el.style.opacity=1;

    const t = setInterval(()=>{
        el.innerHTML += text[i];
        i++;
        if(i>=text.length) clearInterval(t);
    }, speed);
}

function lightningDrawText(container, text){

    container.innerHTML = "";

    text.split("").forEach(ch=>{
        const span = document.createElement("span");
        span.className = "cloud-letter";
        span.textContent = ch === " " ? "\u00A0" : ch;
        container.appendChild(span);
    });

    const letters = container.querySelectorAll(".cloud-letter");

    letters.forEach((el,i)=>{

        setTimeout(()=>{

            // ⚡ lightning flash overlay
            const l=document.createElement("div");
            l.className="lightning";
            document.querySelector(".cloud-overlay").appendChild(l);
            setTimeout(()=>l.remove(),180);

            // letter emerge from cloud blur
            el.style.transition="all .6s ease-out";
            el.style.opacity=1;
            el.style.filter="blur(0px)";
            el.classList.add("letter-flash");

            setTimeout(()=>el.classList.remove("letter-flash"),250);

        }, i*120); // draw speed
    });
}
