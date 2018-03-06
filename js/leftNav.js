angular.module('leftNav', [])
.controller('leftNavController', ['$scope', function ($scope) {
	//左侧导航效果
	$(".navLists .left-list-title").click(function() {
		$(this).addClass('leftNavHigh').next().slideToggle('slow');
		$(this).parent().siblings().children('div').removeClass('leftNavHigh').next().slideUp('slow');
	});

	//左侧菜单详情
	$(".left-list-details li").click(function() {
		$(this).addClass('listDetailsHigh').siblings().removeClass('listDetailsHigh');
	});
}])
