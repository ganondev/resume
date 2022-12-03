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

    // CONFIG
    $header_height: 18;
    $header_tech_margin: 1;
    $tech_height: 86;
    $tech_project_margin: 0;
    $project_height: $page_height - $tech_height - $header_height - $header_tech_margin - $tech_project_margin;

    $employment_height: 105;
    $employment_education_margin: 1;
    $education_height: $page_height - $employment_height - $employment_education_margin;

    $left_width: 37;
    $center_margin: 1;
    $right_width: $page_width - $left_width - $center_margin;
    //

    $header_row_start: $margin_size + 1;
    $header_row_end: $header_row_start + $header_height;

    $tech_row_start: $header_row_end + $header_tech_margin;
    $tech_row_end: $tech_row_start + $tech_height;

    $project_row_start: $tech_row_end + $tech_project_margin;
    $project_row_end: $project_row_start + $project_height;

    $employment_row_start: $margin_size + 1;
    $employment_row_end: $employment_row_start + $employment_height;

    $education_row_start: $employment_row_end + $employment_education_margin;
    $education_row_end: $education_row_start + $education_height;

    $left_column_start: $margin_size + 1;
    $left_column_end: $left_column_start + $left_width;

    $center_margin_start: $left_column_end;
    $center_margin_end: $center_margin_start + $center_margin;

    $right_column_start: $center_margin_end;
    $right_column_end: $right_column_start + $right_width;

    .page {
      display: grid;
      grid-template-columns: repeat($total_width, 1%);
      grid-auto-rows: 8.02px
    }

    .top-margin {
      grid-row: 1 / #{1 + $margin_size};
      grid-column: 40 / 101;
    }

    .top-margin-header {
      grid-row: 1 / 4;
      grid-column: 1 / 40;
      border-right: solid 3px transparent;
      border-bottom: solid 3px transparent;
      background:
              linear-gradient($background_blue, $background_blue) padding-box,
              linear-gradient($background_blue_accent, $background_blue_accent) border-box;
    }

    .left-margin-header {
      grid-row: 3 / 21;
      grid-column: 1 / 4;
      border-bottom: solid 3px transparent;
      background:
              linear-gradient($background_blue, $background_blue) padding-box,
              linear-gradient($background_blue_accent, $background_blue_accent) border-box;
    }

    .left-margin {
      grid-row: 21 / 139;
      grid-column: 1 / #{1 + $margin_size};
    }

    .middle-separator {
      grid-row: 3 / 139;
      grid-column: #{$center_margin_start} / #{$center_margin_end};
    }

    .right-margin {
      grid-row: 3 / 139;
      grid-column: #{101 - $margin_size} / 101;
    }

    .bottom-margin {
      grid-row: #{141 - $margin_size} / 141;
      grid-column: 1 / 101;
    }

    .header-block {
      grid-row: #{$header_row_start} / #{$header_row_end};
      grid-column: #{$left_column_start} / #{$left_column_end};
      border-bottom: solid 3px transparent;
      border-right: solid 3px transparent;
      background:
        linear-gradient($background_blue, $background_blue) padding-box,
        radial-gradient(
            ellipse farthest-corner at bottom right,
            $background_orange,
            $background_blue_accent 50%
        ) border-box;
    }

    .tech-block {
      grid-row: #{$tech_row_start} / #{$tech_row_end};
      grid-column: #{$left_column_start} / #{$left_column_end};
    }

    .project-block {
      grid-row: #{$project_row_start} / #{$project_row_end};
      grid-column: #{$left_column_start} / #{$left_column_end};
    }

    .employment-block {
      grid-row: #{$employment_row_start} / #{$employment_row_end};
      grid-column: #{$right_column_start} / #{$right_column_end};
    }

    .education-block {
      grid-row: #{$education_row_start} / #{$education_row_end};
      grid-column: #{$right_column_start} / #{$right_column_end};
    }

</style>

<div class="page">

    <!-- structural skeleton stuff that won't get printed out with the pdf -->

    <div class="structure top-margin"></div>
    <div class="structure top-margin-header"></div>
    <div class="structure left-margin"></div>
    <div class="structure left-margin-header"></div>
    <div class="structure middle-separator"></div>
    <div class="structure right-margin"></div>
    <div class="structure bottom-margin"></div>

    <div class="structure header-block">
        <Header/>
    </div>

    <div class="structure tech-block">
        <Tech/>
    </div>

    <div class="structure project-block">
        <Project/>
    </div>

    <div class="structure employment-block">
        <Employment/>
    </div>

    <div class="structure education-block">
        <Education/>
        <Certifications/>
    </div>

</div>
<!--<div class="page">-->
<!--    <p>Second <code>.page</code> element</p>-->
<!--    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>-->
<!--    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>-->
<!--    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>-->
<!--    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>-->
<!--    <p>This sentence is preceded by a manual page break:<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;div class="page-break" contenteditable="false"&gt;&lt;/div&gt;</code></p>-->
<!--    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>-->
<!--    <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
<!--</div>-->