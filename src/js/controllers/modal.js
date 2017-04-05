angular
.module('weather')
.controller('modalCtrl', modalCtrl);

modalCtrl.$inject = [];
function modalCtrl() {
  const vm = this;

  vm.modal        = document.querySelector('.modal');
  vm.content      = document.querySelector('.modal-content');
  vm.closeButtons = document.querySelectorAll('.close-modal');

  // set close modal behaviour
  for (var i = 0; i < vm.closeButtons.length; ++i) {
    vm.closeButtons[i].addEventListener('click', function() {
      vm.content.scrollTop = 0;
      vm.modal.classList.toggle('modal-open');
    });
  }
  // close modal if clicked outside content area
  document.querySelector('.modal-inner').addEventListener('click', function() {
    vm.content.scrollTop = 0;
    vm.modal.classList.toggle('modal-open');
  });
  // prevent modal inner from closing parent when clicked
  document.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
  });
}
