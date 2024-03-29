//@ts-check


// pulled from key-indicator-system/dataflow/kidata-class
// this gets used in several things, and it makes a lot of sense to move it over to the shared core.

class mathEngineClass {
    basic(arg1, arg2, operator: dMath) {
        switch (operator) {
            case dMath.add:
                return arg1 + arg2;
                break;
            case dMath.divide:
                return arg1 / arg2;
            case dMath.exponent:
                return arg1 ** arg2;
            case dMath.modulo:
                return arg1 % arg2;
            case dMath.multiply:
                return arg1 * arg2;
            case dMath.subtract:
                return arg1 - arg2;
            default:
                return null;
        }
    }
    //     arrayAverage(array: number[]): number{

    // }

}

/**
 * splits a kiDataCLass's data into little pieces by grouping by unique values on a specified key
 *
 * @param {kiDataClass} kiDataObj
 * @param {string} key
 * @return {manyKiDataClasses}
 */
function splitKiData(kiDataObj: kiDataClass, key: string): manyKiDataClasses {
    const kiData = kiDataObj.end;
    
    let output: manyKiDataClasses = {};
    for (const entry of kiData) {
        if (output[entry[key]] == undefined) {
            output[entry[key]] = new kiDataClass([]);
        }
        output[entry[key]].data.push(entry);
    }
    return output;
}

interface manyKiDataClasses {
    [index: string]: kiDataClass;
}

// !Warning!  This will probably get deprecated in favor of kiDataEntry[]
// ! This is *not* what you want to use for kiDataClass work: this is for funky weird edge cases like making keyed objects of kiDataEntry[] arrays.
interface manyKiDataEntries { // array of kiDataEntries
    [index: number]: kiDataEntry;
}

interface keyedKiDataEntries {
    [index: string]: kiDataEntry[];
}



interface statEntry extends kiDataEntry {
    sum: number,
    count: number,
    average: number,
    sampleStDev: number,
    popStDev: number,
}

function appendArrayToObject_(keySet: string[], targetObj, kiDataEntry: kiDataEntry) {
    let targetValue = kiDataEntry[keySet[0]];
    if (keySet.length == 1) {
        if (!Object.prototype.hasOwnProperty.call(targetObj,targetValue)) {
            targetObj[targetValue] = [];
            // Theoretically I could stick the Aggregation functions in here...
        }
        targetObj[targetValue].push(kiDataEntry);
    } else { 
        if (!Object.hasOwnProperty.call(targetObj, targetValue) /*targetObj.hasOwnProperty(targetValue)*/) {
            targetObj[targetValue] = {};
        }
        // targetObj[targetValue].assign()
        keySet.shift();

        appendArrayToObject_(keySet, targetObj[targetValue], kiDataEntry);
    }
}



interface groupedData {
    [index: string]: groupedData | kiDataEntry[];
}

/**
 * @description Given a Date or string, convert to a mm/dd/yyyy hh:mm:ss string that Google Sheets appreciates.
 * @param {(string | Date)} input
 * @return {*} 
 */
function convertToSheetDate_(input: string | Date) {
    let date = new Date(input)
    let output = ""

    // making a  month / day / year / hours:minutes:seconds

    
    output += (date.getMonth()+1) + "/" // month
    output += date.getDate() + "/"; // day
    output += date.getFullYear() + " "; // year
    output += date.getHours() + ":"; // hours
    output += date.getMinutes() + ":";
    output += date.getSeconds() + " "
    output.trim()
    
    return output
}
interface sortArgs{
    descending?: boolean
    valueType: sortTypes
}

enum sortTypes {
    number ="number",
    string="string",
    date = "date",
    unknown = "unknown"
}


class kiDataClass {

    
    // TODO Get rid of this stuff, move it to external arguments.  (Will be pretty ezpz with the joining stuff in the pipeline.)
    internal_config = {
        shortLanguageLookup: {
            "English": "Eng",
            "Spanish": "Spa",
            "Sign Language": "ASL",
            "English,English": "Eng",
            "Spanish,Spanish": "Spa"
        },
        combinedNameKeys: {
            m1: {
                name: "name1",
                pos: "position1",
                trainer: "isTrainer1"
            },
            m2: {
                name: "name2",
                pos: "position2",
                trainer: "isTrainer2"
            },
            m3: {
                name: "name3",
                pos: "position3",
                trainer: "isTrainer3"
            }
        }
    };
    data: kiDataEntry[] = [];
    additionalKeys: string[];
    mathEngine: mathEngineClass;

    

    // constructor(kiData: kiDataEntry[] | object[]) {
    //     this.data = [];
    //     this.data = this.cleanDate(kiData); // changed thissssss
    //     this.additionalKeys = [];
    //     this.mathEngine = new mathEngineClass();

    // }
    
