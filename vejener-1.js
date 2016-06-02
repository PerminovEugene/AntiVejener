
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
    		if (beegramsPositionsObj[prop].length > 3) {
    			console.log(infoStr);
    			beegramsRanges.push
    		}
    		
    	};
	};
};

// console.log("source text is:" + sourceText);
var subStrings = ""	
var i = 0;
beegramsPositionsObj = {}
while (i < sourceText.length - 1) {
	var subStrings = sourceText.substring(i, i+2);
	// console.log('current beegramm: ' + subStrings);

	var j = i; 
	var beegramCount = 1;
	pushBeegramInfoToArray(subStrings, j)
	while (j < sourceText.length) {
		var findedBeegramIndex = sourceText.indexOf(subStrings, j+1)

		if (findedBeegramIndex !== -1) {
			pushBeegramInfoToArray(subStrings, findedBeegramIndex)

			j = findedBeegramIndex;
			beegramCount++;
			// console.log("Beegram " + subStrings + " have index " + findedBeegramIndex)
		} else {
			j = sourceText.length;

		}
	if (beegramCount > 3) {
		console.log("Beegram " + subStrings + " finded " + beegramCount + " times.");
	}
		
	}
	i++;
};
showBeegramsInfo();

