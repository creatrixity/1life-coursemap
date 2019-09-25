'use strict';

import { IStore } from '@Interfaces';

const getAuthenticatedUser = (state: IStore) => state.user.authenticatedUser;

export default {
  getAuthenticatedUser
};
