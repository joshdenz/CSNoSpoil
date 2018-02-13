# CSNoSpoil

CSNoSpoil is a WebExtension that hides the scores displayed on the hltv.org Results, and Match pages.

This extension is not affiliated with hltv.org in any way.

Results page example:
<p align="left">
<img src="https://user-images.githubusercontent.com/5851874/36132437-4ffca006-1045-11e8-9d07-d9f04e992e28.png"/>
</p>

Match page example:
<p align="left">
<img src="https://user-images.githubusercontent.com/5851874/36132441-52238b24-1045-11e8-8d2f-29bad6cd34bc.png"/>
</p>

#### Note
There is a slight delay before the scores are hidden. Open to suggestions on that :).

## Installation

For now, until (if ever) it is approved, you will have to install the extension via the Load Temporary Add-on function on the about:debugging page.

Clone the repo and then:
```
npm install
```
Then from the about:debugging page in Firefox, use the Load Temporary Add-on button and select the projects manifest.json file.

## Effects

This extension replaces the individual team scores with dashes ('-').

Additionally, the results under each map in the matches page are removed.

## Uninstallation

Click the remove button in the about:debugging page. 

## License

Copyright 2018 Joshua Denzau

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.