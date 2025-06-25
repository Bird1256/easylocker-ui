// เมื่อโหลด retrieve.html ใส่ค่า PIN ลงใน input
window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('pin-input');
  if (input) {
    input.value = localStorage.getItem('locker_pin') || '';
  }
});

// ปุ่มกลับหน้าหลัก
document.getElementById('btn-back')?.addEventListener('click', () => {
  window.location.href = 'index.html';
});