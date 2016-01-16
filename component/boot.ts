import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {HttpApp} from './submit_form';

enableProdMode();
bootstrap(HttpApp);
