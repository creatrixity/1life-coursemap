import { Props } from 'react';

import {
    IAppPage,
    IHomePage,
    IUserPage
} from '@Interfaces';

export type IStore = {
    home: IHomePage.IStateProps,
    app: IAppPage.IStateProps,
    user: IUserPage.IStateProps
}