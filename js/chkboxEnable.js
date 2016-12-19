var link = $("#to-toggle");
$("#toggle").on("change", function() {
	if(this.checked) {
		link.attr("href", link.data("href")).removeAttr('disabled').removeClass('disabled');
	} else {
		link.removeAttr("href").attr('disabled', 'disabled').addClass('disabled');
	}
});