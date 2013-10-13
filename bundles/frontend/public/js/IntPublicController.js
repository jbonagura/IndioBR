function IntPublicController($scope) 
{
	 $scope.items = ['code', 'call', 'text', 'projects', 'whiteboard', 'draw', 'chat', 'screen', 
	                 'research', 'calc', 'slides', 'debug', 'music'];
	 $scope.selection = $scope.items[0];
}
