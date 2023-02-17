//@ts-check
/*
        SheetData
        Handles sheet setup, headers, column indices, pulling and pushing data, etc.
*/

interface sheetCoreConfigInfo {
    cacheKey: string,
    cacheExpiration: number,
    cacheEnabled:boolean
}



/**
 * @classdesc SheetData is basically a better version of Sheet. It provides greater access to the data in a sheet than the Sheet class does, given certain assumptions about the format of that Sheet. Functions in the Sheet class usually organize data by row, then by column index number; most SheetData functions organize data by row, then by column header string (or hardcoded key string). This preserves structure when reordering columns or moving data between Sheets as long as corresponding columns have identical headers.
 *
 * When defined, hardcoded key strings can override using header values as key strings. This allows consistant functionality even when the header row changes, and lets methods access specific types of data using the key string without needing the column index for that data. Key strings are hardcoded by being passed through the initialKeyToIndex parameter. Any keys not hardcoded are calculated internally, using the column header as the key string. Columns with blank headers are ignored.
 *
 * For SheetData to work properly, there must be a single header row. Every nonblank row below the header row is assumed to contain data. Rows above the header row are ignored. Blank data rows (rows whose leftmost value is blank) are skipped, meaning not all SheetData functions preserve them.
 *
 * Technical note: all of the above functionality is implemented through the hidden RawSheetData class, with SheetData as a wrapper for it.
 *
 * @class
 */
class SheetData {
    /**
     * Wrap a RawSheetData into a full SheetData.
     * @see SheetData
     * @param {RawSheetData} rawSheetData - The RawSheetData to wrap.
     */
    set rsd(rawSheetData) {
        //@ts-expect-error not able to set a hardcoded value without a useless rawSheetData instance.
        this.rsdata = rawSheetData
    }
    get rsd(): RawSheetData {
        // @ts-expect-error same as the setter above.
        return this.rsdata
    }
    /**
     *  Creates an instance of SheetData.  To do so, you need to feed it a rawSheetData object, which includes the configuration stuff.
     * @param {RawSheetData} rawSheetData
     * @memberof SheetData
     */
    constructor(rawSheetData:RawSheetData) {
        this.rsd = rawSheetData;
    }

    destroyRows(finalRow: number): void {
        console.error("If you see this: you're using destroyRows, which breaks CRUD compatibility.  Please refactor your code!")
        if (+finalRow > 0) {
            this.rsd.destroyUntilRow(+finalRow)
        } else {
            console.error("destroyRows call invalid!")
        }
    }

    clearRows(numRows: number) {
        console.error("If you see this: you're using destroyRows, which breaks CRUD compatibility.  Please refactor your code!")
        if (typeof numRows == typeof 12) {
            this.rsd.deleteUntilRow(numRows)
        } else {
            console.error("NumRows call invalid, not deleting.")
        }
    }

    /**
     *  Copies all keys that don't already exist that are not specifically excluded in the keyNamesToIgnore declaration 
        
     * @param {SheetData} thingToCopyFrom
     * @return {*} 
     * @memberof SheetData
     */
    addKeys(thingToCopyFrom: SheetData):this {
        this.rsd.syncDataColumns(thingToCopyFrom.rsd/*,this*/)
        return this
    }
    addKeysFromArray(keyArray: string[]): this {
        this.rsd.addColumnsFromArray(keyArray, this);
        return this;
    }

    getConfigForCache() {
        return this.rsd.getEntryConfig(true)
    }
    /**
     *  Expects a single data entry, and send it to the bottom of the target sheet.
     *  Useful in cases where you don't care as much about the order of entries as you do them not colliding with each other...
     *
     * @param {*} data
     * @return {*} 
     * @memberof SheetData
     */
    appendData(data: kiDataEntry):void {
        this.rsd.appendDataRow(data);
    }
    /**
     *  directModify: modify a partial 
     *
     * @param {number} xOffset - ONE-INDEXED position of target row.
     * @param {(kiDataEntry | {})} data data you want to add
     * @memberof SheetData 
     */
    directModify(xOffset: number, data: kiDataEntry) {
        if (this.rsd.allowWrite == false) {
            console.error("tried to modify a read-only sheet")
            return
        }

        let columnsTargeted: number[] = []
        let dataInOrder: object[] = []

        let keys = this.getKeys()
        for (let key in data) {
            // WYLO: go through keys, find columns for them / if they exist, and then create range(s) to modify.
            if (keys.includes(key)) {
                columnsTargeted.push(this.getIndex(key))
                dataInOrder.push(data[key])
            }
        }

        // one bajillion range edits- not optimized for multi-range / consecutive column entries.
        for (let i = 0; i < columnsTargeted.length;i++) {
            let column = columnsTargeted[i]
            let key = dataInOrder[i]
            let finalXOffset = xOffset + this.getHeaderRow()
            let outData = [[key]]
            this.directEdit(finalXOffset, column, outData,true)
        }
        

    }

    /**
     *  modifies a cell range at a x-y coordinate.  Range size is determined by the length of the given valueArray
     *  Used for scope information on the report generator, and more recently to mark things as pulled in the mileageLog generator.
     * @param {number} xOffset
     * @param {number} yOffset
     * @param {any[][]} valueArray
     * @param {boolean} [writeInDataArea=false]
     * @return {*} 
     * @memberof SheetData
     */
    directEdit(xOffset: number, yOffset: number, valueArray: sheetDataValueRaw[], writeInDataArea = false) {
        return this.rsd.directEditRawSheetValues(xOffset, yOffset, valueArray, writeInDataArea);
    }
    /**
     * Returns the Sheet object for this SheetData.
     */
    getSheet() {
        return this.rsd.getSheet();
    }

    /**
     * Returns the name of the Sheet for this SheetData.
     */
    getTabName() {
        return this.rsd.getTabName();
    }

    /**
     * Returns the index, starting with 0, of the header row of this sheet.
     */
    getHeaderRow() {
        return this.rsd.getHeaderRow();
    }


