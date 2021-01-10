// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return "## License [!license](https:docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return "## License";
}

// TODO: Create a function to generate markdown for README
module.exports = (generateMarkdown) => {
  const { bagde, link, ...data } = generateMarkdown;
  return `# ${data.title}
  
  ${renderLicenseSection(badge)}
  ${renderLicenseLink(link)}
  ![GitHub License](https://img.shields.io/badge/License-${
    data.license
  }-blue.svg)
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installCmd}
  \`\`\`
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.testCmd}
  \`\`\`
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.username}](https://github.com/${
    data.username
  }/).
  `;
};
