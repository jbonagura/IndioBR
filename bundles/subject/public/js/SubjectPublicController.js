function SubjectPublicController($scope, Subject, share, $log) 
{	
	$scope.share = share;
	$scope.createOrUpdate = function() 
	{
		if($scope.subject._id != null)
			subject.update($scope.subject);
		else
			subject.save($scope.subject);
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
		$scope.items = subject.query();		
	};
	$scope.select = function(index)
	{
		$scope.subject = $scope.items[index];		
	};
	$scope.reset = function()
	{
		delete $scope.subject;		
	};
}
