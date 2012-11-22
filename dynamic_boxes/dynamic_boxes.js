App.extend('App.dynoBox');

App.dynoBox = function(minHeight, maxWidth){

	var self = this,
			_minHeight = minHeight || 3,
			_maxWidth = maxWidth || 3,
			_iterations = 20
	;

	var Column = function(column){
		var _htmlObject = function(){return $('.column').last() }
		var _previousColumn = function(){ return _htmlObject.prev()}

		return {
			htmlObject : _htmlObject(),
			noOfBoxes : function(){
				return _htmlObject().find('.box').length
			}
		}
	}

	Column.prototype.previousColumn = function(){
		return new Column(this.htmlObject.prev())
	}

	var _column = function(){
		return new Column()
	}
	

	var _box = function(){
		var _total = function(){
			return $('.box').length
		}
		return {
			total : _total
		}
	}

	var addBox = function(){
		$('<div class="box">A Box</div>').appendTo(_column().htmlObject);
	}

	var addColumn = function(){
		console.log("addColum")
		$('<div></div>').addClass('column').appendTo(_column().htmlObject.parent());	
	}

	var createNewColumn = function(){
		return (_column.previousColumn.noOfBoxes() - _column.noOfBoxes()) > 1
	}

	var restyle = function(){
		var columns = $('.column'),
				width = (100/($('.column').length));
		columns.css('width', width+'%');
	}

	return {
		minHeight 	: _minHeight,
		maxWidth 		: _maxWidth,
		iterations 	: _iterations,

		iterate : function(){
			for(i=0; i < _iterations; i++){
				console.log(_column().noOfBoxes(), _minHeight)
				if ((_column().noOfBoxes() <= _minHeight) || (createNewColumn == true) ){
					//add a box to column
					addBox();
				}
				else {
					//create a new column
					addColumn();
					addBox();
				}
			}
			restyle();
		}
	}
}