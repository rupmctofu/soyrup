import { diseno_grafico } from "$content/diseno_grafico";
import { diseno_web } from "$content/diseno_web";
import { motion_graphics } from "$content/motion_graphics";

export async function get({ params }) {
  let data;

  if (params.section === "diseno_grafico") data = diseno_grafico;
  if (params.section === "diseno_web") data = diseno_web;
  if (params.section === "motion_graphics") data = motion_graphics;


  if (data) {
    const current = data.projects.filter(project => project.slug === params.slug)[0];
    const others = data.projects.filter(project => project.slug !== params.slug);
    const projects = { current, others };

    return {
      body: JSON.stringify(projects),
    };
  }

  return {
    status: 404
  };
}