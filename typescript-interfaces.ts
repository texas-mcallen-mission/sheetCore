// Typescript References

// interface getStatsArgs {
//     stDev?: "pop" | "sample",
// }
interface kiDataEntry {  // defines an object of key-value pairs.
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


interface manySheetDatas {
    [index: string]: SheetData,
}

interface recursiveData { // literally no idea if this will work
    [index: string]: [] | recursiveData
}

interface recursiveFunctionData{
    keysLeft: string[],
    data: Object
}

/**
 * Config data required to create a new rawSheetData class.
 *
 * @interface sheetDataEntry
 */
interface sheetDataEntry {
    tabName: string,
    headerRow: number,
    initialColumnOrder: columnConfig,
    includeSoftcodedColumns: boolean,
    sheetId?: string,
    allowWrite?: boolean,

    keyNamesToIgnore?: string[],

    fromCache?: boolean,
    requireRemote?:boolean

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

