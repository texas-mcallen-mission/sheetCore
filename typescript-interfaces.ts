
enum timeGranularities {
    year = "year",
    month = "month",
    day = "day",
    hour = "hour",
    minute = "minute",
    second = "second",
    millisecond = "millisecond"
}

interface timeGranularity {
    param:timeGranularities
}
// class timeGranularityClass {
//     year: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "year"
//     day: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "day"
//     hour: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "hour"
//     minute: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "minute"
//     second: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "second"
//     millisecond: "year" | "day" | "hour" | "minute" | "second" | "millisecond" = "millisecond"
// }



// let timeGranularity = new timeGranularityClass()



interface manySheetDatas {
    [index: string]: SheetData,
}

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

function THIS_IS_A_DEMO_THING_YOU_SHOULDNT_USE_AND_SO_IT_HAS_A_REALLY_LONG_NAME_TO_DISSUADE_YOU_FROM_USING_IT() {
    let shCo: sheetDataEntry = {
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
}

