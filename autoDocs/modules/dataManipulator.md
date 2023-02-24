[sheetcore](../docs.md) / dataManipulator

# Module: dataManipulator

## Table of contents

### Enumerations

- [sortTypes](../enums/dataManipulator.sortTypes.md)

### Classes

- [kiDataClass](../classes/dataManipulator.kiDataClass.md)
- [mathEngineClass](../classes/dataManipulator.mathEngineClass.md)

### Interfaces

- [groupedData](../interfaces/dataManipulator.groupedData.md)
- [keyedKiDataEntries](../interfaces/dataManipulator.keyedKiDataEntries.md)
- [manyKiDataClasses](../interfaces/dataManipulator.manyKiDataClasses.md)
- [manyKiDataEntries](../interfaces/dataManipulator.manyKiDataEntries.md)
- [sortArgs](../interfaces/dataManipulator.sortArgs.md)
- [statEntry](../interfaces/dataManipulator.statEntry.md)

### Functions

- [appendArrayToObject\_](dataManipulator.md#appendarraytoobject_)
- [convertToSheetDate\_](dataManipulator.md#converttosheetdate_)
- [getSundayOfCurrentWeek](dataManipulator.md#getsundayofcurrentweek)
- [getSundayOfCurrentWeek\_](dataManipulator.md#getsundayofcurrentweek_)
- [splitKiData](dataManipulator.md#splitkidata)

## Functions

### appendArrayToObject\_

▸ **appendArrayToObject_**(`keySet`, `targetObj`, `kiDataEntry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySet` | `string`[] |
| `targetObj` | `any` |
| `kiDataEntry` | [`kiDataEntry`](../interfaces/typescript_interfaces.kiDataEntry.md) |

#### Returns

`void`

#### Defined in

[dataManipulator.ts:77](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/dataManipulator.ts#L77)

___

### convertToSheetDate\_

▸ **convertToSheetDate_**(`input`): `string`

**`Description`**

Given a Date or string, convert to a mm/dd/yyyy hh:mm:ss string that Google Sheets appreciates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Date` |

#### Returns

`string`

#### Defined in

[dataManipulator.ts:105](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/dataManipulator.ts#L105)

___

### getSundayOfCurrentWeek

▸ **getSundayOfCurrentWeek**(): `Date`

#### Returns

`Date`

#### Defined in

[dataManipulator.ts:1183](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/dataManipulator.ts#L1183)

___

### getSundayOfCurrentWeek\_

▸ **getSundayOfCurrentWeek_**(): `Date`

Used by getThisWeeksData.

#### Returns

`Date`

{Date}

#### Defined in

[dataManipulator.ts:1170](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/dataManipulator.ts#L1170)

___

### splitKiData

▸ **splitKiData**(`kiDataObj`, `key`): [`manyKiDataClasses`](../interfaces/dataManipulator.manyKiDataClasses.md)

splits a kiDataCLass's data into little pieces by grouping by unique values on a specified key

#### Parameters

| Name | Type |
| :------ | :------ |
| `kiDataObj` | [`kiDataClass`](../classes/dataManipulator.kiDataClass.md) |
| `key` | `string` |

#### Returns

[`manyKiDataClasses`](../interfaces/dataManipulator.manyKiDataClasses.md)

{manyKiDataClasses}

#### Defined in

[dataManipulator.ts:40](https://github.com/texas-mcallen-mission/sheetCore/blob/adbb6f0/dataManipulator.ts#L40)
