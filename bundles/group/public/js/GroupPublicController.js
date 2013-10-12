function GroupPublicController($scope, group, share, $log) 
{	
	$scope.share = share;
	$scope.createOrUpdate = function() 
	{
		if($scope.group._id != null)
			group.update($scope.group);
		else
			group.save($scope.group);
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
		$scope.items = group.query();		
	};
	$scope.select = function(index)
	{
		$scope.group = $scope.items[index];		
	};
	$scope.reset = function()
	{
		delete $scope.group;		
	};
}
