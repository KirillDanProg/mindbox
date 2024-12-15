/**
 * Пример:
 * ```
 * const title = transformTitle("test title");
 * console.log(title); // "Test title"
 * ```
 */

export const transformTitle = (title: string) => {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return;
  }

  const lowerCaseTitle = trimmedTitle.toLowerCase();
  const capitalized = lowerCaseTitle[0].toUpperCase() + lowerCaseTitle.slice(1);

  return capitalized;
};
