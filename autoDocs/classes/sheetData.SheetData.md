[sheetcore](../docs.md) / [sheetData](../modules/sheetData.md) / SheetData

# Class: SheetData

[sheetData](../modules/sheetData.md).SheetData

**`Classdesc`**

SheetData is basically a better version of Sheet. It provides greater access to the data in a sheet than the Sheet class does, given certain assumptions about the format of that Sheet. Functions in the Sheet class usually organize data by row, then by column index number; most SheetData functions organize data by row, then by column header string (or hardcoded key string). This preserves structure when reordering columns or moving data between Sheets as long as corresponding columns have identical headers.

When defined, hardcoded key strings can override using header values as key strings. This allows consistant functionality even when the header row changes, and lets methods access specific types of data using the key string without needing the column index for that data. Key strings are hardcoded by being passed through the initialKeyToIndex parameter. Any keys not hardcoded are calculated internally, using the column header as the key string. Columns with blank headers are ignored.

For SheetData to work properly, there must be a single header row. Every nonblank row below the header row is assumed to contain data. Rows above the header row are ignored. Blank data rows (rows whose leftmost value is blank) are skipped, meaning not all SheetData functions preserve them.

Technical note: all of the above functionality is implemented through the hidden RawSheetData class, with SheetData as a wrapper for it.

## Table of contents

### Constructors

