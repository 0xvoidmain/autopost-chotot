var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://localhost:3300');
xhr.responseType = 'blob';
xhr.onload = function()
{
    var blob = xhr.response;
	var img = $('#image_0')[0];
	var file = new File([blob], 'sample.png', {
	    lastModified: new Date(0),
	    type: "image/png"
	});
	img.files[0] = file;
	delete img.files;
	img.files = [file];
	$('#name').val("Hoang Thanh Tung");
	$('#email').val("hoangtung.utc@gmail.com");
	$('#phone').val("01656100062");
	$('#seller_addr').val("Ha noi");
	$('#category_group').val(2020);
	$('#region').val(12);
	$('#area').val(74);
	$('#p_ad').click();
	$('#regdate').val(2000);
	$('#mileage').val(3);
	$('#subject').val("Ban xe may cu");
	$('#body').val("Ban xe may cu con di rat tot, gia re");
	$('#price').val(2000000);
	$('#image_0').trigger('change');
	$('#payment_delivery').val("Giao hang nhan tien");
	setTimeout(function() {
		$('input[name=validate]').click();
	}, 5000);
};
xhr.send();