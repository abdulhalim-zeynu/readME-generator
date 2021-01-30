// function to generate markdown for README
function generateMarkdown(data) {
  const username = data.username;
  const email = data.email;
  const title = data.title;
  const description = data.desc;
  const license = data.license
  const installation = data.install
  const testing = data.test;
  const usage = data.usage;
  const contributing = data.contributing;
  const tableOfContents = "- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n"

  let markdown = `# ${title}
  
## Description

${description}

## Table of Contents

${tableOfContents}

## Installation

\`\`\`
${installation}
\`\`\`

## Usage

${usage}
  
`

  if(license != "None") {
    markdown += `## License
    
This project is licensed under the ${license} license.
    
`
    markdown = markdown.replace(`# ${title}`, `# ${title}

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`)
  }

  markdown += `## Contributing
${contributing}

## Tests

\`\`\`
${testing}
\`\`\`

## Questions

You can reach out to me at [${email}](mailto:${email}). Find more of my work at [${username}](https://github.com/${username})
  
`;
  return markdown
}

module.exports = generateMarkdown;
