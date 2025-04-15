document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("form").forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      window.location.href = "/thanks.html";
    });
  });
});
