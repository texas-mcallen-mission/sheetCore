[sheetcore](../docs.md) / [dataManipulator](../modules/dataManipulator.md) / kiDataClass

# Class: kiDataClass

[dataManipulator](../modules/dataManipulator.md).kiDataClass

## Table of contents

### Constructors

- [constructor](dataManipulator.kiDataClass.md#constructor)

### Properties

- [additionalKeys](dataManipulator.kiDataClass.md#additionalkeys)
- [data](dataManipulator.kiDataClass.md#data)
- [internal\_config](dataManipulator.kiDataClass.md#internal_config)
- [mathEngine](dataManipulator.kiDataClass.md#mathengine)

### Accessors

- [end](dataManipulator.kiDataClass.md#end)
- [newKeys](dataManipulator.kiDataClass.md#newkeys)

### Methods

- [addGranulatedTime](dataManipulator.kiDataClass.md#addgranulatedtime)
- [addIterant](dataManipulator.kiDataClass.md#additerant)
- [addShortLang](dataManipulator.kiDataClass.md#addshortlang)
- [aggregateByKeys](dataManipulator.kiDataClass.md#aggregatebykeys)
- [breakdownAnalysis](dataManipulator.kiDataClass.md#breakdownanalysis)
- [bulkAppendObject](dataManipulator.kiDataClass.md#bulkappendobject)
- [calculateCombinedName](dataManipulator.kiDataClass.md#calculatecombinedname)
- [calculatePercentage](dataManipulator.kiDataClass.md#calculatepercentage)
- [createSumOfKeys](dataManipulator.kiDataClass.md#createsumofkeys)
- [getDataFromKey](dataManipulator.kiDataClass.md#getdatafromkey)
- [getStats](dataManipulator.kiDataClass.md#getstats)
- [getThisWeeksData](dataManipulator.kiDataClass.md#getthisweeksdata)
- [getUniqueEntries](dataManipulator.kiDataClass.md#getuniqueentries)
- [groupByKey](dataManipulator.kiDataClass.md#groupbykey)
- [groupByTime](dataManipulator.kiDataClass.md#groupbytime)
- [groupDataByMultipleKeys](dataManipulator.kiDataClass.md#groupdatabymultiplekeys)
- [innerJoin](dataManipulator.kiDataClass.md#innerjoin)
- [keepMatchingByKey](dataManipulator.kiDataClass.md#keepmatchingbykey)
- [leftJoin](dataManipulator.kiDataClass.md#leftjoin)
- [mathByConstant](dataManipulator.kiDataClass.md#mathbyconstant)
- [mathByKey](dataManipulator.kiDataClass.md#mathbykey)
- [removeBeforeDate](dataManipulator.kiDataClass.md#removebeforedate)
- [removeDuplicates](dataManipulator.kiDataClass.md#removeduplicates)
- [removeMatchingByKey](dataManipulator.kiDataClass.md#removematchingbykey)
- [removeSmaller](dataManipulator.kiDataClass.md#removesmaller)
- [rightJoin](dataManipulator.kiDataClass.md#rightjoin)

## Constructors

### constructor

• **new kiDataClass**(`kiData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kiData` | `kiDataEntry`[] \| `object`[] |

#### Defined in

[dataManipulator.ts:132](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L132)

## Properties

### additionalKeys

• **additionalKeys**: `string`[]

#### Defined in

[dataManipulator.ts:129](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L129)

___

### data

• **data**: `kiDataEntry`[] = `[]`

#### Defined in

[dataManipulator.ts:128](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L128)

___

### internal\_config

• **internal\_config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `combinedNameKeys` | { `m1`: { `name`: `string` = "name1"; `pos`: `string` = "position1"; `trainer`: `string` = "isTrainer1" } ; `m2`: { `name`: `string` = "name2"; `pos`: `string` = "position2"; `trainer`: `string` = "isTrainer2" } ; `m3`: { `name`: `string` = "name3"; `pos`: `string` = "position3"; `trainer`: `string` = "isTrainer3" }  } |
| `combinedNameKeys.m1` | { `name`: `string` = "name1"; `pos`: `string` = "position1"; `trainer`: `string` = "isTrainer1" } |
| `combinedNameKeys.m1.name` | `string` |
| `combinedNameKeys.m1.pos` | `string` |
| `combinedNameKeys.m1.trainer` | `string` |
| `combinedNameKeys.m2` | { `name`: `string` = "name2"; `pos`: `string` = "position2"; `trainer`: `string` = "isTrainer2" } |
| `combinedNameKeys.m2.name` | `string` |
| `combinedNameKeys.m2.pos` | `string` |
| `combinedNameKeys.m2.trainer` | `string` |
| `combinedNameKeys.m3` | { `name`: `string` = "name3"; `pos`: `string` = "position3"; `trainer`: `string` = "isTrainer3" } |
| `combinedNameKeys.m3.name` | `string` |
| `combinedNameKeys.m3.pos` | `string` |
| `combinedNameKeys.m3.trainer` | `string` |
| `shortLanguageLookup` | { `English`: `string` = "Eng"; `English,English`: `string` = "Eng"; `Sign Language`: `string` = "ASL"; `Spanish`: `string` = "Spa"; `Spanish,Spanish`: `string` = "Spa" } |
| `shortLanguageLookup.English` | `string` |
| `shortLanguageLookup.English,English` | `string` |
| `shortLanguageLookup.Sign Language` | `string` |
| `shortLanguageLookup.Spanish` | `string` |
| `shortLanguageLookup.Spanish,Spanish` | `string` |

#### Defined in

[dataManipulator.ts:102](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L102)

___

### mathEngine

• **mathEngine**: [`mathEngineClass`](dataManipulator.mathEngineClass.md)

#### Defined in

[dataManipulator.ts:130](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L130)

## Accessors

### end

• `get` **end**(): `kiDataEntry`[]

#### Returns

`kiDataEntry`[]

#### Defined in

[dataManipulator.ts:310](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L310)

___

### newKeys

• `get` **newKeys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[dataManipulator.ts:305](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L305)

## Methods

### addGranulatedTime

▸ **addGranulatedTime**(`timeSeriesKey`, `newKey`, `granularity`): [`kiDataClass`](dataManipulator.kiDataClass.md)

addGranulatedTime : Similar to groupByTime, but instead of grouping, it just adds a calculated time value to a new key.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeSeriesKey` | `string` |
| `newKey` | `string` |
| `granularity` | `timeGranularities` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:533](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L533)

___

### addIterant

▸ **addIterant**(`newKey`, `startVal?`): [`kiDataClass`](dataManipulator.kiDataClass.md)

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `newKey` | `string` | `undefined` |
| `startVal?` | `number` | `0` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:272](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L272)

___

### addShortLang

▸ **addShortLang**(): [`kiDataClass`](dataManipulator.kiDataClass.md)

Calculates a short language string
 creates a key with the name ``truncLang`` of type string
 this attaches a truncated language based on the input it receives.
 data that was parsed with the newer version of languageParser is necessary for ASL areas
 used for the printed version of the TMM report to knock down cell width.
 if you want to add another language in the future, stick the language in the internal ``langLookup`` class.
 It should match what the language string from importContacts says as the key, and set the value to something recognizable.

**`Memberof`**

kiDataClass

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:819](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L819)

___

### aggregateByKeys

▸ **aggregateByKeys**(`groupingKeys`, `keysToKeep`, `keysToAggregateBy`, `shardKey?`): [`kiDataClass`](dataManipulator.kiDataClass.md)

aggregates data: aggregates data by a set of (nesting) keys.  keysToAggregate currently requires integers- it'll concat strings though, if that's what you want.
I need to get rid of shardKey and slightly refactor the kiHLA stuff that tocars that.  :)

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupingKeys` | `string`[] | `undefined` |
| `keysToKeep` | `string`[] | `undefined` |
| `keysToAggregateBy` | `any` | `undefined` |
| `shardKey?` | `string` | `null` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:424](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L424)

___

### breakdownAnalysis

▸ **breakdownAnalysis**(`keysToKeep`, `breakdownKeys`, `breakdownKeyName`, `keepOneIfZeroes?`): [`kiDataClass`](dataManipulator.kiDataClass.md)

This is a VERY destructive method- it's designed to replace a set of very over-burdened pivot tables 
doing something that was a little too difficult to figure out how to do earlier.  Will remove ALL not-whitelisted keys.  
Also removes all keys where the value is "" or undefined or null, 
Optionally remove any that equal zero as well or only creates one entry for it.
Also creates a key named by the argument ``breakdownKey`` that has the value for which key the thing was made.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keysToKeep` | `string`[] | `undefined` |
| `breakdownKeys` | `string`[] | `undefined` |
| `breakdownKeyName` | `string` | `undefined` |
| `keepOneIfZeroes` | `boolean` | `true` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:646](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L646)

___

### bulkAppendObject

▸ **bulkAppendObject**(`pairsToAdd`): [`kiDataClass`](dataManipulator.kiDataClass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairsToAdd` | `kiDataEntry` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:314](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L314)

___

### calculateCombinedName

▸ **calculateCombinedName**(): [`kiDataClass`](dataManipulator.kiDataClass.md)

Calculates a combined name string for use in places where you don't need to do further processing via names and want something that takes up less screen space.
There's not a very generalizable version of this- it's quite specific- BUT given its frequent use, it would be nonsensical to not include it.
Requires the keys listed in internal_config.combinedNameKeys
Originally designed for the printable portion of the TMM report, now used in several.
creates a key with the name ``combinedNames`` of type string
Uses the following keys:

**`Memberof`**

kiDataClass

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:897](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L897)

___

### calculatePercentage

▸ **calculatePercentage**(`numeratorKey`, `denominatorKey`, `newKeyName`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Generalized version of calculateRR

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `numeratorKey` | `string` |
| `denominatorKey` | `string` |
| `newKeyName` | `any` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:856](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L856)

___

### createSumOfKeys

▸ **createSumOfKeys**(`listOfKeys`, `newKeyName`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Generalization of what was sumFacebookReferrals

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `listOfKeys` | `string`[] |
| `newKeyName` | `string` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:685](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L685)

___

### getDataFromKey

▸ **getDataFromKey**(`targetKey`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetKey` | `string` |

#### Returns

`any`[]

#### Defined in

[dataManipulator.ts:234](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L234)

___

### getStats

▸ **getStats**(`key1`, `prependKeyToStatName?`): [`statEntry`](../interfaces/dataManipulator.statEntry.md)

returns a bunch of stats for a given dataset key.  needs to have numbers.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key1` | `string` | `undefined` |
| `prependKeyToStatName` | `boolean` | `false` |

#### Returns

[`statEntry`](../interfaces/dataManipulator.statEntry.md)

#### Defined in

[dataManipulator.ts:328](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L328)

___

### getThisWeeksData

▸ **getThisWeeksData**(): [`kiDataClass`](dataManipulator.kiDataClass.md)

Removes everything before the current week, starting late Saturday (getting the correct day programmatically was hard, okay?)
Uses removeBeforeDate under the hood.

**`Memberof`**

kiDataClass

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:927](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L927)

___

### getUniqueEntries

▸ **getUniqueEntries**(`targetKey`): `sheetDataValueRaw`

returns all unique values for a key in the dataset.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetKey` | `any` |

#### Returns

`sheetDataValueRaw`

{any[]}

#### Defined in

[dataManipulator.ts:253](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L253)

___

### groupByKey

▸ **groupByKey**(`targetKey`): [`keyedKiDataEntries`](../interfaces/dataManipulator.keyedKiDataEntries.md)

Generalized version of groupByKey, but instead of time, it groups by variations on any given key.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetKey` | `string` |

#### Returns

[`keyedKiDataEntries`](../interfaces/dataManipulator.keyedKiDataEntries.md)

{manyKiDataEntries}

#### Defined in

[dataManipulator.ts:505](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L505)

___

### groupByTime

▸ **groupByTime**(`timeSeriesKey`, `granularity`): [`manyKiDataEntries`](../interfaces/dataManipulator.manyKiDataEntries.md)

groupByTime: first thing written specifixally for time-series data: this splits a sheetData into an object of sheetDatas organized by timestamp.
 requires a key that has time-series data stored on it and a granularity.
 This is the kind of thing that's a bit of a pain to use Sheets QUERY functions for.
 Originally written to aggregate the debug log's stuff into by-hour chunks, but this might be useful for other stuff, which is why it's getting generalized.
 returns an object of kiDataEntry[] arrays keyed by timestamp.

**`Memberof`**

SheetData

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeSeriesKey` | `string` |
| `granularity` | `timeGranularities` |

#### Returns

[`manyKiDataEntries`](../interfaces/dataManipulator.manyKiDataEntries.md)

{manySheetDatas}

#### Defined in

[dataManipulator.ts:588](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L588)

___

### groupDataByMultipleKeys

▸ **groupDataByMultipleKeys**(`groupingKeys`): [`groupedData`](../interfaces/dataManipulator.groupedData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupingKeys` | `string`[] |

#### Returns

[`groupedData`](../interfaces/dataManipulator.groupedData.md)

#### Defined in

[dataManipulator.ts:402](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L402)

___

### innerJoin

▸ **innerJoin**(`secondDataset`, `joinKey`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Inner join: keeps data from this.data only when ithas a match in the second given dataset.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondDataset` | `kiDataEntry`[] |
| `joinKey` | `string` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:180](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L180)

___

### keepMatchingByKey

▸ **keepMatchingByKey**(`key`, `matchArray`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Removes everything where the value of a specified key does not match values stored in an array of strings or a string.
Designed for the report generator, to get rid of kiData that it doesn't want.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `matchArray` | `string`[] |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:767](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L767)

___

### leftJoin

▸ **leftJoin**(`secondDataset`, `joinKey`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Left-Join: returns all data in this.data and joins based on a single key in a second dataset.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondDataset` | `kiDataEntry`[] |
| `joinKey` | `string` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:210](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L210)

___

### mathByConstant

▸ **mathByConstant**(`operator`, `newKey`, `key1`, `constant`): [`kiDataClass`](dataManipulator.kiDataClass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `dMath` |
| `newKey` | `string` |
| `key1` | `string` |
| `constant` | `number` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:392](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L392)

___

### mathByKey

▸ **mathByKey**(`operator`, `newKey`, `key1`, `key2`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Does mathematical operations on a dateset.  Arg1 is the numerator / base for division / exponents. newKey can overlap with a key if you really want it to.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `dMath` |
| `newKey` | `string` |
| `key1` | `string` |
| `key2` | `string` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:383](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L383)

___

### removeBeforeDate

▸ **removeBeforeDate**(`date`): [`kiDataClass`](dataManipulator.kiDataClass.md)

removes everything before a specified date.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:793](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L793)

___

### removeDuplicates

▸ **removeDuplicates**(): [`kiDataClass`](dataManipulator.kiDataClass.md)

Removes all entries where isDuplicate == true

**`Memberof`**

kiDataClass

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:837](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L837)

___

### removeMatchingByKey

▸ **removeMatchingByKey**(`key`, `matchArray`): [`kiDataClass`](dataManipulator.kiDataClass.md)

inverse complement of keepMatchingByKey

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `matchArray` | `kiDataEntry`[] |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

#### Defined in

[dataManipulator.ts:740](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L740)

___

### removeSmaller

▸ **removeSmaller**(`key`, `testVal`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Removes anything smaller than a test value.

**`Memberof`**

kiDataClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `testVal` | `number` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:290](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L290)

___

### rightJoin

▸ **rightJoin**(`secondDataset`, `joinKey`): [`kiDataClass`](dataManipulator.kiDataClass.md)

Right join: merges matching data from the current dataset in with the second one, and keeps other values from the second dataset too.

**`Memberof`**

kiDataCLass

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondDataset` | `kiDataEntry`[] |
| `joinKey` | `string` |

#### Returns

[`kiDataClass`](dataManipulator.kiDataClass.md)

{this}

#### Defined in

[dataManipulator.ts:149](https://github.com/texas-mcallen-mission/sheetCore/blob/d3b7c37/dataManipulator.ts#L149)
