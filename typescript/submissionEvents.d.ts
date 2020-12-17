import type { NoU } from './misc'

export type FormSubmissionEventType =
  | 'CALLBACK'
  | 'PDF'
  | 'ONEBLINK_API'
  | 'TRIM'
  | 'CP_PAY'
  | 'BPOINT'
  | 'CP_HCMS'

export interface ConditionalPredicateBase {
  elementId: string
}

export type ConditionalPredicateNumeric = ConditionalPredicateBase & {
  type: 'NUMERIC'
  operator: '===' | '!==' | '>' | '>=' | '<' | '<='
  value: number
}

export type ConditionalPredicateOptions = ConditionalPredicateBase & {
  type: 'OPTIONS'
  optionIds: string[]
}
export type ConditionalPredicate =
  | ConditionalPredicateNumeric
  | ConditionalPredicateOptions

export interface FormSubmissionEventConditional {
  conditionallyExecute?: boolean
  requiresAllConditionallyExecutePredicates?: boolean
  conditionallyExecutePredicates?: ConditionalPredicate[]
}

export type CallbackSubmissionEvent = FormSubmissionEventConditional & {
  type: 'CALLBACK'
  configuration: {
    url: string
    secret?: string
  }
  isDraft: boolean
}

export type PdfSubmissionEvent = FormSubmissionEventConditional & {
  type: 'PDF'
  configuration: {
    email: string
    emailSubjectLine: NoU | string
    pdfFileName: NoU | string
    includeSubmissionIdInPdf?: boolean
  }
  isDraft: boolean
}

export interface OneBlinkAPISubmissionEventConfiguration {
  apiId: string
  apiEnvironment: string
  apiEnvironmentRoute: string
  secret?: string
}

export type OneBlinkAPISubmissionEvent = FormSubmissionEventConditional & {
  type: 'ONEBLINK_API'
  configuration: OneBlinkAPISubmissionEventConfiguration
  isDraft: boolean
}

export type TrimSubmissionEvent = FormSubmissionEventConditional & {
  type: 'TRIM'
  configuration: {
    environmentId: string
    recordTitle: string | undefined
    container: {
      uri: number
      label: string
    }
    recordType: {
      uri: number
      label: string
    }
    actionDefinition: {
      uri: number
      label: string
    }
    location: {
      uri: number
      label: string
    }
    includeSubmissionIdInPdf?: boolean
  }
  isDraft: boolean
}

export type CPHCMSSubmissionEvent = FormSubmissionEventConditional & {
  type: 'CP_HCMS'
  configuration: {
    contentTypeName: string
    encryptedElementIds: NoU | string[]
  }
  isDraft: boolean
}

export interface CPPaySubmissionEvent {
  type: 'CP_PAY'
  configuration: {
    elementId: string
    gatewayId: string
  }
  isDraft: boolean
}

export interface BPOINTSubmissionEvent {
  type: 'BPOINT'
  configuration: {
    elementId: string
    environmentId: string
    crn2?: string
    crn3?: string
  }
  isDraft: boolean
}

export type FormSubmissionEvent =
  | CallbackSubmissionEvent
  | PdfSubmissionEvent
  | OneBlinkAPISubmissionEvent
  | TrimSubmissionEvent
  | CPHCMSSubmissionEvent
  | CPPaySubmissionEvent
  | BPOINTSubmissionEvent

export type PaymentSubmissionEvent =
  | CPPaySubmissionEvent
  | BPOINTSubmissionEvent

export type WebhookSubmissionEventPayload = {
  formId: number
  submissionId: string
  isDraft: boolean
  submissionTimestamp: string
  jobId?: string
  externalId?: string
  userToken?: string
  username?: string
  secret?: string
}
