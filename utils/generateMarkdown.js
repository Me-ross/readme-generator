// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache":
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "MIT":
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case "BSD3":
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case "Boost":
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case "Eclipse":
      badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case "GNUv3":
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case "Mozilla":
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case "Unlicense":
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
    }
    return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost":
      licenseLink = "https://opensource.org/licenses/BSL-1.0";
      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNUv3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Unlicense":
      licenseLink = "https://opensource.org/licenses/unlicense";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Visit: ${renderLicenseLink(license)} to get detailed information for this license.`
  } else {
    return ''
  }
}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data){
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contenets

- [Desription](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Video](#Video)
- [License](#License)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## 6. Video
You can see a video demonstration for this app [here](https://app.castify.com/view/662a9635-d4c9-4ba1-b040-c6e1c93a1d95)

## License
${data.license}:
${renderLicenseSection(data.license)}

## Questions
- I can be reached at ${data.email} with any additional questions.
- You can fined me [HERE](${data.github}) on GitHub

`;
}

module.exports = generateMarkdown;
