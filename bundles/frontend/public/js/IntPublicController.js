function IntPublicController($scope) 
{
	 $scope.items = ['code', 'slides', 'text', 'projects', 'whiteboard', 'draw', 'chat', 'screen', 
	                 'research', 'calc', 'debug', 'music'];
	 $scope.selection = $scope.items[0];
}
