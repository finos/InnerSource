---
id: get-involved
title: Get Involved
---

## Quick start

- [Sign up to the mailing list](#mailing-list) to stay up to date
- Explore our [curated list of InnerSource resources](docs/resources.md)
- Join an [upcoming SIG meeting](#sig-meetings) (or read the minutes from
  previous ones)
- Consider [contributing](#contributing)

## Mailing List

All SIG related communications are conducted through the innersource@finos.org
mailing list. Email innersource@finos.org with questions or suggestions for
collaboration use cases. Join the mailing list and stay up to date by sending a
note to innersource+subscribe@finos.org.

## SIG Meetings

SIG meetings are monthly, and are announced via the
[mailing list](#mailing-list). The agenda and minutes are captured as GitHub
issues on [the SIG GitHub repo](https://github.com/finos/innersource). This is a
great place to find the details of
[upcoming](https://github.com/finos/InnerSource/issues?q=is%3Aopen+is%3Aissue+label%3Ameeting)
and
[historic](https://github.com/finos/InnerSource/issues?q=is%3Aclosed+is%3Aissue+label%3Ameeting)
meetings.

## Contributing

1. [Fork the GitHub repo](https://github.com/finos/innersource/fork)
1. Create your feature branch (git checkout -b feature/fooBar)
1. Read our
   [contribution guidelines](https://github.com/finos/InnerSource/blob/master/CONTRIBUTING.md)
   and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
1. Make your changes on the fork. Ensure any documentation and code changes are
   formatted correctly by executing `npm run fmt` (see below for setup
   instructions). If `npm run fmt` isn't executed, the build will fail.
1. Commit your changes (git commit -am 'Add some fooBar')
1. Push to the branch (git push origin feature/fooBar)
1. Create a new Pull Request

_NOTE:_ Commits and pull requests to FINOS repositories will only be accepted
from those contributors with an active, executed Individual Contributor License
Agreement (ICLA) with FINOS OR who are covered under an existing and active
Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits
from individuals not covered under an ICLA or CCLA will be flagged and blocked
by the FINOS Clabot tool. Please note that some CCLAs require
individuals/employees to be explicitly named on the CCLA.

Need an ICLA? Unsure if you are covered under an existing CCLA? Email
help@finos.org

### Workstation Setup

To ensure a smooth contributing experience, please ensure you follow the
workstation setup. This project makes use of [Prettier](https://prettier.io/) to
format all Markdown documentation to ensure consistency across the whole
repository. Prettier is built on [Node.js](https://nodejs.org/), which will need
to be installed. To ensure your document changes are formatted correctly, follow
these steps:

1. Install the latest LTS Node.js either by
   [downloading an installer](https://nodejs.org/en/download/), using a package
   manager like Homebrew (`brew install node@16` as of this writing), or a
   version manager like [`nvm`](https://github.com/nvm-sh/nvm) or
   [`asdf`](https://github.com/asdf-vm/asdf).
1. `npm install` - NPM now ships with every Node.js installation.
1. `npm run fmt` - this executes the formatting script.
