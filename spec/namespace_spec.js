describe('namespace',function(){
  describe('when the page is loaded',function(){
    it('should define the App object in the global namespace',function(){
      expect(window.App).toBeDefined();
      expect(App).toBeDefined();
    });
  });
  describe('#extend',function(){
    it('should define a child object within the namespace', function(){
      App.extend('house');
      expect(App.house).toBeDefined();
    });
    it('should not over-ride a namespace',function(){
      App.house = {
        door_number : 4
      }
      App.extend('house');
      expect(App.house.door_number).toBe(4);
    });
    it('should handle the specification of "App" within the namespace',function(){
      App.extend('App.someNamespace');
      expect('App.somenamespace').toBeDefined();
    });
    it('should define multiple children', function(){
      var myHandle = App.extend('App.house.door.handle');
      expect(myHandle).toBeDefined();
      expect(myHandle).not.toBeNull();
    })
  });
})
