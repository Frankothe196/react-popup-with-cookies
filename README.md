# React popup with cookies
A workmate was interested in how a pop up with cookies work in **React**, well more specfically **Node.js**.

so i decided write and and share a code snippet over github. Might as well Make it Public. 
Feel free to take some 'inspiration' (crtl+V) from my code.
I used Gatsby, a react framework with scss/sass for styling the popup.

Theres a bunch of ways we could do this. I decided to go with [Universal CooKie](https://www.npmjs.com/package/universal-cookie) from [NPM](https://www.npmjs.com).

## Install **NPM package**
>npm i universal-cookie 

## use a **CDN**
you can also just add the script via cdn into your html file. But thats probably not best practice. 
>`<script crossorigin src="https://unpkg.com/universal-cookie@3/umd/universalCookie.min.js"></script>`

Code is pretty straight forward. It also offers loads of options to set up cookies.


## Browser Cookies code example
>
>import Cookies from 'universal-cookie';
>
>const cookies = new Cookies();
>
>cookies.set('foo', 'bar', { path: '/' });
>
>console.log(cookies.get('foo')); // Output: bar

We can get cookies with **get()** and set cookies with **set()** and remove with **remove()**
I know,Who would've guessed!

## Heres is an instance of the 'get' syntax
>cookies.get(name, [options])

Notice the options
Check the [npm package]('https://www.npmjs.com/package/universal-cookie') to see the different options you may use for each function.

# Cheers!
