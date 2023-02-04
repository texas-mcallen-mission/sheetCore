[sheetcore](../docs.md) / sheetData

# Module: sheetData

## Table of contents

### Classes

- [RawSheetData](../classes/sheetData.RawSheetData.md)
- [SheetData](../classes/sheetData.SheetData.md)

### Interfaces

- [sheetCoreConfigInfo](../interfaces/sheetData.sheetCoreConfigInfo.md)

### Functions

- [buildIndexToKey\_](sheetData.md#buildindextokey_)
- [cacheAllSheetData](sheetData.md#cacheallsheetdata)
- [getAllSheetDataFromCache](sheetData.md#getallsheetdatafromcache)
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

[sheetData.ts:1432](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/sheetData.ts#L1432)

___

### cacheAllSheetData

▸ **cacheAllSheetData**(`allSheetData`): `void`

Formats and stores the allSheetData object in the cache. Can be retrieved with getAllSheetDataFromCache().

#### Parameters

| Name | Type |
| :------ | :------ |
| `allSheetData` | `manySheetDatas` |

#### Returns

`void`

#### Defined in

[sheetData.ts:1339](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/sheetData.ts#L1339)

___

### getAllSheetDataFromCache

▸ **getAllSheetDataFromCache**(): `manySheetDatas` \| ``null``

Gets the allSheetData object from the cache and returns it. Must have been cached using cacheAllSheetData(). Returns null if nothing is found in the cache.

#### Returns

`manySheetDatas` \| ``null``

#### Defined in

[sheetData.ts:1285](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/sheetData.ts#L1285)

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

[sheetData.ts:1420](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/sheetData.ts#L1420)
