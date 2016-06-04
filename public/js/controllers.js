'use strict';

var app = angular.module('spApp');

app.controller('mainCtrl', function($scope, $state, Auth) {

  app.run(function(Auth) {
    Auth.getProfile();
  });

  $scope.$watch(function() {
    return Auth.currentUser;
  }, function(newVal, oldVal) {
    $scope.currentUser = newVal;
  });
  
  $scope.logout = () => {
    Auth.logout()
    .then(res => {
      $state.go('home');
    })
  }

  // $scope.logout = () => {
  //   Auth.logout();
  // }
  //
  // $scope.isAuthenticated = () => {
  //   return Auth.isAuthenticated();
  // }
});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl!');
});

app.controller('authFormCtrl', function($scope, $state, Auth, $auth) {

  // console.log('Auth', Auth);
  // console.log('$state.current.name', $state.current.name);

  $scope.currentState = $state.current.name;
  $scope.authenticate = provider => {
    $auth.authenticate(provider);
  };

  $scope.submitForm = () => {
    if($scope.currentState === 'register') {

      // register user
      if($scope.user.password !== $scope.user.password2) {

        $scope.user.password = '';
        $scope.user.password2 = '';

        alert('Passwords must match.')
      } else {
        Auth.register($scope.user)
        .then(res => {
          return Auth.login($scope.user);
        })
        .then(res => {
          $state.go('home');
        })
        .catch(res => {
          alert(res.data.error);
        });
      }
    } else {
      Auth.login($scope.user)
      // email / password from form
      // post it to /auth/login

      .then(res => {
        $state.go('home');
      })
      .catch(res => {
        alert(res.data.error);
      })
    }
  };
});


// app.controller('mainCtrl', function($scope, $state, $auth) {
//
//   $scope.logout = () => {
//     $auth.logout();
//   }
//
//   $scope.isAuthenticated = () => {
//     return $auth.isAuthenticated();
//   }
// });
//
// app.controller('homeCtrl', function($scope) {
//   console.log('homeCtrl!');
// });
//
// app.controller('authFormCtrl', function($scope, $state, $auth) {
//
//   $scope.currentState = $state.current.name;
//   $scope.authenticate = provider => {
//     $auth.authenticate(provider);
//   };
//
//   $scope.submitForm = () => {
//     if($scope.currentState === 'register') {
//
//       // register user
//       if($scope.user.password !== $scope.user.password2) {
//
//         $scope.user.password = '';
//         $scope.user.password2 = '';
//
//         alert('Passwords must match.')
//       } else {
//         $auth.signup($scope.user)
//           .then(res => {
//             return $auth.login($scope.user);
//           })
//           .then(res => {
//             $state.go('home');
//           })
//           .catch(res => {
//             alert(res.data.error);
//           });
//       }
//     } else {
//       $auth.login($scope.user)
//       // email / password from form
//       // post it to /auth/login
//
//         .then(res => {
//           $state.go('home');
//         })
//         .catch(res => {
//           alert(res.data.error);
//         })
//     }
//   };
// });

// app.controller('profileCtrl', function($scope, $user, $timeout, SimpleEBayService) {
app.controller('profileCtrl', function($scope, $timeout) {

  $scope.submitEdit = () => {
    console.log($scope.editUser);
  }

  // $scope.loading = true;
  //
  // $user.get()
  // .then(user => {
  //   console.log('user', user);
  //   $scope.user = user;
  // })
  // .catch(err => {
  //   console.log('err', err);
  // })
  // .finally(() => {
  //   $scope.loading = false;
  // })
  //
  $scope.edit = () => {

    $scope.editing = true;
    $scope.edituser = angular.copy($scope.user);
    $scope.editUser = {
      //  firstname: $scope.user.givenName,
      //  middlename: $scope.user.middlename,
      //  lastname: $scope.user.surname
    };
  }

  // $scope.cancelEdit = () => {
  //   $scope.editing = fase;
  //   $scope.editing = null;
  // }
  //
  $scope.saveEdit = () => {

    // $http.put('/users/me', $scope.editUser)
    // .then(res=> {
    //
    //     $user.get()
    //       .then(user => {
    //         $scope.user = res.data;
    //         $scope.cancelEdit();
    //       })
    //   // console.log('res'), res;
    // })
    // .catch(err => {
    //   console.log('err', err);
    // })
  }
});

app.controller('quotesCtrl', function($scope, $state, SimpleEBayResolve, SimpleEBayService, $rootScope) {

  $scope.items = SimpleEBayResolve;
  $scope.addBidding = function(newBid, itemID) {

    newBid.itemref = itemID;
    SimpleEBayService.addBid(newBid);
  };

  SimpleEBayService.getBidAll().then(function (data) {
    $scope.bids = data;
  });

});
