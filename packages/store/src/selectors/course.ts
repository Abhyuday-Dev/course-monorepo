import { selector } from 'recoil';
import { courseState } from '../atoms/course';

interface Course {
    title: string;
    price: string;
    imageLink: string;
    // Add any other properties you expect on the course object
  }
  
  interface CourseState {
    isLoading: boolean;
    course: Course | null;
  }
  

export const isCourseLoading = selector({
  key: 'isCourseLoadingState',
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  },
});

export const courseDetails = selector({
  key: 'courseDetailsState',
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  },
});

export const courseTitle = selector({
  key: 'courseTitleState',
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.title : '';
  },
});

export const courseDescription = selector({
    key: 'courseDescriptionState',
    get: ({ get }) => {
      const state = get(courseState);
      return state.course ? state.course.description : '';
    },
  });

export const coursePrice = selector({
  key: 'coursePriceState',
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.price : '';
  },
});

export const courseImage = selector({
  key: 'courseImageState',
  get: ({ get }) => {
    const state = get(courseState);
    return state.course ? state.course.imageLink : '';
  },
});
