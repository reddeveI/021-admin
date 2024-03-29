import {
  FETCH_ORGANIZATIONS_REQUEST,
  CREATE_ORGANIZATION_SUCCESS,
  FETCH_GRANTS_REQUEST,
  FETCH_PAGED_GRANTS_REQUEST,
  FETCH_SINGLE_GRANT_REQUEST,
  ADD_GRANT_VALUE,
  ADD_FILE,
  ADD_ORGANIZATION_VALUE,
  ADD_LOGO_FILE,
  ADD_ATTACHMENTS,
  REMOVE_ATTACHMENTS,
  FETCH_GRANTGIVERS_REQUEST,
  FETCH_SUBJECTS_REQUEST,
  FETCH_LOCATIONS_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  PROGRAM_LOADING,
} from '../actions/types';

const initialState = {
  organizations: [],
  grants: [],
  file: {},
  logoFile: {},
  attachments: [],
  grantsList: [],
  pagedGrantsList: [],
  grantGivers: [],
  subjects: [],
  locations: [],
  categories: [],
  loading: false,
  success: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORGANIZATIONS_REQUEST:
      return {
        ...state,
        organizations: action.payload,
        loading: false,
      };
    case CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case FETCH_GRANTS_REQUEST:
      return {
        ...state,
        grantsList: action.payload,
        loading: false,
      };
    case FETCH_PAGED_GRANTS_REQUEST:
      return {
        ...state,
        pagedGrantsList: action.payload,
        loading: false,
      };
    case FETCH_SINGLE_GRANT_REQUEST:
      return {
        ...state,
        grants: action.payload,
        loadin: false,
      };
    case ADD_GRANT_VALUE:
      return {
        ...state,
        grants: { ...state.grants, [action.payload.id]: action.payload.value },
      };
    case ADD_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case ADD_ORGANIZATION_VALUE:
      return {
        ...state,
        organization: {
          ...state.organization,
          [action.payload.id]: action.payload.value
        },
      };
    case ADD_LOGO_FILE:
      return {
        ...state,
        logoFile: action.payload,
      };
    case ADD_ATTACHMENTS:
      return {
        ...state,
        attachments: [...state.attachments, action.payload],
      };
    case REMOVE_ATTACHMENTS:
      return {
        ...state,
        attachments: [
          ...state.attachments.slice(0, action.payload),
          ...state.attachments.slice(action.payload + 1),
        ],
      };
    case FETCH_GRANTGIVERS_REQUEST:
      return {
        ...state,
        grantGivers: action.payload,
        loading: false,
      };
    case FETCH_SUBJECTS_REQUEST:
      return {
        ...state,
        subjects: action.payload,
        loading: false,
      };
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case PROGRAM_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
