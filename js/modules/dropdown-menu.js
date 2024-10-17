import outsideClick from "./outside-click.js";

export default function initDropdownMenu() { 

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach(menu => {
    const userEvents = ['click', 'touchstart'];
    userEvents.forEach(userEvent => menu.addEventListener(userEvent, handleClickMenu))
  })
  

  function handleClickMenu(event) {
    event.preventDefault();
    this.classList.add('ativo');
    
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('ativo')
    });   
  }
}