    constructor(kiData: kiDataEntry[] | object[]) {
        this.data = [];
        this.data = kiData;
        this.additionalKeys = [];
        this.mathEngine = new mathEngineClass();

    }

    

    /**
     * @description Sorter!  Can sort by numbers, integers, dates, and gives its best shot at everything else.  Can do ascending & descending as well.  Puts values with missing keys at the very end.
     * 
     * @param {string} sortKey
     * @param {sortArgs} sortArgs
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    sort(sortKey: string,sortArgs:sortArgs): this {
        // step 0: comparator function declarations

        /**
         * @description default / other sort comparator, for default array sorter.  Compares by `COMPARISONKEYTHINGY`, which you can set by using the copyKey method.
         * @param {kiDataEntry} a
         * @param {kiDataEntry} b
         * @return {*} 
         */
        function compareObjectsByKey_(a: kiDataEntry, b: kiDataEntry) {

            let outVal = 0
            if (a["COMPARISONKEYTHINGY"] > b["COMPARISONKEYTHINGY"]) {
                outVal = -1
            } else if (a["COMPARISONKEYTHINGY"] < b["COMPARISONKEYTHINGY"]) {
                outVal = 1
            } else {
                outVal = 0
            }
            return outVal * descending
        }
        /**
         * @description date comparator, for default array sorter.  Compares by `COMPARISONKEYTHINGY`, which you can set by using the copyKey method.
         * @param {kiDataEntry} a
         * @param {kiDataEntry} b
         * @return {*} 
         */
        function compareObjectsByDate_(a: kiDataEntry, b: kiDataEntry) {
            let outVal = 0
            let date1 = new Date(a["COMPARISONKEYTHINGY"]).getTime()
            let date2 = new Date(b["COMPARISONKEYTHINGY"]).getTime()
            if (date1 > date2) {
                outVal = -1;
            } else if (date1 < date2) {
                outVal = 1;
            } else {
                outVal = 0;
            }
            return outVal * descending
        }
        /**
                 * @description string comparator, for default array sorter.  Compares by `COMPARISONKEYTHINGY`, which you can set by using the copyKey method.
                 * @param {kiDataEntry} a
                 * @param {kiDataEntry} b
                 * @return {*} 
                 */
        function compareObjectsByString_(a: kiDataEntry, b: kiDataEntry) {
            let outVal = 0;
            let string1 = String(a["COMPARISONKEYTHINGY"]).toLowerCase()
            let string2 = String(b["COMPARISONKEYTHINGY"]).toLowerCase()
            if (string1 > string2) {
                outVal = -1;
            } else if (string1 < string2) {
                outVal = 1;
            } else {
                outVal = 0;
            }
            return outVal * descending
        }

        
        /** number comparator, for default array sorter.  Compares by `COMPARISONKEYTHINGY`, which you can set by using the copyKey method.
         * @description
         * @param {kiDataEntry} a
         * @param {kiDataEntry} b
         * @return {*} 
         */
        function compareObjectsByNumber_(a: kiDataEntry, b: kiDataEntry) {
            let outVal = 0;
            let num1 = +a["COMPARISONKEYTHINGY"]
            let num2 = +b["COMPARISONKEYTHINGY"]
            if (num1 > num2) {
                outVal = -1;
            } else if (num1 < num2) {
                outVal = 1;
            } else {
                outVal = 0;
            }
            return outVal * descending
        }
        // step 1: set up things for comparator functions to do their job
        this.copyKey(sortKey, "COMPARISONKEYTHINGY");
        let outData = this.data;
        let descending = -1;
        if (Object.hasOwn(sortArgs, "descending")) {
            if (sortArgs.descending === true) {
                descending = descending * -1 // logical invert
            }
        }
        // remove data that doesn't have entries for the comparison key, so that they don't crash the sorter and wind up at the bottom
        let missingKeyData = this.popMissing(sortKey)
        
        // step 2: actually sort the data 
        
        switch (sortArgs.valueType) {
            case sortTypes.date:
                outData.sort(compareObjectsByDate_)
                break;
            case sortTypes.number:
                outData.sort(compareObjectsByNumber_);
                break;
            case sortTypes.string:
                outData.sort(compareObjectsByString_);
                break;
            default:
                outData.sort(compareObjectsByKey_)
                break;
        }

        this.data = outData

        // put data that doesn't have values at the end.
        if (missingKeyData.length > 0) {
            this.data.push(...missingKeyData)
        }
        // cleanup: remove internal comparison key.
        this.removeKey("COMPARISONKEYTHINGY")

