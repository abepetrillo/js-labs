describe("dynoBox",function(){
	it("should be defined",function(){
		expect(App.dynoBox()).toBeDefined();
	});
	describe("Given no arguments",function(){
		it("should have a minHeight of 3",function(){
			expect(App.dynoBox().minHeight).toBe(3);
		});
		it("should have a maxWidth of 3",function(){
			expect(App.dynoBox().maxWidth).toBe(3);
		});
		it("should have a totalBoxes of 14", function(){
			expect(App.dynoBox().totalBoxes).toBe(14);
		});
		it("should have a boxCount of 0",function(){
			expect(App.dynoBox().boxCount()).toBe(0)
		});
	});

	describe("#boxCount",function(){
		describe("#when given an argument",function(){
			it("should over-ride the current boxCount",function(){
				expect(App.dynoBox().boxCount()).toBe(0);
				expect(App.dynoBox().boxCount(5)).toBe(5);
			});
		});
	});

	describe("#totalColumns",function(){
		describe("given a minHeight of 3, and a maxWidth of 3",function(){
			beforeEach(function(){
				d = App.dynoBox(3,3);
			});
			describe("given iteration",function(){
				it("1",function(){
					d.boxCount(1);
					expect(d.totalColumns()).toBe(1);
				});
				it("2",function(){
					d.boxCount(2);
					expect(d.totalColumns()).toBe(1);
				});
				it("3",function(){
					d.boxCount(3);
					expect(d.totalColumns()).toBe(1);
				});
				it("4",function(){
					d.boxCount(4);
					expect(d.totalColumns()).toBe(1);
				});
				it("5",function(){
					d.boxCount(5);
					expect(d.totalColumns()).toBe(1);
				});
				it("6",function(){
					d.boxCount(6);
					expect(d.totalColumns()).toBe(2);
				});
				it("7",function(){
					d.boxCount(7);
					expect(d.totalColumns()).toBe(2);
				});
				it("8",function(){
					d.boxCount(8);
					expect(d.totalColumns()).toBe(3);
				});
				it("9",function(){
					d.boxCount(9);
					expect(d.totalColumns()).toBe(3);
				});
				it("10",function(){
					d.boxCount(10);
					expect(d.totalColumns()).toBe(3);
				});
				it("11",function(){
					d.boxCount(11);
					expect(d.totalColumns()).toBe(3);
				});
				it("12",function(){
					d.boxCount(12);
					expect(d.totalColumns()).toBe(3);
				});
				it("13",function(){
					d.boxCount(13);
					expect(d.totalColumns()).toBe(3);
				});
				it("14",function(){
					d.boxCount(14);
					expect(d.totalColumns()).toBe(3);
				});
			});
		});
	});
});