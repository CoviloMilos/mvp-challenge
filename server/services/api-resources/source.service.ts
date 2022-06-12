import { errors } from "../../../config";
import { SourceCache } from "../../cache";
import { Source } from "../../models";

const sourceCache = SourceCache.getInstance();

const createSource = (source: Source) => sourceCache.setValue(source.name, source);

const listSources = () => sourceCache.getData();

const deleteSource = async (name: string): Promise<Source> => {
  const source = sourceCache.delete(name);
  if (!source) return Promise.reject(errors.resourceNotFound("Source"));
  return source;
};

export { createSource, listSources, deleteSource };
