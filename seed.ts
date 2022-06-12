import { STDOUT } from "./config";
import { PatternCache, SourceCache } from "./server";
import { Pattern, Source } from "./server/models";
import { readFile, removeFilesFromDir } from "./server/utils";

const startupConfig = () => {
  // Clear all content in stdout
  removeFilesFromDir(`${STDOUT}`);

  // Load default RSS Feed sources
  const sourceCache = SourceCache.getInstance();
  const defaultSources: Source[] = readFile("./db/sources.json");
  defaultSources.forEach((source) => sourceCache.setValue(source.name, source));

  // Load default regex patterns
  const patternCache = PatternCache.getInstance();
  const defaultPatterns: Pattern[] = readFile("./db/patterns.json");
  defaultPatterns.forEach((pattern) =>
    patternCache.setValue(pattern.name, pattern)
  );
};

export default startupConfig;
