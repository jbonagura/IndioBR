function TopbarPublicController($scope, $timeout, $http, share, $log) 
{
	$scope.share = share;
	$scope.eventTimer = function(){
		$scope.share.events();
		
		eventTime = $timeout($scope.eventTimer, 3000);
	};
	 
	var eventTimer = $timeout($scope.eventTimer, 3000);
	    
	$scope.stop = function(){
		$timeout.cancel(eventTimer);
	};
}
