# Resume

Follow the fork from link above or click
[here](https://github.com/udacity/frontend-nanodegree-resume)
to see where this project was forked from.

This repo contains the project listed as the header above for the
[Udacity](http://www.udacity.com/)
[Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

The final results of the files noted below can be seen
[here](https://carltonwin8.github.io/frontend-nanodegree-resume).

* [js](js/resumeBuilder.js)
* [css](css/style.css)
* [html](index.html)

Every thing below this line is from the parent fork and is preserved as is.
The requirements are show there.

---

## How do I complete this project?

1. Go to the [Javascript Basics course](https://www.udacity.com/course/ud804) and select "View Course Materials."
2. Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
3. Review your work against the Project Rubric (on the next page).
4. When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**:
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

1. Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. All properties should be included and contain a value of the type specified unless the property is marked 'optional'. Property values may contain real or fake data. Property names are case-sensitive. Make sure your javaScript objects are formatted correctly using [jshint.com](http://jshint.com/) .

* `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 date: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

* `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each javaScript object and append its information to index.html in the correct section.
 * First off, you’ll be using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
* You’ll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
* Here’s an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 * Use the mockup at the page of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. Do the following to add it.
 * In resumeBuilder.js, append the googleMap string to `<div id=”mapDiv”>`.
 * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
 * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of your code for adding elements to the resume should be contained within functions.
5. As described in the javaScript object schema, each 'display' function should be encapsulated within the javaScript object it displays in the resume. For instance, your 'display' function for appending 'work' experience data to the resume should be encapsulated within the 'work' javaScript object. The 'display' function can be encapsulated within the 'work' javaScript object definition in the same way other properties are defined there, or it can be encapsulated later in the file using dot notation. For example: `work.display =`
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.
