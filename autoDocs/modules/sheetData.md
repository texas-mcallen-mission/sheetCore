[sheetcore](../docs.md) / sheetData

# Module: sheetData

## Table of contents

### Classes

- [RawSheetData](../classes/sheetData.RawSheetData.md)
- [SheetData](../classes/sheetData.SheetData.md)

### Interfaces

- [deleteCheck\_cacheData](../interfaces/sheetData.deleteCheck_cacheData.md)
- [sheetCoreConfigInfo](../interfaces/sheetData.sheetCoreConfigInfo.md)

### Functions

- [buildIndexToKey\_](sheetData.md#buildindextokey_)
- [cacheAllSheetData](sheetData.md#cacheallsheetdata)
- [getAllSheetDataFromCache](sheetData.md#getallsheetdatafromcache)
- [getIterant\_](sheetData.md#getiterant_)
- [populateExtraColumnData\_](sheetData.md#populateextracolumndata_)

## Functions

### buildIndexToKey\_

▸ **buildIndexToKey_**(`allSheetData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allSheetData` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1881](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1881)

___

### cacheAllSheetData

▸ **cacheAllSheetData**(`allSheetData`): `void`

Formats and stores the allSheetData object in the cache. Can be retrieved with getAllSheetDataFromCache().

#### Parameters

| Name | Type |
| :------ | :------ |
| `allSheetData` | [`manySheetDatas`](../interfaces/typescript_interfaces.manySheetDatas.md) |

#### Returns

`void`

#### Defined in

[sheetData.ts:1788](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1788)

___

### getAllSheetDataFromCache

▸ **getAllSheetDataFromCache**(): [`manySheetDatas`](../interfaces/typescript_interfaces.manySheetDatas.md) \| ``null``

Gets the allSheetData object from the cache and returns it. Must have been cached using cacheAllSheetData(). Returns null if nothing is found in the cache.

#### Returns

[`manySheetDatas`](../interfaces/typescript_interfaces.manySheetDatas.md) \| ``null``

#### Defined in

[sheetData.ts:1734](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1734)

___

### getIterant\_

▸ **getIterant_**(`data`, `iterant_name`): `number` \| ``-1``

**`Description`**

this gets used by rsd deletion methods, helps keep code overhead down.
Returns -1 if unable to get a position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` \| [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |
| `iterant_name` | `string` |

#### Returns

`number` \| ``-1``

{number}

#### Defined in

[sheetData.ts:26](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L26)

___

### populateExtraColumnData\_

▸ **populateExtraColumnData_**(`sheetData`): `void`

Adds any missing keys that exist on form responses to data.
uses hardcoded things for the ones to sync.
For this to be enabled, I *think* the sheets might have to be on the same document (but I'm not sure.)
May need to be replaced or reworked to get this functional on an allsheetData'd
uses allSheetData.form, allSheetData.data
If you want to have softcoded columns, you need to enable them in the config.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheetData` | `any` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1869](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/sheetData.ts#L1869)
