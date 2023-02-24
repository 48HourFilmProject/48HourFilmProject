
if($('.event-best-of').length&&$('.screening-groups-best-of').length) {
	var scrhtml=''; $('.screening-groups-best-of').find('.tab-pane').each(function(){
		scrhtml+=$(this).html();
	});
	if($('.event-best-of').find('.event-notes').length) {
		var html=$('.event-best-of').find('.event-notes').html();
		$('.event-best-of').find('.event-notes').html(html+scrhtml);
	} else {
		var html=$('.event-best-of').find('dl').html();
		$('.event-best-of').find('dl').html(html+'<dd class="event-notes">'+scrhtml+'</dd>');
	}
} else if($('.event-premiere').length&&$('.screening-groups').length) {
	var scrhtml=''; $('.screening-groups').find('.tab-pane').each(function(){
		scrhtml+=$(this).html();
	});
	if($('.event-premiere').find('.event-notes').length) {
		var html=$('.event-premiere').find('.event-notes').html();
		$('.event-premiere').find('.event-notes').html(html+scrhtml);
	} else {
		var html=$('.event-premiere').find('dl').html();
		$('.event-premiere').find('dl').html(html+'<dd class="event-notes">'+scrhtml+'</dd>');
	}
}


$('.event-set').each(function(){
	$('body').append('<div class="modal fade active" id="modal-event-box" tabindex="-1" role="dialog" aria-labelledby="event-modal-label" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a type="button" data-dismiss="modal" href="#" class="pull-right hidden-xs"><i class="fa fa-times-circle"></i></a><h4 class="modal-title" id="event-modal-label"></h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button></div></div></div></div>');
});

$('.event-notes').addClass('hidden');
$('.event h4').each(function(){
	if(!$(this).parent().find('.event-notes').length) return;
	$(this).html('<a href="#" data-toggle="modal" data-target="#modal-event-box">'+$(this).html()+'</a>');
	$(this).find('a').click(function(){
		$('#modal-event-box .modal-title').html($(this).html());
		$('#modal-event-box .modal-body').html('<dl>'+$(this).parent().parent().find('dl').html()+'</dl>');
		$('#modal-event-box .hidden').removeClass('hidden');
	});
});

function modalHTML(key,label,content){
	return '<div class="modal fade" id="'+key+'-modal" tabindex="-1" role="dialog" aria-labelledby="'+key+'-modal-label" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a type="button" data-dismiss="modal" href="#" class="pull-right hidden-xs"><i class="fa fa-times-circle"></i></a><h4 class="modal-title" id="'+key+'-modal-label">'+label+'</h4></div><div class="modal-body">'+content+'</div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button></div></div></div></div>';
}

$('.location-links').each(function(){
	$(this).html('<div class="visible-lg">'+$(this).html()+'</div><button type="button" class="hidden-lg btn btn-primary btn-md btn-block" data-toggle="modal" data-target="#location-modal"><i class="fa fa-link"></i> '+$(this).attr('data-button-label')+'</button>'+modalHTML('location',$(this).attr('data-label'),$(this).html()));
});

$('.archive-links').each(function(){
	var label=$(this).find('h4').html();
	$(this).find('h4').remove();
	$(this).html('<button type="button" class="btn btn-primary btn-md btn-block" data-toggle="modal" data-target="#archive-modal"><i class="fa fa-history"></i> '+label+'</button>'+modalHTML('archive',label,$(this).html()));
});

$('.participating-teams').each(function(){
	if($(this).find('li').length<=12) return;
	$(this).find('h4').addClass('hidden');
	var html=$(this).html();
	$(this).find('h4').removeClass('hidden');
	$(this).find('li').each(function(){
		if(!$(this).hasClass('visible')) $(this).addClass('visible-xs visible-sm');
	});
	$(this).html($(this).html()+'<button type="button" class="btn btn-primary btn-md btn-block hidden-xs hidden-sm" data-toggle="modal" data-target="#teams-modal"><i class="fa fa-history"></i> '+$(this).attr('data-button-label')+'</button>'+modalHTML('teams',$(this).attr('data-label'),html));
});

$('.award-div').each(function(){
	var html='';
	$('.award.best-film').each(function(){html+=$(this).parent().html().replace('rank-1','');});
	$('.award.aud-fave').each(function(){html+=$(this).parent().html();});
	$(this).html('<button type="button" class="btn btn-primary btn-md btn-block" data-toggle="modal" data-target="#award-modal"><i class="fa fa-bookmark"></i> '+$(this).attr('data-button-label')+'</button>'+modalHTML('award',$(this).attr('data-label'),html+$(this).html()));
});

$('.new-films').each(function(){
	$(this).find('h4').remove();
	$(this).html('<button type="button" class="btn btn-primary btn-md btn-block" data-toggle="modal" data-target="#films-modal"><i class="fa fa-film"></i> '+$(this).attr('data-button-label')+'</button>'+modalHTML('films','<i class="fa fa-film"></i> '+$(this).attr('data-label'),$(this).html()));
});

/*
if(1<$('.sponsor-div .sponsor-set').length){
	var sponsdiv=$('.sponsor-div');
	while(1<sponsdiv.find('.sponsor-set').length){
		var clonediv=sponsdiv.clone();
		while(1<clonediv.find('.sponsor-set').length) {
			clonediv.find('.sponsor-set:last-child').remove();
		} $('.sponsor-div').find('.sponsor-set:first-child').remove();
		clonediv.insertBefore($('.sponsor-div'));
	}
}
*/


function resizeDiv(div){
	var classOpts=['col-md-7','col-md-5'];
//	var classOpts=['col-md-5','col-md-7'];
	for(i in classOpts) {
		div.removeClass(classOpts[i]);
	} div.addClass('full-width');
	var minHt=$('.mainarea').height();
	div.removeClass('full-width');
	var useClass=''; var useClass2='';
	for(i in classOpts) {
		div.addClass(classOpts[i]);
		var ht=$('.mainarea').height();
		if(ht<minHt) {minHt=ht; useClass=classOpts[i];}
//		if(ht<=minHt) {minHt=ht; useClass=classOpts[i];}
		div.removeClass(classOpts[i]);
	} if(useClass) {
		div.addClass(useClass);
		if(useClass='col-md-5') {
			var delta=($('.mainarea').offset().left+$('.mainarea').width())-(div.offset().left+div.width());
			if(30<delta) {
				div.removeClass('col-md-5');
				div.addClass('col-md-7');
			}
		}
	} else div.addClass('full-width');
}

$(window).resize(function(){
	if($('.facebook-plugin').length){
		var src=$('.facebook-plugin').find('iframe').attr('src').replace('/like','');
		if($(document).width()<975) {
			$('.facebook-plugin').height(56); src+='/like';
		} else $('.facebook-plugin').height(225);
		$('.facebook-plugin').find('iframe').attr('src',src);
	}
	resizeItems=['.event-list-div','.aud-award-div','.team-list-div','.prev-film-div','.sponsor-div'];
	for(i in resizeItems) $(resizeItems[i]).removeClass('col-xs-12');
	for(i in resizeItems) $(resizeItems[i]).each(function(){resizeDiv($(this))});
	for(i in resizeItems) $(resizeItems[i]).addClass('col-xs-12');
	for(i in resizeItems) $(resizeItems[i]).each(function(){resizeDiv($(this))});
});

$(document).ready(function(){
//	alert('ready');
	$(window).resize();
});

