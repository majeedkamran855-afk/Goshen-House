// Canonical form-tracking helper for Goshen House LLC.
// Wired to the connected sub-account via form_tracking integration.

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

export const TRACKING_IDS = {
  trackingId: "tk_bb50ca84e98443b38cac32134ae849da",
  locationId: "TdEziGIie7FNAE3vouMJ",
  projectId: "1787776747649822912",
};

export const CUSTOM_FIELD_IDS = {
  referralType: "zMq8sMD0Qvwp2UC1CHjO",
  targetMoveDate: "6DwEcCnV9UsCbSwdDEzi",
  incomeSource: "WXl2Zi2gOYORL0ie0z8V",
  monthlyIncome: "uv6iMmtxIBwD9ramdqOj",
  specialNeeds: "MWuaKvksdLuyVp98GKWi",
  referrerName: "epZd92cZWKJITTsll0q1",
  referrerAgency: "0O9pUoJv6gEekMdczdlI",
  referrerPhone: "WtcQ2KPMxhyYw3CoqRhH",
  referrerEmail: "zMDqWBMj1JnOwehQmf7n",
  ssnLast4: "l3Zi63LOjEPvvpHY7Wum",
  currentAddress: "nqcEVY9Ae2MW2qSB06gF",
  emergencyContactName: "AsACQs7jPYew6l5sFo9E",
  emergencyContactPhone: "xcD3vGFJuWDkSn5iL1IA",
  emergencyRelationship: "kFBuX1ZsCF1CILNHhE6p",
  residentIncomeSource: "MVXyeLv8ESBOuafJ4agG",
  residentMonthlyAmount: "Ieieis7GyEhdWoMKyUnv",
  hasParoleOfficer: "8endF9iOeUwfQZeeXv0W",
  poName: "4hgOEHPrv48WV4FX2zpq",
  poPhone: "hjSdQNaCMbWzrasdmDHH",
  agreedToRules: "qjPZdKTI6FLfuYc88cdP",
} as const;

export const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

export const buildBasePayload = (
  formId: string,
  formName: string,
  formData: Record<string, unknown>,
  formLabels: Record<string, string>,
) => ({
  type: "external_form_submission",
  timestamp: Date.now(),
  formId,
  formData,
  formLabels,
  url: window.location.href,
  title: document.title,
  path: window.location.pathname,
  userAgent: navigator.userAgent,
  trackingId: TRACKING_IDS.trackingId,
  locationId: TRACKING_IDS.locationId,
  projectId: TRACKING_IDS.projectId,
  sessionId: crypto.randomUUID(),
  properties: {
    deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop",
    source: "ai_studio",
    projectId: TRACKING_IDS.projectId,
    formName,
  },
});
