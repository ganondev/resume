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
        title="Chief Solutions Architect"
        start="Aug 2021"
        end="Present"
        employer="manifest.stream"
    >
        <Acc>
            Architect foundational AWS infrastructure for development and
            production needs
        </Acc>
        <Acc>
            Construct highly and globally available virtual hangout spaces
            using Unreal Engine pixel streaming and Kafka
        </Acc>
        <Acc>
            Devise scheme for scalable engine server architecture using Docker
            on Fargate, capable of supporting hundreds of players per level
        </Acc>
        <Acc>
            Enable real-time play-in-browser experience including
            motion capture and multimedia streaming
        </Acc>
    </Gig>
    <Gig
        title="Application Engineer II"
        start="Aug 2020"
        end="Present"
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