    /**
     * Returns the index for the column with the given key string.
     * @param {string} key
     */
    getIndex(key) {
        return this.rsd.getIndex(key);
    }

    /**
     * Returns the key string for the column with the given index.
     * @param {number} index
     */
    getKey(index) {
        return this.rsd.getKey(index);
    }

    /**
     * Returns true if this SheetData object has a defined key attached to the given index.
     * @param {number} index
     */
    hasIndex(index) {
        return this.rsd.hasIndex(index);
    }

    /**
     * Returns true if this SheetData object has a defined value for the given key.
     * @param {string} key
     */
    hasKey(key) {
        return this.rsd.hasKey(key);
    }

    /**
     * Returns the header row of this sheet.
     * @returns {string[]} The header row if this sheet.
     */
    getHeaders() {
        return this.rsd.getHeaders();
    }

    /**
     * Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.
     * @returns {any[][]} The data from this sheet as a two dimentional array.
     */
    getValues() {
        return this.rsd.getValues();
    }

    /**
     * Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.
     * @returns {{}[]} The data from this sheet as an array of objects.
     */
    getData() {
        return this.rsd.getData();
    }

    /**
     * Inserts rows of data into the Sheet, formatted as an array of row objects.
     * @param {Object} data The data to insert.
     */
    insertData(data) {
        this.rsd.insertData(data);
    }

    /**
     * Inserts rows of data into the Sheet. Takes a 2D array.
     * @param {any[][]} values The values to insert.
     */
    insertValues(values) {
        this.rsd.insertValues(values);
    }

    /**
     * Clears the content of this Sheet below the header row, leaving formatting intact.
     */
    clearContent() {
        this.rsd.clearContent();
    }

    /**
     * Returns an array of all the defined keys in this RawSheetData, ordered by column index. Undefined indices will have undefined values.
     * @returns {string[]} An array of defined keys in this sheet.
     */
    getKeys() {
        return this.rsd.getKeys();
    }

    /**
     * Returns an array of all the values in the sheet for the given key.
     * @returns An array containing all values for the given key.
     * @param {string} key The key string.
     */
    getAllOfKey(key) {
        return this.rsd.getAllOfKey(key);
    }

    /**
     * Returns an array of all the values in the sheet for the column with the given index.
     * @returns An array containing all values from the given column.
     * @param {number} index The index of the column, starting from 0.
     */
    getAllOfIndex(index) {
        return this.rsd.getAllOfIndex(index);
    }

    /**
     * Sets the data in the Sheet, erasing data already there. Takes a 2D array.
     * @param {any[][]} values The values to insert.
     */
    setValues(values) {
        this.rsd.setValues(values);
    }

    /**
     * Inserts rows of data into the Sheet, formatted as an array of row objects.
     * @param {Object} data The data to insert.
     */
    setData(data) {
        this.rsd.setData(data);
    }
    /**
     * Returns the index, starting with 0, of the header row of this sheet.
     */
    setHeaders(data) {
        return this.rsd.setHeaders(data);
    }
}

/**
 * A RawSheetData instance. This should be wrapped in a SheetData before use.
 * @see SheetData
 * @param {sheetDataEntry} config data
 */
class RawSheetData {
    /*
        Fields

        tabName: The name of the Sheet this RawSheetData is tied to.
        nextFreeColumn: The index of the leftmost column with no defined key.
        sheet: The Sheet object this RawSheetData is tied to.
        headerRow: The row index of the header row.

        keyToIndex: An object whose properties are keys (strings) representing what data goes in a column (ex "areaID", "stl2", "np").
        Its values are the indices (starting with 0) of the column with that data.
        indexToKey: The reverse of keyToIndex. An array whose value at a given index is the key corresponding to that index.
      */

    // /**
    //  * @param {string} tabName - The name of the corresponding Sheet.
    //  * @param {number} headerRow - The row index, starting with 0, of the header row.
    //  * @param {any} initialKeyToIndex - An object containing data about which columns contain hardcoded keys. Formatted as {keyStr: columnIndex ...} where keyStr is a key string and colIndex is the index (starting with 0) of the column to contain that key.
    //  * @param {string} targetSheetId - sheet id, for connecting to external sheets.  If left empty, will default to the one returned by SpreadsheetApp.getActiveSpreadsheet() 
    //  * @param {any} initialKeyToIndex - An object containing data about which columns contain hardcoded keys. Formatted as {keyStr: columnIndex ...} where keyStr is a key string and colIndex is the index (starting with 0) of the column to contain that key.
    // */


    // Declarations to make the Typescript checker happy:
    tabName = "";
    headerRow = 0;
    keyToIndex = {} 
    includeSoftcodedColumns = false
    sheetId = ""
    allowWrite = false
    keyNamesToIgnore: string[] = []
    onCache = false
    indexToKey: string[] = []
    requireRemote = false
    sheetaa: GoogleAppsScript.Spreadsheet.Sheet
    add_iterant: boolean;
    crud_iterant_name = "iterant_CRUD"
    
    get sheet() {
        ////@ts-expect-error Same reason as the setter for this
        return this.sheetaa
    }

    set sheet(sheetObj) {
        ////@ts-expect-error (can't declare this without a call to SpreadsheetApp for a placeholder, which is expensive IO wise.)
        this.sheetaa = sheetObj
    }



