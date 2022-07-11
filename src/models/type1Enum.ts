/**
 * Synaps IndividualLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type1Enum
 */
export enum Type1Enum {
  ELECTRICITYBILL = 'ELECTRICITY_BILL',
  GASBILL = 'GAS_BILL',
  LANDLINEBILL = 'LANDLINE_BILL',
  WATERBILL = 'WATER_BILL',
  INTERNETBILL = 'INTERNET_BILL',
  BANKSTATEMENT = 'BANK_STATEMENT',
}

/**
 * Schema for Type1Enum
 */
export const type1EnumSchema: Schema<Type1Enum> = stringEnum(Type1Enum);
