import { assoc } from 'ramda';

let ariaNameSpaces: { [key: string]: any } = {};

const generateNamespace = (namespaceString: string): string => {
  if (typeof namespaceString !== 'string' || namespaceString.length === 0) {
    throw 'generateNamespace: function must be called with a string';
  }

  if (!ariaNameSpaces.hasOwnProperty(namespaceString)) {
    ariaNameSpaces = assoc(namespaceString, 0, ariaNameSpaces);
  }
  const currentIdIteration = ariaNameSpaces[namespaceString];
  const baseIdStr = namespaceString + '-' + currentIdIteration + '-';
  // increment namespace number for next usage
  ariaNameSpaces[namespaceString]++;

  if (baseIdStr.includes(' ')) {
    throw 'generateNamespace: baseIdStr cannot contain spaces';
  }

  return baseIdStr;
};

export default generateNamespace;
