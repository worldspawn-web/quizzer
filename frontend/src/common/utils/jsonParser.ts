export const jsonParser = (db: Record<string, unknown>) =>
  JSON.parse(JSON.stringify(db));
