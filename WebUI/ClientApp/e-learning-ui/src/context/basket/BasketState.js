import React, {useReducer} from 'react';
import axios from 'axios';
import BasketContext from './basketContext';
import BasketReducer from './basketReducer';

import {
    GET_BASKET,
    DELETE_BASKET,
    POST_BASKET,
    SET_LOADING
} from '../types'

