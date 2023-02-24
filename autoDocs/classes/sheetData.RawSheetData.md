[sheetcore](../docs.md) / [sheetData](../modules/sheetData.md) / RawSheetData

# Class: RawSheetData

[sheetData](../modules/sheetData.md).RawSheetData

A RawSheetData instance. This should be wrapped in a SheetData before use.

**`See`**

SheetData

**`Param`**

data

## Table of contents

### Constructors

- [constructor](sheetData.RawSheetData.md#constructor)

### Properties

- [add\_iterant](sheetData.RawSheetData.md#add_iterant)
- [allowWrite](sheetData.RawSheetData.md#allowwrite)
- [crud\_cacheKey](sheetData.RawSheetData.md#crud_cachekey)
- [crud\_iterant\_name](sheetData.RawSheetData.md#crud_iterant_name)
- [data\_update\_time](sheetData.RawSheetData.md#data_update_time)
- [headerRow](sheetData.RawSheetData.md#headerrow)
- [includeSoftcodedColumns](sheetData.RawSheetData.md#includesoftcodedcolumns)
- [indexToKey](sheetData.RawSheetData.md#indextokey)
- [keyNamesToIgnore](sheetData.RawSheetData.md#keynamestoignore)
- [keyToIndex](sheetData.RawSheetData.md#keytoindex)
- [offset](sheetData.RawSheetData.md#offset)
- [onCache](sheetData.RawSheetData.md#oncache)
- [requireRemote](sheetData.RawSheetData.md#requireremote)
- [sheetId](sheetData.RawSheetData.md#sheetid)
- [sheetaa](sheetData.RawSheetData.md#sheetaa)
- [tabName](sheetData.RawSheetData.md#tabname)

### Accessors

- [sheet](sheetData.RawSheetData.md#sheet)

### Methods

- [addColumnAt\_](sheetData.RawSheetData.md#addcolumnat_)
- [addColumnWithHeaderAt\_](sheetData.RawSheetData.md#addcolumnwithheaderat_)
- [addColumnWithHeader\_](sheetData.RawSheetData.md#addcolumnwithheader_)
- [addColumn\_](sheetData.RawSheetData.md#addcolumn_)
- [addColumnsFromArray](sheetData.RawSheetData.md#addcolumnsfromarray)
- [addSoftColumns](sheetData.RawSheetData.md#addsoftcolumns)
- [appendData](sheetData.RawSheetData.md#appenddata)
- [appendDataRow](sheetData.RawSheetData.md#appenddatarow)
- [appendRowValues](sheetData.RawSheetData.md#appendrowvalues)
- [buildIndexToKey\_](sheetData.RawSheetData.md#buildindextokey_)
- [clearContent](sheetData.RawSheetData.md#clearcontent)
- [crud\_deleteRow](sheetData.RawSheetData.md#crud_deleterow)
- [crud\_deleteRows](sheetData.RawSheetData.md#crud_deleterows)
- [crud\_destroyRow](sheetData.RawSheetData.md#crud_destroyrow)
- [crud\_destroyRows](sheetData.RawSheetData.md#crud_destroyrows)
- [crud\_updateRow](sheetData.RawSheetData.md#crud_updaterow)
- [crud\_updateRows](sheetData.RawSheetData.md#crud_updaterows)
- [deleteUntilRow](sheetData.RawSheetData.md#deleteuntilrow)
- [deletion\_cache\_check](sheetData.RawSheetData.md#deletion_cache_check)
- [destroyUntilRow](sheetData.RawSheetData.md#destroyuntilrow)
- [directEditRawSheetValues](sheetData.RawSheetData.md#directeditrawsheetvalues)
- [getAllOfIndex](sheetData.RawSheetData.md#getallofindex)
- [getAllOfKey](sheetData.RawSheetData.md#getallofkey)
- [getData](sheetData.RawSheetData.md#getdata)
- [getEntryConfig](sheetData.RawSheetData.md#getentryconfig)
- [getHeaderRow](sheetData.RawSheetData.md#getheaderrow)
- [getHeaders](sheetData.RawSheetData.md#getheaders)
- [getIndex](sheetData.RawSheetData.md#getindex)
- [getKey](sheetData.RawSheetData.md#getkey)
- [getKeys](sheetData.RawSheetData.md#getkeys)
- [getNextFreeColumn\_](sheetData.RawSheetData.md#getnextfreecolumn_)
- [getSheet](sheetData.RawSheetData.md#getsheet)
- [getTabName](sheetData.RawSheetData.md#gettabname)
- [getValues](sheetData.RawSheetData.md#getvalues)
- [hasIndex](sheetData.RawSheetData.md#hasindex)
- [hasKey](sheetData.RawSheetData.md#haskey)
- [insertData](sheetData.RawSheetData.md#insertdata)
- [insertValues](sheetData.RawSheetData.md#insertvalues)
- [renameKey](sheetData.RawSheetData.md#renamekey)
- [setData](sheetData.RawSheetData.md#setdata)
- [setHeaders](sheetData.RawSheetData.md#setheaders)
- [setValues](sheetData.RawSheetData.md#setvalues)
- [syncDataColumns](sheetData.RawSheetData.md#syncdatacolumns)
- [updateLastPulled](sheetData.RawSheetData.md#updatelastpulled)

## Constructors

### constructor

• **new RawSheetData**(`sheetConfig`)

Creates an instance of RawSheetData.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheetConfig` | [`sheetDataEntry`](../interfaces/typescript_interfaces.sheetDataEntry.md) |

#### Defined in

[sheetData.ts:435](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L435)

## Properties

### add\_iterant

• **add\_iterant**: `boolean`

#### Defined in

[sheetData.ts:412](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L412)

___

### allowWrite

• **allowWrite**: `boolean` = `false`

#### Defined in

[sheetData.ts:406](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L406)

___

### crud\_cacheKey

• **crud\_cacheKey**: `string`

#### Defined in

[sheetData.ts:415](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L415)

___

### crud\_iterant\_name

• **crud\_iterant\_name**: `string` = `"iterant_CRUD"`

#### Defined in

[sheetData.ts:413](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L413)

___

### data\_update\_time

• **data\_update\_time**: `number`

#### Defined in

[sheetData.ts:414](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L414)

___

### headerRow

• **headerRow**: `number` = `0`

#### Defined in

[sheetData.ts:402](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L402)

___

### includeSoftcodedColumns

• **includeSoftcodedColumns**: `boolean` = `false`

#### Defined in

[sheetData.ts:404](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L404)

___

### indexToKey

• **indexToKey**: `string`[] = `[]`

#### Defined in

[sheetData.ts:409](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L409)

___

### keyNamesToIgnore

• **keyNamesToIgnore**: `string`[] = `[]`

#### Defined in

[sheetData.ts:407](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L407)

___

### keyToIndex

• **keyToIndex**: `Object` = `{}`

#### Defined in

[sheetData.ts:403](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L403)

___

### offset

• **offset**: `number`

#### Defined in

[sheetData.ts:416](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L416)

___

### onCache

• **onCache**: `boolean` = `false`

#### Defined in

[sheetData.ts:408](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L408)

___

### requireRemote

• **requireRemote**: `boolean` = `false`

#### Defined in

[sheetData.ts:410](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L410)

___

### sheetId

• **sheetId**: `string` = `""`

#### Defined in

[sheetData.ts:405](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L405)

___

### sheetaa

• **sheetaa**: `Sheet`

#### Defined in

[sheetData.ts:411](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L411)

___

### tabName

• **tabName**: `string` = `""`

#### Defined in

[sheetData.ts:401](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L401)

## Accessors

### sheet

• `get` **sheet**(): `Sheet`

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:418](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L418)

• `set` **sheet**(`sheetObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheetObj` | `Sheet` |

#### Returns

`void`

#### Defined in

[sheetData.ts:423](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L423)

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

[sheetData.ts:1173](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1173)

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

[sheetData.ts:1104](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1104)

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

[sheetData.ts:1164](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1164)

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

[sheetData.ts:1181](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1181)

___

### addColumnsFromArray

▸ **addColumnsFromArray**(`keyArray`, `self`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArray` | `string`[] |
| `self` | [`SheetData`](sheetData.SheetData.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:887](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L887)

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

[sheetData.ts:1708](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1708)

___

### appendData

▸ **appendData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

`void`

#### Defined in

[sheetData.ts:1451](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1451)

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
| `data` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:1491](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1491)

___

### appendRowValues

▸ **appendRowValues**(`values`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Inserts rows of data into the Sheet. Takes an array of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)[] | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1527](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1527)

___

### buildIndexToKey\_

▸ **buildIndexToKey_**(): `void`

#### Returns

`void`

#### Defined in

[sheetData.ts:1082](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1082)

___

### clearContent

▸ **clearContent**(): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Clears the content of this Sheet below the header row, leaving formatting intact.

#### Returns

`void`

#### Defined in

[sheetData.ts:1617](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1617)

___

### crud\_deleteRow

▸ **crud_deleteRow**(`dataEntry`): `void`

**`Description`**

given a kiDataEntry with the new iterant key or a position, delete its values from a sheet.
This is also the fallback method for destroyRow when something else has pulled in data already.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataEntry` | `number` \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:757](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L757)

___

### crud\_deleteRows

▸ **crud_deleteRows**(`dataArray`): [`RawSheetData`](sheetData.RawSheetData.md)

**`Description`**

given a bunch of positions, clear the content of each given cell but don't shift data.  Use this in places where you have a chance of concurrency.
NOT exposed to the sheetData class because it's legit a bad idea to use unless you aren't doing anything async or concurrent.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataArray` | `number`[] \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

[`RawSheetData`](sheetData.RawSheetData.md)

{this}

#### Defined in

[sheetData.ts:721](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L721)

___

### crud\_destroyRow

▸ **crud_destroyRow**(`data`): [`RawSheetData`](sheetData.RawSheetData.md)

**`Description`**

deletes entire row and shifts data up.  DO NOT USE IN CONCURRENT / MULTITHREAD APPLICATIONS.
 NOT exposed to the sheetData class because it's legit a bad idea to use unless you aren't doing anything async or concurrent.
    *

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |

#### Returns

[`RawSheetData`](sheetData.RawSheetData.md)

{this}

#### Defined in

[sheetData.ts:672](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L672)

___

### crud\_destroyRows

▸ **crud_destroyRows**(`data`): [`RawSheetData`](sheetData.RawSheetData.md)

**`Description`**

deletes entire rows and shifts data up.  DO NOT USE IN CONCURRENT / MULTITHREAD APPLICATIONS.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[] \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

[`RawSheetData`](sheetData.RawSheetData.md)

{this}

#### Defined in

[sheetData.ts:629](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L629)

___

### crud\_updateRow

▸ **crud_updateRow**(`kiData`, `rowNumber?`): `void`

**`Description`**

partial modify method- give it a kiData entry with a row number or a partial entry and a row number to update the values at that position.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `kiData` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) | `undefined` |
| `rowNumber?` | `number` | `null` |

#### Returns

`void`

#### Defined in

[sheetData.ts:832](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L832)

___

### crud\_updateRows

▸ **crud_updateRows**(`kiDataArray`): `void`

**`Description`**

unlike the deleteRow methods, this requires a kiDataEntry because otherwise it won't have data to update with.
  Also requires a key at this.crud_iterant_name to not skip an entry.

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `kiDataArray` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

`void`

#### Defined in

[sheetData.ts:787](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L787)

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

[sheetData.ts:1624](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1624)

___

### deletion\_cache\_check

▸ **deletion_cache_check**(): `boolean`

**`Description`**

return true if it's okay to delete rows because nothing else has pulled the data yet.

**`Memberof`**

RawSheetData

#### Returns

`boolean`

{boolean}

#### Defined in

[sheetData.ts:583](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L583)

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

[sheetData.ts:1636](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1636)

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
| `valueArray` | [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)[] | `undefined` | - |
| `writeInDataArea?` | `boolean` | `false` |  |

#### Returns

`void`

#### Defined in

[sheetData.ts:1062](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1062)

___

### getAllOfIndex

▸ **getAllOfIndex**(`index`): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns an array of all the values in the sheet for the column with the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `any` | The index of the column, starting from 0. |

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

An array containing all values from the given column.

#### Defined in

[sheetData.ts:1684](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1684)

___

### getAllOfKey

▸ **getAllOfKey**(`key`): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns an array of all the values in the sheet for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key string. |

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

An array containing all values for the given key.

#### Defined in

[sheetData.ts:1671](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1671)

___

### getData

▸ **getData**(): [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[]

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!
 If use_iterant is set to true in the passed in config, includes an iterant with the key stored at this.crud_iterant_name
Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

[`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[]

The data from this sheet as an array of objects.

#### Defined in

[sheetData.ts:1348](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1348)

___

### getEntryConfig

▸ **getEntryConfig**(`isForCaching?`): [`sheetDataEntry`](../interfaces/typescript_interfaces.sheetDataEntry.md)

returns a sheetDataConfig object post-initialization that can be used in caching applications

**`Memberof`**

RawSheetData

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isForCaching?` | `boolean` | `false` |

#### Returns

[`sheetDataEntry`](../interfaces/typescript_interfaces.sheetDataEntry.md)

returns sheetDataEntry config

#### Defined in

[sheetData.ts:1029](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1029)

___

### getHeaderRow

▸ **getHeaderRow**(): `number`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the index, starting with 0, of the header row of this sheet.

#### Returns

`number`

#### Defined in

[sheetData.ts:1214](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1214)

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

[sheetData.ts:1291](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1291)

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

[sheetData.ts:1225](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1225)

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

[sheetData.ts:1245](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1245)

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

[sheetData.ts:1654](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1654)

___

### getNextFreeColumn\_

▸ **getNextFreeColumn_**(): `number`

#### Returns

`number`

#### Defined in

[sheetData.ts:1095](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1095)

___

### getSheet

▸ **getSheet**(): `Sheet`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the Sheet object for this RawSheetData.

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:1194](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1194)

___

### getTabName

▸ **getTabName**(): `string`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the name of the Sheet for this RawSheetData.

#### Returns

`string`

#### Defined in

[sheetData.ts:1204](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1204)

___

### getValues

▸ **getValues**(`skipEmpty?`): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipEmpty` | `boolean` | `true` |

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

The data from this sheet as a two dimentional array.

#### Defined in

[sheetData.ts:1333](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1333)

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

[sheetData.ts:1265](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1265)

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

[sheetData.ts:1278](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1278)

___

### insertData

▸ **insertData**(`data`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

**`Deprecated`**

please use appendData() instead.
Sets the data in the Sheet, erasing data already there. Takes an array of row objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1571](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1571)

___

### insertValues

▸ **insertValues**(`values`): `void`

!!WARNING!!
This is a direct call to RawSheetData - wrap it in a SheetData instance before using it!

**`Deprecated`**

- this breaks async CRUD capabilities.
Inserts rows of data into the Sheet. Takes a 2D array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any` | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:1552](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1552)

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

[sheetData.ts:873](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L873)

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

[sheetData.ts:1410](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1410)

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

[sheetData.ts:1310](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1310)

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

[sheetData.ts:1387](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1387)

___

### syncDataColumns

▸ **syncDataColumns**(`inputSheetData`): `void`

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
| `inputSheetData` | [`RawSheetData`](sheetData.RawSheetData.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:963](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L963)

___

### updateLastPulled

▸ **updateLastPulled**(): `void`

**`Description`**

how we make sure we don't get weird errors with concurrency when deleting rows.

**`Memberof`**

RawSheetData

#### Returns

`void`

#### Defined in

[sheetData.ts:612](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L612)
