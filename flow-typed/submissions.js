// @flow

declare type NewDraftSubmission = {
  submission: {
    +[key: string]: mixed,
  },
  definition: Form,
}

declare type NewFormSubmission = NewDraftSubmission & {
  captchaTokens: string[],
}

declare type DraftSubmission = NewDraftSubmission & {
  formsAppId: number,
  keyId?: string,
}

declare type FormSubmission = DraftSubmission &
  NewFormSubmission & {
    draftId: string | null,
    jobId: string | null,
    externalId: string | null,
    preFillFormDataId: string | null,
  }

declare type FormSubmissionResult = FormSubmission & {
  submissionId: string | null,
  submissionTimestamp: string | null,
  payment: {
    hostedFormUrl: string,
    submissionEvent: PaymentSubmissionEvent,
  } | null,
  isInPendingQueue: boolean,
  isOffline: boolean,
}

declare type PendingFormSubmissionResult = FormSubmission & {
  pendingTimestamp: string,
  isSubmitting?: boolean,
  error?: string,
}

declare type NewFormsAppDraft = {
  title: string,
  formId: number,
  externalId: ?string,
  jobId: ?string,
}

declare type FormsAppDraft = NewFormsAppDraft & {
  draftId: string,
  draftDataId?: string,
  updatedAt: string,
}

declare type FormsAppDrafts = {
  drafts: FormsAppDraft[],
  createdAt?: string,
  updatedAt?: string,
}

declare type FormsAppJob = {
  id: string,
  username: string,
  formId: number,
  draft?: FormsAppDraft,
  updatedAt: string,
  isSubmitted: boolean,
  externalId?: string,
  preFillFormDataId?: string,
  createdAt: string,
  details: {
    title: string,
    key?: string,
    description?: string,
    type?: string,
    priority?: number,
  },
}

declare type JobSearchParameters = {
  jobId?: string,
  formIds?: number[],
  username?: string,
  externalId?: string,
  isSubmitted?: boolean,
  limit?: number,
  offset: number,
}

declare type S3UploadCredentials = {
  submissionId: string,
  submissionTimestamp: string,
  credentials: {
    AccessKeyId: string,
    SecretAccessKey: string,
    SessionToken: string,
  },
  s3: {
    region: string,
    bucket: string,
    key: string,
  },
}

declare type FormSubmissionMeta = {
  submissionId: string,
  formId: number,
  formsAppId: number,
  dateTimeSubmitted: string,
  formName?: string,
  user?: {
    userId: string,
    firstName?: string,
    picture?: string,
    providerUserId?: string,
    providerType?: string,
    fullName?: string,
    lastName?: string,
    email?: string,
  },
  key?: {
    id: string,
    name: string,
  },
}

declare type FormSubmissionRequest = {
  submissionId: string,
  recaptchas: Array<{
    token: string,
  }>,
}

declare type S3SubmissionData = {
  submission: {
    [name: string]: any,
  },
  definition: Form,
  submissionTimestamp: string,
}

declare type GeneratePaymentConfigPayload = {
  submissionId: string,
  amount: number,
  redirectUrl: string,
}

declare type CPPayHostedForm = {
  id: number,
  amount: number,
  orderNumber: string,
  redirectUri: string,
  postbackUri: string,
  firstName: ?string,
  lastName: ?string,
  email: string,
  paymentType: number,
  savePaymentMethod: boolean,
  token: string,
  transactionId: string,
  paymentGatewayAccountId: number,
}

declare type CPPayPreparedRequest = {
  token: string,
  baseUrl: string,
  user: JWTPayload,
}

declare type BpointPreparedRequest = {
  environment: IntegrationBPOINTEnvironment,
  user: JWTPayload,
}

declare type BpointCreds = {
  Username: string,
  Password: string,
  MerchantNumber: string,
}