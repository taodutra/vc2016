require('./app-rafael');

// The one and only global
window.App = window.App || {
	
	init: function(){

		// vars
		this.headerHeight = $('.navbar').height();

		// actions

		this.setLinks();

		// scroll
		this.areas = document.getElementsByClassName('area');
		this.areasNav = document.getElementsByClassName('areas-nav');
		this.areasActive = 0;
		this.areasActiveOld = 0;
		this.areasScrolling = 0; // int to scroll on click
		window.onscroll = function (e) {
			if(!App.isMobileView() ){
				App.onScroll();				
			}
		} 

	},

	setLinks: function(){

		var $scrollLink = $('a[rel=scroll]');

		$scrollLink.on('click', function(e){
			e.preventDefault();

			App.areasScrolling = 1;

			$t = $(this), target = $t.attr('href'), offset = App.isMobileView() ? 0 : App.headerHeight;

			App.scrollTo(target,offset);
		});

	},

	scrollTo: function(target, offset){
		target = target || '#';
		offset = offset || 0;


		var y = $(target).position().top - offset;

		$('body').stop().animate({
	        scrollTop: y
	    }, 500,function(){
	    	App.areasScrolling = 0;
			App.onScroll();
	    });


	},

	onScroll: function(){

		n = window.pageYOffset;

		var objTop;

		[].map.call(this.areas, function(obj, i) {
			objTop = obj.offsetTop - App.headerHeight;
			App.areasActive = n >= objTop ? i : App.areasActive;
		});

		if(App.areasActive === App.areasActiveOld || App.areasScrolling === 1) return;

		// classList support - ie 11 =/
		// remove active
		App.areasNav[App.areasActiveOld].className = 'areas-nav';
		
		// apply active
		App.areasNav[App.areasActive].className = 'areas-nav active';

		App.areasActiveOld = App.areasActive;

	},

	isMobileView: function(){
		return window.innerWidth < 850 ? true : false;
	}

};

$(function() {
	App.init();
});