angular
.module('weather')
.controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['urlBuilder', 'Weather'];
function mainCtrl(urlBuilder, Weather) {
  const vm = this;

  vm.getWeather     = getWeather;
  vm.retrieveImage  = retrieveImage;
  vm.openModal      = openModal;
  vm.searchSettings = searchSettings;

  vm.searchSettings();

  function retrieveImage(string) {
    return string.substring(string.indexOf('http://'), string.indexOf('gif')+3);
  }

  function getWeather(city) {
    Weather
    .query(urlBuilder.yahoo(city))
    .$promise
    .then(data => {
      if (data.query.results) {
        vm.places = data.query.results.channel.length > 1 ? data.query.results.channel : [data.query.results.channel];
        vm.notFound = false;
      } else {
        vm.places = true;
        vm.notFound = true;
      }

    }, error => {
      console.log(error);
      vm.places = false;
      vm.notFound = false;
    });
  }

  function searchSettings() {
    const search = document.querySelector('.search');
    let timeout;

    search.addEventListener('keyup', function() {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function() {
        vm.getWeather(search.value);
      }, 500);
    });
  }

  function openModal(weather) {
    vm.modalContent = weather;
    var modal = document.querySelector('.modal');
    modal.scrollTop = 0;
    modal.classList.toggle('modal-open');
  }

}
