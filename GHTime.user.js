// ==UserScript==
// @name Github: always show absolute times
// @version 1.2.1
// @namespace namelessnanashi.dev
// @updateURL https://github.com/NanashiTheNameless/github-absolute-time/raw/main/GHTime.user.js
// @downloadURL https://github.com/NanashiTheNameless/github-absolute-time/raw/main/GHTime.user.js
// @supportURL https://github.com/NanashiTheNameless/github-absolute-time/issues
// @copyright https://github.com/NanashiTheNameless/github-absolute-time/license.md
// @description Github: always show absolute times
// @author NamelessNanashi
// @icon https://github.githubassets.com/favicons/favicon.svg
// @run-at document-end
// @grant none
// @match *://github.com/*
// ==/UserScript==

(function() { var style = document.createElement('style'); document.head.appendChild(style); var sheet = style.sheet; sheet.addRule('time-ago:before,relative-time:before', 'content: attr(title);display: block;font-size: 0.5rem;'); })()
