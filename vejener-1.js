
var sourceText = "ЦИЪМФЧЦФОПЫЦТЕЧМОФЕШЭКШДЖЩДПСРМТЮЙУФЙГДВЬИЧВЦМЪЭИЬССЫУРМКЮЙОЧДФУЦЪСШМФНФРНЩЮЦЩТЖЦЗТЕЧИМХНВШРЭУШЗОФАСЦЦУДЖЭЦЩДЩОЧЮДИМУЬОПЮИЩНБХТТЕЦЩГЬСЩЩМГКЖШЩЗАЧЮУШВБХМХНВШЦУУЧСЛЮДУЛЗТШЛЭЪЮЙЧЯХФУРОЩГНКЯТХЩЛЩНЯОСЩГЩГФЬЩВЬНЪУЮТЖЩИЪОХЧНЭНФПЦТСБЫИВЬУСФЭОЙЪТРЖЛЮЩПНФЫЦЭЕТЩЦУУЧЪТАОИФБРРЖЭЪГТЭФЪРЛЕПМХТФГЪЮЦЖЬДЮДУМОФЫИЪРЭАТЭКЮИТОНЫЕСЭХХСШФПХМСФЧЮГФЬЩВИИЦЫЗУОПЦАДБХЭЮЛТОЦЧВБЭРЫСЕФЮРРВШЦУСИЗАШНБЭКХСЛЧДХМФУРААШИРФОСЫЦЪРБЮГЩБЛЧГЬИЮМЪААТФРЬОЦСЛФЕЗСОРЛОЦЦААЗЧРВАРЛЧЮГФЬЩВИЗСМЭОПЫШШНФЭЗЯРООГЗНЩРИЭЬТЪЖБЮКМКЯОКОИЫВФУХХСТЪСЕОСШРБВБЭЦВЫЛПЦЬОЙЯКЧИЦМЪМНЖОЩХЧШЪФЭЕХЪМТЛЖЭЪЭО";

console.log(sourceText.indexOf("ОП"))
pushBeegramInfoToArray = function(beegram, elementIndex){
	if ( !beegramsPositionsObj.hasOwnProperty(beegram)) {
		beegramsPositionsObj[beegram] = [];
	} 
	// if (typeof beegramsPositionsObj[beegram] === []) {
	if 	(beegramsPositionsObj[beegram].indexOf(elementIndex) === -1) {
		beegramsPositionsObj[beegram].push(elementIndex)
	};
	// }
};
var beegramsRanges = [];
showBeegramsInfo = function(){
	for(prop in beegramsPositionsObj) {
    	if (beegramsPositionsObj.hasOwnProperty(prop)) {
    		var i = 0;
    		var infoStr = "" + prop 
    		while (i < beegramsPositionsObj[prop].length) {
    			infoStr += " " + beegramsPositionsObj[prop][i]
    			i++
    		}
    		if (beegramsPositionsObj[prop].length == 2) {
    			console.log(infoStr);
    			beegramsRanges.push
    		}
    		
    	};
	};
};

// console.log("source text is:" + sourceText);
// var subStrings = ""	
// var i = 0;
// beegramsPositionsObj = {}
// while (i < sourceText.length - 1) {
// 	var subStrings = sourceText.substring(i, i+2);
// 	// console.log('current beegramm: ' + subStrings);

// 	var j = i; 
// 	var beegramCount = 1;
// 	pushBeegramInfoToArray(subStrings, j)
// 	while (j < sourceText.length) {
// 		var findedBeegramIndex = sourceText.indexOf(subStrings, j+1)

// 		if (findedBeegramIndex !== -1) {
// 			pushBeegramInfoToArray(subStrings, findedBeegramIndex)

// 			j = findedBeegramIndex;
// 			beegramCount++;
// 			// console.log("Beegram " + subStrings + " have index " + findedBeegramIndex)
// 		} else {
// 			j = sourceText.length;

// 		}
// 	if (beegramCount > 3) {
// 		console.log("Beegram " + subStrings + " finded " + beegramCount + " times.");
// 	}
		
// 	}
// 	i++;
// };
// showBeegramsInfo();
var loopsArray = []
var createLoopsArray = function() {
	var i = 0;
	while (i < 32) {
		var newText = sourceText.substring(i, sourceText.length) + sourceText.substring(0, i)
		console.log(newText)
		loopsArray.push(newText);
		i++
	}
}
var repeatsArray = []
var findRepeats = function() {
	var i = 1;
	while (i < 32) {
		var j = 0, length = sourceText.length
		var repeats = 0
		while (j < length) {
			if 	(loopsArray[0].charAt(j) == loopsArray[i].charAt(j)) {
				// Совпали символы на j месте в 0 и i строке
				repeats++
			}
			j++
		}
		repeatsArray.push({
			'stringNumber': i,
			'repeats': repeats
		})
		i++
	}
}
var showRepeats = function() {
	var i = 1;
	while (i < repeatsArray.length) {
		var share = repeatsArray[i].repeats / sourceText.length
		console.log(repeatsArray[i].stringNumber + " " + repeatsArray[i].repeats + " " + share)
		i++
	}
}

