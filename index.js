var accentMap ={
	"á": "a", "ã": "a", "â": "a", "à": "a", "ä": "a",
	"é": "e", "è": "e", "ê": "e", "ë": "e", 
	"í": "i", "ì": "i", "ï": "i", 
	"ó": "o", "ò": "o", "ô": "o", "õ": "o", "ö": "o",
	"ú": "u", "ù": "u", "û": "u", "ü": "u", 
	"ç": "c"
}

module.exports = {
	normalize: function normalize(term) {
		var ret = "";
		for (var i = 0; i < term.length; i++) {
			ret += accentMap[term.charAt(i)] || term.charAt(i);
		}
		return ret;
	}
}

/*
	$("#busca").autocomplete({
		minLength: 3,
		source: function (request, response) {
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
			response($.grep(availableTags, function (value) {
				value = value.label || value.value || value;
				return matcher.test(value) || matcher.test(normalize(value));
			}));
		}
	});
	$("#txtSearch").autocomplete({
		minLength: 3,
		source: function (request, response) {
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
			response($.grep(availableTags, function (value) {
				value = value.label || value.value || value;
				return matcher.test(value) || matcher.test(normalize(value));
			}));
		}
	});
*/