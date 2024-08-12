const navList = document.querySelector('.nav-list');
const btn = document.querySelector('.btn');
const cancelBtn = document.querySelector('.cancel-btn');
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#5F80ED',
        'secondary': '#F2F2F2',
      },
    },
  },
};



function menuToggle() {
  navList.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');
  btn.classList.toggle('hidden');
}