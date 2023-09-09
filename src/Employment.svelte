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
            Develop and maintain the Compute Ops Manager platform
        </Acc>
        <Acc>
            Scale platform services to support asyncronous real-time communication
            with tens of thousands of customer devices (iLO)
        </Acc>
        <Acc>
            Independently develop tools to allow on-call developers to efficiently
            identify and catalogue production and pipeline issues based on log signatures
        </Acc>
<!--        <Acc>-->
<!--            Own stack of React UI, asynchronous and-->
<!--            synchronous microservice layer, AWS infrastructure, database administration,-->
<!--            onboarding of customer devices, and the CI/CD process-->
<!--        </Acc>-->
        <Acc>
            Modernize UI with patented state management and UX flow framework systems
            based on functional and procedural programming paradigms
        </Acc>
        <Acc>
            Enable customers to generate reports of metrics relevant to their devices,
            such as carbon emissions, by constructing real-time device data collection
            and archival infrastructure and microservices
        </Acc>
<!--        <Acc>-->
<!--            Enable customer awareness of their carbon footprint via development-->
<!--            of carbon reporting technology-->
<!--        </Acc>-->
        <!--        <Acc>-->
        <!--            Support global multi-region production in daily deploy and real- -->
        <!--            time defect and health triage.-->
        <!--        </Acc>-->
        <Acc>
            Construct real-time customer incident and notification system
        </Acc>
    </Gig>
    <Gig
        title="Application Engineer II"
        start="Aug 2020"
        end="Jan 2022"
        employer="Vanguard"
    >
        <Acc>Program engineer spotlight: September 2021</Acc>
        <Acc>Save tens of thousands $ by optimizing Docker runtimes in ECS</Acc>
        <Acc>
            Lead team to develop Electron application and serverless
            infrastructure to enhance continuous production release cycle
        </Acc>
        <Acc>
            Overhaul architecture microservice layer to establish more
            resilient and scalable event-driven patterns
        </Acc>
        <Acc>
            Own full stack of Nx Angular UI, numerous of Java/Springboot microservices,
            and the AWS infrastructure that powers them
        </Acc>
        <Acc>
            Apply and train machine learning models and Monte Carlo simulations
            to predict and optimize retirement success
        </Acc>
        <Acc>
            Implement high-throughput analytics pipelines utilizing
            Kafka, S3, SageMaker, Lambda, Redshift, Glue, EMR, and Athena
        </Acc>
    </Gig>
    <Gig
        title="Software Engineering Consultant"
        start="Jan 2018"
        end="Aug 2020"
        employer="Fenway Group"
    >
        <Acc>Consultant spotlight: May 2020</Acc>
        <Acc>
            Manage long and short-term engagements, mentoring developers,
            driving Agile teams, and constructing software architecture
        </Acc>
        <Acc>
            Work at all levels of the stack to create and improve client
            portals, microservices, ETL workflows, and CI pipelines
        </Acc>
        <Acc>
            Establish confidence through thorough testing systems,
            including unit, integration, and behavioural via Cypress and Selenium
        </Acc>
        <Acc>
            Efficient contributor who lead struggling team to deliver
            quality full-stack web application packages in under 10 weeks
        </Acc>
        <Acc>
            Secure customer applications using AWS IAM, as well as RBAC via
            manual JWT management with SSO integrations.
        </Acc>
        <!--
        TODO embeds:
        NUnit,
        Google Sign-In,
        unit tests, unit testing
        integration tests, integration testing
        Kafka,
        AWS S3,
        AWS SageMaker,
        AWS Lambda,
        AWS Redshift,
        AWS Glue,
        AWS EMR,
        AWS Athena,
        AWS Kinesis Firehose,
        Go, Golang,
        ElasticSearch,
        OpenSearch,
        FastAPI, Flask, Django, PyUnit, Extensions API
        Oracle DB,
        -->
    </Gig>
    <Gig
        title="Freelance Developer"
        start="Dec 2016"
        end="Jan 2018"
        employer="Multiple Clients"
    >
        <Acc>
            Introduce critical automation and future-proofing for
            agencies outgrowing their manpower
        </Acc>
        <Acc>
            Accelerated the development of products and events by consulting on
            tools and practices to decrease turn-around times and maintenance costs
        </Acc>
    </Gig>
</div>