// Functions returns chosen license badge
function renderLicenseBadge(license) {
  if (license !== 'none') {
    const licenseSlug = license.replace(/ /g, '-').toLowerCase();
    return `![Github license](https://img.shields.io/npm/l/inquirer?logoColor=blueviolet&style=plastic)`;
  }
  return "";
}

// Function returns the license link
function renderLicenseLink(license){
  if (license !== 'none') {
    return `\n [License](#license)\n`
  }
  return "";
}
// Function returns the license section of README
function renderLicenseSection(license){
  if (license !== 'none') {
    return `## License
    
Licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  // Template literal that generates the Markdown for the README file
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.Usage}

## Contributors

${data.Contributors}

## Tests

${data.test}

## Questions

If you have any questions, you can contact the author at [${data.Email}](mailto:${data.Email}) or visit their GitHub profile: [${data.User}](https://github.com/${data.User}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
