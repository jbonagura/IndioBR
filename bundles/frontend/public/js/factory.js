GraoJS.factory('user', ['$resource', 'config', function($resource, config) {
    var user = $resource(config.baseUrl+'/user/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
    return user;
}]);


GraoJS.factory('share', ['config', '$timeout', '$http', function(config, $timeout, $http) {
    var share = {
    		notify: { title: 'Notify...', content: 'Notify Content!', btn: 'N', isAutoOpen: true },
    		events: function(){
    			$http.get('/events/pull').success(function(events) {
    				for(id in events)
    				{
    					$timeout(function(){
    						share.notify.title = events[id].name;
        					share.notify.content = events[id].message;	
    					},5000);
    				}
    	 		});
    		}
    };
    return share;
}]);