    /**
     * Creates an instance of RawSheetData.
     * @param {sheetDataEntry} sheetConfig
     * @memberof RawSheetData
     */
    constructor(sheetConfig: sheetDataEntry) {
        // step 0: set properties for required keys
        // step 1: Go through and set properties for optional keys
        // step 2: set up the sheet if it doesn't exist. 
        // step 3: if not from cache && includeSoftCode == true, sync data flow columns


        // step 0:
        this.tabName = sheetConfig.tabName;
        this.headerRow = sheetConfig.headerRow;
        this.keyToIndex = sheetConfig.initialColumnOrder;
        this.includeSoftcodedColumns = sheetConfig.includeSoftcodedColumns;
        
        //@ts-expect-error - the check on == "" is a just-in-case for restoring from cache
        if (typeof sheetConfig.requireRemote == undefined || sheetConfig.requireRemote == "" || sheetConfig.requireRemote == null) { // I *think* I covered my bases here
            this.requireRemote = false
        } else {
            this.requireRemote = sheetConfig.requireRemote
        }
        // Step 1.1: Setting the Sheet ID, and making sure the tab exists.

        let targetSheetId = "";

        // if the target sheet is undefined, assume we're going to hit the ActiveSpreadsheet instead (this could be changed via a config option in the future, I guess...)
        // if the target sheet is accessible, set the sheet ID
        // if the target sheet is *not* undefined and is inaccessible, throw an error
        if (typeof sheetConfig.sheetId == undefined || sheetConfig.sheetId == "" || sheetConfig.sheetId == null) { // I *think* I covered my bases here
            if (this.requireRemote == true) {
                let errorMessage = "Remote sheet ID required, none given"
                console.error(errorMessage)
                throw errorMessage
            }
            console.info("Using local sheet");
            targetSheetId = SpreadsheetApp.getActiveSpreadsheet().getId();

        } else {
            let isAccessible = false;
            try {
                let sheet = DriveApp.getFileById(sheetConfig.sheetId);
                sheet.getDescription();
                if (sheet.isTrashed()) {
                    let errorMessage = "sheet with id: " + sheetConfig.sheetId + " has been trashed!";
                    console.error(errorMessage);
                    throw errorMessage;
                } else {
                    isAccessible = true;
                    console.info("using external sheet id for", sheetConfig.tabName);
                    targetSheetId = sheetConfig.sheetId
                }
            }

            catch (e) {
                console.error("sheet ID given was likely deleted or is otherwise inaccessible.");
                // console.error(e)
                throw e; // yes, catching an error just to throw it again is a bit ridiculous, but IMO it's the right thing to do here.

            }
        }

        // Step 1

        // this is essentially a be-all, end-all way to make sure that things get pushed to the right places

        this.sheetId = targetSheetId;

        
        // step 1.2: allowing page writes 
        // @ts-expect-error
        if (typeof sheetConfig.allowWrite == undefined || sheetConfig.allowWrite == "" || sheetConfig.allowWrite == null) { // I *think* I covered my bases here 
            this.allowWrite = true
        } else {
            if (typeof sheetConfig.allowWrite == 'boolean') {
                this.allowWrite = sheetConfig.allowWrite
            } else {
                let errorMessage = "allowWrite was declared incorrectly, has type " + typeof sheetConfig.allowWrite + "and value: " + sheetConfig.allowWrite + "should be null or boolean"
                throw errorMessage
                
            }
        }

        // step 1.3: set values for syncing DataFlow columns to ignore
        //@ts-expect-error
        if (typeof sheetConfig.keyNamesToIgnore == undefined || sheetConfig.keyNamesToIgnore == "" || sheetConfig.keyNamesToIgnore == null) { // I *think* I covered my bases here
            this.keyNamesToIgnore = []
        } else {
            // not much type checking on this one, though it might be necessary for the future.  Dunno.
            this.keyNamesToIgnore = sheetConfig.keyNamesToIgnore
        }


        
        
        
        this.buildIndexToKey_();
        
        // Step 2: If the target spreadsheet does not have a tab that matches the tabname:
        // create the sheet, and then add a header on the appropriate row.
        let targetSpreadsheet = SpreadsheetApp.openById(targetSheetId);
        let sheet = targetSpreadsheet.getSheetByName(this.tabName);
        if (sheet == null) {
            console.warn("Creating Sheet on target spreadsheet!");
            SpreadsheetApp.flush(); // Because otherwise, we have problems
            this.sheet = targetSpreadsheet.insertSheet(this.tabName);
            // SpreadsheetApp.flush(); // This is also ***DUMB*** but I think it's necessary to avoid crashes.
            // to avoid these flushes causing you issues, make sure that your tabs already exist.
            // it appears that the second flush is not necessary to ensure stability, but if it becomes a problem, that's probably it.
            this.setHeaders(this.indexToKey);
            // throw ("Couldn't construct SheetData: no sheet found with name '" + this.tabName + "'");
        } else {
            this.sheet = sheet
        }
        
        // step 3: avoid building soft columns if on cache
        let onCache = false
        //@ts-expect-error
        if (typeof sheetConfig.fromCache == undefined || sheetConfig.fromCache == "" || sheetConfig.fromCache == null) { // I *think* I covered my bases here
            onCache = false
        } else {
            onCache = sheetConfig.fromCache
        }
        if (sheetConfig.includeSoftcodedColumns == true && onCache == false) {
            this.addSoftColumns();
        }
        this.onCache = onCache

        if (Object.prototype.hasOwnProperty.call(sheetConfig, "use_iterant")==true && sheetConfig.use_iterant == true) {
            this.add_iterant = true
            this.crud_iterant_name = "iterant_CRUD"
            // keeps the iterant from getting syncronized into a sheet
            this.keyNamesToIgnore.push(this.crud_iterant_name)
        }

    // end of constructing method
    }


    //Private class methods

    // New CRUD Methods

    crud_updateRows(kiDataArray:kiDataEntry[]){
        if (this.allowWrite == false) {
            console.error("tried to modify a read-only sheet");
            return;
        }
        const sheet = this.getSheet()
        for(const entry of kiDataArray){
            //
            let targetRow = -1
            if (Object.prototype.hasOwnProperty.call(entry, this.crud_iterant_name)) {
                targetRow = entry[this.crud_iterant_name];
            }
            if(targetRow <= 0){
                console.error("no valid position given or tried to modify header, position given: ",targetRow)
                return
            }
            const xPos = this.headerRow + targetRow + 1
            for(const key in entry){
                const value = entry[key]
                const yPos = this.getIndex(key) + 1
                const range = sheet.getRange(xPos, yPos)
            }
        }
        console.log("Modified ",kiDataArray.length,"entries on sheet ",this.getTabName())
    }

