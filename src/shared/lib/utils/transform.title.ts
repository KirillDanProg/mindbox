export const transformTitle = (title: string) => {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return;
  }

  const lowerCaseTitle = trimmedTitle.toLowerCase();
  const capitilized = lowerCaseTitle[0].toUpperCase() + lowerCaseTitle.slice(1);

  return capitilized;
};
