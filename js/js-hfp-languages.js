
function modalHTML(key,label,content){
	return '<div class="modal fade" id="'+key+'-modal" tabindex="-1" role="dialog" aria-labelledby="'+key+'-modal-label" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a type="button" data-dismiss="modal" href="#" class="pull-right hidden-xs"><i class="fa fa-times-circle"></i></a><h4 class="modal-title" id="'+key+'-modal-label">'+label+'</h4></div><div class="modal-body">'+content+'</div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button></div></div></div></div>';
}

$('.language-links').removeClass('hidden');
$('.language-links').each(function(){
	if($(this).find('button').length) return;
	if(!$(this).find('ul').length) {
//		$(this).find('a').addClass('btn btn-secondary btn-md');
		return;
	} var label=$(this).attr('data-button-label');
	$(this).html('<button type="button" class="btn btn-secondary btn-md" data-toggle="modal" data-target="#language-modal"><i class="fa fa-language"></i> <span class="hidden-xs hidden-sm">'+label+'</span></button>'+modalHTML('language',label,$(this).html()));
});

