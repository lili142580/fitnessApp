export const APP_NAME = '\u5999\u5999\u5c4b'

// Apply branding before interpolating user content; keep URLs and backup paths intact.
export const brandText = text => text.replace(/(^|[^\w/])openGym\b/g, (_, prefix) => prefix + APP_NAME)
