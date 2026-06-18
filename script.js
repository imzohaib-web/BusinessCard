/**
 * Zohaib Umer | Interactive Digital Business Card
 * Main behavior script handling external profiles and default mail dispatch.
 */

document.addEventListener("DOMContentLoaded", () => {
  const githubBtn = document.getElementById("githubBtn");
  const emailBtn = document.getElementById("emailBtn");

  // Open GitHub profile in a secure new tab
  if (githubBtn) {
    githubBtn.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://github.com/imzohaib-web", "_blank", "noopener,noreferrer");
    });
  }

  // Open default mail client with prefilled details
  if (emailBtn) {
    emailBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const email = "umerzohaibumer@gmail.com";
      const subject = encodeURIComponent("Hello Zohaib!");
      const body = encodeURIComponent("Hi Zohaib, I saw your digital business card.");
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
});
