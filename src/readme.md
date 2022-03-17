# Readme
Ryan Lay
A16038139

## Host Links
old firebase site: https://cse134b-hw4-js-17bd2.web.app/
new firebase site: https://cse134b-hw5-2d1d6.web.app/

## Part 3 Explanation
### The good
In short, the way that I implemented the CRUD implementation was exactly the same as the local storage version. I did not have the time nor the understanding to implement this using the firebase database.

This made the implementation process easier though.
### The bad
Unfortunately, this means that between devices or even browsers, the blog post content
will not be consistent.

One thing that was not done well in addition to this, was I did not implement any security features.

Here's a few ways I could've made my site more secure:
* hide buttons upon authentication
* disable buttons until authenticated
* disable and buttons upon signout
* use firebase authentication

The way I was planning on implementing this would've been to simply set the css style for the buttons to be `display: none` but this would've left the html on the client side.

There are two solutions that I can think of to resolve this. 
1. Add the buttons using JavaScript and template literals after authentication
2. Initialize button "onclick" scripts after authentication