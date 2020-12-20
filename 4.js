(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    wordPattern: /(#?-?\d*\.\d\w*%?)|((::|[@#.!:])?[\w-?]+%?)|::|[@#.!:]/g,
    comments: {
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '\'', close: '\'', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.css',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.bracket' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [
            { include: '@selector' },
        ],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@strings' },
            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            ['(url-prefix)(\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],
            ['(url)(\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],
            { include: '@selectorname' },
            ['[\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }]
        ],
        selectorbody: [
            { include: '@comments' },
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            ['}', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        selectorname: [
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }],
        ],
        term: [
            { include: '@comments' },
            ['(url-prefix)(\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],
            ['(url)(\\()', ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'delimiter'],
            [',', 'delimiter']
        ],
        rulevalue: [
            { include: '@comments' },
            { include: '@strings' },
            { include: '@term' },
            ['!important', 'keyword'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        warndebug: [
            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]
        ],
        import: [
            ['[@](import)', { token: 'keyword', next: '@declarationbody' }]
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        parenthizedterm: [
            { include: '@term' },
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        declarationbody: [
            { include: '@term' },
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            [/[^*/]+/, 'comment'],
            [/./, 'comment'],
        ],
        name: [
            ['@identifier', 'attribute.value']
        ],
        numbers: [
            ['-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'attribute.value.number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'attribute.value.hex']
        ],
        units: [
            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'attribute.value.unit', '@pop']
        ],
        keyframedeclaration: [
            ['@identifier', 'attribute.value'],
            ['{', { token: 'delimiter.bracket', switchTo: '@keyframebody' }],
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }],
            ['}', { token: 'delimiter.bracket', next: '@pop' }],
        ],
        functioninvocation: [
            ['@identifier\\(', { token: 'attribute.value', next: '@functionarguments' }],
        ],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'attribute.value', next: '@pop' }],
        ],
        strings: [
            ['~?"', { token: 'string', next: '@stringenddoublequote' }],
            ['~?\'', { token: 'string', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string', next: '@pop' }],
            [/[^\\"]+/, 'string'],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ['\'', { token: 'string', next: '@pop' }],
            [/[^\\']+/, 'string'],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2Nzcy9jc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLGlDQUFpQztBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJLG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0EsU0FBUyxTQUFTLFlBQVksK0JBQStCO0FBQzdELFNBQVMsb0RBQW9EO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxzQkFBc0I7QUFDbkMsOEVBQThFLGlEQUFpRDtBQUMvSCwyREFBMkQsbUJBQW1CO0FBQzlFLHdDQUF3Qyw2Q0FBNkM7QUFDckYsdURBQXVELDBEQUEwRDtBQUNqSCxnREFBZ0QsMERBQTBEO0FBQzFHLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQSxxQkFBcUIseURBQXlEO0FBQzlFLGVBQWUsSUFBSSxvREFBb0Q7QUFDdkU7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLG1EQUFtRCxLQUFLO0FBQ3hELGVBQWUsSUFBSSwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsbUJBQW1CLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsdURBQXVELDBEQUEwRDtBQUNqSCxnREFBZ0QsMERBQTBEO0FBQzFHLGFBQWEsaUNBQWlDO0FBQzlDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCLEtBQUssMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQTZDO0FBQzFFO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDLGVBQWU7QUFDZixrQkFBa0IsS0FBSywwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrREFBa0Q7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUksd0RBQXdEO0FBQzNFO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxlQUFlLElBQUksb0RBQW9EO0FBQ3ZFLGVBQWUsSUFBSSwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBLGdDQUFnQyx1REFBdUQ7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxxQkFBcUIseUNBQXlDO0FBQzlEO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFLHNCQUFzQiwyQ0FBMkM7QUFDakU7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KCg6OnxbQCMuITpdKT9bXFx3LT9dKyU/KXw6OnxbQCMuITpdL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnWycsICddJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcL1wiKSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC9cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzcycsXHJcbiAgICB3czogJ1sgXFx0XFxuXFxyXFxmXSonLFxyXG4gICAgaWRlbnRpZmllcjogJy0/LT8oW2EtekEtWl18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkqJyxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VsZWN0b3I6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW1wb3J0JyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcclxuICAgICAgICAgICAgWydbQF0oa2V5ZnJhbWVzfC13ZWJraXQta2V5ZnJhbWVzfC1tb3ota2V5ZnJhbWVzfC1vLWtleWZyYW1lcyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKHBhZ2V8Y29udGVudHxmb250LWZhY2V8LW1vei1kb2N1bWVudCknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXHJcbiAgICAgICAgICAgIFsnW0BdKGNoYXJzZXR8bmFtZXNwYWNlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxyXG4gICAgICAgICAgICBbJyh1cmwtcHJlZml4KShcXFxcKCknLCBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XV0sXHJcbiAgICAgICAgICAgIFsnKHVybCkoXFxcXCgpJywgWydhdHRyaWJ1dGUudmFsdWUnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV1dLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxyXG4gICAgICAgICAgICBbJ1tcXFxcKl0nLCAndGFnJ10sXHJcbiAgICAgICAgICAgIFsnWz5cXFxcKyxdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJ1xcXFxbJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmF0dHJpYnV0ZScgfV0sXHJcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VsZWN0b3Jib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcclxuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOig/PShcXFxcc3xcXFxcZHxbXns7fV0qWzt9XSkpJywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcclxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3Rvcm5hbWU6IFtcclxuICAgICAgICAgICAgWycoXFxcXC58Iyg/PVtee10pfCV8KEBpZGVudGlmaWVyKXw6KSsnLCAndGFnJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RvcmF0dHJpYnV0ZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWyddJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVybTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIFsnKHVybC1wcmVmaXgpKFxcXFwoKScsIFsnYXR0cmlidXRlLnZhbHVlJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAdXJsZGVjbGFyYXRpb24nIH1dXSxcclxuICAgICAgICAgICAgWycodXJsKShcXFxcKCknLCBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XV0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmFtZScgfSxcclxuICAgICAgICAgICAgWycoWzw+PVxcXFwrXFxcXC1cXFxcKlxcXFwvXFxcXF5cXFxcfFxcXFx+LF0pJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHJ1bGV2YWx1ZTogW1xyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWychaW1wb3J0YW50JywgJ2tleXdvcmQnXSxcclxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dIC8vIG1pc3Npbmcgc2VtaWNvbG9uXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3YXJuZGVidWc6IFtcclxuICAgICAgICAgICAgWydbQF0od2FybnxkZWJ1ZyknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1wb3J0OiBbXHJcbiAgICAgICAgICAgIFsnW0BdKGltcG9ydCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdXJsZGVjbGFyYXRpb246IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXHJcbiAgICAgICAgICAgIFsnW14pXFxyXFxuXSsnLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZWNsYXJhdGlvbmJvZHk6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXHJcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSAvLyBtaXNzaW5nIHNlbWljb2xvblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudHM6IFtcclxuICAgICAgICAgICAgWydcXFxcL1xcXFwqJywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcclxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY29tbWVudDogW1xyXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvW14qL10rLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5hbWU6IFtcclxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVtYmVyczogW1xyXG4gICAgICAgICAgICBbJy0/KFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5udW1iZXInLCBuZXh0OiAnQHVuaXRzJyB9XSxcclxuICAgICAgICAgICAgWycjWzAtOWEtZkEtRl9dKyg/IVxcXFx3KScsICdhdHRyaWJ1dGUudmFsdWUuaGV4J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVuaXRzOiBbXHJcbiAgICAgICAgICAgIFsnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JywgJ2F0dHJpYnV0ZS52YWx1ZS51bml0JywgJ0Bwb3AnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5ZnJhbWVkZWNsYXJhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBzd2l0Y2hUbzogJ0BrZXlmcmFtZWJvZHknIH1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAga2V5ZnJhbWVib2R5OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxyXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGZ1bmN0aW9uaW52b2NhdGlvbjogW1xyXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyXFxcXCgnLCB7IHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJywgbmV4dDogJ0BmdW5jdGlvbmFyZ3VtZW50cycgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBmdW5jdGlvbmFyZ3VtZW50czogW1xyXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsnWyxdJywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcclxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZ2VuZGRvdWJsZXF1b3RlJyB9XSxcclxuICAgICAgICAgICAgWyd+P1xcJycsIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZ2VuZHF1b3RlJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nZW5kZG91YmxlcXVvdGU6IFtcclxuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXCInLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nZW5kcXVvdGU6IFtcclxuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnXFwnJywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9bXlxcXFwnXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==