Who's Who
===============================
# Overview

This is a front-end React application that interfaces with [Spotify's API](https://developer.spotify.com/) in order to get genre's, artists, and **sample** songs. The user will then be able to listen to songs and guess which artist created it.

---

## Technical Guidance

##### The following will be an unorganized collection of technical information that could be helpful for this assessment.

When debugging or trying to solve problems within the `React` and `JavaScript` ecosystem, it will be helpful to include `react` or `javascript` in your google searches. For example, searching for `web playback javascript` gives me [`howler.js`](https://howlerjs.com/) which seems useful for playing audio. Learning how to *google well* is one of the most important skills to hone as a developer - especially when dealing with a quickly changing ecosystem.

When getting a `track` from Spotify's API, it gives you a `preview_url` which will be needed to play a **sample** for a given song.

To simplify authenticating with Spotify's API, a skeleton is given which calls a service in the cloud to get a `spotify_access_token`. An example request using this token is provided in the project.

`services/api.js` has been provided as a convenience wrapper around `fetch`

The code in the `services/api.js` file should not need modification. If you feel that you need to modify it, please speak with an instructor about it first.

URL encoding converts characters into a format that can be transmitted over the Internet. The url encoding for a 'space' character is '%20'.

This assessment is large and you should use your time wisely. UI design and styling should be your LAST priority. Get the majority of the functionality in the application built along with a basic minimal wireframe of your components. Once you've done that and it *works*, begin thinking about a minimal and clean UI. A business/product owner/stakeholder would much rather have something that doesn't look pretty, but works, than have something that looks great but doesn't do anything.