    /**
     * @description partial modify method- give it a kiData entry with a row number or a partial entry and a row number to update the values at that position.
     * 
     * @param {kiDataEntry} kiData
     * @param {(number|null)} [rowNumber=null]
     * @memberof RawSheetData
     */
    crud_updateRow(kiData:kiDataEntry,rowNumber:number|null = null){
        if (this.allowWrite == false) {
            console.error("tried to modify a read-only sheet");
            return;
        }
        let targetRow = -1
        if(Object.prototype.hasOwnProperty.call(kiData,this.crud_iterant_name)){
            targetRow = kiData[this.crud_iterant_name]
        }
        if(rowNumber != null){
            targetRow = rowNumber
        }
        if(targetRow == -1){
            console.error("no valid position given, exiting")
            return
        } else if(targetRow == 0){
            console.error("tried to modify header...")
            return
        }
        const xPos = this.headerRow + targetRow + 1 // offset by 1 to account for zero indexing changes?
        const sheet = this.getSheet()
        for (const key in kiData){
            const value = kiData[key]
            const yPos = this.getIndex(key) + 1
            const range = sheet.getRange(xPos,yPos)
            range.setValue(value)
        }
    }

    /**
     *  renameKey: Replaces the name of a key with a given string.  If the given key does not exist, it will return without doing anything.
     *
     * @param {string} targetKey
     * @param {string} newName
     * @memberof RawSheetData
     */
    renameKey(targetKey: string, newName: string): void {
        
        
        let currentKeys = this.keyToIndex
        if (!Object.prototype.hasOwnProperty.call(currentKeys,targetKey)){ return}
        let targetColumn = currentKeys[targetKey]

        this.keyToIndex[newName] = targetColumn
        this.indexToKey[targetColumn] = newName
        
    
    }

    
    addColumnsFromArray(keyArray:string[], self: SheetData): void {
        // this has been updated so that you can use any remote / not remote thing
        // let formSheetData = allSheetData.form;
        // let dataSheetData = allSheetData.data;



        let addedKeys: string[] = [];
        //TODO REMOVE ignoredKeys once this is over??
        let ignoredKeys: string[] = [];
        // BEEBOOO: FOR FINDING MORE QUICKLY.
        // Currently trying to figure out why keys are not getting synchronized.
        for (let key of keyArray) {
            // changed check for key names to ignore, now it runs on self instead of the other one.
            if (!this.keyNamesToIgnore.includes(key) && !this.hasKey(key)) {
                // let keyPrettyName = inputSheetData.getHeaders()[inputSheetData.getIndex(key)];

                // checking to make sure that something with the same name doesn't already exist.  This might be a bad idea???
                let selfHeader = this.getHeaders();
                if (selfHeader.includes(key)) {
                    console.warn("SKIPPED KEY BECAUSE IT ALREADY HAD A MATCH");
                    ignoredKeys.push(key);
                } else {
                    // if there isn't anything that matches, *then* push the thingy out.
                    this.addColumnWithHeader_(key, /*keyPrettyName*/key); // if key isn't specified key & keyPrettyName will match; we want things to sync in the future: this lets us do partially-hard-coded stuff.
                    addedKeys.push(key);
                }
            }
            else {
                ignoredKeys.push(key);
            }
        }
        // // TODO REMOVE
        // if (ignoredKeys.includes("EXTRA WORDS FOR FUN BABYYYY")) {
        //     console.error("TESTING KEYS SKIPPED: ", ignoredKeys);
        // }


        let addedStr =
            addedKeys.length == 0
                ? "No new columns in keyArray"
                : addedKeys.toString();
        console.log(
            "Added " +
            addedKeys.length +
            " column(s) to " +
            this.getTabName() +
            ": " +
            addedStr
        );
        console.log(this.getKeys().toString());

    }

    /** syncDataColumns
     *  
     *  Applies any missing keys from a rawSheetData instance to the current rawSheetData object.
     *  Keys will be added from a ``sheetData`` class if they meet the following criteria:
     *  1. The key is not on the blocklist for the ``sheetData`` instance that called the merge.
     *  2. The key does not already exist.
     *  While merging, the following things happen:
     *  1. Keys that do not exist will be added.
     *  2. Soft-coded columns (ones not explicitly declared in config files) will be merged.
     *    - If a soft-coded column's key matches the header for the specified ``sheetData`` 
     *       that has a hard-coded key name, the soft-coded key's name will be replaced with 
     *       the hard-coded one.  This means that you can have a mixture of hard-coded and 
     *       soft-coded keys in different ``sheetData`` classes and still be able to repeatedly
     *       merge and get the same result. 
     * 
     *  There is one caveat:
     *   any given sheetData class cannot have two identical header entries or key entries.
     *   Otherwise the left-most (for headers), and smallest column assignment (for hard-coded 
     *   entries) will be used and the rest will be ignored.
     * @param {RawSheetData} inputSheetData
     * @memberof RawSheetData
     */
    syncDataColumns(inputSheetData: RawSheetData/*,self:SheetData*/): void {
        // this has been updated so that you can use any remote / not remote thing
        // let formSheetData = allSheetData.form;
        // let dataSheetData = allSheetData.data;



        let addedKeys: string[] = [];
        //TODO REMOVE ignoredKeys once this is over??
        let ignoredKeys: string[] = []
        // BEEBOOO: FOR FINDING MORE QUICKLY.
        // Currently trying to figure out why keys are not getting synchronized.
        for (let key of inputSheetData.getKeys()) {
            // changed check for key names to ignore, now it runs on self instead of the other one.
            if (!this.keyNamesToIgnore.includes(key) && !this.hasKey(key)) {
                let keyPrettyName = inputSheetData.getHeaders()[inputSheetData.getIndex(key)];
                
                // checking to make sure that something with the same name doesn't already exist.  This might be a bad idea???
                let selfHeader = this.getHeaders();
                if (selfHeader.includes(key)){
                    console.warn("SKIPPED KEY BECAUSE IT ALREADY HAD A MATCH");
                    ignoredKeys.push(key)
                } else if(selfHeader.includes(keyPrettyName)) {
                    console.warn("SKIPPED KEY BECAUSE IT ALREADY HAD A MATCH")
                    ignoredKeys.push(key)
                    this.renameKey(keyPrettyName, key) // This *should* rename keys internally if they match: This should let me have persistent partial soft-coded columns.
                    
                } else {
                    // if there isn't anything that matches, *then* push the thingy out.
                    this.addColumnWithHeader_(key, /*keyPrettyName*/key); // if key isn't specified key & keyPrettyName will match; we want things to sync in the future: this lets us do partially-hard-coded stuff.
                    addedKeys.push(key);
                }
            }   
            else {
                ignoredKeys.push(key)
            }
        }
        // TODO REMOVE
        if (ignoredKeys.includes("EXTRA WORDS FOR FUN BABYYYY")) {
            console.error("TESTING KEYS SKIPPED: ",ignoredKeys);
        }
        

        let addedStr =
            addedKeys.length == 0
                ? "No new columns in " + inputSheetData.getTabName()
                : addedKeys.toString();
        console.log(
            "Added " +
            addedKeys.length +
            " column(s) to " +
            inputSheetData.getTabName() +
            ": " +
            addedStr
        );
        console.log(inputSheetData.getKeys().toString());

    }

