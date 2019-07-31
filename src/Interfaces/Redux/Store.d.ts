import { Props } from 'react';

import {
    IAppPage,
    ICoursePage,
    ICoursesPage,
    IModulePage,
    IEntity,
    IHomePage,
    ILessonPage,
    IUserPage
} from '@Interfaces';

export type IStore = {
    app: IAppPage.IStateProps,
    entities: IEntity.IStateProps,
    course: ICoursePage.IStateProps,
    courses: ICoursesPage.IStateProps,
    home: IHomePage.IStateProps,
    lesson: ILessonPage.IStateProps,
    module: IModulePage.IStateProps,
    user: IUserPage.IStateProps
}