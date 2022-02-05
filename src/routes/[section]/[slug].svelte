<script context="module">
  export async function load({ params, fetch }) {
    const req = await fetch(`/${params.section}/${params.slug}.json`);
    const res = await req.json();

    return {
      props: {
        section: params.section,
        projects: res,
      },
    };
  }
</script>

<script>
  import Mockup from "$lib/Mockup.svelte";
  import Gallery from "$lib/Gallery.svelte";
  import Others from "$lib/Others.svelte";

  export let section, projects;
  const project = projects.current;

  console.log(project);
</script>

<svelte:head>
  <title>Soy Rup | {project.title}</title>
  <meta name="description" content={project.description} />
</svelte:head>

<section class="current-project col acenter xfill">
  <div class="title-wrapper col acenter xfill">
    <h1>{project.title}</h1>
    <p>{project.description}</p>
  </div>

  <Mockup title={project.title} src={project.content.mockup} />
  <Gallery title={project.title} images={project.content.images} />
</section>

<section class="other-projects xfill">
  <Others data={{ slug: section, projects: projects.others }} />
</section>

<style lang="scss">
  .current-project {
    padding: 80px;
    padding-top: 150px;

    @media (max-width: $tablet) {
      padding: 20px;
      padding-top: 120px;
    }

    .title-wrapper {
      margin-bottom: 80px;

      @media (max-width: $mobile) {
        margin-bottom: 40px;
      }

      h1,
      p {
        text-align: center;
        color: $sec;
      }
    }
  }

  .other-projects {
    padding-bottom: 120px;
  }
</style>
