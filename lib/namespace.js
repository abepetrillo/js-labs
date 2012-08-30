
/**
 * Top level namespace for the App
 * @namespace
 */
if(!window.App){
  var App = {
    /**
     * Converts a string into a chain of objects within the global namespace
     * @param namespace {String} 
     */
    extend : function(namespace){
      var root = window.App,
          children = namespace.split('.');
      
      if(children[0]==="App"){
        children = children.slice(1);
      }

      var theParent = root;
      for(var i=0; i < children.length; i++){
        var child = theParent[children[i]] || null;
        if(child === null){
          theParent[children[i]] = {};
          theParent = theParent[child];
        }
      }

      return theParent;
    }
  }
}
