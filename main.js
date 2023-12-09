const side_nav = document.querySelector('aside');
const menu_icon = document.getElementById("menu-icon");

const HandelNav = () => {
  if (side_nav.style.left === '0%') {
    side_nav.style.left = '-100%';
  } else {
    side_nav.style.left = '0%';
  }
};

menu_icon.addEventListener("click", HandelNav);