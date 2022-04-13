const createGetNextListItemId = (baseIdStr: string) => {
  let currentItemIteration = 0;
  return {
    /**
     * @method getNextListItemId
     * @description generates unique, iterative id strings prefixed with <namespace>
     */
    getNextListItemId: function (): string {
      currentItemIteration++;
      return baseIdStr + 'item-' + currentItemIteration;
    },
  };
};

export default createGetNextListItemId;
