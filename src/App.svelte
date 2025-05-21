<script lang="ts">
    import Header from './Header.svelte';
    import Tech from "./Tech.svelte";
    import Project from "./Projects.svelte";
    import Employment from "./Employment.svelte";
    import Education from "./Education.svelte";
    import Certifications from "./Certifications.svelte";

	let columns = 80;
	let color = 'blue';
</script>

<style lang="scss">

    @import 'global.scss';

    $total_width: 100;
    $total_height: 140;

    $margin_size: 2;
    $page_width: $total_width - $margin_size * 2;
    $page_height: $total_height - $margin_size * 2;

    // CONFIG - Updated for 1 column layout
    $header_height: 16;
    $section_gap: 1;
    $employment_height: $page_height - $header_height - $section_gap;
    
    $education_height: 25;
    $education_projects_margin: 1;
    $projects_height: 35;
    $projects_skills_margin: 1;
    $skills_height: 76;

    $full_width: $page_width;
    //

    // Page 1 layout
    $header_row_start: $margin_size + 1;
    $header_row_end: $header_row_start + $header_height;

    $employment_row_start: $header_row_end + $section_gap;
    $employment_row_end: $employment_row_start + $employment_height;

    // Page 2 layout
    $education_row_start: $margin_size + 1;
    $education_row_end: $education_row_start + $education_height;

    $projects_row_start: $education_row_end + $education_projects_margin;
    $projects_row_end: $projects_row_start + $projects_height;

    $skills_row_start: $projects_row_end + $projects_skills_margin;
    $skills_row_end: $skills_row_start + $skills_height;

    $column_start: $margin_size + 1;
    $column_end: $column_start + $full_width;

    // Page 2 two-column layout
    $left_col_width: 53; // percent of page width
    $col_gap: 2; // percent of page width for gap between columns
    $right_col_width: 38; // reduced to compensate for gap

    .page.page2 {
      display: grid;
      grid-template-columns: repeat($margin_size, 1%) repeat($left_col_width, 1%) repeat($col_gap, 1%) repeat($right_col_width, 1%) repeat($margin_size, 1%);
      grid-template-rows: repeat($total_height, 8.02px);
    }

    .left-col {
      grid-column: #{1 + $margin_size} / #{1 + $margin_size + $left_col_width};
      grid-row: #{1 + $margin_size} / #{141 - $margin_size};
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .right-col {
      grid-column: #{1 + $margin_size + $left_col_width + $col_gap} / #{1 + $margin_size + $left_col_width + $col_gap + $right_col_width};
      grid-row: #{1 + $margin_size} / #{141 - $margin_size};
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .page {
      display: grid;
      grid-template-columns: repeat($total_width, 1%);
      grid-auto-rows: 8.02px
    }

    .header-bg {
      background: $background_blue;
    }

    .top-margin {
      grid-row: 1 / #{1 + $margin_size};
      grid-column: 1 / 101;
    }

    .top-margin.header-bg {
      // Ensures the blue background for the header's top margin
    }

    // Split left margin for header and rest
    .left-margin-header {
      grid-row: #{1 + $margin_size} / #{$header_row_end};
      grid-column: 1 / #{1 + $margin_size};

      &.p1 {
        border-bottom: solid 2px $background_blue_accent;
      }

    }
    .left-margin-rest {
      grid-row: #{$header_row_end} / 139;
      grid-column: 1 / #{1 + $margin_size};
    }

    // Split right margin for header and rest
    .right-margin-header {
      grid-row: #{1 + $margin_size} / #{$header_row_end};
      grid-column: #{101 - $margin_size} / 101;

      &.p1 {
        border-bottom: solid 2px $background_orange;
      }

    }

    .right-margin-rest {
      grid-row: #{$header_row_end} / 139;
      grid-column: #{101 - $margin_size} / 101;
    }

    .bottom-margin {
      grid-row: #{141 - $margin_size} / 141;
      grid-column: 1 / 101;
    }

    // Page 1 blocks
    .header-block {
      grid-row: #{$header_row_start} / #{$header_row_end};
      grid-column: #{$column_start} / #{$column_end};
      border-bottom: solid 3px transparent;
      background:
        linear-gradient($background_blue, $background_blue) padding-box,
        radial-gradient(
            ellipse farthest-corner at bottom right,
            $background_orange,
            $background_blue_accent 50%
        ) border-box;
    }

    .employment-block {
      grid-row: #{$employment_row_start} / #{$employment_row_end};
      grid-column: #{$column_start} / #{$column_end};
    }

    // Page 2 blocks
    .education-block {
      grid-row: #{$education_row_start} / #{$education_row_end};
      grid-column: #{$column_start} / #{$column_end};
    }

    .project-block {
      grid-row: #{$projects_row_start} / #{$projects_row_end};
      grid-column: #{$column_start} / #{$column_end};
    }

    .skills-block {
      grid-row: #{$skills_row_start} / #{$skills_row_end};
      grid-column: #{$column_start} / #{$column_end};
    }

</style>

<!-- Page 1: Intro, Employment -->
<div class="page">
    <!-- structural skeleton stuff that won't get printed out with the pdf -->
    <div class="structure top-margin header-bg"></div>
    <div class="structure left-margin-header header-bg p1"></div>
    <div class="structure left-margin-rest"></div>
    <div class="structure right-margin-header header-bg p1"></div>
    <div class="structure right-margin-rest"></div>
    <div class="structure bottom-margin"></div>

    <div class="structure header-block">
        <Header/>
    </div>

    <div class="structure employment-block">
        <Employment/>
    </div>
</div>

<!-- Page 2: Education, Projects, Skills -->
<div class="page page2">
    <!-- structural skeleton stuff that won't get printed out with the pdf -->
    <div class="structure top-margin"></div>
    <div class="structure left-margin-header"></div>
    <div class="structure left-margin-rest"></div>
    <div class="structure right-margin-header"></div>
    <div class="structure right-margin-rest"></div>
    <div class="structure bottom-margin"></div>

    <div class="left-col">
        <div class="education-block">
            <Education/>
            <Certifications/>
        </div>
        <div class="project-block">
            <Project/>
        </div>
    </div>
    <div class="right-col">
        <div class="skills-block">
            <!-- Full skills section with heading -->
            <Tech />
        </div>
    </div>
</div>

