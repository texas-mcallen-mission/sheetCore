// Typescript References

// interface getStatsArgs {
//     stDev?: "pop" | "sample",
// }
interface kiDataEntry {  // defines an object of key-value pairs.
    // This is one of those annoying things we can't really get around because Sheets only guarantees it'll return any's.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
}

interface aggDataReturn {
    data: kiDataEntry[],
    newKeys: string[]
}

enum timeGranularities {
    year = "year",
    month = "month",
    day = "day",
    hour = "hour",
    minute = "minute",
    second = "second",
    millisecond = "millisecond"
}

enum dMath {
    divide = "divide",
    multiply = "multiply",
    add = "add",
    subtract = "subtract",
    modulo = "modulo",
    exponent = "exponential",


}

interface timeGranularity {
    param:timeGranularities
}


// this is exactly how the Google Sheets documentation (and their types) say they'll return stuff.  This is the correct option.
// https://developers.google.com/apps-script/reference/spreadsheet/range#getValue()
// eslint-disable-next-line @typescript-eslint/no-explicit-any 
type sheetDataValueRaw = any[]



interface manySheetDatas {
    [index: string]: SheetData,
}

interface recursiveData { // literally no idea if this will work
    [index: string]: [] | recursiveData
}

interface recursiveFunctionData{
    keysLeft: string[],
    data: object
}

/**
 * Config data required to create a new rawSheetData class.
 *
 * @interface sheetDataEntry
 */
interface sheetDataEntry {
    tabName: string,
    headerRow: number, // zero-indexed: putting in zero will result in things winding up on row 1
    initialColumnOrder: columnConfig,
    includeSoftcodedColumns: boolean,
    sheetId?: string,
    allowWrite?: boolean,

    keyNamesToIgnore?: string[],

    fromCache?: boolean,
    requireRemote?: boolean,
    use_iterant?:boolean

}

interface manySheetDataEntries {
    [index: string]: sheetDataEntry;
}

interface columnConfig {
    [index: string]: number,
}

function DEMO_RAW_SHEET_DATA() {
    const shCo: sheetDataEntry = {
        tabName: "DEMONSTRATION_HEY",
        includeSoftcodedColumns: true,
        sheetId: SpreadsheetApp.getActiveSpreadsheet().getId(),
        allowWrite: true,
        keyNamesToIgnore: ["WWW", "responsePulled"],
        headerRow: 1,
        initialColumnOrder: {
            "demo_key_1": 0,
            "demo_key_2": 1
        },
    };

    let rawSheet = new RawSheetData(shCo);
    console.log(rawSheet.getData())
}

