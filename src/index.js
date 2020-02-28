import React from "react";
import { CookieBanner, isCookieConsentSet } from "./components/CookieBanner";
import { isServer } from "./helpers";

const CookieBannerUniversal = props =>
  isServer() ? null : <CookieBanner {...props} />;

export { CookieBannerUniversal as CookieBanner };
export { isCookieConsentSet as CookieBannerConsentSet };
