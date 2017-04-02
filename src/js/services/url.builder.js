angular
  .module('weather')
  .factory('urlBuilder', urlBuilder);

urlBuilder.$inject = [];
function urlBuilder() {

  function yahoo(city) {
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(100)%20where%20text%3D%22${city}%22) and u='c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
  }
  return {
    yahoo
  };
}