    /**
     *  returns a sheetDataConfig object post-initialization that can be used in caching applications 
     *
     * @param {boolean} [isForCaching=false]
     * @return {sheetDataEntry} returns sheetDataEntry config  
     * @memberof RawSheetData
     */
    getEntryConfig(isForCaching = false): sheetDataEntry {
        let outEntry: sheetDataEntry = {
            tabName: this.tabName,
            headerRow: this.headerRow,
            initialColumnOrder: this.keyToIndex,
            includeSoftcodedColumns: this.includeSoftcodedColumns,
            sheetId: this.sheetId,
            allowWrite: this.allowWrite,

            keyNamesToIgnore: this.keyNamesToIgnore,

            fromCache: this.onCache

        }
        if (isForCaching == true) {
            outEntry.fromCache = true
        }
        return outEntry
    }

    
    /**
     *  !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *  Directly puts an array of values like so: [[val1,val2,...,valN],...[arrayn]] in a sheet.
     *  Checks to make sure that you're not going to overwrite data first, but also enables an override for that if you so desire.
     *
     * @param {number} xOffset - how far away from column A you want your things to be
     * @param {number} yOffset - how far away from row 1 you want your data to be.
     * @param {[][]} data
     * @param {boolean} [writeInDataArea=false]
     * @memberof RawSheetData
     */
    directEditRawSheetValues(xOffset: number, yOffset: number, valueArray: sheetDataValueRaw[], writeInDataArea = false): void {
        if (yOffset + valueArray.length > this.getHeaderRow() && !writeInDataArea) {
            console.warn("Tried to write to protected row in sheet" + this.getTabName());
        } else {
            if (writeInDataArea) { console.warn("ignoring data protections"); }
            let range = this.getSheet().getRange(1 + xOffset, 1 + yOffset, valueArray.length, valueArray[0].length);
            range.setValues(valueArray);
        }


    }






    /*
     * Build indexToKey, the complement of keyToIndex.
     */
    buildIndexToKey_() {
        let newIndexToKey :string[]= [];
        for (let key in this.keyToIndex) {
            let index = this.keyToIndex[key];
            newIndexToKey[index] = key;
        }
        this.indexToKey = newIndexToKey;
    }

    /*
     * Get the next blank column not assigned a key. It is NOT guaranteed to eventually return every blank column.
     * @returns The next column not assigned a key.
     */
    getNextFreeColumn_() {
        return this.indexToKey.length;
    }

    /*
     * @param {string} key
     * @param {string} header
     * @param {number} index
     */
    addColumnWithHeaderAt_(key, header, index) {
        if (key == "")
            throw new TypeError(
                "Couldn't add column to sheet " +
                this.getTabName() +
                ". Invalid key: " +
                key
            );
        if (header == "")
            throw new TypeError(
                "Couldn't add column to sheet " +
                this.getTabName() +
                ". Invalid header: " +
                header
            );
        if (index < 0)
            throw new TypeError(
                "Couldn't add column to sheet " +
                this.getTabName() +
                ". Invalid index: " +
                index
            );

        if (this.hasIndex(index))
            throw (
                "Potential data collision. Tried to add key '" +
                key +
                "' to index " +
                index +
                " in sheet " +
                this.getTabName() +
                ", but that index already has key '" +
                this.getKey(index) +
                "'"
            );
        if (this.hasKey(key))
            throw (
                "Potential data collision. Tried to add key '" +
                key +
                "' to index " +
                index +
                " in sheet " +
                this.getTabName() +
                ", but that key already exists at index " +
                this.getIndex(key)
            );

        this.getSheet()
            .getRange(this.getHeaderRow() + 1, index + 1)
            .setValue(header);

        this.keyToIndex[key] = index;

        this.indexToKey[index] = key;
    }

    /*
     * @param {any} key
     * @param {any} header
     */
    addColumnWithHeader_(key, header) {
        let index = this.getNextFreeColumn_();
        this.addColumnWithHeaderAt_(key, header, index);
    }

    /*
     * @param {any} key
     * @param {number} index
     */
    addColumnAt_(key, index) {
        let header = key; //TODO Add preset headers?
        this.addColumnWithHeaderAt_(key, header, index);
    }

    /*
     * @param {any} key
     */
    addColumn_(key) {
        let index = this.getNextFreeColumn_();
        this.addColumnAt_(key, index);
    }

