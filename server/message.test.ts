import * as expect from 'expect';
import {Message} from './message';
import 'mocha';

describe('Message', () => {
   it('from', () => {
       expect(Message.from('test text', 'test author')).toEqual({
           text: 'test text',
           from: 'test author',
           created: new Date().toLocaleTimeString()
       });
   });
});