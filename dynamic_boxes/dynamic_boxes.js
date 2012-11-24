App.extend('App.dynoBox');

App.dynoBox = function(minHeight, maxWidth){

	var minHeight = minHeight || 3
	var maxWidth = maxWidth || 3
	var totalBoxes = totalBoxes || 14
	var _boxCount = 0

	var Column = function(column){
		var _column = $(column)

		var _boxes = function(){
			return $(_column).find('.box');
		}

		return {
			boxes : _boxes(),
			actual : _column,
			addBox : function(content){
				$('<div>'+content+'</div>').addClass('box').appendTo(_column);
			},
			removeBox : function(){
				_column.find('.box:last').remove();
			},
			prevColumn : function(){
				if(typeof _column.prev() != 'undefined' && _column.prev().length > 0){
					return new Column(_column.prev())
				}
				else{
					return null;
				}
			},
			nextColumn : function(){
				if(typeof _column.next() != 'undefined' && _column.next().length > 0){
					return new Column(_column.next());
				}
				else {
					return new Column(_column.parent().find('.column:first'))
				}
			}
		}
	}

	var Container = function(container){
		var _container = container;

		var _noOfColumns = function(cont){
			return cont.find('.column').length
		}

		var _currentColumn = function(cont){
			var col = cont.find('.column').find('.box').last().parent();
			if(col.length < 1){
				col = cont.find('.column:last')
				if(col.length < 1){
					_addColumn(cont);
				}
			}
			return new Column(col);
		}

		var _addColumn = function(cont){
			var col = $('<div class="column"></div>')
			col.appendTo(cont);
			return new Column(col);
		}

		var _boxes = function(){
			return _container.find('.box');
		}

		var _content = function(){
			return _boxes().length+1;
		}

		return {
			addBox : function(){
				//get the current column
				var col = _currentColumn(_container);
				var noOfBoxes = _boxes().length
				var mod = (noOfBoxes+1) % minHeight;

					//if the new column isn't going to fall too far behind
					if( mod == 0 && noOfBoxes > minHeight){		
						//shove the last to boxes over to the new column
						var lastTwoBoxes = _container.find('.column:last').find('.box:last').prev().andSelf();
						var newCol = _addColumn(_container);
						console.log(lastTwoBoxes)
						lastTwoBoxes.clone().appendTo(newCol.actual);
						lastTwoBoxes.remove();

						//boxes that are too many have to go to the next column
						_container.find('.column').each(function(index, column){
							column = new Column(column)
							if(column.boxes.length > minHeight){
								//take the last one and put it on the next column
								column.nextColumn().boxes.first().before(column.boxes.last());
							}
						})

						col = newCol
					}

				if(mod == 1 && (_noOfColumns(_container) > 1)){
					//buttons need re-ordering

					var lastCol = new Column(_container.find('.column:last'));

					for(var i=1; i < (_container.find('.column').length); i++){
						lastCol.boxes.first().appendTo(lastCol.prevColumn().actual);
						lastCol = lastCol.prevColumn();
					}

				}

				col.addBox(_content());
			}
		}
	}

	return {
		addBox : function(){
			c = Container($('#container'));
			c.addBox();
		}
	}

}