export const getEntityIdBySelfHref = (selfHref: string, checkBeforeLastPosition?: boolean) => {
  const parts = selfHref.split('/');
  const number = checkBeforeLastPosition ? 1 : 0;
  const id = Number(parts[parts.length - (1 + number)]);
  return !isNaN(id) ? id : null;
};
