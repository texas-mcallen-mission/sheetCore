[sheetcore](../docs.md) / SheetData

# Class: SheetData

**`Classdesc`**

SheetData is basically a better version of Sheet. It provides greater access to the data in a sheet than the Sheet class does, given certain assumptions about the format of that Sheet. Functions in the Sheet class usually organize data by row, then by column index number; most SheetData functions organize data by row, then by column header string (or hardcoded key string). This preserves structure when reordering columns or moving data between Sheets as long as corresponding columns have identical headers.

When defined, hardcoded key strings can override using header values as key strings. This allows consistant functionality even when the header row changes, and lets methods access specific types of data using the key string without needing the column index for that data. Key strings are hardcoded by being passed through the initialKeyToIndex parameter. Any keys not hardcoded are calculated internally, using the column header as the key string. Columns with blank headers are ignored.

For SheetData to work properly, there must be a single header row. Every nonblank row below the header row is assumed to contain data. Rows above the header row are ignored. Blank data rows (rows whose leftmost value is blank) are skipped, meaning not all SheetData functions preserve them.

Technical note: all of the above functionality is implemented through the hidden RawSheetData class, with SheetData as a wrapper for it.

## Table of contents

### Constructors

- [constructor](SheetData.md#constructor)

### Accessors

- [rsd](SheetData.md#rsd)

### Methods

- [addKeys](SheetData.md#addkeys)
- [addKeysFromArray](SheetData.md#addkeysfromarray)
- [appendData](SheetData.md#appenddata)
- [clearContent](SheetData.md#clearcontent)
- [clearRows](SheetData.md#clearrows)
- [destroyRows](SheetData.md#destroyrows)
- [directEdit](SheetData.md#directedit)
- [directModify](SheetData.md#directmodify)
- [getAllOfIndex](SheetData.md#getallofindex)
- [getAllOfKey](SheetData.md#getallofkey)
- [getConfigForCache](SheetData.md#getconfigforcache)
- [getData](SheetData.md#getdata)
- [getHeaderRow](SheetData.md#getheaderrow)
- [getHeaders](SheetData.md#getheaders)
- [getIndex](SheetData.md#getindex)
- [getKey](SheetData.md#getkey)
- [getKeys](SheetData.md#getkeys)
- [getSheet](SheetData.md#getsheet)
- [getTabName](SheetData.md#gettabname)
- [getValues](SheetData.md#getvalues)
- [hasIndex](SheetData.md#hasindex)
- [hasKey](SheetData.md#haskey)
- [insertData](SheetData.md#insertdata)
- [insertValues](SheetData.md#insertvalues)
- [setData](SheetData.md#setdata)
- [setHeaders](SheetData.md#setheaders)
- [setValues](SheetData.md#setvalues)

## Constructors

### constructor

• **new SheetData**(`rawSheetData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawSheetData` | [`RawSheetData`](RawSheetData.md) |

#### Defined in

[sheetData.ts:40](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L40)

## Accessors

### rsd

• `get` **rsd**(): [`RawSheetData`](RawSheetData.md)

#### Returns

[`RawSheetData`](RawSheetData.md)

#### Defined in

[sheetData.ts:36](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L36)

• `set` **rsd**(`rawSheetData`): `void`

Wrap a RawSheetData into a full SheetData.

**`See`**

SheetData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawSheetData` | [`RawSheetData`](RawSheetData.md) | The RawSheetData to wrap. |

#### Returns

`void`

#### Defined in

[sheetData.ts:32](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L32)

## Methods

### addKeys

▸ **addKeys**(`thingToCopyFrom`): [`SheetData`](SheetData.md)

Copies all keys that don't already exist that are not specifically excluded in the keyNamesToIgnore declaration

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `thingToCopyFrom` | [`SheetData`](SheetData.md) |

#### Returns

[`SheetData`](SheetData.md)

#### Defined in

[sheetData.ts:67](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L67)

___

### addKeysFromArray

▸ **addKeysFromArray**(`keyArray`): [`SheetData`](SheetData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArray` | `string`[] |

#### Returns

[`SheetData`](SheetData.md)

#### Defined in

[sheetData.ts:71](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L71)

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
| `data` | `kiDataEntry` |

#### Returns

`void`

#### Defined in

[sheetData.ts:87](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L87)

___

### clearContent

▸ **clearContent**(): `void`

Clears the content of this Sheet below the header row, leaving formatting intact.

#### Returns

`void`

#### Defined in

[sheetData.ts:237](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L237)

___

### clearRows

▸ **clearRows**(`numRows`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numRows` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:52](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L52)

___

### destroyRows

▸ **destroyRows**(`finalRow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `finalRow` | `number` |

#### Returns

`void`

#### Defined in

[sheetData.ts:44](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L44)

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
| `valueArray` | `sheetDataValueRaw`[] | `undefined` |
| `writeInDataArea?` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[sheetData.ts:137](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L137)

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
| `data` | `kiDataEntry` | data you want to add |

#### Returns

`void`

#### Defined in

[sheetData.ts:97](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L97)

___

### getAllOfIndex

▸ **getAllOfIndex**(`index`): `sheetDataValueRaw`

Returns an array of all the values in the sheet for the column with the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `any` | The index of the column, starting from 0. |

#### Returns

`sheetDataValueRaw`

An array containing all values from the given column.

#### Defined in

[sheetData.ts:263](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L263)

___

### getAllOfKey

▸ **getAllOfKey**(`key`): `sheetDataValueRaw`

Returns an array of all the values in the sheet for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | The key string. |

#### Returns

`sheetDataValueRaw`

An array containing all values for the given key.

#### Defined in

[sheetData.ts:254](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L254)

___

### getConfigForCache

▸ **getConfigForCache**(): `sheetDataEntry`

#### Returns

`sheetDataEntry`

#### Defined in

[sheetData.ts:76](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L76)

___

### getData

▸ **getData**(): `kiDataEntry`[]

Returns the data from this sheet as an array of objects. Each object represents a row in this sheet and contains the data for that row as properties. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

`kiDataEntry`[]

The data from this sheet as an array of objects.

#### Defined in

[sheetData.ts:214](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L214)

___

### getHeaderRow

▸ **getHeaderRow**(): `number`

Returns the index, starting with 0, of the header row of this sheet.

#### Returns

`number`

#### Defined in

[sheetData.ts:157](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L157)

___

### getHeaders

▸ **getHeaders**(): `string`[]

Returns the header row of this sheet.

#### Returns

`string`[]

The header row if this sheet.

#### Defined in

[sheetData.ts:198](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L198)

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

[sheetData.ts:166](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L166)

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

[sheetData.ts:174](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L174)

___

### getKeys

▸ **getKeys**(): `string`[]

Returns an array of all the defined keys in this RawSheetData, ordered by column index. Undefined indices will have undefined values.

#### Returns

`string`[]

An array of defined keys in this sheet.

#### Defined in

[sheetData.ts:245](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L245)

___

### getSheet

▸ **getSheet**(): `Sheet`

Returns the Sheet object for this SheetData.

#### Returns

`Sheet`

#### Defined in

[sheetData.ts:143](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L143)

___

### getTabName

▸ **getTabName**(): `string`

Returns the name of the Sheet for this SheetData.

#### Returns

`string`

#### Defined in

[sheetData.ts:150](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L150)

___

### getValues

▸ **getValues**(): `sheetDataValueRaw`

Returns the data from this sheet as a two dimensional array. Only includes rows below the header row. Blank rows (rows whose leftmost cell is the empty string) are skipped.

#### Returns

`sheetDataValueRaw`

The data from this sheet as a two dimentional array.

#### Defined in

[sheetData.ts:206](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L206)

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

[sheetData.ts:182](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L182)

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

[sheetData.ts:190](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L190)

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

[sheetData.ts:222](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L222)

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

[sheetData.ts:230](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L230)

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

[sheetData.ts:279](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L279)

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

[sheetData.ts:285](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L285)

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

[sheetData.ts:271](https://github.com/texas-mcallen-mission/sheetCore/blob/35886d4/sheetData.ts#L271)
