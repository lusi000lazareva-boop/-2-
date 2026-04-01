// Подсветка активной страницы
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".sidebar a");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
      }
    });
  });
  
  // Улучшенные кнопки
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.backgroundColor = "#C084F5";
    });
  
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.backgroundColor = "#D2B0F3";
    });
  
    button.addEventListener("mousedown", () => {
      button.style.transform = "scale(0.95)";
    });
  
    button.addEventListener("mouseup", () => {
      button.style.transform = "scale(1.1)";
    });
  });
  
  // Сообщение при отправке формы
  document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Спасибо! Мы получили ваше сообщение 😊");
  });