document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.getElementById("timestamp");
    timestamp.value = new Date().toISOString();
});
