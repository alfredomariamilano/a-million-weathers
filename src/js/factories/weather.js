angular
.module('weather')
.factory('Weather', Weather);

Weather.$inject = ['$resource'];
function Weather($resource) {
  return {
    query: function(url){
      return $resource(url, {
        'query': {
          method: 'GET',
          isArray: true
        }
      }).get();
    }
  };
}
