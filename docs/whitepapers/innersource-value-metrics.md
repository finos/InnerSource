# InnerSource Value Metrics

InnerSource practices, inspired by open-source methodologies, offer significant value to organizations by fostering software reuse, improving collaboration, and eliminating inefficiencies. However, quantifying this value is essential to justify investments and sustain InnerSource initiatives. This paper presents a framework to measure the impact of InnerSource projects in the financial industry. It focuses on metrics for cost savings through reuse, enhanced time-to-market, reduced maintenance expenses, and improved engineering health. By leveraging automated tools, surveys, and analytical models, organizations can assess the financial benefits of InnerSource contributions while fostering transparency and collaboration among teams. This approach provides actionable insights to drive strategic decisions and optimize software development processes.

## Key Value areas of InnerSource

This paper explores a framework for measuring the value of InnerSource practices within organizations, particularly in the financial industry. The metrics are designed to assess financial savings, operational efficiency, and overall engineering health to justify investment in InnerSource initiatives. It is assumed in this paper that the nature of the InnerSource component is internal and specific to the organization and is not something that would be available in the Open Source world. The four key value areas we have explored are::

1. **Development Cost Savings through Reuse** achieved by reusing InnerSource components instead of building new ones across the organization  
2. **Improved Time-to-Market (TTM) by consumer-producers** time saved in product delivery by leveraging reusable InnerSource components.  
3. **Maintenance Cost Savings** addressing vulnerabilities, bugs, and updates upstream in a shared component saving repetitive maintenance downstream  
4. **Development Cost Savings due to external contributions** which is monetary value of contributions made by external teams within the organization to the project 

## Development cost saving related metrics 

This is benefit more holistically for the organization

Dev Cost Saved \= (Number of Times Adopted \- 1\) \* ( Cost of Development \- Cost of Adoption)[^1]

Dev Cost Saved \= (Number of Times Adopted \-1) \* (Cost of Development \- Cost of Adoption)

| Metric | Different Strategies to gather data  | Relevant Tools |
| :---- | :---- | :---- |
| **Adoption metrics**  Metric Number of times adopted | Ask/survey developers on adopti.on data Analyze the existing SBoMs Custom utilization tracking mechanism (e.g. Google Analytics) Track existing activity by external participants in the project, downloads  | Option 2 \<XBOM tools\> Option 3 Google Analytics Internal Analytics Tool Option 4 InnerSource portal pattern (e.g., Backstage) Activity trackers (e.g. GrimoireLab) |
| **Cost of Development**  Metric USD cost of having to build the component from scratch | We ask the project managers We check internal budget documents and PM tools on expenses on the component We measure the lines of code and multiply with a model such as COCOMO II or Caper Jones We count developers working per project, their salaries, and indirect cost \+ suppliers. | Option 2 Internal PM tools Option 3 SonarQube Bitbucket API Github API Option 4 Internal PM tools \+ Option 3 tools \+ GrimoireLab |
| **Cost of Adoption**  Metric USD cost of adopting the component | We look at the person hours spent on average to adopt the component into the project using Utilization Analytics and multiple by average cost of developer per hour  We provide a survey to users to ask them how long it takes on average to adopt the component | Option 1 Google Analytics Internal Analytics Tool |

The Dev Cost Saved metric can be seen as savings and this can be seen as new opportunities for investment. As an example, we could have an accumulated savings from development activities of $30M, this could be seen as an investment opportunity of $30M.

## Improved time to market of your product 

Time saved on TTM \= Time for development from scratch  \- Time for adoption

| Metric | Different Strategies to gather data  | Relevant Tools |
| :---- | :---- | :---- |
| **Time for Adoption**  Metric Time take to adopt component | We look at the person hours spent on average to adopt the component into the project using Utilization Analytics  We provide a survey to users to ask them how long it takes on average to adopt the component | Option 1 Google Analytics Internal Analytics Tool |
| **Time for development from Scratch** Metric Time it would take to build this component from scratch | We take the person hours spent to build the component and divide by the number who would have worked to build it from scratch We measure the lines of code and multiply with a model such as COCOMO II or Caper Jones to get the number of man hours and divide that as above We can survey users on the time it would take them to build it from scratch  | Option 1 Internal Project management tools Option 2 SonarQube Bitbucket API Github API |

We have considered this but….

## Cost of maintenance Saved

Annual Maintenance Cost Saved \= Number of times Adopted \* Annual number of upstream Vulnerabilities/Bug \* Average Cost of fixing bugs

