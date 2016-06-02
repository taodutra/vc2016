require('./app-rafael');

// The one and only global
window.App = window.App || {
	
	init: function(){

		console.log('init!');

		this.headerHeight = $('.navbar').height();

		console.log(this.headerHeight);

		this.setLinks();

	},

	setLinks: function(){

		var that = this,
			$scrollLink = $('a[rel=scroll]');

		$scrollLink.on('click', function(e){
			e.preventDefault();

			$t = $(this), target = $t.attr('href'), offset = that.isMobileView() ? 0 : that.headerHeight;

			that.scrollTo(target,offset);
		});

	},

	scrollTo: function(target, offset){
		target = target || '#';
		offset = offset || 0;


		var y = $(target).position().top - offset;

		console.log(y);

		$('html, body').stop().animate({
	        scrollTop: y
	    }, 500);

		// $('html,body').animate({ scrollTop: y+'px' }, 500);

	},

	isMobileView: function(){
		return window.innerWidth < 850 ? true : false;
	}

};

$(function() {
	App.init();
});