        // annd done!
        return this;
    }

    removeKey(targetKey): this{
        for (const entry of this.data) {
            if (Object.hasOwn(entry, targetKey)) {
                delete entry[targetKey]
            }
        }


        return this
    }
    /**
     * @description Removes 
     * @param {string} dateKey
     * @return {*}  {kiDataEntry}
     * @memberof kiDataClass
     */
    popNewestByDateString(dateKey: string): kiDataEntry{
        let output: kiDataEntry = this.data[0]
        let position = 0
        // find 
        for (let i = 0;i<this.data.length; i++) {
            let comparisonTime = new Date(output[dateKey]).getTime()
            let testTime = new Date(this.data[i][dateKey]).getTime()
            if (testTime > comparisonTime) {
                output = this.data[i]
                position = i
            }
        }
        if(position === -1){
            console.warn("popNewestByDateString had an internal failure, please check your input key")
            throw "popNewestByDateString (sheetCore/dataManipulator/kiDataClass) had an error"
        }
        this.data.splice(position)
        return output

    }

    /**
     * @description removes kiDataEntries that has a string includes match and returns that array.
     *  Originally written for a MarkDuplicatesV2 update. 
     * @param {string} targetKey
     * @param {string} partialMatchString
     * @return {*}  {kiDataEntry[]}
     * @memberof kiDataClass
     */
    popStringIncludes(targetKey: string, partialMatchString: string): kiDataEntry[]{
        let output: kiDataEntry[] = []
        let outData:kiDataEntry[] = []
        for (const entry of this.data) {
            if (Object.hasOwn(entry, targetKey) && String(entry[targetKey]).includes(partialMatchString)) {
                output.push(entry)
            } else {
                outData.push(entry)
            }
        }
        this.data = outData
        return output
    }

    /**
     * @description returns all data that doesn't have something stored at `targetKey`, and removes it from the internal dataset.
     * @param {string} targetKey
     * @return {kiDataEntry[]}
     * @memberof kiDataClass
     */
    popMissing(targetKey:string): kiDataEntry[] {
        // written originally to support .sort()
        let output: kiDataEntry[] = []
        let outData: kiDataEntry[] = []

        for (const entry of this.data) {
            if (!Object.hasOwn(entry, targetKey)) {
                output.push(entry)
            } else {
                outData.push(entry)
            }
        }
        this.data = outData
        return output
    }

    copyKey(inKey, outKey,defaultValue:string|[]|object|null = ""): this {
        const outData = this.data
        for (const entry of outData) {
            if (Object.hasOwnProperty.call(entry, inKey)) {
                entry[outKey] = entry[inKey]
            } else {
                entry[outKey] = defaultValue
            }
        }
        this.data = outData
        return this
    }

    /**
     * @description This takes Javascript dates and other strings and turns them into a format that Google Sheets likes better.
     * @param {string} inKey - object key that has the date on it
     * @param {string} outKey - output key where date is stored.  (Can be the same as inKey)
     * @return {this} returns this for chaining.
     * @memberof kiDataClass
     */
    convertToSheetDate(inKey: string, outKey: string): this {
        let outData = this.data

        for (let entry of outData) {
            if (Object.hasOwnProperty.call(entry, inKey)) {
                entry[outKey] = convertToSheetDate_(entry[inKey])
            }
        }
        this.data = outData
        return this
    }

    /** Right join: merges matching data from the current dataset in with the second one, and keeps other values from the second dataset too.
     * 
     * @param {kiDataEntry[]} secondDataset 
     * @param {string} joinKey 
     * @return {this} returns ``this`` for chaining
     * 
     * @memberof kiDataCLass
     */
    rightJoin(secondDataset: kiDataEntry[], joinKey: string): this {
        let outData: kiDataEntry[] = [];
        // I'm not sure what this will do if there are two things in a second table...
        // It's been a long time since I've done this stuff...
        let keys = this.getDataFromKey(joinKey);
        // hopefully this keeps match order?
        let data: kiDataEntry[] = this.data;

        for (let entry of secondDataset) {
            let testEntry = entry;
            let testValue = testEntry[joinKey];
            if (keys.includes(testValue)) {
                testEntry = { ...entry, ...data[keys.indexOf(testValue)] };
            }
            outData.push(testEntry);
        }

        this.data = outData;

        return this;
    }


    /**
     *  Inner join: keeps data from this.data only when ithas a match in the second given dataset.
     *
     * @param {kiDataEntry[]} secondDataset
     * @param {string} joinKey
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    innerJoin(secondDataset: kiDataEntry[], joinKey: string): this {
        let outData: kiDataEntry[] = [];
        let secondDataClass = new kiDataClass(secondDataset);
        // I'm not sure what this will do if there are two things in a second table...
        // It's been a long time since I've done this stuff...
        let keys = secondDataClass.getDataFromKey(joinKey);
        // hopefully this keeps match order?
        let data: kiDataEntry[] = secondDataClass.end;

        for (let entry of this.data) {
            let testEntry = entry;
            let testValue = testEntry[joinKey];
            if (keys.includes(testValue)) {
                testEntry = { ...entry, ...data[keys.indexOf(testValue)] };
                outData.push(testEntry);
            }
        }
        // In the future, this method will return this for chaining.
        this.data = outData;
        return this;
    }

    /**
     * Left-Join: returns all data in this.data and joins based on a single key in a second dataset.
     *
     * @param {kiDataEntry[]} secondDataset
     * @param {string} joinKey
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    leftJoin(secondDataset: kiDataEntry[], joinKey: string): this {
        let outData: kiDataEntry[] = [];
        let secondDataClass = new kiDataClass(secondDataset);
        // I'm not sure what this will do if there are two things in a second table...
        // It's been a long time since I've done this stuff...
        let keys = secondDataClass.getDataFromKey(joinKey);
        // hopefully this keeps match order?
        let data: kiDataEntry[] = secondDataClass.end;

        for (let entry of this.data) {
            let testEntry = entry;
            let testValue = testEntry[joinKey];
            if (keys.includes(testValue)) {
                testEntry = { ...entry, ...data[keys.indexOf(testValue)] };
            }
            outData.push(testEntry);
        }
        // In the future, this method will return this for chaining.
        this.data = outData;
        return this;
    }

        // This is one of those annoying things we can't really get around because Sheets only guarantees it'll return any's.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getDataFromKey(targetKey: string): any[] {
        // This is one of those annoying things we can't really get around because Sheets only guarantees it'll return any's.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let outData: any[] = [];
        for (let entry of this.data) {
            if (Object.prototype.hasOwnProperty.call(entry,targetKey)) {
                outData.push(entry[targetKey]);
            }
        }
        return outData;
    }

    /**
     *  returns all unique values for a key in the dataset.
     *
     * @param {*} targetKey
     * @return {string[]}
     * @memberof kiDataClass
     */
    getUniqueEntries(targetKey): sheetDataValueRaw {
        
        let outData: string[] = [];
        for (const entry of this.data) {
            if (Object.prototype.hasOwnProperty.call(entry,targetKey) && !outData.includes(entry[targetKey])) {
                outData.push(entry[targetKey]);
            }
        }

        return outData;
    }
    /**
     *
     *
     * @param {string} newKey
     * @param {number} [startVal=0]
     * @return {*} 
     * @memberof kiDataClass
     */
    addIterant(newKey: string, startVal = 0) {
        let inData = this.data;
        for (let i = 0; i < inData.length; i++) {
            inData[i][newKey] = i+startVal;
        }
        this.data = inData;
        this.newKeys.push(newKey);
        return this;
    }

    /**
     *  Removes anything smaller than a test value.
     *
     * @param {string} key
     * @param {number} testVal
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    removeSmaller(key: string, testVal: number): this {
        let inData: kiDataEntry[] = this.data;
        let outData: kiDataEntry[] = [];
        for (let entry of inData) {
            if (Object.prototype.hasOwnProperty.call(entry,key) && +entry[key] >= testVal) {
                outData.push(entry);
            }
        }
        this.data = outData;
        return this;
    }




    get newKeys(): string[] {
        return this.additionalKeys;
    }


    get end(): kiDataEntry[] {
        return this.data;
    }

    bulkAppendObject(pairsToAdd: kiDataEntry): this {
        let inData: kiDataEntry[] = this.data;
        let outData: kiDataEntry[] = [];
        for (let entry of inData) {
            let output = { ...entry, ...pairsToAdd };
            outData.push(output);
        }

        this.data = outData;

        return this;
    }

    /** returns a bunch of stats for a given dataset key.  needs to have numbers. */
    getStats(key1: string, prependKeyToStatName = false): statEntry {
        let prepend = "";
        if (prependKeyToStatName == true) {
            prepend = key1;
        }
        let metaData: statEntry = {
            sum: 0,
            count: 0,
            average: 0,
            sampleStDev: 0,
            popStDev: 0,

        };
        let data = this.data;

        // Step One: Calculate average
        let sum = 0;
        let count = 0;
        for (let entry of data) {
            sum += +entry[key1];
            count += 1;
        }
        metaData[prepend + "sum"] = sum;
        metaData[prepend + "count"] = count;
        metaData[prepend + "average"] = sum / count;

        // Calculating stDev, Sample
        let deviations: number[] = [];
        let squaredDeviationSum = 0;
        for (let entry of data) {
            let deviation = metaData["average"] - +entry[key1];
            deviations.push(deviation);
            squaredDeviationSum += (deviation ** 2);
        }
        let sampleDeviation = (squaredDeviationSum / (deviations.length - 1)) ** .5;
        let popDeviation = (squaredDeviationSum / deviations.length) ** .5;
        metaData[prepend + "sampleStDev"] = sampleDeviation;
        metaData[prepend + "popStDev"] = popDeviation;




        return metaData;
    }

    /**
     *  Does mathematical operations on a dateset.  Arg1 is the numerator / base for division / exponents. newKey can overlap with a key if you really want it to.
     *
     * @param {dMath} operator
     * @param {string} newKey
     * @param {string} key1
     * @param {string} key2
     * @return {this} returns this for chaining
     * @memberof kiDataClass
     */
    mathByKey(operator: dMath, newKey: string, key1: string, key2: string): this {
        let data: kiDataEntry[] = this.data;

        for (let entry of data) {
            data[newKey] = this.mathEngine.basic(data[key1], data[key2], operator);
        }
        return this;
    }

    mathByConstant(operator: dMath, newKey: string, key1: string, constant: number): this {
        let data: kiDataEntry[] = this.data;

        for (let entry of data) {
            entry[newKey] = this.mathEngine.basic(data[key1], constant, operator);
        }
        this.data = data
        return this;
    }

    groupDataByMultipleKeys(groupingKeys: string[]): groupedData {
        let outData: groupedData = {};
        let inData: kiDataEntry[] = this.data;

        for (let entry of inData) {
            appendArrayToObject_([...groupingKeys], outData, entry);
        }

        return outData;
    }

    /**
     * aggregates data: aggregates data by a set of (nesting) keys.  keysToAggregate currently requires integers- it'll concat strings though, if that's what you want.
     * I need to get rid of shardKey and slightly refactor the kiHLA stuff that tocars that.  :)
     *
     * @param {string[]} groupingKeys
     * @param {string[]} keysToKeep
     * @param {*} keysToAggregateBy
     * @param {(string|null)} [shardKey=null]
     * @return {*} 
     * @memberof kiDataClass
     */
    aggregateByKeys(groupingKeys: string[], keysToKeep: string[], keysToAggregateBy, shardKey: string | null = null) {
        // Recursive function declarations:


        function aggData_(depthLevels: number /*Length of the keysToAggregate object */, inputObject: object, dataPassthrough: kiDataEntry[], keysToAggregate: string[], keysToKeep: string[], shardKey: string | null, newKeys: string[]): aggDataReturn {
            let outData: kiDataEntry[] = dataPassthrough;
            // inputObject.getIndex;
            if (depthLevels == 0) { // this should get me to the level of kiDataEntry[], I *think*.
                let subEntry = {};
                //.   //@ts-ignore - I don't know how to properly define a recursive thing- by the time you get to this execution branch it should be guaranteed to be an array of objects.
                for (let key in inputObject) {
                    // aggregation code
                    // for (let entry of inputObject[key]) {
                    for (let aggKey of keysToAggregate) {
                        let targetKeyString = key[aggKey];
                        if (shardKey != null && Object.prototype.hasOwnProperty.call(key,shardKey) && key[shardKey] != "") {
                            targetKeyString += key[shardKey];
                        }
                        if (!Object.prototype.hasOwnProperty.call(subEntry,targetKeyString)) {
                            subEntry[targetKeyString] = 0;
                            newKeys.push(targetKeyString);
                        }
                        subEntry[targetKeyString] += 1;
                    }
                }
                for (let keeper of keysToKeep) {
                    subEntry[keeper] = inputObject[0][keeper];
                }
                outData.push(subEntry);
            } else {
                for (let key in inputObject) {
                    aggData_(depthLevels - 1, inputObject[key], dataPassthrough, keysToAggregate, keysToKeep, shardKey, newKeys);
                }
            }
            return { data: outData, newKeys: newKeys };
        }

        // BEGIN FUNCTION WORK
        let inData: kiDataEntry[] = [...this.data];
        let outData: kiDataEntry[] = [];

        // Step One: Sort data into an aggregatable form
        let groupedData = {};
        for (let entry of inData) {
            appendArrayToObject_([...groupingKeys], groupedData, entry);
        }

        // Step Two: Group data & aggregate it.
        let allKeysToKeep: string[] = [...groupingKeys, ...keysToKeep, ...keysToAggregateBy];

        let newKeys: string[] = [];

        let aggDataCombo: aggDataReturn = aggData_(groupingKeys.length, groupedData, [], keysToAggregateBy, allKeysToKeep, shardKey, newKeys);

        let aggData: kiDataEntry[] = aggDataCombo.data;

        // Step 3: Update internal key list.
        for (let key of aggDataCombo.newKeys) {
            if (!Object.prototype.hasOwnProperty.call(this.additionalKeys,key)) {
                this.additionalKeys.push(key);
            }
        }

        this.data = aggData;

        return this;






    }
    /**
     *  Generalized version of groupByKey, but instead of time, it groups by variations on any given key.
     *  
     *
     * @param {string} targetKey
     * @return {keyedKiDataEntries}
     * @memberof kiDataClass
     */
    groupByKey(targetKey: string): keyedKiDataEntries {
        let data = this.data;
        let outData: keyedKiDataEntries = {};
        let test: kiDataEntry = {};

        for (let entry of data) {
            if (Object.prototype.hasOwnProperty.call(entry,targetKey)) {
                let key = entry[targetKey];
                if (!(key in outData)) {
                    console.log("Adding first entry for:", key);
                    outData[key] = [];
                }
                outData[key].push(entry);
            } else {
                console.error("key not specified.");
            }
        }
        return outData;
    }
    /**
     * addGranulatedTime : Similar to groupByTime, but instead of grouping, it just adds a calculated time value to a new key.
     *
     * @param {string} timeSeriesKey
     * @param {string} newKey
     * @param {timeGranularities} granularity
     * @return {this} returns this for chaining
     * @memberof kiDataClass
     */
    addGranulatedTime(timeSeriesKey: string, newKey: string, granularity: timeGranularities): this {
        let data = this.data;
        // let outData: manyKiDataEntries = {};
        // let test: kiDataEntry = {};

        for (let entry of data) {
            if (Object.prototype.hasOwnProperty.call(entry,timeSeriesKey)/*entry.hasOwnProperty(timeSeriesKey)*/) {
                let date: Date = new Date(entry[timeSeriesKey]);
                // I used a case statement (without breaks, for the most part) because it removes redundancy- we're comparing by .getUTCTime, which gives us milliseconds.
                // This is the integer equivalent of .floor'ing something at increasing orders of magnitude.
                switch (granularity) {
                    case timeGranularities.year:
                        date.setUTCMonth(0); // note: the lack of breaks here is ON PURPOSE.  See the above note for why.
                        //fallthrough
                    case timeGranularities.month:
                        date.setUTCDate(1); // oddly enough, if set to zero, it'll give the 31st of (the month before?)... super weird.
                        //fallthrough
                    case timeGranularities.day:
                        date.setUTCHours(0);
                        //fallthrough
                    case timeGranularities.hour:
                        date.setUTCMinutes(0);
                        //fallthrough
                    case timeGranularities.minute:
                        date.setUTCSeconds(0);
                        //fallthrough
                    case timeGranularities.second:
                        date.setUTCMilliseconds(0);
                        //fallthrough
                    case timeGranularities.millisecond:
                        break;
                    default:
                        console.error("YOU SHOULDN'T BE HERE!");
                }

                let time = date.toUTCString();
                entry[newKey] = time;
            } else {
                console.error("timeseries key not accessible.");
            }
        }
        return this;
    }
    /**
 *  groupByTime: first thing written specifixally for time-series data: this splits a sheetData into an object of sheetDatas organized by timestamp.
 *  requires a key that has time-series data stored on it and a granularity.
 *  This is the kind of thing that's a bit of a pain to use Sheets QUERY functions for.
 *  Originally written to aggregate the debug log's stuff into by-hour chunks, but this might be useful for other stuff, which is why it's getting generalized.
 *  returns an object of kiDataEntry[] arrays keyed by timestamp.
 *
 * @param {string} timeSeriesKey
 * @param {string} granularity
 * @return {manyKiDataEntries}
 * @memberof SheetData
 */
    groupByTime(timeSeriesKey: string, granularity: timeGranularities): manyKiDataEntries {
        let data = this.data;
        let outData: manyKiDataEntries = {};
        let test: kiDataEntry = {};

        for (let entry of data) {
            if (Object.prototype.hasOwnProperty.call(entry,timeSeriesKey)) {
                let date: Date = new Date(entry[timeSeriesKey]);
                // I used a case statement (without breaks, for the most part) because it removes redundancy- we're comparing by .getUTCTime, which gives us milliseconds.
                // This is the integer equivalent of .floor'ing something at increasing orders of magnitude.
                switch (granularity) {
                    case timeGranularities.year:
                        date.setUTCMonth(0); // note: the lack of breaks here is ON PURPOSE.  See the above note for why.
                        // fallthrough
                    case timeGranularities.month:
                        date.setUTCDate(1); // oddly enough, if set to zero, it'll give the 31st of (the month before?)... super weird.
                        // fallthrough
                    case timeGranularities.day:
                        date.setUTCHours(0);
                        // fallthrough
                    case timeGranularities.hour:
                        date.setUTCMinutes(0);
                        // fallthrough
                    case timeGranularities.minute:
                        date.setUTCSeconds(0);
                        // fallthrough
                    case timeGranularities.second:
                        date.setUTCMilliseconds(0);
                        // fallthrough
                    case timeGranularities.millisecond:
                        break;
                    default:
                        console.error("YOU SHOULDN'T BE HERE!");
                }

                let time = date.getUTCDate();
                if (!(time in outData)) {
                    console.log("Adding first entry for:", time);
                    outData[time] = [];
                }
                outData[time].push(entry);
            } else {
                console.error("timeseries key not specified.");
            }
        }
        return outData;
    }
    /**
     * This is a VERY destructive method- it's designed to replace a set of very over-burdened pivot tables 
     * doing something that was a little too difficult to figure out how to do earlier.  Will remove ALL not-whitelisted keys.  
     * Also removes all keys where the value is "" or undefined or null, 
     * Optionally remove any that equal zero as well or only creates one entry for it.
     * Also creates a key named by the argument ``breakdownKey`` that has the value for which key the thing was made.
     * @param {string[]} keysToKeep
     * @param {string[]} breakdownKeys
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    breakdownAnalysis(keysToKeep: string[], breakdownKeys: string[], breakdownKeyName: string, keepOneIfZeroes = true): this {
        let output: kiDataEntry[] = [];
        let newKeyName = "breakdownKey";

        for (let entry of this.data) {
            let subEntry = {};
            // gets the values that we want to keep across all sub-entries.
            for (let key of keysToKeep) {
                subEntry[key] = entry[key];
            }
            let nullOrZeroCount = 0;
            for (let key of breakdownKeys) {
                if (typeof entry[key] == undefined || entry[key] == "" || entry[key] == null || entry[key] == 0) { // I *think* I covered my bases here 
                    nullOrZeroCount += 1;
                } else {
                    //@ts-ignore the lodash library 
                    let subsub: kiDataEntry = _.cloneDeep(subEntry);
                    subsub[newKeyName] = key;
                    subsub[breakdownKeyName] = entry[key];
                    output.push(subsub);
                }
                if (nullOrZeroCount == entry.length && keepOneIfZeroes) {
                    subEntry[breakdownKeyName] = 0;
                    output.push(subEntry);
                }
            }
        }
        this.data = output;

        return this;
    }
    /**
     *  Generalization of what was sumFacebookReferrals
     *
     * @param {string[]} listOfKeys
     * @param {string} newKeyName
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    createSumOfKeys(listOfKeys: string[], newKeyName: string): this {
        let output: kiDataEntry[] = [];

        for (let entry of this.data) {
            let sum = 0;
            for (let key of listOfKeys) {
                // let targetKey = listOfKeys[key];
                // uses the unary operator, seems pretty slick... hope it doesn't break anything!
                sum += +entry[key];
            }
            entry[newKeyName] = sum;
            output.push(entry);
        }

        this.data = output;
        return this;
    }
    // TODO Delete in Next Release
    // /**
    //  *  Adds a key named ``fb-ref-sum`` that sums up all the facebook referrals (currently hardcoded).
    //  *
    //  * @return {*}  {this}
    //  * @memberof kiDataClass
    //  */

    // sumFacebookReferrals(): this {
    //     let output = [];
    //     let newKeyName = CONFIG.kiData.new_key_names.fb_referral_sum;

    //     let fb_referral_keys = CONFIG.kiData.fb_referral_keys;

    //     for (let entry of this.data) {
    //         // This was originally just a let sum = 0, sum += loop, but it meant that there were zeros going back further than fb-referrals were being tracked
    //         let sum: string | number = "";
    //         for (let key in fb_referral_keys) {
    //             if (typeof entry[key] == typeof 1)
    //                 if (typeof sum == 'string') { sum = 0; }
    //             sum += entry[key];
    //         }
    //         entry[newKeyName] = sum;
    //         output.push(entry);

    //     }
    //     this.data = output;

    //     return this;
    // }

    /**
     * inverse complement of keepMatchingByKey
     * @param {string} key
     * @param {string[]} match - array of strings to match against 
     * @return {*} 
     * @memberof kiDataClass
     */
    removeMatchingByKey(key: string, matchArray: (string|number|boolean|null)[]): this {
        let output: kiDataEntry[] = [];
        // let test = [];
        // if (typeof match == 'string') {
        //     test.push(match);
        // } else {
        //     test.push(...match);
        // }

        for (let entry of this.data) {
            if (Object.prototype.hasOwnProperty.call(entry,key) && !matchArray.includes(entry[key])) {
                output.push(entry);
                // console.log("match")
            }
        }
        this.data = output;
        return this;
    }

    /**
     * Removes everything where the value of a specified key does not match values stored in an array of strings or a string.
     * Designed for the report generator, to get rid of kiData that it doesn't want.
     * @param {string} key
     * @param {string[])} match - array of strings to match against 
     * @return {*} 
     * @memberof kiDataClass
     */
    keepMatchingByKey(key: string, matchArray: string[]): this {
        let output: kiDataEntry[] = [];
        // let test = [];
        // if (typeof match == 'string') {
        //     test.push(match);
        // } else {
        //     test.push(...match);
        // }
        for (let entry of this.data) {
            // was entry.hasOwnProperty(key)
            if (Object.prototype.hasOwnProperty.call(entry,key) && matchArray.includes(entry[key])) {
                output.push(entry);
                // console.log("match")
            }
        }
        this.data = output;
        return this;
    }

    /**
     * removes everything before a specified date.
     *
     * @param {*} date
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    removeBeforeDate(date: Date): this {
        let output: kiDataEntry[] = [];
        let minMillis = date.getTime();
        for (let entry of this.data) {
            let kiDate = new Date(entry.kiDate);
            let kiMilliseconds = kiDate.getTime();
            if (kiMilliseconds >= minMillis) {
                output.push(entry);

            }
        }
        console.log("in entries:", this.data.length, " out entries:", output.length);
        this.data = output;
        return this;
    }
    /**
     * Calculates a short language string
     *  creates a key with the name ``truncLang`` of type string
     *  this attaches a truncated language based on the input it receives.
     *  data that was parsed with the newer version of languageParser is necessary for ASL areas
     *  used for the printed version of the TMM report to knock down cell width.
     *  if you want to add another language in the future, stick the language in the internal ``langLookup`` class.
     *  It should match what the language string from importContacts says as the key, and set the value to something recognizable.
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    addShortLang(): this {

        let output: kiDataEntry[] = [];
        let newKeyName = "truncLang";
        let langLookup = this.internal_config.shortLanguageLookup;
        for (let entry of this.data) {
            entry[newKeyName] = langLookup[entry.languageString];
            output.push(entry);
        }
        this.data = output;
        return this;
    }
    /**
     * Removes all entries where isDuplicate == true
     *  Should probably replace calls to this with calls to ``removeMatchingByKey("isDuplicate",[true])``
     * @deprecated
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    removeDuplicates(): this {
        console.warn("please replace this with removeMatchingByKey('isDuplicate',[true])")
        this.removeMatchingByKey("isDuplicate", [true])
        // let output: kiDataEntry[] = [];
        // for (let entry of this.data) {
        //     if (!entry.isDuplicate) {
        //         output.push(entry);
        //     }
        // }
        // this.data = output;
        return this;
    }


    /**
     * Generalized version of calculateRR
     *
     * @param {string} numeratorKey
     * @param {string} denominatorKey
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    calculatePercentage(numeratorKey: string, denominatorKey: string, newKeyName:string): this {
        let output: kiDataEntry[] = [];

        for (let entry of this.data) {

            if (entry.rc > 0) {
                entry[newKeyName] = entry.rca / entry.rc;
            }
            output.push(entry);
        }
        this.data = output;
        return this;
    }

    // /**
    //  * this calculates retention rate (or leaves it blank, if there are zero recent converts)
    //  * creates a key with the name ``rrPercent`` of type float or doesn't create a key if there are no rc's in an area
    //  * requires the following keys in order to calculate:
    //  *  ``rca`` - the number of recent convert attendances
    //  * ``rc`` - the number of recent converts
    //  *
    //  * @return {*}  {this}
    //  * @memberof kiDataClass
    //  */
    // calculateRR(): this {



    // }

    /**
     * Calculates a combined name string for use in places where you don't need to do further processing via names and want something that takes up less screen space.
     * There's not a very generalizable version of this- it's quite specific- BUT given its frequent use, it would be nonsensical to not include it.
     * Requires the keys listed in internal_config.combinedNameKeys
     * Originally designed for the printable portion of the TMM report, now used in several.
     * creates a key with the name ``combinedNames`` of type string
     * Uses the following keys:
     * 
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    calculateCombinedName(): this {
        // this is a bit computationally expensive, you'll probably want to run this *after* you run scoping things
        // creates a key with the name ``combinedNames`` of type string
        let output: kiDataEntry[] = [];
        let newKeyName = "combinedNames";
        let missionaryKeys = this.internal_config.combinedNameKeys;


        for (let entry of this.data) {
            let preOut = "";
            for (let missionary in missionaryKeys) {
                let missProps = missionaryKeys[missionary];
                if (entry[missProps.name] != "") {
                    let outString = entry[missProps.name] + " (" + entry[missProps.pos] + ") ";
                    preOut += outString;
                }
            }
            entry[newKeyName] = preOut;
            output.push(entry);
        }
        this.data = output;
        return this;
    }

    /**
     * Removes everything before the current week, starting late Saturday (getting the correct day programmatically was hard, okay?)
     * Uses removeBeforeDate under the hood.
     * @return {this} returns ``this`` for chaining
     * @memberof kiDataClass
     */
    getThisWeeksData(): this {
        let sundayDate = getSundayOfCurrentWeek_();
        let minMillis = sundayDate.getTime();

        return this.removeBeforeDate(sundayDate);
    }
}

/**
 *  Used by getThisWeeksData.
 *
 * @return {Date}
 */
function getSundayOfCurrentWeek_(): Date {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    const last = first + 6;

    const monday = new Date(today.setDate(first));
    console.log(monday);

    const sunday = new Date(today.setDate(last - 8));
    console.log(sunday);
    return sunday;
}

function getSundayOfCurrentWeek(): Date{
    console.error("please rename this function to getSundayOfCurrentWeek_")
    return getSundayOfCurrentWeek_()
}