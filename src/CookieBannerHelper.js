import { Cookies } from "react-cookie";

/**
 * Is consent already set
 * @returns True if consent was already set
 */
export const isCookieConsentSet = () => {
  return new Cookies().get("rcl_consent_given");
};
