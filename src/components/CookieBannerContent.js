import React from "react";
import CookieOption from "./CookieOption";
import bannerStyle from "./bannerStyle";

export default (props = {}) => {
  const {
    styles = {},
    className = "",
    message = "No text",
    policyLink = "/#",
    privacyPolicyLinkText = "Privacy Policy",
    necessaryOptionText = "Necessary",
    preferencesOptionText = "Preferences",
    statisticsOptionText = "Statistics",
    marketingOptionText = "Marketing",
    showDeclineButton = false,
    acceptButtonText = "Accept",
    acceptAllButtonText = "Accept All",
    declineButtonText = "Decline",
    showPreferencesOption = true,
    showStatisticsOption = true,
    showMarketingOption = true,
    onTogglePreferencesCookies = Function,
    onToggleStatisticsCookies = Function,
    onToggleMarketingCookies = Function,
    onDecline = Function,
    onConfirm = Function,
    onConfirmAll = Function
  } = props;

  const {
    dialog: dialogStyle,
    container: containerStyle,
    message: messageStyle,
    policy: policyStyle,
    selectPane: selectPaneStyle,
    optionWrapper: optionWrapperStyle,
    optionLabel: optionLabelStyle,
    checkbox: checkboxStyle,
    buttonWrapper: buttonWrapperStyle,
    button: buttonStyle
  } = { ...bannerStyle, ...styles };

  const cookieOptionStyle = {
    optionWrapperStyle,
    optionLabelStyle,
    checkboxStyle
  };

  const btn = 'btn';
  const btnPrimary = 'btn btn-primary';
  const btnOutlineSecondary = 'btn btn-outline-secondary';

  return (
      <div className={`react-cookie-law-dialog ${className}`} style={dialogStyle}>
        <div className="react-cookie-law-container" style={containerStyle}>
          <div className="react-cookie-law-msg" style={messageStyle}>
            {message}
          </div>

          <div className="react-cookie-law-select-pane" style={selectPaneStyle}>
            <CookieOption
              id="check-required-cookies"
              text={necessaryOptionText}
              styles={cookieOptionStyle}
              disabled
              checked
            />

            {showPreferencesOption && (
              <CookieOption
                id="check-preferences-cookies"
                text={preferencesOptionText}
                styles={cookieOptionStyle}
                onChange={onTogglePreferencesCookies}
                checked
              />
            )}

            {showStatisticsOption && (
              <CookieOption
                id="check-statistics-cookies"
                text={statisticsOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleStatisticsCookies}
                checked
              />
            )}

            {showMarketingOption && (
              <CookieOption
                id="check-marketing-cookies"
                text={marketingOptionText}
                styles={cookieOptionStyle}
                onChange={onToggleMarketingCookies}
              />
            )}
          </div>

          <a
            href={policyLink}
            target="_blank"
            className="react-cookie-law-policy"
            style={policyStyle}
          >
            {privacyPolicyLinkText}
          </a>

          <div
            className="react-cookie-law-button-wrapper"
            style={buttonWrapperStyle}
          >
            {showDeclineButton && (
              <button
                type="button"
                className={`react-cookie-law-decline-btn ${btn}`}
                style={buttonStyle}
                onClick={() => onDecline()}
              >
                <span>{declineButtonText}</span>
              </button>
            )}

            <button
              type="button"
              className={`react-cookie-law-accept-btn ${btnOutlineSecondary}`}
              onClick={() => onConfirm()}
            >
              <span>{acceptButtonText}</span>
            </button>

            <button
                type="button"
                className={`react-cookie-law-accept-all-btn ${btnPrimary}`}
                onClick={() => onConfirmAll()}
            >
              <span>{acceptAllButtonText}</span>
            </button>
          </div>
        </div>
      </div>
  );
};
