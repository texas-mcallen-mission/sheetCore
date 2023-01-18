[sheetcore](../docs.md) / RawSheetData

# Class: RawSheetData

A RawSheetData instance. This should be wrapped in a SheetData before use.

**`See`**

SheetData

**`Param`**

data

## Table of contents

### Constructors

- [constructor](RawSheetData.md#constructor)

### Properties

- [allowWrite](RawSheetData.md#allowwrite)
- [headerRow](RawSheetData.md#headerrow)
- [includeSoftcodedColumns](RawSheetData.md#includesoftcodedcolumns)
- [indexToKey](RawSheetData.md#indextokey)
- [keyNamesToIgnore](RawSheetData.md#keynamestoignore)
- [keyToIndex](RawSheetData.md#keytoindex)
- [onCache](RawSheetData.md#oncache)
- [requireRemote](RawSheetData.md#requireremote)
- [sheetId](RawSheetData.md#sheetid)
- [sheetaa](RawSheetData.md#sheetaa)
- [tabName](RawSheetData.md#tabname)

### Accessors

- [sheet](RawSheetData.md#sheet)

### Methods

- [addColumnAt\_](RawSheetData.md#addcolumnat_)
- [addColumnWithHeaderAt\_](RawSheetData.md#addcolumnwithheaderat_)
- [addColumnWithHeader\_](RawSheetData.md#addcolumnwithheader_)
- [addColumn\_](RawSheetData.md#addcolumn_)
- [addColumnsFromArray](RawSheetData.md#addcolumnsfromarray)
- [addSoftColumns](RawSheetData.md#addsoftcolumns)
- [appendDataRow](RawSheetData.md#appenddatarow)
- [appendRowValues](RawSheetData.md#appendrowvalues)
- [buildIndexToKey\_](RawSheetData.md#buildindextokey_)
- [clearContent](RawSheetData.md#clearcontent)
- [deleteUntilRow](RawSheetData.md#deleteuntilrow)
- [destroyUntilRow](RawSheetData.md#destroyuntilrow)
- [directEditRawSheetValues](RawSheetData.md#directeditrawsheetvalues)
- [getAllOfIndex](RawSheetData.md#getallofindex)
- [getAllOfKey](RawSheetData.md#getallofkey)
- [getData](RawSheetData.md#getdata)
- [getEntryConfig](RawSheetData.md#getentryconfig)
- [getHeaderRow](RawSheetData.md#getheaderrow)
- [getHeaders](RawSheetData.md#getheaders)
- [getIndex](RawSheetData.md#getindex)
- [getKey](RawSheetData.md#getkey)
- [getKeys](RawSheetData.md#getkeys)
- [getNextFreeColumn\_](RawSheetData.md#getnextfreecolumn_)
- [getSheet](RawSheetData.md#getsheet)
- [getTabName](RawSheetData.md#gettabname)
- [getValues](RawSheetData.md#getvalues)
- [hasIndex](RawSheetData.md#hasindex)
- [hasKey](RawSheetData.md#haskey)
- [insertData](RawSheetData.md#insertdata)
- [insertValues](RawSheetData.md#insertvalues)
- [renameKey](RawSheetData.md#renamekey)
- [setData](RawSheetData.md#setdata)
- [setHeaders](RawSheetData.md#setheaders)
- [setValues](RawSheetData.md#setvalues)
- [syncDataColumns](RawSheetData.md#syncdatacolumns)

## Constructors

### constructor

• **new RawSheetData**(`sheetConfig`)

Creates an instance of RawSheetData.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheetConfig` | `sheetDataEntry` |

#### Defined in

[sheetData.ts:348](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L348)

## Properties

### allowWrite

• **allowWrite**: `boolean` = `false`

#### Defined in

[sheetData.ts:324](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L324)

___

### headerRow

• **headerRow**: `number` = `0`

#### Defined in

[sheetData.ts:320](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L320)

___

### includeSoftcodedColumns

• **includeSoftcodedColumns**: `boolean` = `false`

#### Defined in

[sheetData.ts:322](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L322)

___

### indexToKey

• **indexToKey**: `string`[] = `[]`

#### Defined in

[sheetData.ts:327](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L327)

___

### keyNamesToIgnore

• **keyNamesToIgnore**: `string`[] = `[]`

#### Defined in

[sheetData.ts:325](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L325)

___

### keyToIndex

• **keyToIndex**: `Object` = `{}`

#### Defined in

[sheetData.ts:321](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L321)

___

### onCache

• **onCache**: `boolean` = `false`

#### Defined in

[sheetData.ts:326](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L326)

___

### requireRemote

• **requireRemote**: `boolean` = `false`

#### Defined in

[sheetData.ts:328](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L328)

___

### sheetId

• **sheetId**: `string` = `""`

#### Defined in

[sheetData.ts:323](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L323)

___

### sheetaa

• **sheetaa**: `Sheet`

#### Defined in

[sheetData.ts:329](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L329)

___

### tabName

• **tabName**: `string` = `""`

#### Defined in

[sheetData.ts:319](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L319)

## Accessors

### sheet

• `get` **sheet**(): `Sheet`

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:331](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L331)

• `set` **sheet**(`sheetObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheetObj` | `Sheet` |

#### Returns

`void`

#### Defined in

[sheetData.ts:336](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L336)

## Methods

### addColumnAt\_

▸ **addColumnAt_**(`key`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `index` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:785](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L785)

___

### addColumnWithHeaderAt\_

▸ **addColumnWithHeaderAt_**(`key`, `header`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `header` | `any` |
| `index` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:716](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L716)

___

### addColumnWithHeader\_

▸ **addColumnWithHeader_**(`key`, `header`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `header` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:776](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L776)

___

### addColumn\_

▸ **addColumn_**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:793](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L793)

___

### addColumnsFromArray

▸ **addColumnsFromArray**(`keyArray`, `self`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArray` | `string`[] |
| `self` | [`SheetData`](SheetData.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:499](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L499)

___

### addSoftColumns

▸ **addSoftColumns**(): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

includes softcoded columns (IE ones not directly defined.)
This has a bit of danger with remote sheets:
1. If this runs on a remote sheet that somebody has edit access to the header of, 
2. A valid key gets set in the header, 
3. You don't explicitly remove particular keys, you could potentially leak PII.

BE VERY CAREFUL about using softcoded columns on remote sheets.

#### Returns

`void`

#### Defined in

[sheetData.ts:1259](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1259)

___

### appendDataRow

▸ **appendDataRow**(`data`): `void`

Takes in a single data entry and puts it at the bottom of a spreadsheet.
 Expects a single line of data.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1057](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1057)

___

### appendRowValues

▸ **appendRowValues**(`values`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Inserts rows of data into the Sheet. Takes an array of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `sheetDataValueRaw`[] | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1093](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1093)

___

### buildIndexToKey\_

▸ **buildIndexToKey_**(): `void`

#### Returns

`void`

#### Defined in

[sheetData.ts:694](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L694)

___

### clearContent

▸ **clearContent**(): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Clears the content of this Sheet below the header row, leaving formatting intact.

#### Returns

`void`

#### Defined in

[sheetData.ts:1169](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1169)

___

### deleteUntilRow

▸ **deleteUntilRow**(`finalRow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `finalRow` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1176](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1176)

___

### destroyUntilRow

▸ **destroyUntilRow**(`finalRow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `finalRow` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1188](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1188)

___

### directEditRawSheetValues

▸ **directEditRawSheetValues**(`xOffset`, `yOffset`, `valueArray`, `writeInDataArea?`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
 Directly puts an array of values like so: [[val1,val2,...,valN],...[arrayn]] in a sheet.
 Checks to make sure that you're not going to overwrite data first, but also enables an override for that if you so desire.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xOffset` | `number` | `undefined` | how far away from column A you want your things to be |
| `yOffset` | `number` | `undefined` | how far away from row 1 you want your data to be. |
| `valueArray` | `sheetDataValueRaw`[] | `undefined` | - |
| `writeInDataArea?` | `boolean` | `false` |  |

#### Returns

`void`

#### Defined in

[sheetData.ts:674](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L674)

___

### getAllOfIndex

▸ **getAllOfIndex**(`index`): `sheetDataValueRaw`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns an array of all the values in the sheet for the column with the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `any` | The index of the column, starting from 0. |

#### Returns

`sheetDataValueRaw`

An array containing all values from the given column.

#### Defined in

[sheetData.ts:1236](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1236)

___

### getAllOfKey

▸ **getAllOfKey**(`key`): `sheetDataValueRaw`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns an array of all the values in the sheet for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key string. |

#### Returns

`sheetDataValueRaw`

An array containing all values for the given key.

#### Defined in

[sheetData.ts:1223](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1223)

___

### getData

▸ **getData**(): `kiDataEntry`[]

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

`kiDataEntry`[]

The data from this sheet as an array of objects.

#### Defined in

[sheetData.ts:960](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L960)

___

### getEntryConfig

▸ **getEntryConfig**(`isForCaching?`): `sheetDataEntry`

returns a sheetDataConfig object post-initialization that can be used in caching applications

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isForCaching?` | `boolean` | `false` |

#### Returns

`sheetDataEntry`

returns sheetDataEntry config

#### Defined in

[sheetData.ts:641](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L641)

___

### getHeaderRow

▸ **getHeaderRow**(): `number`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the index, starting with 0, of the header row of this sheet.

#### Returns

`number`

#### Defined in

[sheetData.ts:826](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L826)

___

### getHeaders

▸ **getHeaders**(): `string`[]

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the header row of this sheet.

#### Returns

`string`[]

The header row if this sheet.

#### Defined in

[sheetData.ts:903](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L903)

___

### getIndex

▸ **getIndex**(`key`): `any`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the index for the column with the given key string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[sheetData.ts:837](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L837)

___

### getKey

▸ **getKey**(`index`): `string`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the key string for the column with the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`string`

#### Defined in

[sheetData.ts:857](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L857)

___

### getKeys

▸ **getKeys**(): `string`[]

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns an array of all the defined keys in this RawSheetData, ordered by column index. Undefined indices will have undefined values.

#### Returns

`string`[]

An array of defined keys in this sheet.

#### Defined in

[sheetData.ts:1206](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1206)

___

### getNextFreeColumn\_

▸ **getNextFreeColumn_**(): `number`

#### Returns

`number`

#### Defined in

[sheetData.ts:707](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L707)

___

### getSheet

▸ **getSheet**(): `Sheet`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the Sheet object for this RawSheetData.

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:806](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L806)

___

### getTabName

▸ **getTabName**(): `string`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the name of the Sheet for this RawSheetData.

#### Returns

`string`

#### Defined in

[sheetData.ts:816](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L816)

___

### getValues

▸ **getValues**(): `sheetDataValueRaw`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

`sheetDataValueRaw`

The data from this sheet as a two dimentional array.

#### Defined in

[sheetData.ts:945](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L945)

___

### hasIndex

▸ **hasIndex**(`index`): `boolean`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns true if this RawSheetData object has a defined key attached to the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`boolean`

#### Defined in

[sheetData.ts:877](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L877)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns true if this RawSheetData object has a defined value for the given key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

[sheetData.ts:890](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L890)

___

### insertData

▸ **insertData**(`data`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Sets the data in the Sheet, erasing data already there. Takes an array of row objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1123](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1123)

___

### insertValues

▸ **insertValues**(`values`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Inserts rows of data into the Sheet. Takes a 2D array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any` | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1104](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1104)

___

### renameKey

▸ **renameKey**(`targetKey`, `newName`): `void`

renameKey: Replaces the name of a key with a given string.  If the given key does not exist, it will return without doing anything.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetKey` | `string` |
| `newName` | `string` |

#### Returns

`void`

#### Defined in

[sheetData.ts:486](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L486)

___

### setData

▸ **setData**(`data`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Inserts rows of data into the Sheet, formatted as an array of row objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1007](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L1007)

___

### setHeaders

▸ **setHeaders**(`headerData`): `void`

expects an array of values, like this: ["1","2"], and sends them to the header row.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerData` | `string`[] |

#### Returns

`void`

#### Defined in

[sheetData.ts:922](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L922)

___

### setValues

▸ **setValues**(`values`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Sets the data in the Sheet, erasing data already there. Takes a 2D array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any` | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:984](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L984)

___

### syncDataColumns

▸ **syncDataColumns**(`inputSheetData`, `self`): `void`

syncDataColumns
 
 Applies any missing keys from a rawSheetData instance to the current rawSheetData object.
 Keys will be added from a ``sheetData`` class if they meet the following criteria:
 1. The key is not on the blocklist for the ``sheetData`` instance that called the merge.
 2. The key does not already exist.
 While merging, the following things happen:
 1. Keys that do not exist will be added.
 2. Soft-coded columns (ones not explicitly declared in config files) will be merged.
   - If a soft-coded column's key matches the header for the specified ``sheetData`` 
      that has a hard-coded key name, the soft-coded key's name will be replaced with 
      the hard-coded one.  This means that you can have a mixture of hard-coded and 
      soft-coded keys in different ``sheetData`` classes and still be able to repeatedly
      merge and get the same result. 

 There is one caveat:
  any given sheetData class cannot have two identical header entries or key entries.
  Otherwise the left-most (for headers), and smallest column assignment (for hard-coded 
  entries) will be used and the rest will be ignored.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputSheetData` | [`RawSheetData`](RawSheetData.md) |
| `self` | [`SheetData`](SheetData.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:575](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L575)
