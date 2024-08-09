/*
Common styles for the block library
*/
import { css } from "../../../deps/lit-all.min.js";

export const style = css`
.sk-library {
  width: 360px;
  height: 360px;
  background: #303030;
  color: #FFF;
  overflow: hidden;
  font-family: 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
  font-size: 14px;
}

/* Header */
.sk-library-header {
  display: flex;
  background: rgb(0 0 0 / 35%);
  flex-flow: wrap;
}

.sk-library-title {
  display: flex;
}

.sk-library-title-text {
  text-transform: capitalize;
  margin: 0;
  line-height: 36px;
}

.sk-library-logo {
  text-indent: -1000px;
  overflow: hidden;
  border: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 216 216'><defs><style>.cls-1{fill:%23f15a3a;}.cls-2{fill:%23c71f3d;}.cls-3{fill:%23ffc40c;}</style></defs><circle class='cls-1' cx='22.5' cy='108' r='22.5'/><circle class='cls-1' cx='193.5' cy='108' r='22.5'/><circle class='cls-2' cx='63' cy='27' r='27'/><circle class='cls-3' cx='162' cy='27' r='18'/><circle class='cls-2' cx='162' cy='189' r='27'/><circle class='cls-3' cx='63' cy='189' r='18'/></svg>");
  background-repeat: no-repeat;
  background-size: 18px;
  width: 36px;
  height: 36px;
  background-position: center;
}

.allow-back .sk-library-logo {
  background-color: transparent;
  border: 0;
  background-image: url('../../ui/img/spectrum-back.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.sk-library-back:hover {
  background-color: rgb(52 52 52 / 50%);
}

.sk-library.allow-back .sk-library-back {
  display: block;
}

.sk-library-search {
  display: flex;
  position: relative;
  flex: 1 1 100%;
}

.sk-library-search.is-hidden {
  display: none;
}

.sk-library-search::before {
  position: absolute;
  content: '';
  background: url('../../ui/img/spectrum-search.svg') no-repeat;
  width: 20px;
  height: 20px;
  margin-left: 11px;
  top: 11px;
  opacity: 0.6;
}

input.sk-library-search-input {
  width: 100%;
  padding-left: 35px;
  background: rgb(0 0 0 / 100%);
  color: #FFF;
  font-family: inherit;
  font-size: 14px;
  border: none;
  height: 35px;
  padding-right: 31px;
  border-top: 1px solid rgba(100 100 100 / 20%);
  border-bottom: 1px solid rgba(100 100 100 / 20%);
}

input.sk-library-search-input:focus {
  outline-width: 0;
}

.sk-library-search-clear {
  background: url('../../ui/img/spectrum-close.svg') no-repeat;
  width: 16px;
  height: 30px;
  margin-top: 10px;
  margin-right: 8px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.sk-library-search-clear.is-hidden {
  visibility: hidden;
}

/* Content */
.content-type {
  margin: 0;
  padding: 0 12px;
  line-height: 36px;
  text-transform: capitalize;
}


.sk-library li button {
  border: none;
  background-color: transparent;
  background-image: url('../../ui/img/spectrum-copy.svg');
  background-position: 50%;
  background-repeat: no-repeat;
  width: 44px;
  height: 44px;
  display: none;
  position: absolute;
  right: 0;
  top: 0;
}

.sk-library li p.item-title {
  padding: 0;
  margin: 0;
}

.sk-library button.preview-group {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  top: 6px;
  right: 32px;
  text-indent: -1000px;
  overflow: hidden;
  background-color: transparent;
  background-image: url('../../ui/img/spectrum-preview.svg');
  background-position: 50%;
  background-repeat: no-repeat;
}

.sk-library button.preview-group:hover {
  background-color: rgb(0 0 0 / 15%);
}

.sk-library p.heading {
  font-weight: 700;
  padding: 0 36px;
}

.con-container {
  position: relative;
  height: calc(100% - 36px);
}

.sk-library ul.sk-library-list,
.sk-library ul.con-type-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: scroll;
  position: absolute;
  inset: 0;
  transition: transform .2s ease-in-out;
}

.sk-library ul.con-type-list {
  transform: translateX(360px);
}

.sk-library ul.con-type-list.inset {
  transform: translateX(0);
}

.sk-library ul.inset {
  transform: translateX(-360px);
}

.sk-library li {
  line-height: 44px;
  position: relative;
  border-bottom: 1px solid #676767;
}

/*
 * Fixes block list getting cut off with search
 * Margin height equal to search bar height
*/
.sk-library ul.con-blocks-list.inset {
  margin-bottom: 39px;
}

.sk-library .block-group::after,
.sk-library .content-type::after {
  content: '';
  border: solid #777;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  right: 14px;
  top: 17px;
  transition: transform .2s ease-in-out;
  transform: rotate(-45deg);
}

.sk-library .block-group.is-open::after {
  transform: rotate(45deg);
}

.sk-library li:hover button {
  display: unset;
}

.sk-library li button.copied,
.sk-library li button.copied:hover {
  background-color: rgb(54 127 61 / 50%);
}

.sk-library .block-group {
  padding: 0 12px;
  background: rgb(0 0 0 / 50%);
  font-weight: 700;
}

.sk-library .block-group.is-hidden {
  display: none;
}

.sk-library .content-type:hover,
.sk-library .block-group:hover,
.sk-library button:hover {
  cursor: pointer;
  background-color: rgb(255 255 255 / 5%);
}

.sk-library .block-group-list {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sk-library .block-group.is-open + .block-group-list {
  display: block;
}

.sk-library .block-group-list li.is-hidden {
  display: none;
}

.sk-library .block-group-list li:hover {
  background-color: rgb(255 255 255 / 5%);
}

.sk-library .block-group-list p {
  margin: 0;
  padding: 0 24px;
}

.sk-library li.placeholder,
.sk-library li.template {
  padding: 0 12px;
}

.sk-library li.icon-item {
  display: flex;
  gap: 12px;
  padding: 0 12px;
}

.sk-library li.template {
  display: flex;
  align-items: stretch;
  justify-content: end;
}

.sk-library li.template .item-title {
  flex: 1 1 100%;
}

.sk-library li.template button {
  position: static;
  height: unset;
  width: 44px;
}

.in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


ul.con-type-list.con-assets-list {
  display: flex;
  align-items: start;
  width: 360px;
  flex-wrap: wrap;
}

.con-assets-list li {
  flex: 0 0 50%;
  height: 180px;
  text-align: middle;
  display: flex;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
}

.con-assets-list li:hover {
  cursor: pointer;
  background: #85858545;
}

.con-assets-list li:nth-child(odd) {
  border-right: 1px solid #676767;
}

.con-personalization_tags-list .item-title::first-letter {
  text-transform: capitalize;
}`
