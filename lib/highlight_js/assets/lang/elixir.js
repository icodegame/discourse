hljs.registerLanguage("elixir",function(e){var n="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",r="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",b="and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote",c={cN:"subst",b:"#\\{",e:"}",l:n,k:b},a={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/}]},i={cN:"function",bK:"def defp defmacro",e:/\B\b/,c:[e.inherit(e.TM,{b:n,endsParent:!0})]},s=e.inherit(i,{cN:"class",bK:"defmodule defrecord",e:/\bdo\b|$|;/}),l=[a,e.HCM,s,i,{cN:"constant",b:"(\\b[A-Z_]\\w*(.)?)+",r:0},{cN:"symbol",b:":",c:[a,{b:r}],r:0},{cN:"symbol",b:n+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"->"},{b:"("+e.RSR+")\\s*",c:[e.HCM,{cN:"regexp",i:"\\n",c:[e.BE,c],v:[{b:"/",e:"/[a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];return c.c=l,{l:n,k:b,c:l}});