# Website Fader Chrome Extension

This Chrome extension allows you to specify websites that will gradually fade to white as you scroll down the page. You can configure the scroll count threshold and the websites on which the effect is active.

## Installation

1.  **Download the extension files:** Clone or download this repository to your local machine.
2.  **Open Chrome Extensions:** Open Google Chrome and navigate to `chrome://extensions`.
3.  **Enable Developer Mode:** In the top right corner of the Extensions page, toggle the "Developer mode" switch to on.
4.  **Load Unpacked:** Click the "Load unpacked" button that appears on the left side of the page.
5.  **Select the Extension Folder:** In the file dialog, select the folder where you downloaded the extension files.

The Website Fader extension should now be installed and visible in your list of extensions.

## How to Use

1.  **Open the Options Page:** Click on the Website Fader extension icon in your Chrome toolbar. In the popup that appears, click the "Go to Options" button.
2.  **Configure the Settings:**
    *   **Scroll Count Threshold:** Set the number of times you want to be able to scroll before the website starts to fade.
    *   **Websites:** Enter the websites you want the extension to be active on, with each website on a new line (e.g., `reddit.com`, `x.com`).
3.  **Save Your Settings:** Click the "Save" button.
4.  **Browse:** Navigate to one of the websites you specified. As you scroll, the page will gradually fade to white.

## Functionality

*   **Configurable Scroll Count:** You can decide how many scrolls it takes before the fading effect begins.
*   **Website Whitelist:** The extension will only run on the websites you specify in the options.
*   **Gradual Fade-out:** The website content will slowly become more transparent with each scroll after the threshold is reached, eventually disappearing completely.
*   **Simple UI:** A clean and simple options page makes it easy to configure the extension to your liking.

## Changelog

### Version 1.2

*   **SPA Navigation Fix:** The fading effect now resets automatically when navigating within a single-page application, preventing the fade from persisting across different views.

### Version 1.1

*   **Configurable Fading Speed:** You can now control how quickly the website fades out after the scroll threshold is met.
*   **Reverse Fading:** Added an option to reverse the fading effect when you scroll back up the page.