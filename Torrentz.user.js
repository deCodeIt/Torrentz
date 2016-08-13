// ==UserScript==
// @name        Torrentz2
// @namespace   Laststnd
// @description Magnetic link on torrentz.in
// @include     *torrentz2.*
// @version     1.1
// @grant       none
// ==/UserScript==

// sets the hash value
var urls="magnet:?xt=urn:btih:";
str=document.getElementsByClassName('trackers')[0].getElementsByTagName('h2')[0].childNodes[1].nodeValue;
str=str.substring(str.indexOf('hash ')+5);
urls=urls+str+"&dn=";
// console.log(urls);

// sets the file name
var fileName=document.getElementsByClassName('download')[0].getElementsByTagName('h2')[0].childNodes[0].innerText;
// console.log(fileName);
fileName = fileName.replace(/ /g,'+');
urls=urls+fileName;

console.log(urls);

// sets the trackers
var tr=document.getElementsByClassName('trackers')[0].getElementsByTagName('dl');
pos=0;
txtFlag=0;
for(i=0;i<tr.length;i++)
{
    urls = urls +"&tr="+ tr[i].childNodes[0].innerText;
}

console.log(urls);

var newDL = document.createElement('dl');
var newDT = document.createElement('dt');
var newLink = document.createElement('a');
var newSpanLogo = document.createElement('span');
var newSpanLink = document.createElement('span');
var newSpanDesc = document.createElement('span');

newLink.href = urls;
newDT.appendChild(newLink);

newSpanLogo.style = "background: transparent url('http://i57.tinypic.com/aoxdol.jpg') no-repeat 5px center;color : black;";
newSpanLogo.setAttribute("class", "insites sprite");

newSpanLink.innerText = "Magnetic Link";
newSpanLink.setAttribute("class","u");

newSpanDesc.style = "color:red";
newSpanDesc.innerText = "Magnetic Link --- By L@$t$tnD";
newSpanDesc.setAttribute("class", "n");

newLink.appendChild(newSpanLogo);
newLink.appendChild(newSpanLink);
newLink.appendChild(newSpanDesc);

newDL.appendChild(newDT);
var list = document.getElementsByClassName('download')[0].childNodes;
var i;
// get the tagName of position of 1st link in downloading sites
for(i=0;i<list.length && list[i].tagName!="DL";i++);

document.getElementsByClassName('download')[0].insertBefore(newDL,list[i]); //  to insert the magnetic link at top of existing links

// a[pos].href=urls;
// a[pos].innerHTML=a[pos].innerHTML.substring(0,a[pos].innerHTML.lastIndexOf('</span>')+7);
// a[pos].getElementsByTagName('span')[0].style="background: transparent url('http://i57.tinypic.com/aoxdol.jpg') no-repeat 5px center;color : black;";
// a[pos].getElementsByTagName('span')[1].innerHTML="<Font color='red'>Magnetic Link --- By L@$t$tnD</font>";
// a[pos].getElementsByTagName('span')[0].innerHTML="<font color='black'>Magnetic Link</font>";
