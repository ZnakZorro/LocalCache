/*
(function () {
    var elements = document.querySelectorAll('*[data-store=true]');
    for (var i = elements.length - 1; i >= 0; i--) {
        var e = elements[i];
console.log('set=');console.log(e);		
        var attr = e.attributes;
        var item = {
            type: attr['data-type'].value,
            version: attr['data-version'].value,
            size: typeof attr['data-length'] != 'undefined' ? attr['data-length'].value : e.innerHTML.length,
            data: e.innerHTML
        };
        cache[attr['data-name'].value] = item;
        document.cookie = 'c_' + attr['data-name'].value + '=' + attr['data-version'].value + ';expires=Thu, 31 Dec 2015 18:40:22 GMT; path=/';
    };
    localStorage.setItem('lfc', JSON.stringify(cache));
})();
var test = 1;

*/

function akcjastart() {
//console.log('start');
    var elements = document.querySelectorAll('*[data-store=true]');
    for (var i = elements.length - 1; i >= 0; i--) {
        var e = elements[i];
//console.log('set=');console.log(e);		
        var attr = e.attributes;
		var now = new Date();
		var teraz=now.getTime();
        var item = {
            type: attr['data-type'].value,
            version: attr['data-version'].value,
            size: typeof attr['data-length'] != 'undefined' ? attr['data-length'].value : e.innerHTML.length,
            data: e.innerHTML,
			czas: teraz
        };
        cache[attr['data-name'].value] = item;
        //document.cookie = 'c_' + attr['data-name'].value + '=' + attr['data-version'].value + ';expires=Thu, 31 Dec 2015 18:40:22 GMT; path=/';
		//console.log(document.cookie);
    };
    localStorage.setItem('lfc', JSON.stringify(cache));
}