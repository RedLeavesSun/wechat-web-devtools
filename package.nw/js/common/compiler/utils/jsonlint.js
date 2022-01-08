"use strict";const jsonlint=function(){const t={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(t,e,n,i,s,r,h){const l=r.length-1;switch(s){case 1:this.$=t.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\v/g,"\v").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=Number(t);break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=r[l-1];case 13:this.$={};break;case 14:this.$=r[l-1];break;case 15:this.$=[r[l-2],r[l]];break;case 16:this.$={},this.$[r[l][0]]=r[l][1];break;case 17:this.$=r[l-2],r[l-2][r[l][0]]=r[l][1];break;case 18:this.$=[];break;case 19:this.$=r[l-1];break;case 20:this.$=[r[l]];break;case 21:this.$=r[l-2],r[l-2].push(r[l])}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function(t,e){throw new Error(t)},parse:function(t){const e=this;let n=[0],i=[null],s=[];const r=this.table;let h="",l=0,o=0,c=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});let a,u,y,p,f,g,_,m,x,b=this.lexer.yylloc;function d(){let t;return t=e.lexer.lex()||1,"number"!=typeof t&&(t=e.symbols_[t]||t),t}s.push(b),"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);const E={};for(;;){y=n[n.length-1],this.defaultActions[y]?p=this.defaultActions[y]:(null==a&&(a=d()),p=r[y]&&r[y][a]);let t="";if(void 0===p||!p.length||!p[0]){if(!c){for(g in x=[],r[y])this.terminals_[g]&&g>2&&x.push("'"+this.terminals_[g]+"'");t=this.lexer.showPosition?"Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+x.join(", ")+", got '"+this.terminals_[a]+"'":"Parse error on line "+(l+1)+": Unexpected "+(1===a?"end of input":"'"+(this.terminals_[a]||a)+"'"),this.parseError(t,{text:this.lexer.match,token:this.terminals_[a]||a,line:this.lexer.yylineno,loc:b,expected:x})}if(3===c){if(1===a)throw new Error(t||"Parsing halted.");o=this.lexer.yyleng,h=this.lexer.yytext,l=this.lexer.yylineno,b=this.lexer.yylloc,a=d()}for(;!(2..toString()in r[y]);){if(0===y)throw new Error(t||"Parsing halted.");S=1,n.length=n.length-2*S,i.length=i.length-S,s.length=s.length-S,y=n[n.length-1]}u=a,a=2,y=n[n.length-1],p=r[y]&&r[y][2],c=3}if(p[0]instanceof Array&&p.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+a);switch(p[0]){case 1:n.push(a),i.push(this.lexer.yytext),s.push(this.lexer.yylloc),n.push(p[1]),a=null,u?(a=u,u=null):(o=this.lexer.yyleng,h=this.lexer.yytext,l=this.lexer.yylineno,b=this.lexer.yylloc,c>0&&c--);break;case 2:if(_=this.productions_[p[1]][1],E.$=i[i.length-_],E._$={first_line:s[s.length-(_||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(_||1)].first_column,last_column:s[s.length-1].last_column},f=this.performAction.call(E,h,o,l,this.yy,p[1],i,s),void 0!==f)return f;_&&(n=n.slice(0,-1*_*2),i=i.slice(0,-1*_),s=s.slice(0,-1*_)),n.push(this.productions_[p[1]][0]),i.push(E.$),s.push(E._$),m=r[n[n.length-2]][n[n.length-1]],n.push(m);break;case 3:return!0}}var S;return!0}},e=function(){const t={EOF:1,parseError:function(t,e){if(!this.yy.parseError)throw new Error(t);this.yy.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){const t=this._input[0];this.yytext+=t,this.yyleng++,this.match+=t,this.matched+=t;return t.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),t},unput:function(t){return this._input=t+this._input,this},more:function(){return this._more=!0,this},less:function(t){this._input=this.match.slice(t)+this._input},pastInput:function(){const t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){let t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){const t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;let t,e,n,i,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");const r=this._currentRules();for(let t=0;t<r.length&&(n=this._input.match(this.rules[r[t]]),!n||e&&!(n[0].length>e[0].length)||(e=n,i=t,this.options.flex));t++);return e?(s=e[0].match(/\n.*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-1:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,r[i],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t||void 0):""===this._input?this.EOF:void this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){const t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},options:{},performAction:function(t,e,n,i){switch(n){case 0:break;case 1:return 6;case 2:return e.yytext=e.yytext.substr(1,e.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},rules:[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}}};return t}();return t.lexer=e,t}();jsonlint.parseError=jsonlint.lexer.parseError=function(t,e){throw e},module.exports={parser:jsonlint,parse:function(){return jsonlint.parse.apply(jsonlint,arguments)}};