function sendProwl(notification) {
	var req = new XMLHttpRequest();

	req.onreadystatechange = function(){
		// TODO: do something here based on failure/success.
		if (req.readyState == 4) {
			if (req.status == 200) {
			}
		}
	};

	var params = 'apikey='+ encodeURIComponent(notification.apikey) +
	             '&application='+ encodeURIComponent('Chrome') +
	             '&event='+ encodeURIComponent(notification.name) +
	             '&url='+ encodeURIComponent(notification.text) +
	             '&description='+ encodeURIComponent(notification.text);

	req.open('POST', 'https://prowlapp.com/publicapi/add/?' + params, true);
	req.send(null);
}
