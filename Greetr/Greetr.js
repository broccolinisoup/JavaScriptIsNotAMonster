(function(global, $){

  var Greetr = function(firstName, LastName, language){
    return new Greetr.init(firstName, LastName, language);
  }

  var supportedLanguages = ["en", "es"];

  var greetings = {
    en : "Hello",
    es : "Hola"
  }

  var formalGreetings = {
    en : "Greetings",
    es : "Salutos"
  }

  Greetr.prototype = {
    getFullName : function(){
      return this.lastName + ", " + this.firstName;
    }
  };

  Greetr.init = function(firstName, LastName, language){

    var self = this;
    self.firstName = firstName || "Armagan";
    self.lastName = LastName || "Ersoz";
    self.language = language || "English";

  }

  Greetr.makeGreet = function(obj, whatTosay){
    console.log(obj.getFullName() + "says " + whatTosay);
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
