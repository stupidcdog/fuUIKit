"use strick";
(function(factory){
	if(typeof define === "function" && define.amd){
		define(factory);
	}else if(typeof module != "undefined" && typeof module.exports != "undefined"){
		module.exports = factory();
	}else{
		window["func"] = factory();
	}
})(function (){
	/**
	 * Get the closest matching element up the DOM tree.
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against (class, ID, data attribute, or tag)
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	/*
	usage: 
	var elem = document.querySelector('#example');
	var closestElem = getClosest(elem, '.sample-class');
	 */
	getClosest = function ( elem, selector ) {
		// Variables
		var firstChar = selector.charAt(0);
		var supports = 'classList' in document.documentElement;
		var attribute, value;

		// If selector is a data attribute, split attribute from value
		if ( firstChar === '[' ) {
		    selector = selector.substr( 1, selector.length - 2 );
		    attribute = selector.split( '=' );

		    if ( attribute.length > 1 ) {
		        value = true;
		        attribute[1] = attribute[1].replace( /"/g, '' ).replace( /'/g, '' );
		    }
		}

		// Get closest match
		for ( ; elem && elem !== document && elem.nodeType === 1; elem = elem.parentNode ) {

		    // If selector is a class
		    if ( firstChar === '.' ) {
		        if ( supports ) {
		            if ( elem.classList.contains( selector.substr(1) ) ) {
		                return elem;
		            }
		        } else {
		            if ( new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test( elem.className ) ) {
		                return elem;
		            }
		        }
		    }

		    // If selector is an ID
		    if ( firstChar === '#' ) {
		        if ( elem.id === selector.substr(1) ) {
		            return elem;
		        }
		    }

		    // If selector is a data attribute
		    if ( firstChar === '[' ) {
		        if ( elem.hasAttribute( attribute[0] ) ) {
		            if ( value ) {
		                if ( elem.getAttribute( attribute[0] ) === attribute[1] ) {
		                    return elem;
		                }
		            } else {
		                return elem;
		            }
		        }
		    }

		    // If selector is a tag
		    if ( elem.tagName.toLowerCase() === selector ) {
		        return elem;
		    }

		}

		return null;
	};

	/**
	 * Get all DOM element up the tree that contain a class, ID, or data attribute
	 * @param  {Node} elem The base element
	 * @param  {String} selector The class, id, data attribute, or tag to look for
	 * @return {Array} Null if no match
	 */
	/*
	usage: 
	var elem = document.querySelector('#some-element');
	var parents = getParents(elem, '.some-class');
	var allParents = getParents(elem.parentNode);
	 */
	getParents = function (elem, selector) {
	    var parents = [];
	    var firstChar;
	    if ( selector ) {
	        firstChar = selector.charAt(0);
	    }

	    // Get matches
	    for ( ; elem && elem !== document; elem = elem.parentNode ) {
	        if ( selector ) {

	            // If selector is a class
	            if ( firstChar === '.' ) {
	                if ( elem.classList.contains( selector.substr(1) ) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is an ID
	            if ( firstChar === '#' ) {
	                if ( elem.id === selector.substr(1) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is a data attribute
	            if ( firstChar === '[' ) {
	                if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is a tag
	            if ( elem.tagName.toLowerCase() === selector ) {
	                parents.push( elem );
	            }

	        } else {
	            parents.push( elem );
	        }

	    }

	    // Return parents if any exist
	    if ( parents.length === 0 ) {
	        return null;
	    } else {
	        return parents;
	    }
	};

	/*
	usage: 
	var elem = document.querySelector('#some-element');
	var parentsUntil = getParentsUntil(elem, '.some-class');
	var parentsUntilByFilter = getParentsUntil(elem, '.some-class', '[data-something]');
	var allParentsUntil = getParentsUntil(elem);
	var allParentsExcludingElem = getParentsUntil(elem.parentNode);
	 */
	getParentsUntil = function (elem, parent, selector) {
	    var parents = [];
	    if ( parent ) {
	        var parentType = parent.charAt(0);
	    }
	    if ( selector ) {
	        var selectorType = selector.charAt(0);
	    }

	    // Get matches
	    for ( ; elem && elem !== document; elem = elem.parentNode ) {

	        // Check if parent has been reached
	        if ( parent ) {

	            // If parent is a class
	            if ( parentType === '.' ) {
	                if ( elem.classList.contains( parent.substr(1) ) ) {
	                    break;
	                }
	            }

	            // If parent is an ID
	            if ( parentType === '#' ) {
	                if ( elem.id === parent.substr(1) ) {
	                    break;
	                }
	            }

	            // If parent is a data attribute
	            if ( parentType === '[' ) {
	                if ( elem.hasAttribute( parent.substr(1, parent.length - 1) ) ) {
	                    break;
	                }
	            }

	            // If parent is a tag
	            if ( elem.tagName.toLowerCase() === parent ) {
	                break;
	            }

	        }

	        if ( selector ) {

	            // If selector is a class
	            if ( selectorType === '.' ) {
	                if ( elem.classList.contains( selector.substr(1) ) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is an ID
	            if ( selectorType === '#' ) {
	                if ( elem.id === selector.substr(1) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is a data attribute
	            if ( selectorType === '[' ) {
	                if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
	                    parents.push( elem );
	                }
	            }

	            // If selector is a tag
	            if ( elem.tagName.toLowerCase() === selector ) {
	                parents.push( elem );
	            }

	        } else {
	            parents.push( elem );
	        }

	    }

	    // Return parents if any exist
	    if ( parents.length === 0 ) {
	        return null;
	    } else {
	        return parents;
	    }
	};

	// *
	//  * TODO
	//  * https://stackoverflow.com/questions/29949331/convert-jquery-slidetoggle-code-to-javascript
	 
	// if(!Object.prototype.slideToggle){
	// 	Object.prototype.slideToggle = function (){
	// 	}
	// };

});