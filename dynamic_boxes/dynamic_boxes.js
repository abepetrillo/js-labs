App.extend('App.dynoBox');

App.dynoBox = function(minHeight, maxWidth){

	var minHeight = minHeight || 3
	var maxWidth = maxWidth || 3
	var totalBoxes = totalBoxes || 14
	var _boxCount = 0

	var Column = function(column){
		var _column = column

		var _boxes = function(){
			return _column.find('.box');
		}

		return {
			boxes : _boxes(),
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
					_addColumn(cont)
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
				if(_noOfColumns(_container) < maxWidth){
					//if the new column isn't going to fall too far behind
					if( mod == 0 && noOfBoxes > minHeight){
						//we need to take minHeight - 1 boxes from the list
						for(var i=0;i<(minHeight-1);i++){
							col.removeBox();
							if(col.prevColumn() != null){
								col = col.prevColumn();
							}
						}
						col = _addColumn(_container);
						col.addBox(_content());
						col.addBox(_content());
					}
				}

				if(mod == 1){
					if(col.prevColumn() != null){ col.prevColumn().addBox(_content()); } else { col.addBox(_content());	}
				}
				else{
					col.addBox(_content());
				}	
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