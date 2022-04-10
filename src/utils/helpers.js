export function replacePathParams(path, params = {}) {
  let newPath = path;

  Object.keys(params).forEach((key) => {
    newPath = newPath.replace(`[${key}]`, params[key]);
  });

  return newPath;
}

export function mapOptions(obj) {
  if (typeof obj !== 'object') return [];

  return Object.keys(obj).map((key) => ({
    id: key,
    label: `${key} - ${obj[key]}`,
  }));
}
