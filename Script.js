// ==UserScript==
// @name         TierMaker Dark mode
// @namespace    https://github.com/YSSF8/TierMaker-Dark-Mode/
// @version      1.1
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
        .ui-menu-item-wrapper {
            background: #1e1e1e !important;
        }
        .ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front {
            background: #1e1e1e;
        }
        .label-holder {
            outline: none;
            color: #000 !important;
        }
        #nav #create, .button-link {
            background: #6b96f3 !important;
        }
        a, #footer a {
            color: #6b96f3;
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
