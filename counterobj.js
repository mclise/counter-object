var countDecorator = function(func){
  var count = 0;
    
  var increment = function(){
    count++;
    return func.apply(null, arguments);
  };

  increment.getValue = function(){
    return count;
  };

  return increment;
};

module.exports = countDecorator;