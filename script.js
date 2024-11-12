// Date di inizio e fine
        const startDate = new Date("2024-11-11");
        const endDate = new Date("2024-11-29");

        function updateProgressBar() {
            const today = new Date();
            const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
            const daysPassed = (today - startDate) / (1000 * 60 * 60 * 24);
            const progressPercentage = Math.min((daysPassed / totalDays) * 100, 100);

            // Aggiornamento della barra e del testo
            document.getElementById("progress-fill").style.width = `${progressPercentage}%`;
            document.getElementById("progress-text").textContent = `${Math.round(progressPercentage)}%`;
        }

        // Aggiorna la barra ogni giorno
        updateProgressBar();
        setInterval(updateProgressBar, 86400000); // 86400000 ms = 24 ore
