// ==UserScript==
// @name         TierMaker Dark mode
// @version      1.0
// @description  Set TierMaker theme to dark.
// @author       YSSF
// @match        https://tiermaker.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body {
            background: #121212;
        }
        div, p, b, strong, em, h1, h2, h3, h4, h5 {
            color: #fff !important;
        }
        .ui-autocomplete-input {
            outline: none;
            background: #1e1e1e;
            color: #fff;
        }
        select {
            background: #1e1e1e;
            color: #fff;
        }
        .emoji-count {
            color: #000 !important;
        }
        ::-webkit-scrollbar {
            width: 12px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgb(50, 50, 50);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgb(40, 40, 40);
        }
    `);
})();
