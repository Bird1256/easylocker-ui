// size.js
document.querySelectorAll('.size-card').forEach(card => {
  card.addEventListener('click', () => {
    const size = card.dataset.size;
    localStorage.setItem('locker_size', size);
    // ไปหน้า open.html พร้อมพาราม size
    window.location.href = `open.html?size=${size}`;
  });
});
