exports.require = function(urls, cb) {
  //type checkers
  var isEmpty = function(arg) {
    return arg.length === 0;
  };

  var existy = function(arg) {
    return arg != null;
  };

  var fail = function(err) {
    console.log(err);
    cb(true);
  };

  // lib
  var createScriptTag = function(url) {
    var script = document.createElement('script');
    script.onload = function() { cb(null) };
    script.src = url;
    return script;
  };

  var appendScriptTags = function(script) {
    return function appendToContainer() {
      if (typeof arguments[0] === 'string') {
        return script.parentNode.insertBefore(createScriptTag(arguments[0]), script);
      }
      return Array.prototype.map.call(arguments[0], function (url) {
        if (typeof url !== 'string') return fail('Argument must be a string');
        script.parentNode.insertBefore(createScriptTag(url), script);
      });
    }
  };

  if (!existy(urls)) {
    return fail('Arguments can not be null or undefined');
  }

  if (isEmpty(urls)) {
    return fail('Arguments can not be empty');
  }

  if (typeof urls !== 'string' && !Array.isArray(urls)) {
    return fail('Arguments can only be a string or an array of strings');
  }

  var script = document.getElementsByTagName('script')[0];
  var formerScriptTag = appendScriptTags(script);
  formerScriptTag(urls);
};