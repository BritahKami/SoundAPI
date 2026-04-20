     const audio = document.getElementById("audio");
        const volumeSlider = document.getElementById("volumeSlider");
        const timeDisplay = document.getElementById("timeDisplay");

        // Play
        function playAudio() {
            audio.play();
        }

        // Pause
        function pauseAudio() {
            audio.pause();
        }

        // Volume control
        volumeSlider.addEventListener("input", function () {
            audio.volume = volumeSlider.value;
        });

        // Skip forward
        function skipForward() {
            audio.currentTime += 10;
        }

        // Skip backward
        function skipBackward() {
            audio.currentTime -= 10;
        }

        // Update time display
        audio.addEventListener("timeupdate", function () {
            let current = formatTime(audio.currentTime);
            let duration = formatTime(audio.duration);
            timeDisplay.textContent = current + " / " + duration;
        });

        // Format time function
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