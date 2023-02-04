# Where You Left Off

Set up a math engine class so I can reuse the math engine stuff and keep things organized-ish.

Currently about to get started writing something to calculate population standard deviation (should I add a flag for it to calculate pop stdev too?)

Not sure if I should stick the stdev calcs in the new mathEngine class or the kiDataClass
  For the moment, we'll keep it in the kiDataClass, bc it's main role is to support, I guess

  <https://www.thoughtco.com/how-to-calculate-standard-deviation-608322#:~:text=How> to Calculate Standard Deviation Using Hand Calculator,3 Square each of the deviations. See More.


## Commands to update documentation:

```/bin/bash
npm install --save-dev typedoc typedoc-plugin-markdown
clear && ./node_modules/.bin/typedoc --plugin typedoc-plugin-markdown --out docs sheetData.ts --readme none --githubPages false --entryDocument docs.md
```