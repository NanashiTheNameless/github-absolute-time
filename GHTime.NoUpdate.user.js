// ==UserScript==
// @name Github: always show absolute times
// @version 1
// @namespace namelessnanashi.dev
// @supportURL https://github.com/NanashiTheNameless/github-absolute-time
// @copyright https://github.com/NanashiTheNameless/github-absolute-time/license.md
// @description Github: always show absolute times
// @author NamelessNanashi
// @run-at document-end
// @grant none
// @match *://github.com/*
// ==/UserScript==

(function() { var style = document.createElement('style'); document.head.appendChild(style); var sheet = style.sheet; sheet.addRule('time-ago:before,relative-time:before', 'content: attr(title);display: block;font-size: 0.5rem;'); })()
