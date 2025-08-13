const headerWrapper = document.getElementById('header-wrapper');
const right = document.getElementById('right');

right.addEventListener('scroll', () => {
  headerWrapper.style.transform = `translate(50%, -${right.scrollTop}px)`;
});
