var path = require('path')
var fs = require('fs')
module.exports = {
    entry: {
        'index': './index.js'
    },
    output: {
        path: './',
        filename: "[name]-[chunkhash].b.js",
        chunkFilename: '[name][chunkhash].b.js'
    },
    plugins: [
      function() {
        this.plugin("done", function(stats) {
           var hashJson = JSON.stringify(stats.toJson())
           hashJson = formatJson(hashJson)
           // 写入文件
           fs.writeFileSync(
            path.join(__dirname, "./", "stats.json")
                ,
                hashJson
            )
        });
      }
    ]
}




// 格式化json工具函数 
function formatJson (json, indentChars) {
    function repeat(s, count) {
        return new Array(count + 1).join(s);
    }
    var i           = 0,
      il          = 0,
      tab         = (typeof indentChars !== "undefined") ? indentChars : "    ",
      newJson     = "",
      indentLevel = 0,
      inString    = false,
      currentChar = null;

    for (i = 0, il = json.length; i < il; i += 1) { 
      currentChar = json.charAt(i);

      switch (currentChar) {
      case '{': 
      case '[': 
          if (!inString) { 
              newJson += currentChar + "\n" + repeat(tab, indentLevel + 1);
              indentLevel += 1; 
          } else { 
              newJson += currentChar; 
          }
          break; 
      case '}': 
      case ']': 
          if (!inString) { 
              indentLevel -= 1; 
              newJson += "\n" + repeat(tab, indentLevel) + currentChar; 
          } else { 
              newJson += currentChar; 
          } 
          break; 
      case ',': 
          if (!inString) { 
              newJson += ",\n" + repeat(tab, indentLevel); 
          } else { 
              newJson += currentChar; 
          } 
          break; 
      case ':': 
          if (!inString) { 
              newJson += ": "; 
          } else { 
              newJson += currentChar; 
          } 
          break; 
      case ' ':
      case "\n":
      case "\t":
          if (inString) {
              newJson += currentChar;
          }
          break;
      case '"': 
          if (i > 0 && json.charAt(i - 1) !== '\\') {
              inString = !inString; 
          }
          newJson += currentChar; 
          break;
      default: 
          newJson += currentChar; 
          break;                    
      } 
    } 

    return newJson; 
}