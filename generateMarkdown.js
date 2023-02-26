function generateMarkdown(data) {
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
- [License](#license)

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

## License

This project is licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
