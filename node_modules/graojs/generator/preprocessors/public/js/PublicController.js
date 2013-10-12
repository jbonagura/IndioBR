function {GRAO}{UCFIRST}{NAME}PublicController($scope, {GRAO}{LOWER}{NAME}, share, $log) 
{	
	$scope.share = share;
	
	$scope.createOrUpdate = function() 
	{
		if($scope.{GRAO}{LOWER}{NAME}._id != null)
			{GRAO}{LOWER}{NAME}.update($scope.{GRAO}{LOWER}{NAME});
		else
			{GRAO}{LOWER}{NAME}.save($scope.{GRAO}{LOWER}{NAME});
		
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
		$scope.items = {GRAO}{LOWER}{NAME}.query();		
	};
	
	$scope.select = function(index)
	{
		$scope.{GRAO}{LOWER}{NAME} = $scope.items[index];		
	};
	
	$scope.reset = function()
	{
		delete $scope.{GRAO}{LOWER}{NAME};		
	};
}