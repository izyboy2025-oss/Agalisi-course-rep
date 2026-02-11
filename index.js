document.getElementById("WhatsappBtn").onclick = () => {
    const phoneNumber = "233534579765"; // Ghana number
    const message = "Hello Benjamin! I'm reaching out from the Comp Eng '26 class..."; // Pre-fill message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};