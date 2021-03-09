// @flow
// @ts-nocheck

declare type FormApprovalFlowStep = {
  type: 'SINGLE',
  username: string,
  label: string,
}
declare type NewFormApprovalFlow = {
  formId: number,
  steps: FormApprovalFlowStep[],
}
declare type FormApprovalFlow = NewFormApprovalFlow & {
  createdAt: string,
  updatedAt: string,
}

declare type NewFormApprovalFlowInstance = NewFormApprovalFlow & {
  submissionId: string,
  approvalsFormsAppId: number,
  previousFormSubmissionApprovalId?: string,
}
declare type FormApprovalFlowInstance = NewFormApprovalFlowInstance & {
  id: number,
  createdAt: string,
}

type BaseFormSubmissionApproval = {
  username: string,
  notificationEmailAddress?: string,
  formApprovalFlowInstanceId: number,
  stepLabel: string,
}

declare type NewFormSubmissionApproval = BaseFormSubmissionApproval & {
  status: 'PENDING',
}

declare type FormSubmissionApproval = BaseFormSubmissionApproval & {
  id: string,
  notes?: string,
  internalNotes?: string,
  status: 'PENDING' | 'APPROVED' | 'CLARIFICATION_REQUIRED' | 'CLOSED',
  createdAt: string,
  updatedAt: string,
}
