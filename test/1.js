function loading() {
  console.log("loading");
  let progress = $(".progress"),
    progressText = progress.find(
      ".progress-text"
    ),
    imgLoad = imagesLoaded("body"),
    imgTotal = imgLoad.images.length,
    imgLoaded = 0,
    imgCurrent = 0,
    progressTimer = setInterval(
      updateProgress,
      1000 / 40
    );
  imgLoad.on("progress", function () {
    imgLoaded++;
  });

  function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100;

    imgCurrent += (target - imgCurrent) * 0.1;
    progressText.text(
      Math.floor(imgCurrent) + "%"
    );

    if (imgCurrent >= 100) {
      clearInterval(progressTimer);
      progress.delay(1000).animate(
        {
          top: "-130%",
        },
        400
      );
      // progress.style.transform = "scale(0)";
      $("body").addClass("show");

      const title01 =
        document.querySelector(".t1");
      const title02 =
        document.querySelector(".t2");
      const timg = document.querySelector(
        ".title__img"
      );
      title01.innerHTML =
        title01.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      title02.innerHTML =
        title02.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

      gsap.to(".t1", {
        ease: "bounce.out",
        duration: 3,
        rotate: 360,
        y: 0,
        x: 0,
        delay: 2,
      });
      gsap.to(".t2", {
        ease: "bounce.out",
        duration: 3,
        x: 0,
        y: 0,
        delay: 2,
      });
      gsap.to(timg, {
        opacity: 1,
        ease: "ease-in",
        y: 0,
        scale: 1,
        rotate: 360,
        duration: 2,
        delay: 3.5,
      });
    }

    if (imgCurrent > 99) {
      imgCurrent = 100;
    }
  }
}
loading();
