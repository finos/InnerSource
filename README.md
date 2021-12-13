<img src="https://github.com/finos/branding/blob/master/sig-logos/innersource-sig/Horizontal/2020_InnerSourceSIG_Horizontal.png" width="600">

# FINOS InnerSource Special Interest Group

InnerSource can help break down silos, encourage internal collaboration and
innovation, accelerate new engineer on-boarding, and identify opportunities to
contribute software back to the open source world.

## Introducing the InnerSource SIG

The FINOS InnerSource
[Special Interest Group](https://github.com/finos/community/tree/master/governance#special-interest-groups)
is a community of people implementing, or interested in implementing,
InnerSource within their financial services organization.

The InnerSource SIG is of particular importance to financial services
organisations who wish to accelerate their InnerSource practices, share best
practices, patterns and anti-patterns and potentially related code (e.g. for
InnerSource tooling) in a secure environment, with the aim of contributing
proven methods to FINOS and the wider InnerSource Commons community.

Where appropriate, the InnerSource SIG will also work with
[InnerSource Commons](http://www.innersourcecommons.org) to share relevant
outputs upstream to the broader InnerSource community.

Discussions have an emphasis on challenges and concerns that are particular to
FS organizations (e.g. relating to compliance or regulatory constraints).

The InnerSource SIG target audience are individuals responsible for InnerSource
implementation within financial services organizations, those in Open Source
Program Offices interested in open source culture, behaviour and skills, or tech
leaders wishing to increase collaboration and remove / deal with excessive
ownership issues that can stall innovation.

## InnerSource SIG Leadership

| Name           | Firm                | Role                     |
| :------------- | :------------------ | :----------------------- |
| Arthur Maltson | Capital One         | SIG Co-Lead              |
| Clare Dillon   | InnerSource Commons | SIG Secretary            |
| Aaron Searle   | Morgan Stanley      | SIG Leadership Committee |
| Anthony Vacca  | RBC                 | SIG Leadership Committee |
| Danese Cooper  | InnerSource Commons | SIG Leadership Committee |

## Mailing List

All SIG related communications are conducted through the innersource@finos.org
mailing list. Email innersource@finos.org with questions or suggestions for
collaboration use cases. Join the mailing list and stay up to date by sending a
note to innersource+subscribe@finos.org.

## Contributing

1. Fork it (https://github.com/finos/innersource/fork)
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

## License

Copyright 2021 Fintech Open Source Foundation

FINOS InnerSource SIG written materials are licensed under
[CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/). Software source
code is licensed under
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0),
[CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)
