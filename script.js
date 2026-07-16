const eyeIcon = document.getElementById('eyeIcon');

eyeIcon.addEventListener('pointerdown', () => {
  console.log(this);
  document.getElementById('userPassword').setAttribute('type', 'text');
});

eyeIcon.addEventListener('pointerup', () => {
  document.getElementById('userPassword').setAttribute('type', 'password');
});

eyeIcon.addEventListener('pointerleave', () => {
  document.getElementById('userPassword').setAttribute('type', 'password');
});
