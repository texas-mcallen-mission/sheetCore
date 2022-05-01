//@ts-check

// pulled from key-indicator-system/dataflow/kidata-class
// this gets used in several things, and it makes a lot of sense to move it over to the shared core.

/**
 * splits a kiDataCLass's data into little pieces by grouping by unique values on a specified key
 *
 * @param {kiDataClass} kiDataObj
 * @param {string} key
 * @return {*}  {manyKiDataClasses}
 */
function splitKiData(kiDataObj: kiDataClass, key: string): manyKiDataClasses {
    let kiData = kiDataObj.end;
    let output: manyKiDataClasses = {};
    for (let entry of kiData) {
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
interface manyKiDataEntries {
    [index: number]: kiDataEntry;
}

interface kiDataEntry {
    [index: string]: any;
}


class kiDataClass {
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
    }
    data: kiDataEntry[] = [];

    constructor(kiData) {
        this.data = [];
        this.data = kiData;
    }

    get end(): kiDataEntry[] {
        return this.data;
    }

    /**
     * This is a VERY destructive method- it's designed to replace a set of very over-burdened pivot tables 
     * doing something that was a little too difficult to figure out how to do earlier.  Will remove ALL not-whitelisted keys.  
     * Also removes all keys where the value is "" or undefined or null, 
     * Optionally remove any that equal zero as well or only creates one entry for it.
     * @param {string[]} keysToKeep
     * @param {string[]} breakdownKeys
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    breakdownAnalysis(keysToKeep: string[], breakdownKeys: string[],breakdownKeyName:string,keepOneIfZeroes=true): this {
        let output: kiDataEntry[] = [];

        for (let entry of this.data) {
            let subEntry = {}
            // gets the values that we want to keep across all sub-entries.
            for (let key of keysToKeep) {
                subEntry[key] = entry[key]
            }
            let nullOrZeroCount = 0
            for (let key of breakdownKeys) {
                if (typeof entry[key] == undefined || entry[key] == "" || entry[key] == null || entry[key] == 0) { // I *think* I covered my bases here 
                    nullOrZeroCount += 1
                } else {
                    //@ts-ignore the lodash library 
                    let subsub:kiDataEntry = _.cloneDeep(subEntry)
                    subsub[breakdownKeyName] = entry[key]
                    output.push(subsub)
                }
                if (nullOrZeroCount == entry.length && keepOneIfZeroes) {
                    subEntry[breakdownKeyName] = 0
                    output.push(subEntry)
                }
            }
        }
        this.data = output

        return this;
    }
    /**
     *  Generalization of what was sumFacebookReferrals
     *
     * @param {string[]} listOfKeys
     * @param {string} newKeyName
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    createSumOfKeys(listOfKeys: string[], newKeyName: string): this {
        let output: any[] = [];

        for (let entry of this.data) {
            let sum: number = 0;
            for (let key of listOfKeys) {
                // let targetKey = listOfKeys[key];
                // uses the unary operator, seems pretty slick... hope it doesn't break anything!
                sum += +entry[key];
            }
            entry[newKeyName] = sum
            output.push(entry)
        }

        this.data = output;
        return this;
    }

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
     * Removes everything where the value of a specified key does not match values stored in an array of strings or a string.
     * Designed for the report generator, to get rid of kiData that it doesn't want.
     * @param {string} key
     * @param {string[])} match - array of strings to match against 
     * @return {*} 
     * @memberof kiDataClass
     */
    keepMatchingByKey(key: string, matchArray: string[]): this {
        let output:kiDataEntry[] = [];
        // let test = [];
        // if (typeof match == 'string') {
        //     test.push(match);
        // } else {
        //     test.push(...match);
        // }

        for (let entry of this.data) {
            if (matchArray.includes(entry[key])) {
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
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    removeBeforeDate(date: Date): this {
        let output:kiDataEntry[] = [];
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
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    addShortLang(): this {

        let output:kiDataEntry[] = [];
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
     *
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    removeDuplicates(): this {
        let output:kiDataEntry[] = [];
        for (let entry of this.data) {
            if (!entry.isDuplicate) {
                output.push(entry);
            }
        }
        this.data = output;
        return this;
    }

    /**
     * Generalized version of calculateRR
     *
     * @param {string} numeratorKey
     * @param {string} denominatorKey
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    calculatePercentage(numeratorKey: string, denominatorKey: string,newKeyName): this {
        let output:kiDataEntry[] = [];

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
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    calculateCombinedName(): this {
        // this is a bit computationally expensive, you'll probably want to run this *after* you run scoping things
        // creates a key with the name ``combinedNames`` of type string
        let output:kiDataEntry[] = [];
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
     * @return {*}  {this}
     * @memberof kiDataClass
     */
    getThisWeeksData(): this {
        let sundayDate = getSundayOfCurrentWeek();
        let minMillis = sundayDate.getTime();

        return this.removeBeforeDate(sundayDate);
    }
}

/**
 *  Used by getThisWeeksData.
 *
 * @return {*}  {Date}
 */
function getSundayOfCurrentWeek():Date {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    const last = first + 6;

    const monday = new Date(today.setDate(first));
    console.log(monday); // 👉️ Mon Jan 17 2022

    const sunday = new Date(today.setDate(last - 8));
    console.log(sunday);
    return sunday;
}