- [constructor](sheetData.SheetData.md#constructor)

### Accessors

- [iterantKey](sheetData.SheetData.md#iterantkey)
- [rsd](sheetData.SheetData.md#rsd)

### Methods

- [addKeys](sheetData.SheetData.md#addkeys)
- [addKeysFromArray](sheetData.SheetData.md#addkeysfromarray)
- [appendData](sheetData.SheetData.md#appenddata)
- [clearContent](sheetData.SheetData.md#clearcontent)
- [clearRows](sheetData.SheetData.md#clearrows)
- [deleteRow](sheetData.SheetData.md#deleterow)
- [deleteRows](sheetData.SheetData.md#deleterows)
- [destroyRows](sheetData.SheetData.md#destroyrows)
- [directEdit](sheetData.SheetData.md#directedit)
- [directModify](sheetData.SheetData.md#directmodify)
- [getAllOfIndex](sheetData.SheetData.md#getallofindex)
- [getAllOfKey](sheetData.SheetData.md#getallofkey)
- [getConfigForCache](sheetData.SheetData.md#getconfigforcache)
- [getData](sheetData.SheetData.md#getdata)
- [getHeaderRow](sheetData.SheetData.md#getheaderrow)
- [getHeaders](sheetData.SheetData.md#getheaders)
- [getIndex](sheetData.SheetData.md#getindex)
- [getKey](sheetData.SheetData.md#getkey)
- [getKeys](sheetData.SheetData.md#getkeys)
- [getSheet](sheetData.SheetData.md#getsheet)
- [getTabName](sheetData.SheetData.md#gettabname)
- [getValues](sheetData.SheetData.md#getvalues)
- [hasIndex](sheetData.SheetData.md#hasindex)
- [hasKey](sheetData.SheetData.md#haskey)
- [insertData](sheetData.SheetData.md#insertdata)
- [insertValues](sheetData.SheetData.md#insertvalues)
- [setData](sheetData.SheetData.md#setdata)
- [setHeaders](sheetData.SheetData.md#setheaders)
- [setValues](sheetData.SheetData.md#setvalues)
- [updateRow](sheetData.SheetData.md#updaterow)
- [updateRows](sheetData.SheetData.md#updaterows)

## Constructors

### constructor

• **new SheetData**(`rawSheetData`)

Creates an instance of SheetData.  To do so, you need to feed it a rawSheetData object, which includes the configuration stuff.

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSheetData` | [`RawSheetData`](sheetData.RawSheetData.md) |

#### Defined in

[sheetData.ts:68](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L68)

## Accessors

### iterantKey

• `get` **iterantKey**(): `string`

**`Description`**

internal key used to do Update & Delete actions.

**`Memberof`**

SheetData

#### Returns

`string`

#### Defined in

[sheetData.ts:77](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L77)

___

### rsd

• `get` **rsd**(): [`RawSheetData`](sheetData.RawSheetData.md)

#### Returns

[`RawSheetData`](sheetData.RawSheetData.md)

#### Defined in

[sheetData.ts:59](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L59)

• `set` **rsd**(`rawSheetData`): `void`

Wrap a RawSheetData into a full SheetData.

**`See`**

SheetData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawSheetData` | [`RawSheetData`](sheetData.RawSheetData.md) | The RawSheetData to wrap. |

#### Returns

`void`

#### Defined in

[sheetData.ts:55](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L55)

## Methods

### addKeys

▸ **addKeys**(`thingToCopyFrom`): [`SheetData`](sheetData.SheetData.md)

Copies all keys that don't already exist that are not specifically excluded in the keyNamesToIgnore declaration

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `thingToCopyFrom` | [`SheetData`](sheetData.SheetData.md) |

#### Returns

[`SheetData`](sheetData.SheetData.md)

#### Defined in

[sheetData.ts:144](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L144)

___

### addKeysFromArray

▸ **addKeysFromArray**(`keyArray`): [`SheetData`](sheetData.SheetData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArray` | `string`[] |

#### Returns

[`SheetData`](sheetData.SheetData.md)

#### Defined in

[sheetData.ts:148](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L148)

___

### appendData

▸ **appendData**(`data`): `void`

Expects a single data entry, and send it to the bottom of the target sheet.
 Useful in cases where you don't care as much about the order of entries as you do them not colliding with each other...

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

`void`

#### Defined in

[sheetData.ts:164](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L164)

___

### clearContent

▸ **clearContent**(): `void`

Clears the content of this Sheet below the header row, leaving formatting intact.

#### Returns

`void`

#### Defined in

[sheetData.ts:319](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L319)

___

### clearRows

▸ **clearRows**(`numRows`): `void`

**`Description`**

**`Deprecated`**

- don't want to keep this around in sheetData.  Feel free to use the underlying rawSheetData method if you need it.

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `numRows` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:127](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L127)

___

### deleteRow

▸ **deleteRow**(`dataEntry`): `ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataEntry` | `number` \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |

#### Returns

`ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Defined in

[sheetData.ts:100](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L100)

___

### deleteRows

▸ **deleteRows**(`dataArray`): `ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataArray` | `number`[] \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

`ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Defined in

[sheetData.ts:96](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L96)

___

### destroyRows

▸ **destroyRows**(`finalRow`): `void`

**`Deprecated`**

- don't want to keep this around in sheetData.  Feel free to use the underlying rawSheetData method if you need it.

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `finalRow` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:111](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L111)

___

### directEdit

▸ **directEdit**(`xOffset`, `yOffset`, `valueArray`, `writeInDataArea?`): `void`

modifies a cell range at a x-y coordinate.  Range size is determined by the length of the given valueArray
 Used for scope information on the report generator, and more recently to mark things as pulled in the mileageLog generator.

**`Memberof`**

SheetData

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `xOffset` | `number` | `undefined` |
| `yOffset` | `number` | `undefined` |
| `valueArray` | [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)[] | `undefined` |
| `writeInDataArea?` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[sheetData.ts:219](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L219)

___

### directModify

▸ **directModify**(`xOffset`, `data`): `void`

directModify: modify a partial

**`Memberof`**

SheetData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xOffset` | `number` | ONE-INDEXED position of target row. |
| `data` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) | data you want to add |

#### Returns

`void`

#### Defined in

[sheetData.ts:179](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L179)

___

### getAllOfIndex

▸ **getAllOfIndex**(`index`): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

Returns an array of all the values in the sheet for the column with the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `any` | The index of the column, starting from 0. |

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

An array containing all values from the given column.

#### Defined in

[sheetData.ts:345](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L345)

___

### getAllOfKey

▸ **getAllOfKey**(`key`): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

Returns an array of all the values in the sheet for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key string. |

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

An array containing all values for the given key.

#### Defined in

[sheetData.ts:336](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L336)

___

### getConfigForCache

▸ **getConfigForCache**(): [`sheetDataEntry`](../interfaces/typescript_interfaces.sheetDataEntry.md)

#### Returns

[`sheetDataEntry`](../interfaces/typescript_interfaces.sheetDataEntry.md)

#### Defined in

[sheetData.ts:153](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L153)

___

### getData

▸ **getData**(): [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[]

Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

[`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[]

The data from this sheet as an array of objects.

#### Defined in

[sheetData.ts:296](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L296)

___

### getHeaderRow

▸ **getHeaderRow**(): `number`

Returns the index, starting with 0, of the header row of this sheet.

#### Returns

`number`

#### Defined in

[sheetData.ts:239](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L239)

___

### getHeaders

▸ **getHeaders**(): `string`[]

Returns the header row of this sheet.

#### Returns

`string`[]

The header row if this sheet.

#### Defined in

[sheetData.ts:280](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L280)

___

### getIndex

▸ **getIndex**(`key`): `any`

Returns the index for the column with the given key string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[sheetData.ts:248](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L248)

___

### getKey

▸ **getKey**(`index`): `string`

Returns the key string for the column with the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`string`

#### Defined in

[sheetData.ts:256](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L256)

___

### getKeys

▸ **getKeys**(): `string`[]

Returns an array of all the defined keys in this RawSheetData, ordered by column index. Undefined indices will have undefined values.

#### Returns

`string`[]

An array of defined keys in this sheet.

#### Defined in

[sheetData.ts:327](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L327)

___

### getSheet

▸ **getSheet**(): `Sheet`

Returns the Sheet object for this SheetData.

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:225](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L225)

___

### getTabName

▸ **getTabName**(): `string`

Returns the name of the Sheet for this SheetData.

#### Returns

`string`

#### Defined in

[sheetData.ts:232](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L232)

___

### getValues

▸ **getValues**(): [`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

[`sheetDataValueRaw`](../modules/typescript_interfaces.md#sheetdatavalueraw)

The data from this sheet as a two dimentional array.

#### Defined in

[sheetData.ts:288](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L288)

___

### hasIndex

▸ **hasIndex**(`index`): `boolean`

Returns true if this SheetData object has a defined key attached to the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`boolean`

#### Defined in

[sheetData.ts:264](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L264)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

Returns true if this SheetData object has a defined value for the given key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

[sheetData.ts:272](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L272)

___

### insertData

▸ **insertData**(`data`): `void`

Inserts rows of data into the Sheet, formatted as an array of row objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:304](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L304)

___

### insertValues

▸ **insertValues**(`values`): `void`

Inserts rows of data into the Sheet. Takes a 2D array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any` | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:312](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L312)

___

### setData

▸ **setData**(`data`): `void`

Inserts rows of data into the Sheet, formatted as an array of row objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:361](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L361)

___

### setHeaders

▸ **setHeaders**(`data`): `void`

Returns the index, starting with 0, of the header row of this sheet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:367](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L367)

___

### setValues

▸ **setValues**(`values`): `void`

Sets the data in the Sheet, erasing data already there. Takes a 2D array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `any` | The values to insert. |

#### Returns

`void`

#### Defined in

[sheetData.ts:353](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L353)

___

### updateRow

▸ **updateRow**(`dataEntry`, `position?`): `ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataEntry` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) | `undefined` |
| `position` | `number` | `null` |

#### Returns

`ThisType`<[`SheetData`](sheetData.SheetData.md)\>

#### Defined in

[sheetData.ts:91](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L91)

___

### updateRows

▸ **updateRows**(`dataArray`): `ThisType`<[`SheetData`](sheetData.SheetData.md)\>

**`Description`**

given a kiDataEntry with an internal iterant, modify values in columns with keys given.

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataArray` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md)[] |

#### Returns

`ThisType`<[`SheetData`](sheetData.SheetData.md)\>

{ThisType<SheetData>}

#### Defined in

[sheetData.ts:87](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L87)
