<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import Gig from "./Gig.svelte";
    import Acc from "./Accomplishment.svelte";
</script>

<style lang="scss">

    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }

</style>

<SectionHeader>Employment</SectionHeader>
<div>
    <Gig
        title="Founding Engineer - Cloud"
        start="Aug 2021"
        end="Present"
        employer="manifest.stream"
    >
        <Acc>damn boi thats a big ass BOY boi DAMN SON thats A BIG ASS BOY BOY DAAAAAAAMn</Acc>
    </Gig>
    <Gig
        title="Application Engineer II"
        start="Aug 2020"
        end="Present"
        employer="Vanguard"
    >
        <Acc>
            Performed research and analysis on utilization and scaling of Docker clusters on AWS ECS and optimized them,
            successfully saving tens-of-thousands of dollars on cloud hosting costs.
        </Acc>
        <Acc>
            Drove development of AWS/Bamboo CI infrastructure to allow for
            fully continuous feature integration for all services.
        </Acc>
    </Gig>
    <Gig
        title="Software Engineering Consultant"
        start="Jan 2018"
        end="Aug 2020"
        employer="Fenway Group"
    >
        <Acc>
            Employee of the month for May of 2020
        </Acc>
        <Acc>
            Led multiple full-stack development engagements to quick
            success, acting as a mentor and occasional interim team lead
        </Acc>
        <Acc>
            Developed APIs that reduced development effort on ongoing
            projects by 30% and increased software efficiency by up to 41%
        </Acc>
        <Acc>
            Worked at all levels of the stack to create and improve multiple
            sets of portals, microservices, and business pipelines
        </Acc>
        <Acc>
            Secured client services by migrating them to load-balanced AWS
            EC2 clusters and RDS instances within isolated VPC containers
        </Acc>
        <Acc>
            Founded process for standing up well-tested microservices using
            Java and Spring, deploying reliable API systems with XSD schema
            and Swagger dependency packages in matters of weeks
        </Acc>
        <Acc>
            UX and UI testing using Selenium and Cypress
        </Acc>
        <Acc>
            Productivity star who drove teams to deliver quality full-stack web
            application packages in under 10 weeks
        </Acc>
        <Acc>
            Secured application packages for businesses and users using AWS
            IAM, Google Sign-In, as well as manual JWT role authorization.
        </Acc>
    </Gig>
    <Gig
        title="Software Engineer"
        start="Dec 2016"
        end="Jan 2018"
        employer="Freelance"
    >
        <Acc>
            <b>Clients:</b> Society of St. John the Evangelist, Asset Research Group
            LLC., Virginia Theological Seminary
        </Acc>
        <Acc>
            Introduced much-needed automation and futureproofing for
            agencies that were outgrowing their manpower
        </Acc>
        <Acc>
            Accelerated the development of global event pages against short
            deadlines while ensuring highly reliable and scalable products
        </Acc>
        <Acc>
            Personalized serverless websites in the cloud powered by
            TypeScript and React or Angular
        </Acc>
    </Gig>
</div>