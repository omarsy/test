/**
 * Synaps IndividualLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  PhoneVerificationAttempt,
  phoneVerificationAttemptSchema,
} from './phoneVerificationAttempt';
import {
  PhoneVerificationCarrier,
  phoneVerificationCarrierSchema,
} from './phoneVerificationCarrier';
import { State1Enum, state1EnumSchema } from './state1Enum';

export interface PhoneVerificationResponse {
  /** country calling code */
  phoneCountry?: string;
  /** phone number */
  phoneNumber?: string;
  carrier?: PhoneVerificationCarrier;
  attempts?: PhoneVerificationAttempt[];
  /** Verification state */
  state?: State1Enum;
}

export const phoneVerificationResponseSchema: Schema<PhoneVerificationResponse> = object(
  {
    phoneCountry: ['phone_country', optional(string())],
    phoneNumber: ['phone_number', optional(string())],
    carrier: ['carrier', optional(lazy(() => phoneVerificationCarrierSchema))],
    attempts: [
      'attempts',
      optional(array(lazy(() => phoneVerificationAttemptSchema))),
    ],
    state: ['state', optional(state1EnumSchema)],
  }
);
