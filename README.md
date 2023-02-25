# sheetCore



## What is this even for?

 This is home to the TMM Key Indicator Tracking System's Google Sheet interface.  Used in:

| name | description |
| :---: | :--- |
| [key-indicator-system](https://github.com/texas-mcallen-mission/key-indicator-system) | flagship CKI tracker |
| [mileageLogHandler](https://github.com/texas-mcallen-mission/mileageLogHandler) | car mileage logging & reporting |
| [carCheckSystem](https://github.com/texas-mcallen-mission/carCheckSystem) | car inspection worksheet  |
| [kiHLA](https://github.com/texas-mcallen-mission/kiHLA) | more KI analysis stuff |
| [caragarra](https://github.com/texas-mcallen-mission/caragarra) | beta- facebook API -> Google Sheets connector |
| [mailmerge-demo](https://github.com/texas-mcallen-mission/mailMerge-demo) | proof of concept mail merge |

In addition to the Sheets interface provided, this includes the data parsing tools, automatic scheduling functions, and debug logging tools we've built to help standardize them across our projects.

Also includes a basic guide so that you can get started working with your own data!

## Why is this useful?

This is mostly designed to handle sheets with a standardized column order  that have more rows added to them as time goes on.  "Soft" columns- columns without a pre-configured key / definition- are fully supported as well.

The main draw to this is that instead of getting each entry of your data in array-of-array form:

```json
 [Jeffrey,chickenNugget,12],
 [Sean,burrito,1],
```

 you get it back out as an array of objects:

```json
    {name:"Jeffrey",order:"chickenNugget",qty:12},
    {name:"Sean",order:"burrito",qty:1}
```

At any kind of scale, this is a *way* more elegant solution than trying to keep track of indices and the like.

## Other information

At present, this library is *mostly* CRUD capable.

``sheetCore`` is not limited to just one spreadsheet- by using the ``sheetId`` property on sheet config, you can set remote targets as well.  However, this library isn't exactly the greatest at ad-hoc analysis- at present, you can change the position of the header row, giving space at the top for tables or information or whatever you'd like, but you can't get off of the first column (column A).  If you'd like to see that changed, please create a pull request!

Most, if not all of the code used in this repository is TypeScript, not pure JavaScript.  We've found the additional features of TypeScript to be incredibly useful for maintaining code and making sure that everything lines up the way it should.  The conversion process to mostly-TypeScript has taken a while- thankfully, it can be done incrementally, which is super handy!


If you want to automatically deploy code to Google Apps Script, take a look at this: [deploy-google-app-script-action-typescript](https://github.com/texas-mcallen-mission/deploy-google-app-script-action-typescript).  Not only does it push your code to the Apps Script environment, it also has support for passing through configuration data and secrets using Action Secrets, and automatically does TS to JS conversion.

