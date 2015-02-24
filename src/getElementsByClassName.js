// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, child, elements){
	if (child == undefined) {
		var elements = [];
		if (document.body.classList[0] == className) elements.push(document.body);
		child = document.body.childNodes;
	}

	for (var i = 0; i < child.length; i++){
		if (child[i].nodeType === 1){

			for (var y=0; y< child[i].classList.length; y++){
				if (child[i].classList[y] == className){
					elements.push(child[i])
				}
			}
			getElementsByClassName(className, child[i].childNodes, elements)
		
		}
	}

	return elements;
};
