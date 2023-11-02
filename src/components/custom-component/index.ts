
let customCommponents = import.meta.glob("./*/index.vue", { eager: true });
export const getComponent = (name: string) => {
  return customCommponents[`./${name}/index.vue`];
};
