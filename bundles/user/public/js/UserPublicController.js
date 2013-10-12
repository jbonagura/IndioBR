function UserPublicController($scope, user, share, $log) 
{	
	$scope.share = share;
	
	$scope.createOrUpdate = function() 
	{
		if($scope.user._id != null)
			user.update($scope.user);
		else
			user.save($scope.user);
		
		$scope.reset();
		$scope.query();
	};
	
	$scope.destroy = function(index)
	{
		//var id = $scope.items[index]._id;
		$scope.items[index].$delete();
		$scope.items.splice(index, 1);
		$scope.query();
	};
	
	$scope.query = function()
	{
		$scope.items = user.query();		
	};
	
	$scope.select = function(index)
	{
		$scope.user = $scope.items[index];		
	};
	
	$scope.reset = function()
	{
		delete $scope.user;		
	};
}
