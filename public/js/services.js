'use strict';

var app = angular.module('spApp');

app.service('Auth', function($http, $q) {
  this.register = userObj => {
    return $http.post('/api/users/register', userObj);
  };

  this.login = userObj => {
    return $http.post('/api/users/login', userObj)
      .then(res => {
        return this.getProfile();
      });
  };

  this.logout = () => {
    return $http.delete('/api/users/logout')
      .then(res => {
        this.currentUser = null;
        return $q.resolve();
      });
  };

  this.getProfile = () => {
    return $http.get('/api/users/profile')
      .then(res => {
        this.currentUser = res.data;
        return $q.resolve(res.data);
      })
      .catch(res => {
        this.currentUser = null;
        return $q.reject(res.data);
      });
  };
});

app.service('SimpleEBayService', function($http, $q) {

  this.getBidAll = () => {
      return $http({
        method: "GET",
        url: `/bids`,
        cache: false
      })
      .then(res => $q.resolve(res.data));
  };

  this.getItemAll = () => {
    return $http({
      method: "GET",
      url: `/items`,
      cache: false
    })
    .then(res => $q.resolve(res.data));
  };

  this.addBid = function(bid) {
    bid.name = 'name field3';
    return $http.post(`/bids/addBid`, bid);
  };
});
