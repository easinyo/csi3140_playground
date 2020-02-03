var Dice = (function() {
  var entity = {
    "history": []
  };

  entity.roll = function() {
    var nextValue = Math.floor(1 + Math.random() * 6);
    this.history.push(nextValue);
    return nextValue;
  }

  entity.showHistory = function() { 
    if (this.history.length == 0) {
      document.writeln("<br>You have not thrown any dice.<br>");
    } else {
      document.writeln("<br>Dice rolls ("+ this.history.length +")<br>");
      for (var i = 0, len = this.history.length; i < len; i++) {
        document.writeln("<li>" + this.history[i] + "</li>");
      }
    }
  }

  entity.showDice = function(id, num) {
    var html = htmlDice(num);
    document.getElementById(id).innerHTML = html;
    return html;
  }

  function htmlDice(num) {
    var html = '<div class="dice" />';
    var pos = putPositions(num);
    for (var i = 0, len = pos.length; i < len; i++) {
      html += htmlDisplayDot(pos[i]);
    }    
    html += '</div>';
    return html;
  }

  function htmlDisplayDot(position) {
    return '<div class="'+ position +'"><div class="dot"></div></div>';
  }

  function putPositions(num) {
    switch (num) {
      case 0: return [];
      case 1: return ["middle"];
      case 2: return ["top-left", "bottom-right"];
      case 3: return ["top-left", "middle", "bottom-right"];
      case 4: return ["top-left", "top-right", "bottom-left", "bottom-right"];
      case 5: return ["top-left", "top-right", "bottom-left", "bottom-right", "middle"];
      case 6: return ["top-left", "top-right", "bottom-left", "bottom-right", "middle-left", "middle-right",];
    }
  }

  return entity;
}());