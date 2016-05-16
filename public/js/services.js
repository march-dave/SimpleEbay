'use strict';

var app = angular.module('spApp');

// localhost:3000/items
app.service('SimpleEBayService', function($http, $q) {
  // this.getItemAll = () => {
  //   return $http.get('/items');
  // }

  this.getItemAll = () => {
    return $http({
      method: "GET",
      url: `/items`,
      cache: false
    })
    .then(res => $q.resolve(res.data));
  };

  this.addBid = function(bid) {

    var obj = {
       userref: '5737b23dfcb058aef76059f9',
       itemref: '5737c1409041926bf8a741f6',
       bidding: bid,
       name: 'name field2'
    };

    console.log('bid', obj);
    return $http.post(`/bids/addBid`, obj);

    // return $http({
    //   method: "POST",
    //   url: `/bids/addBid`,
    //   data: { bid: bid },
    //   cache: false
    // })
    // .then();


  };

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
