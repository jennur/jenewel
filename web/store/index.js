
export function state() {
  return {
    sideMenu: {
      openMenus: []
    }
  };
}

export const mutations = {
  addOpenSideMenuItem(state, payload) {
    state.sideMenu.openMenus.push(payload);
  },
  removeOpenSideMenuItem(state, listIndex) {
    state.sideMenu.openMenus.splice(listIndex);
  }
}

export const actions = {
  SET_OPEN_SIDE_MENU_ITEMS({commit, state}, payload) {
    let openMenus = state.sideMenu.openMenus;
    let listIndex = openMenus.indexOf(payload);

    if(listIndex === -1) commit('addOpenSideMenuItem', payload);
    else commit('removeOpenSideMenuItem', listIndex);
  }
}
