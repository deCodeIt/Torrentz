// ==UserScript==
// @name        Torrentz
// @namespace   Laststnd
// @description Magnetic link on torrentz.in
// @include     *torrentz.*
// @include     *torrentz2.*
// @version     1.1
// @grant       none
// ==/UserScript==


var urls="magnet:?xt=urn:btih:";
var d=document.getElementsByTagName('div');
for(i=0;i<d.length;i++)
{
    if(d[i].innerHTML.indexOf('info_hash:')>=0 && d[i].innerHTML.indexOf('div')<0)
    {
        str=d[i].innerHTML;
        str=str.substring(str.indexOf(':')+2);
        urls=urls+str+"&dn=";
        break;
    }
}

var n=document.getElementsByTagName('h2');
for(i=0;i<n.length;i++)
{
    if(n[i].innerHTML.indexOf('Related to')>=0)
    {
        str2="";
        str=n[i].getElementsByTagName('a')[0].innerHTML;
        for(j=0;j<str.length;j++)
        {
            if(str.charAt(j)==' ')
                str2=str2+'+';
            else
                str2=str2+str.charAt(j);
        }
        urls=urls+str2;
        break;
    }
}
var a=document.getElementsByTagName('a');
pos=0;
txtFlag=0;
for(i=0;i<a.length;i++)
{
    if(a[i].href.indexOf('tracker_')>=0)
        urls=urls+"&tr="+a[i].innerHTML;
    else if(a[i].rel.indexOf('e')>=0 && txtFlag==0)
    {
        pos=i;
        txtFlag=1;
    }
}
//alert(urls);
a[pos].href=urls;
a[pos].innerHTML=a[pos].innerHTML.substring(0,a[pos].innerHTML.lastIndexOf('</span>')+7);
a[pos].getElementsByTagName('span')[0].style="background: transparent url('http://i57.tinypic.com/aoxdol.jpg') no-repeat 5px center;color : black;";
a[pos].getElementsByTagName('span')[1].innerHTML="<Font color='red'>Magnetic Link --- By L@$t$tnD</font>";
a[pos].getElementsByTagName('span')[0].innerHTML="<font color='black'>Magnetic Link</font>";
