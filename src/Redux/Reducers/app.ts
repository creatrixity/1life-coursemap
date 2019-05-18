import { ActionConsts } from '@Definations';

import { IAction, IApp } from '@Interfaces';

const coursemapModules:any = {
  '1life-digital-academy': {
    "title": "1 Life Digital Academy",
    "id": 1,
    "modules": {
      "who-am-i": {
        "id": 1,
        "title": "Who Am I?",
        "nextModule": "my-magnificent-future",
  
        "lessons": {
          "1": {
            "title": "Who am I? Roadmap Journey Starts here!",
            "type": "lesson"
          },
          "2": {
            "title": "My Life Balance Wheel",
            "type": "tool"
          },
          "3": {
            "title": "My DISC Index",
            "type": "tool"
          },
          "4": {
            "title": "My Miracle Morning",
            "type": "tool"
          },
          "5": {
            "title": "Who am I?: Wrap Up",
            "type": "lesson"
          }
        }
      },
  
      "my-magnificent-future": {
        "id": 2,
        "title": "My Magnificent Future",
        "nextModule": "my-plan4me",
  
        "lessons": {
          "1": {
            "title": "My Magnificent Future! Turning Dreams into Reality",
            "type": "lesson"
          },
  
          "2": {
            "title": "My 1Life Fully Lived Portrait",
            "type": "tool"
          },
          "3": {
            "title": "Tool #2: Discover Your Deepest WHYs",
            "type": "tool"
          },
          "4": {
            "title": "Tool #3: My Personal Board of Directors",
            "type": "tool"
          },
          "5": {
            "title": "Tool #4: My Transition Story",
            "type": "tool"
          },
          "6": {
            "title": "My Magnificent Future: Wrap up",
            "type": "lesson"
          },
          "7": {
            "title": "Next Time…",
            "type": "lesson"
          }
        }
      },
  
      "my-plan4me": {
        "id": 3,
        "title": "My Plan4Me!",
        "nextModule": "financial-offense",
  
        "lessons": {
          "1": {
            "title": "My Plan4Me! Journey Preparation",
            "type": "lesson"
          },
  
          "2": {
            "title": "My DISC Index",
            "type": "tool"
          },
          "3": {
            "title": "Tool #2: 1 Year Plan",
            "type": "tool"
          },
  
          "4": {
            "title": "Tool #3: Putting It All Together",
            "type": "tool"
          },
          "5": {
            "title": "My Plan4Me Wrap up",
            "type": "lesson"
          },
          "6": {
            "title": "Next Time…",
            "type": "lesson"
          }
        }
      },
  
      "financial-offense": {
        "id": 4,
        "title": "Module 4: Financial Offense",
        "nextModule": "financial-defense",
  
        "lessons": {
          "1": {
            "title": "Welcome to Finances!",
            "type": "lesson"
          },
          "2": {
            "title": "Welcome to Finances!",
            "type": "lesson"
          },
          "3": {
            "title": "Tool #2: Welcome to Finances!",
            "type": "tool"
          },
          "4": {
            "title": "Tool #3: Maximizing My Income",
            "type": "tool"
          },
          "5": {
            "title": "Financial Offense: Wrap up",
            "type": "lesson"
          },
          "6": {
            "title": "Next Time…",
            "type": "lesson"
          }
        }  
      },
  
      "financial-defense": {
        "id": 5,
        "title": "Module 5: Financial Defense!",
        "nextModule": "fit-for-my-future",
  
        "lessons": {
          "1": {
            "title": "Introduction: Financial Defense",
            "type": "lesson"
          },
          "2": {
            "title": "Tool #1: Creating a Budget!",
            "type": "lesson"
          },
          "3": {
            "title": "Tool #2: Debt Reduction and Investment Basics",
            "type": "lesson"
          },
          "4": {
            "title": "Tool #3: Sprint and Marathon Plan",
            "type": "lesson"
          },
          "5": {
            "title": "Module 5: Wrap up",
            "type": "lesson"
          },
          "6": {
            "title": "Next Time…",
            "type": "lesson"
          }
        }
      },
  
      "fit-for-my-future": {
        "id": 6,
        "title": "Module 6: Fit For My Future!",
        "nextModule": null,
  
        "lessons": {
          "1": {
            "title": "Fit For My Future!",
            "type": "lesson"
            },
            "2": {
              "title": "Tool #1: Fuel for My Future",
              "type": "tool"
            },
            "3": {
              "title": "Tool #2: The Magnificence of Movement",
              "type": "tool"
            },
            "4": {
              "title": "Tool #3: Mindset",
              "type": "tool"
            },
            "5": {
              "title": "Tool #4: Sleep and Systems for Success",
            },
            "6": {
              "title": "Wrap up Module 6",
              "type": "lesson"
            },
            "7": {
              "title": "Final Thoughts – for now!",
              "type": "lesson"
            }
          }
      }
    }
  },
  'my-1life-roadmap-journal': {
    "title": "My 1Life Roadmap Journal",
    "id": 2,
    "modules": {
      "getting-started": {
        "id": 7,
        "title": "Getting Started",
        "nextModule": "first-quarter",
  
        "lessons": {
          "1": {
            "title": "How To Use It",
            "type": "lesson"
          },
          "2": {
            "title": "My 1Life Roadmap Goals",
            "type": "lesson"
          },
          "3": {
            "title": "My 1Life Motivations",
            "type": "lesson"
          },
        }
      },
      "first-quarter": {
        "id": 8,
        "title": "First Quarter",
        "nextModule": null,
  
        "lessons": {
          "1": {
            "title": "My Dream 4 Me",
            "type": "lesson"
          },
          "2": {
            "title": "Who Am I At My Core?",
            "type": "lesson"
          },
          "3": {
            "title": "Thriving In My Environment",
            "type": "lesson"
          },
          "4": {
            "title": "My Relationship With Me",
            "type": "lesson"
          },
          "5": {
            "title": "Develop My Fulfilling Future",
            "type": "lesson"
          }
        }
      }
    }
  }
}

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IApp.IState = {
	prevPathDepth: 0,
	hasRequestError: false,
	isUpdatingUserLesson: false,
	isFetchingRoadmapModules: false,
	coursemapModules,
	coursemapModulesContent: {},
	coursemapModulesFeedback: {}
};

type IMapPayload = IApp.Actions.IMapPayload;

/**
 * REDUCER
*/
export const AppReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
    case ActionConsts.App.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.App.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
