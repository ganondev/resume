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
            Scale platform services to support parallel communication with tens
            of thousands of customer compute devices (iLO)
        </Acc>
        <Acc>
            Support global multi-region production in daily deploy and real-
            time defect and health triage
        </Acc>
        <Acc>
            Enhance and maintain complete stack of UI, asynchronous and
            synchronous service layer, AWS infrastructure, database administration,
            integration of real customer-owned servers, and the CI/CD process
        </Acc>
        <Acc>
            Enable customer awareness of their carbon footprint via development
            of carbon reporting technology
        </Acc>
    </Gig>
    <Gig
        title="Application Engineer II"
        start="Aug 2020"
        end="Jan 2022"
        employer="Vanguard"
    >
        <Acc>Program engineer spotlight: September 2021</Acc>
        <Acc>Save tens of thousands by optimizing Docker allocations in ECS</Acc>
        <Acc>
            Lead team to develop Electron application and serverless
            infrastructure to enhance weekly production release cycle
        </Acc>
        <Acc>
            Overhaul architecture of many complex microservices to utilize
            resilient event-driven patterns
        </Acc>
        <Acc>
            Own full stack of Nx Angular UI, hundreds of Java/Springboot microservices,
            and the AWS resources that power them
        </Acc>
        <Acc>
            Apply Machine Learning and Monte Carlo simulations to calculate
            and optimize retirement success
        </Acc>
        <Acc>
            Implement high-throughput analytics pipelines utilizing
            Kafka, S3, SageMaker, Lambda, and Redshift
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
            driving Agile teams, and making architecture decisions
        </Acc>
        <Acc>
            Develop APIs that reduced development effort on ongoing
            projects by 30% and increased software efficiency by up to 41%
        </Acc>
        <Acc>
            Work at all levels of the stack to create and improve multiple
            sets of portals, microservices, and business pipelines
        </Acc>
        <Acc>
            Test using JUnit, NUnit, Cypress, and Selenium
        </Acc>
        <Acc>
            At-all-costs contributor who drove teams to deliver quality full-stack web
            application packages in under 10 weeks
        </Acc>
        <Acc>
            Secured application packages for businesses and users using AWS
            IAM, Google Sign-In, as well as manual JWT role authorization.
        </Acc>
    </Gig>
    <Gig
        title="Freelance Software Engineer"
        start="Dec 2016"
        end="Jan 2018"
        employer="[Various]"
    >
        <Acc>
            <b>Clients:</b> Society of St. John the Evangelist, Asset Research Group
            LLC., Virginia Theological Seminary
        </Acc>
        <Acc>
            Introduce critical automation and future-proofing for
            agencies outgrowing their manpower
        </Acc>
        <Acc>
            Accelerated the development of global event pages against short
            deadlines while ensuring highly reliable and scalable products
        </Acc>
    </Gig>
</div>