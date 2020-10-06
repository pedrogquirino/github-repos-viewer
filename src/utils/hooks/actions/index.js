export const setGitRepositoryList = (store, newList) => {
    const gitRepositoryList = newList;
    store.setState({ gitRepositoryList });
  };