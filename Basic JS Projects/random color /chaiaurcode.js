const randomColor = function () {
            const hex = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        let intervalId = null; // Track the interval

        const startChangingColor = function () {
            // Prevent multiple intervals
            if (intervalId !== null) return;

            intervalId = setInterval(function () {
                document.body.style.backgroundColor = randomColor();
            }, 1000);
        };

        const stopChangingColor = function () {
            clearInterval(intervalId);
            intervalId = null; // Reset to allow restarting
        };

        document.querySelector("#start").addEventListener("click", startChangingColor);
        document.querySelector("#stop").addEventListener("click", stopChangingColor);