<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import Gig from "./Gig.svelte";
    import Acc from "./Accomplishment.svelte";
</script>

<style lang="scss">

    div {
      display: flex;
      flex-direction: column;
      row-gap: 7px;
    }

</style>

<SectionHeader>Employment</SectionHeader>
<div>
    <Gig
            title="Cloud Developer III"
            start="Jan 2022"
            end="Present"
            employer="Hewlett Packard Enterprise"
    >
        <Acc>
            Spearheaded development and scaling of Compute Ops Manager using Python microservices, React, and AWS, enabling real-time asynchronous communication with tens of thousands of devices.
        </Acc>
        <Acc>
            Designed and implemented robust SQL solutions with PostgreSQL, including advanced read-replica strategies and FastAPI integration to improve system performance.
        </Acc>
        <Acc>
            Pioneered a patented state management and UX flow framework, elevating the React front-end with innovative procedural programming paradigms.
        </Acc>
        <Acc>
            Built and maintained real-time carbon emissions reporting infrastructure leveraging ClickHouse, AWS, and advanced data aggregation.
        </Acc>
        <Acc>
            Established an internal machine learning model training platform, integrating AWS and on-premises resources to accelerate ML adoption.
        </Acc>
        <Acc>
            Developed an agentic LLM system using LangChain, AWS Bedrock, and SageMaker, enabling natural language interaction and workflow automation.
        </Acc>
        <Acc>
            Led overhaul of REST API versioning and security compliance, ensuring enterprise-grade reliability and regulatory alignment.
        </Acc>
        <Acc>
            Contributed open-source enhancements to the Grommet React UI library, driving modernization and performance improvements.
        </Acc>
        <Acc>
            Orchestrated daily CI/CD deployments and production support, utilizing Grafana, Humio, and automated triage tools for rapid incident response.
        </Acc>
    </Gig>
    <Gig
            title="Application Engineer II"
            start="Aug 2020"
            end="Jan 2022"
            employer="Vanguard"
    >
        <Acc>
            Engineered and optimized full-stack solutions for a high-traffic retirement planning platform using Angular, Java/Spring, Python Lambdas, and AWS.
        </Acc>
        <Acc>
            Led a team to deliver a mission-critical Electron/Angular application, streamlining release cycles and cross-team collaboration.
        </Acc>
        <Acc>
            Achieved significant cost savings by analyzing and optimizing Docker/ECS resource allocations.
        </Acc>
        <Acc>
            Introduced event-driven architectures with AWS SQS, EventBridge, and Lambda, enhancing scalability and resilience.
        </Acc>
        <Acc>
            Applied machine learning models and Monte Carlo simulations to deliver predictive analytics and actionable insights.
        </Acc>
        <Acc>
            Implemented high-throughput analytics pipelines with Kafka, S3, SageMaker, Lambda, Redshift, Glue, and Athena, demonstrating deep SQL and data engineering expertise.
        </Acc>
    </Gig>
    <Gig
            title="Software Engineering Consultant"
            start="Jan 2018"
            end="Aug 2020"
            employer="Fenway Group"
    >
        <Acc>
            Delivered full-stack solutions for Fortune 500 clients, spanning Java, C#, Python, Angular, and .NET, with a focus on regulatory compliance and data integration.
        </Acc>
        <Acc>
            Modernized legacy systems and CI/CD pipelines, migrating monolithic deployments to Azure DevOps and automating business processes.
        </Acc>
        <Acc>
            Led teams to deliver complex web applications under tight deadlines, mentoring developers and driving Agile best practices.
        </Acc>
        <Acc>
            Architected secure authentication and RBAC systems using AWS IAM, JWT, and SSO integrations.
        </Acc>
        <Acc>
            Built robust testing frameworks (unit, integration, behavioral) with Cypress and Selenium, ensuring high-quality, reliable software.
        </Acc>
    </Gig>
    <Gig
            title="Freelance Developer"
            start="Dec 2016"
            end="Jan 2018"
            employer="Virginia Theological Seminary"
    >
        <Acc>
            Developed and deployed global event and engagement platforms using React, Python, and automation tools, accelerating organizational growth and efficiency.
        </Acc>
        <Acc>
            Created document management utilities leveraging OCR and Python, streamlining real-estate operations for a global non-profit.
        </Acc>
    </Gig>
</div>