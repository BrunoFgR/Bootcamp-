import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigation(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  setNavigation,
  navigate,
};
