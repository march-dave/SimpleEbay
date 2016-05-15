'use strict';

var app = angular.module('spApp');

// localhost:3000/items
app.service('SimpleEBayService', function($http, $q) {

  console.log('service getItemAllaaaa');

  this.getItemAll = () => {
    return $http.get('/items');
  }

  // this.getItemAll = () => {
  //   return $http({
  //     method: "GET",
  //     url: `/items`,
  //     cache: false
  //   })
  //   .then(res => $q.resolve(res.data));
  // };

});


// app.service('PropertymgrService', function($http, $q) {
//
//   this.getPropertyAll = () => {
//     return $http({
//       method: "GET",
//       url: `/api/properties`,
//       cache: false
//     })
//     .then(res => $q.resolve(res.data));
//   };
//   this.getPropertyById = function(id) {
//      return $http.get(`/api/properties/${id}`);
//    };
//
//   this.createProperty = newProperty => {
//      return $http.post('/api/properties', newProperty);
//    };
//
//   this.deleteProperty = function(id) {
//     return $http.delete(`/api/properties/${id}`);
//   };
//
//   this.editProperty = function(id, property) {
//     return $http.put(`/api/properties/${id}`, property);
//   }
// });
