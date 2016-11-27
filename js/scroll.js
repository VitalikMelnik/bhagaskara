/**
 * Created by vitalik on 25.11.16.
 */



angular.module('app', ['duScroll'])
    .value('duScrollGreedy', true)
    .value('duScrollBottomSpy', true)
    .controller('rootController', function ($scope, $document) {
        $scope.submitForm = function(){
            if($scope.form.$valid){
                console.log("Form Submitted!");
            }
        }
        $scope.orderByMe = function(x) {
            if(x=='all'){
                $scope.myOrderBy=undefined;
            }else {
                $scope.myOrderBy = x;
            }
        };
        $scope.persons = [
            {
                url:'imeges/photo/1.png',
                propertis:'web'
            },{
                url:'imeges/photo/1.png',
                propertis:'web'
            },{
                url:'imeges/photo/1.png',
                propertis:'apps'
            },{
                url:'imeges/photo/1.png',
                propertis:'apps'
            },{
                url:'imeges/photo/1.png',
                propertis:'icons'
            },{
                url:'imeges/photo/1.png',
                propertis:'icons'
            },

        ];


            $scope.toTheTop = function () {
                $document.scrollTopAnimated(0, 5000).then(function () {
                    //console && console.log('scrolled');
                });
            }
            var section3 = angular.element(document.getElementById('section-3'));
            $scope.toSection3 = function () {
                $document.scrollToElementAnimated(section3);
            }
            $document.on('scroll', function () {
                var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
                var body = document.body, html = document.documentElement;
                var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                windowBottom = windowHeight + window.pageYOffset;
                if (windowBottom >= docHeight) {
                    //alert('bottom reached');
                }
            });
        }
    ).value('duScrollOffset', 30);