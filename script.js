     const audio = document.getElementById("audio");
        const volumeSlider = document.getElementById("volumeSlider");
        const timeDisplay = document.getElementById("timeDisplay");

       
        function playAudio() {
            audio.play();
        }

      
        function pauseAudio() {
            audio.pause();
        }

     
        volumeSlider.addEventListener("input", function () {
            audio.volume = volumeSlider.value;
        });

       
        function skipForward() {
            audio.currentTime += 10;
        }

     
        function skipBackward() {
            audio.currentTime -= 10;
        }

       
        audio.addEventListener("timeupdate", function () {
            let current = formatTime(audio.currentTime);
            let duration = formatTime(audio.duration);
            timeDisplay.textContent = current + " / " + duration;
        });

        function formatTime(time) {
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);
            if (seconds < 10) seconds = "0" + seconds;
            return minutes + ":" + seconds;
        }
 
        audio.addEventListener("ended", function () {
    audio.play().catch(() => {
        console.log("Replay blocked by browser");
      });
    });