    /*   Public class methods   */

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the Sheet object for this RawSheetData.
     */
    getSheet() {
        return this.sheet;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the name of the Sheet for this RawSheetData.
     */
    getTabName() {
        return this.tabName;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the index, starting with 0, of the header row of this sheet.
     */
    getHeaderRow() {
        return this.headerRow;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the index for the column with the given key string.
     * @param {string} key
     */
    getIndex(key) {
        if (!this.hasKey(key))
            throw (
                "Failed to get index from key: key '" +
                key +
                "' not found in sheet '" +
                this.tabName +
                "'"
            );

        return this.keyToIndex[key];
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the key string for the column with the given index.
     * @param {number} index
     */
    getKey(index) {
        if (!this.hasIndex(index))
            throw (
                "Couldn't get key from index: index '" +
                index +
                "' not defined in sheet '" +
                this.tabName +
                "'"
            );

        return this.indexToKey[index];
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns true if this RawSheetData object has a defined key attached to the given index.
     * @param {number} index
     */
    hasIndex(index) {
        if (typeof index == "undefined") throw "Tried to use undefined as an index";

        return typeof this.indexToKey[index] != "undefined";
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns true if this RawSheetData object has a defined value for the given key.
     * @param {string} key
     */
    hasKey(key) {
        if (typeof key == "undefined")
            throw "Tried to use undefined as a key string";
        return typeof this.keyToIndex[key] != "undefined";
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the header row of this sheet.
     * @returns {string[]} The header row if this sheet.
     */
    getHeaders(): string[] {
        // TODO: This might be a bad idea of a patch
        if (this.getSheet().getLastColumn() <= 0) return [];
        let range = this.getSheet().getRange(
            this.headerRow + 1,
            1,
            1,
            this.getSheet().getLastColumn()
        );
        return range.getValues()[0];
    }

    /**
     * expects an array of values, like this: ["1","2"], and sends them to the header row.
     *
     * @param {any[]} headerData
     * @return {*} 
     * @memberof RawSheetData
     */
    setHeaders(headerData:string[]) {
        if (this.allowWrite == false) {
            console.warn("tried to write to read-only sheet");
            return;
        }
        // let headerWidth = this.getSheet().getLastColumn()
        // if(data.length > headerWidth){headerWidth = data.length}
        let range = this.getSheet().getRange(
            this.headerRow + 1,
            1,
            1,
            headerData.length,
        );
        range.setValues([headerData]);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.
     * @returns {any[][]} The data from this sheet as a two dimentional array.
     */
    getValues(skipEmpty=true) {
        let values:sheetDataValueRaw = [];
        let rawValues = this.getSheet().getDataRange().getValues();
        for (let i = this.headerRow + 1; i > 0; i--) rawValues.shift(); //Skip header rows
        for (let row of rawValues) if (skipEmpty && row[0] != "") values.push(row); //Skip blank rows
        return values;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *  If use_iterant is set to true in the passed in config, includes an iterant with the key stored at this.crud_iterant_name
     * Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.
     * @returns {kiDataEntry[]} The data from this sheet as an array of objects.
     */
    getData() {
        let outValues:kiDataEntry[] = [];
        let values:kiDataEntry[] = this.getValues();

        for (let i = 0; i<values.length;i++) {
            const row = values[i]
            if (row[0] == "") continue; //Skip blank rows

            let rowObj: object = {};
            for (let i = 0; i < row.length; i++) {
                let key = this.indexToKey[i];
                rowObj[key] = row[i];
            }

            if(this.add_iterant == true){
                rowObj[this.crud_iterant_name] = i
            }

            outValues.push(rowObj);
        }
        return outValues;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Sets the data in the Sheet, erasing data already there. Takes a 2D array.
     * @param {any[][]} values The values to insert.
     */
    setValues(values) {
        if (this.allowWrite == false) {
            console.warn("tried to write to read-only sheet");
            return;
        }
        if (values.length == 0) return;
        this.clearContent();
        let range = this.getSheet().getRange(
            this.headerRow + 2,
            1,
            values.length,
            values[0].length
        );
        range.setValues(values);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Inserts rows of data into the Sheet, formatted as an array of row objects.
     * @param {Object} data The data to insert.
     */
    setData(data) {
        if (this.allowWrite == false) {
            console.warn("tried to write to read-only sheet");
            return;
        }
        if (data.length == 0) return;

        let values: sheetDataValueRaw = [];
        let skippedKeys = new Set();
        let maxIndex = 0;

        for (let rowData of data) {
            let arr = [];
            for (let key in rowData) {
                if (!this.hasKey(key)) {
                    skippedKeys.add(key);
                } else {
                    arr[this.getIndex(key)] = rowData[key];
                    maxIndex = Math.max(maxIndex, this.getIndex(key));
                }
            }
            values.push(arr);
        }

        //Force all rows to be of the same length
        for (let arr of values)
            if (typeof arr[maxIndex] == "undefined") arr[maxIndex] = "";

        // for (let key of skippedKeys)
        //     Logger.log(
        //         "Skipped key ${key} while pushing to sheet " +
        //         this.tabName +
        //         ". Sheet doesn't have that key"
        //     );

        if (Object.keys(skippedKeys).length > 0) {
            console.log("Skipped Keys:", skippedKeys, " while pushing to sheet", this.getTabName());
        }

        this.setValues(values);
    }

    /**
     *  Takes in a single data entry and puts it at the bottom of a spreadsheet.
     *  Expects a single line of data.
     *
     * @param {*} data
     * @return {*} 
     * @memberof RawSheetData
     */
    appendDataRow(data) {
        // if (data.length == 0) return;

        let values = [];
        let skippedKeys = new Set();
        let maxIndex = 0;

        // for (let rowData of data) {
        let arr = [];
        for (let key in data) {
            if (!this.hasKey(key)) {
                skippedKeys.add(key);
            } else {
                arr[this.getIndex(key)] = data[key];
                maxIndex = Math.max(maxIndex, this.getIndex(key));
            }
        }
        values.push(arr);
        // }


        // if (Object.keys(skippedKeys).length > 0) {
        //     console.info("Skipped keys on", this.getTabName(), ":", skippedKeys);
        // }


        this.appendRowValues(arr);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Inserts rows of data into the Sheet. Takes an array of objects.
     * @param {Object[]} values The values to insert.
     */
    appendRowValues(values: sheetDataValueRaw[]) {
        this.getSheet().appendRow(values);
        // range.setValues(values);
    }
    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Inserts rows of data into the Sheet. Takes a 2D array.
     * @param {any[][]} values The values to insert.
     */
    insertValues(values) {
        if (values.length == 0) return;
        this.getSheet().insertRowsBefore(this.headerRow + 2, values.length); //Insert rows BEFORE the row AFTER the header row, so it won't use header formatting
        let range = this.getSheet().getRange(
            this.headerRow + 2,
            1,
            values.length,
            values[0].length
        );
        range.setValues(values);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Sets the data in the Sheet, erasing data already there. Takes an array of row objects.
     * @param {Object} data The data to insert.
     */
    insertData(data) {
        if (data.length == 0) return;

        let values = [];
        let skippedKeys = new Set();
        let maxIndex = 0;

        for (let rowData of data) {
            let arr = [];
            for (let key in rowData) {
                if (!this.hasKey(key)) {
                    skippedKeys.add(key);
                } else {
                    arr[this.getIndex(key)] = rowData[key];
                    maxIndex = Math.max(maxIndex, this.getIndex(key));
                }
            }
            values.push(arr);
        }

        //Force all rows to be of the same length
        for (let arr of values)
            if (typeof arr[maxIndex] == "undefined") arr[maxIndex] = "";
        // NOTE: this was getting a little verbose...
        // for (let key of skippedKeys)
        // Logger.log(
        //     "Skipped key " +
        //     key +
        //     " while pushing to sheet " +
        //     this.tabName +
        //     ". Sheet doesn't have that key"
        // );
        if (Object.keys(skippedKeys).length > 0) {
            console.info("Skipped keys on", this.getTabName(), ":", skippedKeys);
        }


        this.insertValues(values);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Clears the content of this Sheet below the header row, leaving formatting intact.
     */
    clearContent() {
        let startRow = this.getHeaderRow() + 2;
        let numRows = this.getSheet().getLastRow() + 1 - startRow;
        if (numRows <= 0) return; //End if the sheet is already empty
        let numCols = this.getSheet().getLastColumn();
        this.getSheet().getRange(startRow, 1, numRows + 1, numCols).clearContent();
    }
    deleteUntilRow(finalRow:number) {
        console.warn("deleteUntilRow only clears the contents of cells, does not delete them!")
        let startRow = this.getHeaderRow() + 2;
        let numRows = this.getSheet().getLastRow() + 1 - startRow;
        if (numRows <= 0) return; //End if the sheet is already empty
        let numCols = this.getSheet().getLastColumn();
        if (finalRow <= numRows) {
            this.getSheet().getRange(startRow, 1, finalRow + 1, numCols).clearContent();
            
        }
    }

    destroyUntilRow(finalRow: number) {
        console.warn("destroyRows straight up annihilates rows instead of clearing them out!")
        let startRow = this.getHeaderRow() + 2;
        let numRows = this.getSheet().getLastRow() + 1 - startRow;
        if (numRows <= 0) { return; }
        let numCols = this.getSheet().getLastColumn()
        if (finalRow <= numRows) {
            this.getSheet().getRange(startRow,1,finalRow + 1, numCols).deleteCells(SpreadsheetApp.Dimension.ROWS)
        }
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns an array of all the defined keys in this RawSheetData, ordered by column index. Undefined indices will have undefined values.
     * @returns {string[]} An array of defined keys in this sheet.
     */
    getKeys() {
        let keyList:string[] = Object.keys(this.keyToIndex);
        let orderedKeyList:string[] = [];
        for (let key of keyList) {
            orderedKeyList[this.getIndex(key)] = key;
        }
        return orderedKeyList;
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns an array of all the values in the sheet for the given key.
     * @returns An array containing all values for the given key.
     * @param {string} key The key string.
     */
    getAllOfKey(key) {
        let index = this.keyToIndex[key];
        return this.getAllOfIndex(index);
    }

    /**
     * !!WARNING!!
     * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
     *
     * Returns an array of all the values in the sheet for the column with the given index.
     * @returns An array containing all values from the given column.
     * @param {number} index The index of the column, starting from 0.
     */
    getAllOfIndex(index):sheetDataValueRaw {
        let values = this.getValues();
        let arr = [];

        for (let row = 0; row < values.length; row++) {
            let val = values[row][index];
            arr.push(val);
        }

        return arr;
    }
    /**
 * !!WARNING!!
 * This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
 *
 * includes softcoded columns (IE ones not directly defined.)
 * This has a bit of danger with remote sheets:
 * 1. If this runs on a remote sheet that somebody has edit access to the header of, 
 * 2. A valid key gets set in the header, 
 * 3. You don't explicitly remove particular keys, you could potentially leak PII.
 * 
 * BE VERY CAREFUL about using softcoded columns on remote sheets. 
 */
    addSoftColumns() {
        let currentHeader = this.getHeaders();
        let currentKeys: string[] = this.getKeys();

        let addedFormKeys: string[] = [];
        if (currentHeader.length > currentKeys.length) {
            console.warn("Not all columns are hardcoded");
            let notInKeys = currentHeader.slice(currentKeys.length);
            Logger.log(notInKeys);
            for (let noKey of notInKeys) {
                if (noKey != null && noKey != "" && !this.keyNamesToIgnore.includes(noKey) && !this.hasKey(noKey)) {
                    this.addColumnWithHeader_(noKey, noKey);
                    addedFormKeys.push(noKey);
                    // console.log("key", noKey);
                }
            }
            // Logger.log(addedFormKeys);
        }
        console.log("added keys to form", this.tabName, ": ", addedFormKeys.toString());
    }
    // end of RawSheetData class
}

/**
 * Gets the allSheetData object from the cache and returns it. Must have been cached using cacheAllSheetData(). Returns null if nothing is found in the cache.
 */
function getAllSheetDataFromCache(): manySheetDatas | null {
    let cache = CacheService.getDocumentCache();
    // typescript was complaining about this being either a string or null.  We handle that immediately afterwards, this is acceptable.
    //@ts-ignore
    let allSheetData_JSONString = cache.get(
        //@ts-ignore (Configuration file defined externally by the main script.)
        sheetCoreConfig.cacheKey
    );
    if (allSheetData_JSONString == null) {
        console.warn(
            "Tried to pull allSheetData from the cache but nothing was saved there."
        );
        return null;
    }

    console.log("Pulled allSheetData from cache, parsing now");
    let allSheetData_fromCache = JSON.parse(allSheetData_JSONString); //*Contains object literals representing SheetData objects. NOT members of the SheetData class yet!

    let allSheetData = {};
    let parsedObjects:string[] = [];
    //Dig down to find the rawSheetData, fix it, and build it back up properly.
    for (let sdKey in allSheetData_fromCache) {
        //Extract literal (aka fake) SheetData from cache's version of allSheetData
        let sheetDataLiteral = allSheetData_fromCache[sdKey];
        //Extract literal RawSheetData from literal SheetData
        let rawSheetDataLiteral = sheetDataLiteral.rsd;
        // EASILYIDENTIFIABLESTRINGTOHUNTDOWN
        console.log(rawSheetDataLiteral);
        //Turn literal RawSheetData into a real RawSheetData
        let rawSheetData = new RawSheetData(rawSheetDataLiteral);
        //Re-wrap real RawSheetData in a real SheetData
        let sheetData = new SheetData(rawSheetData);
        //Re-add real SheetData to the proper version of allSheetData
        allSheetData[sdKey] = sheetData;
        parsedObjects.push(sheetData.getTabName()); //For logging purposes
    }

    if (parsedObjects.length == 0) {
        console.warn(
            "Unable to parse, no SheetData objects found. Cache had value: " +
            allSheetData_fromCache
        );
        return null;
    }
    console.info(
        "Parsed " + parsedObjects.length + " SheetData objects: " + parsedObjects
    );
    return allSheetData;
}

/**
 * Formats and stores the allSheetData object in the cache. Can be retrieved with getAllSheetDataFromCache().
 * @param {*} allSheetData
 */
function cacheAllSheetData(allSheetData:manySheetDatas) {
    // TODO: figure out how to cache remote sheets.
    Logger.log("Caching allSheetData");
    let cache = CacheService.getDocumentCache();
    // former ignore
    if (cache == null) {
        console.error("Cache was not returned in cacheAllSheetData!")
        return
    }
    let preCacheValues: manySheetDataEntries = {}
    for (let sheetDataKey in allSheetData) {
        let sheetData = allSheetData[sheetDataKey]
        preCacheValues[sheetData.rsd.tabName] = sheetData.getConfigForCache()
    }
    console.log(preCacheValues)
    cache.put(
        //@ts-expect-error this gets defined in the actual key-indicator-system.  Needs rework
        sheetCoreConfig.cacheKey,
        JSON.stringify(preCacheValues),
        //@ts-expect-error same as above
        sheetCoreConfig.cacheExpiration,
    );
}


//                The following are basically RawSheetData methods - they form an external constructor, treating RawSheetData like an Enum. They're only separate from the class because static variables don't work properly in Apps Script.
//                populateExtraColumnData()
//                sheetDataConstructor()

/**
 * Adds any missing keys that exist on form responses to data.
 * uses hardcoded things for the ones to sync.
 * For this to be enabled, I *think* the sheets might have to be on the same document (but I'm not sure.)
 * May need to be replaced or reworked to get this functional on an allsheetData'd
 * uses allSheetData.form, allSheetData.data
 * If you want to have softcoded columns, you need to enable them in the config.
 * @param form form : sheetData class: the one you want to sync columns from
 * @param data : sheetData class: the one you want to sync columns to.
 */

// // TODO: Convert this into an internal rawSheetData / sheetData method that copies keys from a given sheetData to a new one.
// function syncDataFlowCols_(form: SheetData, data: SheetData) {
//     // this has been updated so that you can use any remote / not remote thing
//     // let formSheetData = allSheetData.form;
//     // let dataSheetData = allSheetData.data;

//     data.addKeys(form) // HOLY COW if this thing works so MUCH POWAH


//     // // let addedKeys:any[] = [];

//     // // for (let key of form.getKeys()) {
//     // //     if (
//     // //         !CONFIG.dataFlow.formColumnsToExcludeFromDataSheet.includes(key) &&
//     // //         !data.hasKey(key)
//     // //     ) {
//     // //         let header = form.getHeaders()[form.getIndex(key)];
//     // //         data.rsd.addColumnWithHeader_(key, header);
//     // //         addedKeys.push(key);
//     // //     }
//     // // }

//     // // let addedStr =
//     // //     addedKeys.length == 0
//     // //         ? "No new columns in " + form.getTabName()
//     // //         : addedKeys.toString();
//     // // console.log(
//     // //     "Added " +
//     // //     addedKeys.length +
//     // //     " column(s) to " +
//     // //     data.getTabName() +
//     // //     ": " +
//     // //     addedStr
//     // // );
//     // // console.log(data.getKeys().toString());
// }

/*
 * Populate this SheetData with column data from the Sheet.
 * @param {any} sheetData
 */
function populateExtraColumnData_(sheetData) {
    let headers = sheetData.getHeaders();
    for (let i = 0; i < headers.length; i++) {
        let key = headers[i];
        if (sheetData.hasIndex(i) || key == "") continue; //Skip already defined or blank columns
        sheetData.rsd.addColumnAt_(key, i); //Access RawSheetData to add column
    }
}

/*
 * @param {{ [x: string]: any; }} allSheetData
 */
function buildIndexToKey_(allSheetData) {
    for (let sdKey in allSheetData) {
        let sd = allSheetData[sdKey];

        sd.indexToKey = [];
        for (let key in sd.keyToIndex) {
            let i = sd.keyToIndex[key];

            if (typeof sd.indexToKey[i] != "undefined")
                throw (
                    "Data collision on index " +
                    i +
                    " while building indexToKey in SheetData '" +
                    sdKey +
                    "' - tried to add key '" +
                    key +
                    "' but found value '" +
                    sd.indexToKey[i] +
                    "'"
                );

            sd.indexToKey[i] = key;
        }
    }
}


