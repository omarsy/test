/**
 * Synaps IndividualLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  DocumentType1Enum,
  documentType1EnumSchema,
} from '../models/documentType1Enum';
import {
  ResidencyVerificationResponse,
  residencyVerificationResponseSchema,
} from '../models/residencyVerificationResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ProofOfResidencyController extends BaseController {
  /**
   * Send a residency document to verification
   *
   * @param clientId               Client id
   * @param stepId                 Step Id of the current identity step you want to submit
   * @param sessionId              Initialised Session-Id
   * @param document               must be a valid file (image/jpg, image/jpeg, image/png,
   *                                                    application/pdf) max 4MB
   * @param address                Full postal address
   * @param city                   City of residence
   * @param documentType
   * @param country                Country of document in alpha 3 code (ISO-3166) (e.g. for
   *                                                    France send FRA as country value
   * @param hostIdBackDocument     Back Host ID document (image/jpg, image/jpeg, image/png)
   * @param hostIdFrontDocument    Front Host ID document (image/jpg, image/jpeg, image/png)
   * @param accomodationProof      Must be a valid file (application/pdf) max 4MB
   * @param zipCode
   * @return Response from the API call
   */
  async residencySubmitPOST(
    clientId: string,
    stepId: string,
    sessionId: string,
    document: FileWrapper,
    address: string,
    city: string,
    documentType: DocumentType1Enum,
    country: string,
    hostIdBackDocument?: FileWrapper,
    hostIdFrontDocument?: FileWrapper,
    accomodationProof?: FileWrapper,
    zipCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/residency/submit');
    const mapped = req.prepareArgs({
      clientId: [clientId, string()],
      stepId: [stepId, string()],
      sessionId: [sessionId, string()],
      address: [address, string()],
      city: [city, string()],
      documentType: [documentType, documentType1EnumSchema],
      country: [country, string()],
      zipCode: [zipCode, optional(string())],
    });
    req.header('Client-Id', mapped.clientId);
    req.header('Session-Id', mapped.sessionId);
    req.query('step_id', mapped.stepId);
    req.formData({
      document: document,
      address: mapped.address,
      city: mapped.city,
      document_type: mapped.documentType,
      country: mapped.country,
      host_id_back_document: hostIdBackDocument,
      host_id_front_document: hostIdFrontDocument,
      accomodation_proof: accomodationProof,
      zip_code: mapped.zipCode,
    });
    req.throwOn(400, ApiError, 'Invalid Api Key');
    return req.call(requestOptions);
  }

  /**
   * All information about identity verification details
   *
   * @param clientId   Client id
   * @param stepId     Step Id of the current identity step you want to submit
   * @param sessionId  Initialised Session-Id
   * @return Response from the API call
   */
  async residencyDetailsGET(
    clientId: string,
    stepId: string,
    sessionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResidencyVerificationResponse>> {
    const req = this.createRequest('GET', '/residency/details');
    const mapped = req.prepareArgs({
      clientId: [clientId, string()],
      stepId: [stepId, string()],
      sessionId: [sessionId, string()],
    });
    req.header('Client-Id', mapped.clientId);
    req.header('Session-Id', mapped.sessionId);
    req.query('step_id', mapped.stepId);
    req.throwOn(400, ApiError, 'Invalid Api Key');
    return req.callAsJson(residencyVerificationResponseSchema, requestOptions);
  }
}
