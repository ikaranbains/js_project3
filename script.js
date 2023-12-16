const center = document.querySelector("#center");

// Throttling function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
center.addEventListener("mousemove",
    throttleFunction((dets) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1701453031904-dbec6ef40984?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        div.classList.add("imagediv");
        document.body.appendChild(div);
        div.appendChild(img);
        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        })

        gsap.to(img, {
            y: "100%",
            ease: Power2,
            delay: .6
        })

        div.style.top = dets.clientY + 'px';
        div.style.left = dets.clientX + 'px';
        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 400));