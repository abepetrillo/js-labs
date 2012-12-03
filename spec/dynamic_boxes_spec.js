describe("dynoBox",function(){
	it("should be defined",function(){
		expect(App.dynoBox()).toBeDefined();
	});
	describe("given a maxWidth of 3 and a minHeight of 3",function(){
		it("BeforeAll",function(){
			d = App.dynoBox(3,3);
			firstColumn 	= $('#container').find('.column:first');
			secondColumn 	= $('#container').find('.column:nth-child(2)');
			thirdColumn 	= $('#container').find('.column:nth-child(3)');
		})
		it("should have a container to test with",function(){
			expect($('#container').length).toBe(1)
		})
		it("should create 3 columns",function(){
			expect($('#container').find('.column').length).toBe(3);
		})
		describe("each iteration should be correct",function(){
			describe("1",function(){
				it("should add a box to the first column",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(1)
				});
			});
			describe("2",function(){
				it("should add a box to the first column",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(2)
				});
			});
			describe("3",function(){
				it("should add a box to the first column",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(3)
				});
			});	
			describe("4",function(){
				it("should add a box to the first column",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
				});
			});
			describe("5",function(){
				it("should add a box to the first column",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(5)
				});
			});	
			describe("6",function(){
				it("3 boxes in first and second columns",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(3)
					expect(secondColumn.find('.box').length).toBe(3)
				});
			});	
			describe("7",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
					expect(secondColumn.find('.box').length).toBe(3)
				});
			});
			describe("8",function(){
				it("4 boxes in first and second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
					expect(secondColumn.find('.box').length).toBe(4)
				});
			});
			describe("9",function(){
				it("should have 3 by 3",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(3)
					expect(secondColumn.find('.box').length).toBe(3)
					expect(thirdColumn.find('.box').length).toBe(3)
				});
			});
			describe("10",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
					expect(secondColumn.find('.box').length).toBe(3)
					expect(thirdColumn.find('.box').length).toBe(3)
				});
			});
			describe("11",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
					expect(secondColumn.find('.box').length).toBe(4)
					expect(thirdColumn.find('.box').length).toBe(3)
				});
			});
			describe("12",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(4)
					expect(secondColumn.find('.box').length).toBe(4)
					expect(thirdColumn.find('.box').length).toBe(4)
				});
			});
			describe("13",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(5)
					expect(secondColumn.find('.box').length).toBe(4)
					expect(thirdColumn.find('.box').length).toBe(4)
				});
			});
			describe("14",function(){
				it("4 boxes in first and 3 in the second",function(){
					d.addBox();
					expect(firstColumn.find('.box').length).toBe(5)
					expect(secondColumn.find('.box').length).toBe(5)
					expect(thirdColumn.find('.box').length).toBe(4)
				});
			});
		});
	});
});