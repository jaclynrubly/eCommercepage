var viewModel = {
	data: {
		shoeOptions: [{
			"shoeColor": "Mint Green",
			"RRP": "$150",
			"discountPrice": "$114.00",
			"className": "cpc-product-green",
			"rating": 92,
			"inputID": "rad1",
			"labelClass": "cpc-radio-green",
			"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
		}, {
			"shoeColor": "Vibrant Yellow",
			"RRP": "$140",
			"discountPrice": "$109.00",
			"className": "cpc-product-yellow",
			"rating": 50,
			"inputID": "rad2",
			"labelClass": "cpc-radio-yellow",
			"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
		}, {
			"shoeColor": "Deep Purple",
			"RRP": "$140",
			"discountPrice": "$129.00",
			"className": "cpc-product-purple",
			"rating": 61,
			"inputID": "rad3",
			"labelClass": "cpc-radio-purple",
			"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
		}, {
			"shoeColor": "Pitch Black",
			"RRP": "$190",
			"discountPrice": "$159.00",
			"className": "cpc-product-black",
			"rating": 100,
			"inputID": "rad4",
			"labelClass": "cpc-radio-black",
			"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
		}, {
			"shoeColor": "Washout Grey",
			"RRP": "$150",
			"discountPrice": "$112.00",
			"className": "cpc-product-grey",
			"rating": 10,
			"inputID": "rad5",
			"labelClass": "cpc-radio-grey",
			"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
		}],
		currentShoeOption: ko.observable({
				"shoeColor": "Mint Green",
				"RRP": "$150",
				"discountPrice": "$114.00",
				"className": "cpc-product-green",
				"rating": 92,
				"inputID": "rad1",
				"shoeImage": "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png"
			}) // Passing this first line in to set as a default value
	},
	functions: {
		colorOptionClick: function(index) {
			viewModel.data.currentShoeOption(viewModel.data.shoeOptions[index]);
			var image = $('#cpc-img').clone().removeClass();
			$('#cpc-img').remove();
			$('.cpc-img-wrapper').append(image);
			$('#cpc-img').addClass('cpc-product-shoe-img animated fadeInLeft');
			$('#cpc-img').prop("src", viewModel.data.currentShoeOption().shoeImage)

		},
		checkedRadio: function() {
			return true;
		},
		shareShoe: function() {
			var link = window.location.href,
				text = "Check%20out%20this%20awesome%20Nike%20Roshe%20Run%20shoe%20on%20",
				tweet = "https://twitter.com/intent/tweet?text=" + text + "&url=" + encodeURI(link);
			window.open(tweet, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
		}
	}
};
ko.applyBindings(viewModel);

$(document).ready(function() {
	$("#rad1").prop("checked", true)
});

$.preloadImages = function() {
	for (var i = 0; i < arguments.length; i++) {
		$("<img />").attr("src", arguments[i]);
	}
}

$.preloadImages("https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png", "hhttps://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png", "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png", "https://www.pngarts.com/files/1/Baby-Stroller-PNG-Pic.png");