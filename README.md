# sheetCore

## What even is this for?

 This is home to the TMM Key Indicator Tracking System's Google Sheet interface.  Used in the key-indicator-system, ``kiHLA 2``, and some other small projects.

In addition to the Sheets interface provided, this includes the data parsing tools and automatic scheduling functions we've built to help standardize them across different projects.

Also includes a basic guide so that you can get started working with your own data!

# Other information

Most, if not all of the code used in this repository is TypeScript, not pure JavaScript.  We've found the additional features of TypeScript to be incredibly useful for maintaining code and making sure that everything lines up the way it should.

The data modification portion currently uses a compiled-for-AppScript version of Lodash because there's not a good way to conveniently clone objects- and especially not classes- in vanilla JS.  We also use it in the ``key-indicator-system`` to deep merge the configuration file.

If you want to automatically deploy code to your sheets, take a look at TODO: PUT LINK HERE!