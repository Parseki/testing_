function toggleMenu() {
const nav = document.querySelector(".nav-links");
if (!nav) return;

nav.style.display = nav.style.display === "flex" ? "none" : "flex";
nav.style.flexDirection = "column";
}

document.getElementById("parentForm")?.addEventListener("submit", function (e) {
e.preventDefault();

const parentName = document.getElementById("parentName").value;
const childName = document.getElementById("childName").value;
const childAge = document.getElementById("childAge").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;

const formText = `
Parent Name: ${parentName}
Child Name: ${childName}
Child Age: ${childAge}
Parent Email: ${email}
Phone: ${phone}

Message:
${message}
`;

const whatsappUrl =
"https://wa.me/79131574675?text=" +
encodeURIComponent(formText);

const emailSubject = encodeURIComponent("New Training Inquiry");
const emailBody = encodeURIComponent(formText);

const emailUrl =
`mailto:renatatimofeeva9@gmail.com?subject=${emailSubject}&body=${emailBody}`;

window.open(whatsappUrl, "_blank");

setTimeout(() => {
window.location.href = emailUrl;
}, 1000);

alert(
"Thank you! Your information has been prepared for WhatsApp and Email."
);
});
