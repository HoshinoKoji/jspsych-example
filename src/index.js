import _ from 'lodash';
import {initJsPsych} from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

const jsPsych = initJsPsych();
const trial = {
  type: htmlKeyboardResponse,
  stimulus: `<div style="font-weight: bold;">Hello world!</div>`,
};
jsPsych.run([trial]);