| Metric | Different Strategies to gather data  | Relevant Tools |
| :---- | :---- | :---- |
| **Adoption metrics**  Metric Number of times adopted | Ask/survey developers on adoption data Analyze the existing SBoMs Custom utilization tracking mechanism (e.g. Google Analytics) Track existing activity by external participants in the project, downloads  | Option 2 \<XBOM tools\> Option 3 Google Analytics Internal Analytics Tool Option 4 InnerSource portal pattern (e.g., Backstage) Activity trackers (e.g. GrimoireLab) |
| **Annual Number of Bugs upstream**  Metric Annual number of upstream bugs | Get the number of bugs and vulnerabilities reported on the code base annually from sourcecode analysis tools | Option 1 Jira / GitHub API GrimoireLab Snyk  |
| **Average cost of fixing bugs** Metric Average USD cost of fixing bugs | Look at using Industry references on cost of fixing bugs and use this as a factor Track internal data as effort estimation or hours spent on a task in the ticketing systems (e.g., effort estimation when working in an agile way) \* cost of developer | Option 1 \- Option 2 Jira / GitHub API and look for effort data GrimoireLab to aggregate the data Track all maintenance activity of a project or track all activity in a project after this is moved to maintenance mode |

## Development Cost Saved as a result of InnerSource contribution

Development Cost Saved \= Development Cost of External Contributions

| Development Cost of External Contributions Metric Average USD cost of development (This is a superset of development activities from the ‘Average cost of fixing bugs’ metric) | Look at using Industry references on We measure the lines of code and multiply with a model such as COCOMO II or Caper Jones Track internal data as effort estimation or hours spent on a task in the ticketing systems (e.g., effort estimation when working in an agile way) \* cost of developer | Option 1 SonarQube Bitbucket API Github API Option 2 Jira / GitHub API and look for effort data GrimoireLab to aggregate the data Track all maintenance activity of a project or track all activity in a project after this is moved to maintenance mode |
| :---- | :---- | :---- |

## Recommended Tools

As a result of the analysis before the following tools are recommended for assessing the financial benefit 

| Tool Type | Top Tools | License | Link |
| :---- | :---- | :---- | :---- |
| Static code analysis | SonarQube | LGPL | https://github.com/SonarSource/sonarqube |
| ALM or PM tool | JIRA, Github Enterprise, Git Lab Enterprise | Proprietary GitLab is open core | [https://www.atlassian.com/](https://www.atlassian.com/) [https://github.com](https://github.com) [https://gitlab.com](https://gitlab.com)  |
| Version control system | Bitbucket, Git, Github Enterprise, GitLab Enterprise | Proprietary. GitLab is open core | [https://www.atlassian.com/](https://www.atlassian.com/) [https://github.com](https://github.com) [https://gitlab.com](https://gitlab.com)  |
| SBoM Tools | Snyk | Prioprietary | https://snyk.io/ |
| InnerSource portal | Backstage | Apache License 2.0 | https://github.com/backstage |
| Web Analytics Platform | Google Analytics | Proprietary | https://developers.google.com/analytics |
| Development Analytics Platform | GrimoireLab | GPLv3 | https://chaoss.github.io/grimoirelab/ |

## 

**Summary**  
InnerSource leverages open-source principles within organizations to improve software development efficiency, reduce waste, and enhance collaboration. Measuring its value is critical, particularly in the financial sector, where cost justification and operational optimization are paramount. Key value areas include:

1. **Development Cost Savings**: Quantified by comparing the cost of building components from scratch versus reusing InnerSource solutions.  
2. **Improved Time-to-Market**: Measured by time saved through adoption rather than independent development  
3. **Maintenance Cost Reductions**: Calculated through decreased vulnerabilities and streamlined updates.  
4. **Collaboration and Transparency**: Enhanced by tracking contributions and engineering health metrics.  
   

By combining manual surveys with automated tools (e.g., SonarQube, Google Analytics, GrimoireLab), organizations can track adoption rates, effort metrics, and cost savings. This framework not only demonstrates the monetary benefits but also highlights opportunities to reinvest savings, supporting sustainable InnerSource practices.

## References

Asking Gemini \-

* [https://www.haveignition.com/kpis-for-product-managers/kpis-for-product-managers-product-code-reusability](https://www.haveignition.com/kpis-for-product-managers/kpis-for-product-managers-product-code-reusability)  
* [https://mia-platform.eu/blog/seven-benefits-innersourcing/](https://mia-platform.eu/blog/seven-benefits-innersourcing/)  
* [https://innersourcecommons.gitbook.io/managing-innersource-projects/introduction/framework](https://innersourcecommons.gitbook.io/managing-innersource-projects/introduction/framework)  
* Main difference between is that Gemini suggests we ask human beings as well, while in this document we use mainly automation as main focus.

## Authors

Chamindra de Silva, Citi Bank  
Daniel Izquierdo, Bitergia

[^1]:  We are leaving out the cost of infrastructure or other similar costs and just focus on the cost of producing and adopting a certain component.