var language = {
"О": {"expected": 9.28},
"А": {"expected": 8.66},
"Е": {"expected": 8.10},
"И": {"expected": 7.45},
"Н": {"expected": 6.35},
"Т": {"expected": 6.30},
"Р": {"expected": 5.53},
"С": {"expected": 5.45},
"Л": {"expected": 4.32},
"В": {"expected": 4.19},
"К": {"expected": 3.47},
"П": {"expected": 3.35},
"М": {"expected": 3.29},
"У": {"expected": 2.90},
"Д": {"expected": 2.56},
"Я": {"expected": 2.22},
"Ы": {"expected": 2.11},
"Ь": {"expected": 1.90},
"З": {"expected": 1.81},
"Б": {"expected": 1.51},
"Г": {"expected": 1.41},
"Й": {"expected": 1.31},
"Ч": {"expected": 1.27},
"Ю": {"expected": 1.03},
"Х": {"expected": 0.92},
"Ж": {"expected": 0.78},
"Ш": {"expected": 0.77},
"Ц": {"expected": 0.52},
"Щ": {"expected": 0.49},
"Ф": {"expected": 0.40},
"Э": {"expected": 0.17},
"Ъ": {"expected": 0.04}
}

createLoopsArray();
findRepeats();
showRepeats();

var groups = []
var keyLength = 5
analise = function() {
	var i = 0
	while  (i < keyLength) {
		var j = i
		while (j < sourceText.length) {
			var char = sourceText.charAt(j)
			if (language[char].hasOwnProperty(i) == false) {
				language[char][i] = 1
			} else { language[char][i]++}
			j += keyLength
		}
		i++
	}
}
showResult = function() {
	for (char in language) {
		var groupsInfo = " | "
		var i = 0
		while (i < keyLength) {
			var t = language[char][i]
			if (!t) {t = " "}
			groupsInfo += "group-" + i + ": " + t + " | "
			i++
		}
		console.log(groupsInfo + " || char: " + char)
	}
}
analise();
showResult()

var sourceText = "ЦИЪМФЧЦФОПЫЦТЕЧМОФЕШЭКШДЖЩДПСРМТЮЙУФЙГДВЬИЧВЦМЪЭИЬССЫУРМКЮЙОЧДФУЦЪСШМФНФРНЩЮЦЩТЖЦЗТЕЧИМХНВШРЭУШЗОФАСЦЦУДЖЭЦЩДЩОЧЮДИМУЬОПЮИЩНБХТТЕЦЩГЬСЩЩМГКЖШЩЗАЧЮУШВБХМХНВШЦУУЧСЛЮДУЛЗТШЛЭЪЮЙЧЯХФУРОЩГНКЯТХЩЛЩНЯОСЩГЩГФЬЩВЬНЪУЮТЖЩИЪОХЧНЭНФПЦТСБЫИВЬУСФЭОЙЪТРЖЛЮЩПНФЫЦЭЕТЩЦУУЧЪТАОИФБРРЖЭЪГТЭФЪРЛЕПМХТФГЪЮЦЖЬДЮДУМОФЫИЪРЭАТЭКЮИТОНЫЕСЭХХСШФПХМСФЧЮГФЬЩВИИЦЫЗУОПЦАДБХЭЮЛТОЦЧВБЭРЫСЕФЮРРВШЦУСИЗАШНБЭКХСЛЧДХМФУРААШИРФОСЫЦЪРБЮГЩБЛЧГЬИЮМЪААТФРЬОЦСЛФЕЗСОРЛОЦЦААЗЧРВАРЛЧЮГФЬЩВИЗСМЭОПЫШШНФЭЗЯРООГЗНЩРИЭЬТЪЖБЮКМКЯОКОИЫВФУХХСТЪСЕОСШРБВБЭЦВЫЛПЦЬОЙЯКЧИЦМЪМНЖОЩХЧШЪФЭЕХЪМТЛЖЭЪЭО";

var keyLength = 5

var rusLang = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("")
var i = 0
var text = ""
var key = "МИРАЖ".split("")
var i = 0
	while  (i < sourceText.length) {
		var j = 0
		while (j < keyLength) {
			debugger
			var char = sourceText.charAt(i+j)
			var sourceCharNumber = rusLang.indexOf(char)
			var keyNumber = rusLang.indexOf(key[j])

			var sdvig = sourceCharNumber - keyNumber
			if (sdvig < 0) {sdvig += 32}
			var NewSymbol = rusLang[sdvig]
			text += NewSymbol
			j++
		}
		i += keyLength
	}
	console.log(text)