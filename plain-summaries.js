// Plain Language Summary Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.plain-summary-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const summaryId = this.getAttribute('data-summary');
      const summaryContent = document.getElementById(summaryId);

      if (summaryContent) {
        // Toggle the display
        summaryContent.classList.toggle('show');

        // Update button text
        if (summaryContent.classList.contains('show')) {
          this.innerHTML = '📖 Hide Summary';
        } else {
          this.innerHTML = '📖 Plain Summary';
        }

        // Smooth scroll to summary if opening
        if (summaryContent.classList.contains('show')) {
          setTimeout(() => {
            summaryContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      }
    });
  });
});
