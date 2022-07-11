/**
 * Synaps IndividualLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DocumentTypeEnum
 */
export enum DocumentTypeEnum {
  PASSPORT = 'PASSPORT',
  NATIONALID = 'NATIONAL_ID',
  DRIVERLICENSE = 'DRIVER_LICENSE',
  RESIDENTPERMIT = 'RESIDENT_PERMIT',
}

/**
 * Schema for DocumentTypeEnum
 */
export const documentTypeEnumSchema: Schema<DocumentTypeEnum> = stringEnum(DocumentTypeEnum);
