;(function(global, $){

  // 'new' an object
  var Greetr = function(firstName, LastName, language){
    return new Greetr.init(firstName, LastName, language);
  }

  // hidding become accidentaly changed
  var supportedLanguages = ["en", "es"];

  var greetings = {
    en : "Hello",
    es : "Hola"
  }

  var formalGreetings = {
    en : "Greetings",
    es : "Salutos"
  }

  var logMessaged = {
    en :"Logged in",
    es : "Inicio sesion"
  }

  Greetr.prototype = {
    fullName : function(){
      return this.lastName + " " + this.firstName;
    },

    validate : function(){
      if(supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid Language!";
      }
    },
    greeting : function(){
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalGreeting : function(){
      return formalGreetings[this.language] + ", " + this.fullName() + "!";
    },

    greet : function(formal) {
      var msg;
      if(formal){
        msg = this.formalGreeting();
      }
      else{
        msg = this.greeting();
      }
      if(console){
        console.log(msg);
      }
      // 'this' refers to the calling object at execution time makes the method chainable
      return this;
    },

    log:function(){
      if(console){
        console.log(logMessaged[this.language] + ": " + this.fullName);
      }
      return this;
    },
    setLang : function(lang){
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting : function(selector,formal){
      if(!$){
        throw "JQeury is missing!";
      }
      if(!selector){
        throw "Selector is missing!";
      }
      var msg;
      if(formal){
        msg = this.formalGreeting();
      }
      else{
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    }

  };

  Greetr.init = function(firstName, LastName, language){

    var self = this;
    self.firstName = firstName || "";
    self.lastName = LastName || "";
    self.language = language || "en";

    self.validate();

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
